import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { DashboardModalComponent } from './components/dashboard-modal/dashboard-modal.component';
import { AddLivestocksComponent } from './components/add-livestocks/add-livestocks.component';
import { AvailmentrequestComponent } from './components/availmentrequest/availmentrequest.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationService } from './auth/authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [AppComponent, DashboardModalComponent, AddLivestocksComponent,AvailmentrequestComponent],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [ AuthenticationService,CookieService,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
    deps: [AuthenticationService],
  },],
  bootstrap: [AppComponent],
})
export class AppModule {}
