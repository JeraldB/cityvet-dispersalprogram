import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLoginPagePage } from './admin-login-page.page';

const routes: Routes = [
  {
    path: '',
    component: AdminLoginPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminLoginPagePageRoutingModule {}
