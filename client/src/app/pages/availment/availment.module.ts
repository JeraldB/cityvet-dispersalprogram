import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvailmentPageRoutingModule } from './availment-routing.module';

import { AvailmentPage } from './availment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvailmentPageRoutingModule
  ],
  declarations: [AvailmentPage]
})
export class AvailmentPageModule {}
