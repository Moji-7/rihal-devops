export const childRoutes = [

  {
    path: 'classes',
    // loadChildren: () =>
    //   import('./stock-market/stock-market.module').then((m) => m.StockMarketModule),
     data: { icon: 'classes', text: 'my classes' },
   },
  {
    path: 'register',
    // loadChildren: () =>
    //   import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
     data: { icon: 'perm_media', text: 'register new class ' },
  }

  // {
  //   path: 'transfer',
  //   loadChildren: () =>
  //     import('./transfer/transfer.module').then((m) => m.TransferModule),
  //   data: { icon: 'perm_media', text: 'transfer money' },
  // },
];
