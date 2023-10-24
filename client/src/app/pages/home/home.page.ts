import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/service/api.service';
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
      title: 'Recieved CPDO Cattle',
      description: 'reference id: VJF87T847TU',
      date: '2023-07-02',

    },
    {
      title: 'Transaction 2',
      description: 'reference id: 4EGGE847TU',
      date: '2023-07-02',
    
    },
  ];
  constructor(private menuController: MenuController,private ApiService: ApiService,private AuthenticationService: AuthenticationService
    ,private cookieService: CookieService) {

    
  }
 
 

  openMenu() {
    this.menuController.enable(true, 'main-menu');
    this.menuController.open('main-menu');
  }
  userId!: number;
  ngOnInit() {
    this.fetchUserProfile();
    this.fetchTransactionsForUser();
    }
    fetchTransactionsForUser() {
      this.ApiService.getTransactionsForUser(this.userId).subscribe({
       next: (transactions) => {
        
          console.log('Transactions for user:', transactions);
        },
      error:  (error) => {
       
          console.error('Error fetching transactions:', error);
        }
    });
    }
  
    userProfile: User | undefined;

    fetchUserProfile() {
      this.ApiService.getProfile().subscribe({
        next: (response) => {
          this.userProfile = response as User;
        },
        error: (error) => {
          console.error('Error fetching user profile:', error);
        }
      });
    }
    
}
