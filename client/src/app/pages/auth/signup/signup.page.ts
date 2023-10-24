import { Component, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatePickerComponent } from 'src/app/components/date-picker/date-picker.component';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  currentSection: number = 1;
  userData = {
    fullname: "",
    address: "",
    contact: "",
    birthDate: "",
    userName: "",
    email: "",
    password: ""
  };


  nextSection() {
    if (this.currentSection < 3) {
      this.currentSection++;
    }
  }
previousSection() {
  if (this.currentSection > 1) {
    this.currentSection--;
  }
}
type = 'password';

togglePasswordVisibility() {
  this.type = this.type === 'password' ? 'text' : 'password';
}

  constructor(private modalController: ModalController, private router: Router, private toastController: ToastController, private ApiService : ApiService,private formBuilder: FormBuilder) {}

  async openDatePicker() {
    const modal = await this.modalController.create({
      component: DatePickerComponent,
    });

    modal.onDidDismiss().then((data) => {
      if (data && data.data) {
        this.userData.birthDate = data.data.selectedDate;
      }
    });

    await modal.present();
  }
  ngOnInit() {}
 
  submitForm() {
    console.log('User Data:', this.userData);

    this.ApiService.registerUser(this.userData).subscribe({
      next: (response) => {
        const accessToken = response.accessToken;

        // Store the JWT token in local storage
        localStorage.setItem('accessToken', accessToken);

        console.log('User registered successfully');
        this.router.navigate(['/user/home']);
        this.presentToast('User registered successfully', 'success'); // Show success toast
      },
      error: (error) => {
        console.error('Error during user registration:', error);
        this.presentToast('Error during user registration', 'danger'); // Show error toast
      },
    });
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
}