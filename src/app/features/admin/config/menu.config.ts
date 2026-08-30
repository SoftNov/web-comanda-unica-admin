export interface MenuItem {
  label: string;
  icon: string;
  route?: string;
  // Quando informado, o item só aparece para usuários cujo profileCode na
  // empresa selecionada esteja nesta lista. Sem "roles", o item é visível a todos.
  roles?: string[];
  // Independente de empresa/perfil — só aparece para quem tem User.isPlatformAdmin=true (ver
  // AuthService.isPlatformAdmin). Não se combina com "roles": o painel financeiro da Comanda
  // Única fica fora do modelo de empresas.
  platformAdminOnly?: boolean;
  children?: MenuItem[];
}

// Seção do menu lateral — só um rótulo (sempre visível, não colapsável) agrupando itens
// relacionados; não afeta roteamento nem permissões, é puramente organização visual. Uma seção
// sem nenhum item visível para o usuário atual some inteira (ver AdminLayoutComponent#menuSegments).
export interface MenuSegment {
  label: string;
  items: MenuItem[];
}

// Menu lateral customizável, organizado por segmento: adicione, remova ou reordene itens/seções
// aqui e o sidebar e o drawer mobile são atualizados automaticamente. Itens com "children" viram
// um grupo expansível (submenu) em vez de um link direto — só um grupo fica expandido por vez em
// toda a sidebar (ver AdminLayoutComponent#toggleGroup).
export const ADMIN_MENU_SEGMENTS: MenuSegment[] = [
  {
    label: 'Visão Geral',
    items: [{ label: 'Dashboard', icon: 'dashboard', route: '/painel/dashboard' }]
  },
  {
    label: 'Operação',
    items: [
      {
        label: 'Comandas',
        icon: 'receipt_long',
        route: '/painel/comandas',
        roles: ['OWNER', 'ADMIN', 'MANAGER', 'CASHIER', 'WAITER']
      },
      { label: 'Pedidos', icon: 'point_of_sale', route: '/painel/pedidos' },
      {
        label: 'Serviços Gerais',
        icon: 'support_agent',
        children: [
          {
            label: 'Serviços',
            icon: 'room_service',
            route: '/painel/servicos',
            roles: ['OWNER', 'ADMIN', 'MANAGER', 'CASHIER', 'WAITER']
          }
        ]
      }
    ]
  },
  {
    label: 'Cadastros',
    items: [
      {
        label: 'Mesas',
        icon: 'table_bar',
        children: [
          {
            label: 'Cadastro de Mesas',
            icon: 'table_restaurant',
            route: '/painel/mesas',
            roles: ['ADMIN', 'OWNER', 'MANAGER']
          },
          {
            label: 'Mapa do Salão',
            icon: 'map',
            route: '/painel/configuracoes/mapa-salao',
            roles: ['ADMIN', 'OWNER', 'MANAGER']
          }
        ]
      },
      { label: 'Cardápio', icon: 'restaurant_menu', route: '/painel/cardapio', roles: ['ADMIN', 'OWNER', 'MANAGER'] },
      { label: 'Funcionários', icon: 'groups', route: '/painel/funcionarios', roles: ['ADMIN', 'OWNER', 'MANAGER'] }
    ]
  },
  {
    label: 'Financeiro',
    items: [
      { label: 'Financeiro', icon: 'payments', route: '/painel/financeiro' },
      {
        label: 'Financeiro Comanda Única',
        icon: 'account_balance',
        route: '/painel/financeiro-plataforma',
        platformAdminOnly: true
      },
      {
        label: 'Stripe da Plataforma',
        icon: 'credit_card',
        route: '/painel/configuracoes/stripe-plataforma',
        platformAdminOnly: true
      }
    ]
  },
  {
    label: 'Configurações',
    items: [
      {
        label: 'Configurações',
        icon: 'settings',
        children: [
          { label: 'Geral', icon: 'tune', route: '/painel/configuracoes' },
          { label: 'Meu perfil', icon: 'person', route: '/painel/configuracoes/perfil' },
          { label: 'Redefinir senha', icon: 'lock_reset', route: '/painel/configuracoes/redefinir-senha' },
          {
            label: 'Pagamentos',
            icon: 'account_balance_wallet',
            route: '/painel/configuracoes/pagamentos',
            roles: ['OWNER', 'ADMIN']
          }
        ]
      }
    ]
  }
];
