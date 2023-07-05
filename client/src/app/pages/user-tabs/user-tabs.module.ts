import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserTabsPageRoutingModule } from './user-tabs-routing.module';

import { UserTabsPage } from './user-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserTabsPageRoutingModule
  ],
  declarations: [UserTabsPage]
})
export class UserTabsPageModule {}
