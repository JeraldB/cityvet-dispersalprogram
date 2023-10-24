import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials = {
    email: '',
    password: '',
  };
  showPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  constructor(private ApiService: ApiService,
    private router: Router,
    private toastController: ToastController, private authenticationService : AuthenticationService) {}

  ngOnInit() {}
  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
      color: color
    });
    toast.present();
  }

  loginUser() {
    this.ApiService.loginUser(this.credentials).subscribe({
     next: (response: any) => {
        // Handle successful login response here
        console.log('Logged in:', response);
  
        // Call the login method of the AuthService with the JWT token
        this.authenticationService.login(response.accessToken);
  
        // Display a success toast notification upon successful login
        this.presentToast('Login successful', 'success');
  
        // Redirect to /user/home upon successful login
        this.router.navigate(['/user/home']);
      },
    error:  (error) => {
        // Handle login error here
        console.error('Login failed:', error);
  
        this.presentToast('Invalid email or password', 'danger');
      }
  });
  }
}