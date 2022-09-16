export const studentRoutes = [
  {
    path: 'classes',
    data: { icon: 'classes', text: 'student list' },
    // loadChildren: () =>
    //   import('./stock-market/stock-market.module').then((m) => m.StockMarketModule),
  },
  {
    path: 'register',
    data: { icon: 'note_add', text: 'register for class' },
    // loadChildren: () =>
    //   import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },

];

export const reportingRoutes = [
  {
    path: 'summeryBy',
    param:"classes",
    data: { icon: 'classes', text: 'students per classes' },
  },
  {
    path: 'summeryBy',
    param:"countries",
    data: { icon: 'perm_media', text: 'students per countries' },
  },
  {
    path: 'summeryBy',
    param:"ageAverage",
    data: { icon: 'classes', text: 'students average age' },
  },

];
