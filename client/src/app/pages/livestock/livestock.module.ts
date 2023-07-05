import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivestockPageRoutingModule } from './livestock-routing.module';

import { LivestockPage } from './livestock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivestockPageRoutingModule
  ],
  declarations: [LivestockPage]
})
export class LivestockPageModule {}
