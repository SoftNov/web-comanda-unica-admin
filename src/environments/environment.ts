export const environment = {
  production: false,
  // Relative path: proxied to http://localhost:8080 by proxy.conf.json (ng serve) to avoid CORS in dev.
  apiBaseUrl: '/comanda-unica-api',
  // API do cardápio digital (api-comanda-unica-menu) — usada pelo painel só para o fluxo de
  // pedido lançado pela equipe (ver StaffOrderService), que reaproveita a lógica de comanda/
  // pedido de lá em vez de duplicá-la na API admin. Proxied to http://localhost:8081.
  menuApiBaseUrl: '/comanda-unica-menu-api'
};
