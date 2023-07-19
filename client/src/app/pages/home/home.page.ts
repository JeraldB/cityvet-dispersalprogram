import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { UserApi } from './api.user';
import { User } from './user.model';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  transactions: any[] = [
    {
      title: 'Transaction 1',
      description: 'This is the description for Transaction 1.',

    },
    {
      title: 'Transaction 2',
      description: 'This is the description for Transaction 2.',
      date: '2023-07-02',
    
    },
  ];
  constructor(private menuController: MenuController,private userApi: UserApi,private AuthenticationService: AuthenticationService
    ,private cookieService: CookieService) {

    
  }
 
 

  openMenu() {
    this.menuController.enable(true, 'main-menu');
    this.menuController.open('main-menu');
  }

  ngOnInit() {
    this.getUserProfile();
    }
  
  
  user: any; 
  getUserProfile() {

    this.userApi.getUserProfile().subscribe({
       next : (user: User) => {
          this.user = user;
          console.log('User Profile:', this.user);
        },
        error :(error: any) => {
          console.error('Failed to fetch user profile:', error);
        }
  });
    }
}
