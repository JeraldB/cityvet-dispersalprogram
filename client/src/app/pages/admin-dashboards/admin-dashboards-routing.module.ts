import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashboardsPage } from './admin-dashboards.page';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDashboardsPageRoutingModule {}
