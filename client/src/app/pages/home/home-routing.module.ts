import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    
  },
  {
    path: 'offspring',
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
    path: 'availments',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../availment/availment-routing.module').then(
            (m) => m.AvailmentPageRoutingModule
          ),
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
