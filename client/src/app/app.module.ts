import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { DashboardModalComponent } from './components/dashboard-modal/dashboard-modal.component';

@NgModule({
  declarations: [AppComponent, DashboardModalComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NgChartsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
