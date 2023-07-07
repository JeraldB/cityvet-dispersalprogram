import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminDispersalTabsPageRoutingModule } from './admin-dispersal-tabs-routing.module';

import { AdminDispersalTabsPage } from './admin-dispersal-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDispersalTabsPageRoutingModule
  ],
  declarations: [AdminDispersalTabsPage]
})
export class AdminDispersalTabsPageModule {}
