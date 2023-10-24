import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { MenuController } from '@ionic/angular';
import { AuthenticationService } from './auth/authentication.service';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menuController: MenuController,private authService: AuthenticationService) {}

  closeMenu() {
    this.menuController.close('main-menu');
  }

  onLogout() {
    this.authService.logout();
    console.log('User logged out');
  }
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
