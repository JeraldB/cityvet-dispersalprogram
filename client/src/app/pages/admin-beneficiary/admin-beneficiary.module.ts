import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminBeneficiaryPageRoutingModule } from './admin-beneficiary-routing.module';

import { AdminBeneficiaryPage } from './admin-beneficiary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminBeneficiaryPageRoutingModule
  ],
  declarations: [AdminBeneficiaryPage]
})
export class AdminBeneficiaryPageModule {}
