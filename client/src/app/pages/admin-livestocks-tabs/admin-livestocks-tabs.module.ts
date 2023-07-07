import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminLivestocksTabsPageRoutingModule } from './admin-livestocks-tabs-routing.module';

import { AdminLivestocksTabsPage } from './admin-livestocks-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminLivestocksTabsPageRoutingModule
  ],
  declarations: [AdminLivestocksTabsPage]
})
export class AdminLivestocksTabsPageModule {}
