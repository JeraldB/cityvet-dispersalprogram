import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDispersalTabsPage } from './admin-dispersal-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: AdminDispersalTabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDispersalTabsPageRoutingModule {}
