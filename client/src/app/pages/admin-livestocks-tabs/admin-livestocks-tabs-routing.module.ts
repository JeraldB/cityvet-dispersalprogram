import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLivestocksTabsPage } from './admin-livestocks-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: AdminLivestocksTabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminLivestocksTabsPageRoutingModule {}
