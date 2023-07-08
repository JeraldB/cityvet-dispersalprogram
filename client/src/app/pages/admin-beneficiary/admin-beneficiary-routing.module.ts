import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminBeneficiaryPage } from './admin-beneficiary.page';

const routes: Routes = [
  {
    path: '',
    component: AdminBeneficiaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminBeneficiaryPageRoutingModule {}
