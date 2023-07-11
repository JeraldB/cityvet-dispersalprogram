import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DispersalPageRoutingModule } from './dispersal-routing.module';

import { DispersalPage } from './dispersal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DispersalPageRoutingModule
  ],
  declarations: [DispersalPage]
})
export class DispersalPageModule {}
