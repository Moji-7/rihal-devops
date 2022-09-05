export const childRoutes = [

  {
    path: 'stock',
    // loadChildren: () =>
    //   import('./stock-market/stock-market.module').then((m) => m.StockMarketModule),
     data: { icon: 'perm_media', text: 'stock market' },
   },
  {
    path: 'dashboard',
    // loadChildren: () =>
    //   import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
     data: { icon: 'dashboard', text: 'your dashboard' },
  }

  // {
  //   path: 'transfer',
  //   loadChildren: () =>
  //     import('./transfer/transfer.module').then((m) => m.TransferModule),
  //   data: { icon: 'perm_media', text: 'transfer money' },
  // },
];
