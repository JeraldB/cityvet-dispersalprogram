import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminDashboardsPageRoutingModule } from './admin-dashboards-routing.module';

import { AdminDashboardsPage } from './admin-dashboards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDashboardsPageRoutingModule
  ],
  declarations: [AdminDashboardsPage]
})
export class AdminDashboardsPageModule {}
