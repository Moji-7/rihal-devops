export const studentRoutes = [
  {
    path: 'classes',
    data: { icon: 'classes', text: 'my classes' },
    // loadChildren: () =>
    //   import('./stock-market/stock-market.module').then((m) => m.StockMarketModule),
  },
  {
    path: 'register',
    data: { icon: 'note_add', text: 'register new class ' },
    // loadChildren: () =>
    //   import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];

export const reportingRoutes = [
  {
    path: 'classes',
    data: { icon: 'classes', text: 'students per classes' },

  },
  {
    path: 'countries',
    data: { icon: 'perm_media', text: 'students per countries' },

  },
  {
    path: 'averageAge',
    data: { icon: 'classes', text: 'students average age' },

  },
];
