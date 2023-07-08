import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminDispersalPageRoutingModule } from './admin-dispersal-routing.module';

import { AdminDispersalPage } from './admin-dispersal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDispersalPageRoutingModule
  ],
  declarations: [AdminDispersalPage]
})
export class AdminDispersalPageModule {}
