import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvailmentPage } from './availment.page';

const routes: Routes = [
  {
    path: '',
    component: AvailmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvailmentPageRoutingModule {}
