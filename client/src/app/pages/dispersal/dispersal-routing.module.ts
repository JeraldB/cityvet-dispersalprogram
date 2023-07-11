import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispersalPage } from './dispersal.page';

const routes: Routes = [
  {
    path: '',
    component: DispersalPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DispersalPageRoutingModule {}
