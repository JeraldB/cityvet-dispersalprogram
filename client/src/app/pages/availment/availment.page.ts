import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController,ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-availment',
  templateUrl: './availment.page.html',
  styleUrls: ['./availment.page.scss'],
})
export class AvailmentPage implements OnInit {
  formValue: any = {};
  userProfile: any;


  constructor(private menuController: MenuController,private ApiService: ApiService,private toastController: ToastController) {}

  openMenu() {
    this.menuController.enable(true, 'main-menu');
    this.menuController.open('main-menu');
  }
  ngOnInit() {
    this.fetchUserProfile();

  }
 async onSubmit(formValue: any) {
    console.log('Form Data:', formValue);

    try {
      // Set the userId in the formValue (assuming userProfile is already fetched)
      formValue.userId = this.userProfile.userId;
      formValue.fullname = this.userProfile.fullname;

      // Make the API call to create the availment
      const response = await this.ApiService.createAvailment(formValue).toPromise();
      console.log('API Response:', response);

      this.presentToast('Availment created successfully', 'success');
      this.formValue = {}; // Clear the form after submission
    } catch (error) {
      console.error(error);
      this.presentToast('Failed to create availment', 'danger');
    }
  }

  fetchUserProfile() {
    this.ApiService.getProfile().subscribe({
     next: (userProfile) => {
        this.userProfile = userProfile;
      },
    error:  (error) => {
        console.error('Error fetching user profile:', error);
        // Handle the error if necessary (e.g., show an error message to the user)
      }
  });
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
      color: color
    });
    toast.present();
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }
}