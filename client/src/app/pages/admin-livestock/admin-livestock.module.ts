import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminLivestockPageRoutingModule } from './admin-livestock-routing.module';

import { AdminLivestockPage } from './admin-livestock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminLivestockPageRoutingModule
  ],
  declarations: [AdminLivestockPage]
})
export class AdminLivestockPageModule {}
