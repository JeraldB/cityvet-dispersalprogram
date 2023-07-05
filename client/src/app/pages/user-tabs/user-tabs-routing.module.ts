import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserTabsPage } from './user-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: UserTabsPage,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../dashboard/dashboard-routing.module').then(
                (m) => m.DashboardPageRoutingModule
              ),
          },
        ],
      },
      {
        path: 'livestock',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../livestock/livestock-routing.module').then(
                (m) => m.LivestockPageRoutingModule
              ),
          },
        ],
      },
      {
        path: 'records',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../records/records-routing.module').then(
                (m) => m.RecordsPageRoutingModule
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserTabsPageRoutingModule {}
