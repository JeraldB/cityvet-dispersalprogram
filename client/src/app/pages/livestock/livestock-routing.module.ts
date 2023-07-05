import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivestockPage } from './livestock.page';

const routes: Routes = [
  {
    path: '',
    component: LivestockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivestockPageRoutingModule {}
