# Prompt — Editor Visual do Mapa do Salão

Copie tudo abaixo e cole para a IA que for implementar a tela no frontend (Angular).

---

Implemente a tela **Configurações → Mapa do Salão** no admin (Angular), consumindo a API que já existe no backend `api-comanda-unica-admin`. Siga a mesma estrutura de service (`HttpClient` + `environment.apiBaseUrl`) e os mesmos padrões já usados nas telas de Cardápio (`src/app/features/admin/pages/menu/menu.component.ts`) e Mesas — os headers `X-User-Id`/`X-Company-Id` já são injetados automaticamente pelo `auth.interceptor.ts`, não precisa tratar isso.

## Contexto

Cada estabelecimento pode ter vários **ambientes** (Salão Principal, Varanda, Rooftop etc.), e cada ambiente é um canvas 2D onde o administrador desenha o layout físico: posiciona mesas (que já existem no cadastro de mesas) e outros elementos decorativos (paredes, portas, bar, cozinha, banheiro, texto, imagem). O objetivo é reduzir erro operacional e facilitar a localização das mesas no salão.

**Escopo desta etapa**: só o editor administrativo (Fases 1 e 2 do PRD original — cadastro de ambientes + editor visual com salvar layout). **Não está no escopo agora**: visualização operacional em tempo real pelo garçom, atualização de status via WebSocket, ações rápidas de comanda (abrir/fechar/transferir) — isso depende do módulo de comandas, que ainda não existe no backend. Não construa nada assumindo que o status da mesa é real; o campo `operationalStatus` que vem da API de mesas sempre retorna `FREE` por enquanto.

## Tecnologia recomendada para o canvas

Use **Konva.js** (com o wrapper `ng2-konva` se preferir) para o editor 2D — drag/resize/rotate nativos, zoom/pan, boa performance com muitos objetos, exportação como imagem. Não é uma exigência rígida, mas é a recomendação: se preferir Angular CDK Drag & Drop, Fabric.js ou Interact.js, justifique a troca.

## Contrato da API

Base: `${environment.apiBaseUrl}/api/v1/floor-plans`.

### Ambientes

| Método | Rota | Body | Retorno |
|---|---|---|---|
| POST | `/api/v1/floor-plans` | `{ name, width, height, backgroundColor? }` | `FloorPlanResponse` (201) |
| PUT | `/api/v1/floor-plans/{id}` | `{ name, width, height, backgroundColor? }` | `FloorPlanResponse` |
| GET | `/api/v1/floor-plans/{id}` | — | `FloorPlanResponse` |
| GET | `/api/v1/floor-plans` | — | `FloorPlanResponse[]` (sem paginação, ordenado por nome) |
| DELETE | `/api/v1/floor-plans/{id}` | — | 204 — remove o ambiente **e todos os objetos dele junto** (não afeta as mesas em si) |

```ts
interface FloorPlanResponse {
  id: string;
  companyId: string;
  name: string;
  width: number;   // largura do canvas em px
  height: number;  // altura do canvas em px
  backgroundColor?: string; // hex, ex: "#FFFFFF"
  createdAt: string;
  updatedAt: string;
}
```

### Objetos do mapa (`floor_plan_item`)

| Método | Rota | Body | Retorno |
|---|---|---|---|
| POST | `/api/v1/floor-plans/{floorPlanId}/items` | `FloorPlanItemPayload` | `FloorPlanItemResponse` (201) |
| PUT | `/api/v1/floor-plans/items/{id}` | `FloorPlanItemPayload` | `FloorPlanItemResponse` |
| DELETE | `/api/v1/floor-plans/items/{id}` | — | 204 (não afeta a mesa em si) |
| GET | `/api/v1/floor-plans/{floorPlanId}/items` | — | `FloorPlanItemResponse[]` |
| **PUT** | `/api/v1/floor-plans/{floorPlanId}/layout` | `{ items: FloorPlanItemSyncPayload[] }` | `FloorPlanItemResponse[]` |

```ts
type FloorPlanItemType = 'TABLE' | 'TEXT' | 'WALL' | 'DOOR' | 'BAR' | 'KITCHEN' | 'BATHROOM' | 'IMAGE' | 'CUSTOM';

interface FloorPlanItemPayload {
  itemType: FloorPlanItemType;
  tableId?: string;      // obrigatório quando itemType === 'TABLE'; deve vir ausente/null nos demais tipos
  x: number;
  y: number;
  width: number;
  height: number;
  rotation?: number;     // graus, 0-359.99 — default 0
  zIndex?: number;       // ordem de sobreposição — default 0
  color?: string;        // hex
  label?: string;        // texto livre (conteúdo do objeto TEXT, ou rótulo customizado)
  propertiesJson?: string; // JSON livre em string — use para dados extra por tipo, ex: '{"shape":"ROUND"}' para o formato da mesa
}

interface FloorPlanItemSyncPayload extends FloorPlanItemPayload {
  id?: string; // ausente/null = criar; presente = atualizar
}

interface FloorPlanItemResponse {
  id: string;
  floorPlanId: string;
  itemType: FloorPlanItemType;
  tableId?: string;
  tableNumber?: number;  // conveniência, já vem resolvido pelo backend
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  zIndex: number;
  color?: string;
  label?: string;
  propertiesJson?: string;
  createdAt: string;
  updatedAt: string;
}
```

**Importante — estratégia de salvamento**: siga o padrão descrito no PRD original. O editor mantém o estado do mapa **local** (em memória) enquanto o usuário arrasta/redimensiona/rotaciona/adiciona/remove objetos — não chame a API a cada movimento. Só ao clicar em **"Salvar Layout"**, monte o array completo de objetos atuais do canvas e chame `PUT /api/v1/floor-plans/{floorPlanId}/layout` uma única vez. O backend faz o diff: cria o que não tem `id`, atualiza o que tem `id`, e **remove** qualquer objeto que existia no banco mas não veio no payload — então mande sempre a lista completa, nunca um subconjunto.

Os endpoints `POST /items`, `PUT /items/{id}` e `DELETE /items/{id}` existem para uso pontual (ex: painel de propriedades que salva uma mudança isolada), mas o fluxo principal do editor deve usar o `PUT /{floorPlanId}/layout`.

### Erros relevantes

- 422 `ERR_FLOOR_PLAN_ITEM_INVALID_TABLE_LINK` — `tableId` obrigatório para `TABLE` e não permitido para os demais tipos.
- 409 `ERR_CONFLICT_FLOOR_PLAN_ITEM_TABLE` — a mesa já está posicionada em outro objeto (de qualquer mapa).
- 404 `ERR_FLOOR_PLAN_NOT_FOUND` / `ERR_FLOOR_PLAN_ITEM_NOT_FOUND` / `ERR_TABLE_NOT_FOUND`.

### Mesas disponíveis para posicionar

Use a API de mesas já existente para listar as mesas do estabelecimento e permitir arrastar uma mesa específica para o canvas: `GET /api/v1/tables?status=ACTIVE&size=200` (ver `MenuItemsService`/serviço de mesas já implementado no frontend, se existir, para o mesmo padrão de paginação). Ao soltar uma mesa no canvas, crie um item `itemType: 'TABLE'` com `tableId` da mesa escolhida.

## Requisitos de UI (PRD original)

**Editor visual** — canvas com zoom e pan, parecido com Canva/Draw.io.

**Barra lateral de elementos**, arrastáveis para o canvas:
- Mesa Quadrada / Mesa Redonda / Mesa Retangular (todos viram `itemType: 'TABLE'`; o formato vai em `propertiesJson`, ex: `{"shape":"SQUARE"|"ROUND"|"RECTANGULAR"}` — use isso para desenhar a forma certa no canvas)
- Parede (`WALL`), Porta (`DOOR`), Caixa (`CUSTOM` com label "Caixa", ou defina sua própria convenção em `propertiesJson`), Banheiro (`BATHROOM`), Bar (`BAR`), Cozinha (`KITCHEN`), Texto (`TEXT`, usa o campo `label` como conteúdo), Imagem/logo (`IMAGE`, a URL da imagem vai em `propertiesJson`)

**Ao adicionar uma mesa ao canvas**, o objeto deve refletir os dados reais da mesa (número, nome, capacidade — vêm de `GET /api/v1/tables/{id}`, não duplique esses dados no `floor_plan_item`, só a posição/aparência).

**Cada objeto no canvas deve suportar**: arrastar, redimensionar, rotacionar, duplicar, excluir, alinhar (guias/snap), bloquear posição (client-side, ex: gravar em `propertiesJson: {"locked": true}` e desabilitar drag nesse objeto), trazer para frente / enviar para trás (ajusta `zIndex`).

**Painel de propriedades** de uma mesa selecionada: número, nome, capacidade, formato, posição X/Y, largura, altura, rotação, cor, status — a maior parte desses dados vem do cadastro de mesas (readonly aqui ou com atalho para editar lá), só posição/dimensão/rotação/cor/zIndex pertencem ao `floor_plan_item`.

**Não implemente nesta etapa** (fora de escopo, dependem de módulos que ainda não existem no backend):
- Visualização operacional em tempo real pelo garçom com status colorido (🟢🔴🟡🔵⚫) e WebSocket.
- Painel de clique-na-mesa com garçom/comanda/tempo/total e ações Abrir/Fechar/Transferir/Imprimir/Reservar.
- Modelos de layout reutilizáveis, múltiplos andares, impressão do mapa, dashboard de ocupação.

Se quiser, deixe a estrutura de componentes já preparada para essas features entrarem depois (ex: um componente de card de mesa operacional isolado), mas não gaste esforço implementando a lógica real delas agora.

## Permissões

Toda a tela (ambientes e editor) é restrita a `ADMIN`, `OWNER` e `MANAGER` — esconda o menu "Mapa do Salão" para o perfil `WAITER` (garçom), que ainda não tem nenhuma tela associada a este módulo (isso só chega na Fase 3).

## Entregável

Siga a organização de pastas usada em `src/app/features/admin/pages/` (um componente + service dedicado para ambientes, e a lógica do editor/canvas em componentes/serviços separados dentro da mesma feature). API já documentada no Swagger (`/swagger-ui.html`, tags "Floor Plans" e "Floor Plan Items"). Não precisa mexer no backend.