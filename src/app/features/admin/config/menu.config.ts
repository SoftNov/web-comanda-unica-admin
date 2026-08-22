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

// Menu lateral customizável: adicione, remova ou reordene itens aqui e o
// sidebar e o drawer mobile são atualizados automaticamente. Itens com
// "children" viram um grupo expansível (submenu) em vez de um link direto.
export const ADMIN_MENU_ITEMS: MenuItem[] = [
  { label: 'Dashboard', icon: 'dashboard', route: '/painel/dashboard' },
  {
    label: 'Comandas',
    icon: 'receipt_long',
    route: '/painel/comandas',
    roles: ['OWNER', 'ADMIN', 'MANAGER', 'CASHIER', 'WAITER']
  },
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
  },
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
  },
  { label: 'Funcionários', icon: 'groups', route: '/painel/funcionarios', roles: ['ADMIN', 'OWNER', 'MANAGER'] },
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
];
