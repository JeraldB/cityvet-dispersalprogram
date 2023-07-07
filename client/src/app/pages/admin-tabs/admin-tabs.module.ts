import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminTabsPageRoutingModule } from './admin-tabs-routing.module';

import { AdminTabsPage } from './admin-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminTabsPageRoutingModule
  ],
  declarations: [AdminTabsPage]
})
export class AdminTabsPageModule {}
