export interface MenuItem {
  label: string;
  icon: string;
  route?: string;
  // Quando informado, o item só aparece para usuários cujo profileCode na
  // empresa selecionada esteja nesta lista. Sem "roles", o item é visível a todos.
  roles?: string[];
  children?: MenuItem[];
}

// Menu lateral customizável: adicione, remova ou reordene itens aqui e o
// sidebar e o drawer mobile são atualizados automaticamente. Itens com
// "children" viram um grupo expansível (submenu) em vez de um link direto.
export const ADMIN_MENU_ITEMS: MenuItem[] = [
  { label: 'Dashboard', icon: 'dashboard', route: '/painel/dashboard' },
  { label: 'Comandas', icon: 'receipt_long', route: '/painel/comandas' },
  { label: 'Mesas', icon: 'table_bar', route: '/painel/mesas' },
  { label: 'Cardápio', icon: 'restaurant_menu', route: '/painel/cardapio' },
  { label: 'Pedidos', icon: 'point_of_sale', route: '/painel/pedidos' },
  { label: 'Financeiro', icon: 'payments', route: '/painel/financeiro' },
  { label: 'Funcionários', icon: 'groups', route: '/painel/funcionarios', roles: ['ADMIN', 'OWNER', 'MANAGER'] },
  {
    label: 'Configurações',
    icon: 'settings',
    children: [
      { label: 'Geral', icon: 'tune', route: '/painel/configuracoes' },
      { label: 'Meu perfil', icon: 'person', route: '/painel/configuracoes/perfil' },
      { label: 'Redefinir senha', icon: 'lock_reset', route: '/painel/configuracoes/redefinir-senha' }
    ]
  }
];
