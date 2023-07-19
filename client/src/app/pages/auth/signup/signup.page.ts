import { Component, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatePickerComponent } from 'src/app/components/date-picker/date-picker.component';
import { Router } from '@angular/router';
import { ApiSignUP } from './api.signup'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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

  constructor(private modalController: ModalController, private router: Router, private ApiSignUP : ApiSignUP,private formBuilder: FormBuilder) {}

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

    this.ApiSignUP.registerUser(this.userData).subscribe({
      next: (response) => {
        // Handle successful registration, e.g., show a success message
        const accessToken = response.accessToken;

        // Store the access token in local storage or a secure storage mechanism (e.g., Ionic Storage)
        localStorage.setItem('accessToken', accessToken);
        console.log('User registered successfully');
        this.router.navigate(['/user/home']); // Redirect to /user/home after successful registration
      },
      error: (error) => {
        // Handle registration error, e.g., display an error message
        console.error('Error during user registration:', error);
      },
    });
  }
}
