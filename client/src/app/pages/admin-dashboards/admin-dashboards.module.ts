import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminDashboardsPageRoutingModule } from './admin-dashboards-routing.module';

import { AdminDashboardsPage } from './admin-dashboards.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDashboardsPageRoutingModule
  ],
  declarations: [AdminDashboardsPage],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminDashboardsPageModule {}
