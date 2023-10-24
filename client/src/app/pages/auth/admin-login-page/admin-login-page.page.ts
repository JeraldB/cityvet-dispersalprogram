import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.page.html',
  styleUrls: ['./admin-login-page.page.scss'],
})
export class AdminLoginPagePage implements OnInit {
  email!: string;
  password!: string;
  constructor(private router: Router,
    private http: HttpClient,
    private toastController: ToastController) { }


    async login() {
      try {
        const loginData = { email: this.email, password: this.password };
  
        const response: any = await this.http
          .post('http://localhost:8000/api/auth/login/admin', loginData)
          .toPromise();
  
       
        localStorage.setItem('adminToken', response.accessToken);
  
 
        this.router.navigate(['/admin-tabs/admin-dashboards']);
  
   
        this.presentToast('Admin login successful', 'success');
      } catch (error) {
        console.error('Error during admin login:', error);
        this.presentToast('Authentication failed', 'danger');
      }
    }
  
    async presentToast(message: string, color: string) {
      const toast = await this.toastController.create({
        message: message,
        duration: 2000,
        position: 'top',
        color: color,
      });
      toast.present();
    }
    ngOnInit() {
      
    }
  }