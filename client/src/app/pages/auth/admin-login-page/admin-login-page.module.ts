import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminLoginPagePageRoutingModule } from './admin-login-page-routing.module';

import { AdminLoginPagePage } from './admin-login-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminLoginPagePageRoutingModule
  ],
  declarations: [AdminLoginPagePage]
})
export class AdminLoginPagePageModule {}
