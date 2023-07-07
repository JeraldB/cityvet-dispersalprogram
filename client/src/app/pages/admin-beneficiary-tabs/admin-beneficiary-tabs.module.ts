import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminBeneficiaryTabsPageRoutingModule } from './admin-beneficiary-tabs-routing.module';

import { AdminBeneficiaryTabsPage } from './admin-beneficiary-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminBeneficiaryTabsPageRoutingModule
  ],
  declarations: [AdminBeneficiaryTabsPage]
})
export class AdminBeneficiaryTabsPageModule {}
