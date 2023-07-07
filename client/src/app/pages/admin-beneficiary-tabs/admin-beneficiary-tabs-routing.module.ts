import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminBeneficiaryTabsPage } from './admin-beneficiary-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: AdminBeneficiaryTabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminBeneficiaryTabsPageRoutingModule {}
