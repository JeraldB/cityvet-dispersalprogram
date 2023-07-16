import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController,ToastController } from '@ionic/angular';
import { AvailmentService } from './availment.service';


@Component({
  selector: 'app-availment',
  templateUrl: './availment.page.html',
  styleUrls: ['./availment.page.scss'],
})
export class AvailmentPage implements OnInit {
  formValue: any = {};

  constructor(private menuController: MenuController,private availmentService: AvailmentService,private toastController: ToastController) {}

  openMenu() {
    this.menuController.enable(true, 'main-menu');
    this.menuController.open('main-menu');
  }
  ngOnInit() {}
  async onSubmit(formValue: any) {
    console.log('Form Data:', formValue);
  
    try {
      const response = await this.availmentService.createAvailment(formValue).toPromise();
      console.log('API Response:', response);
  
      this.presentToast('Availment created successfully', 'success');
      this.formValue = {};
    } catch (error) {
      console.error(error);
      this.presentToast('Failed to create availment', 'danger');
    }
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
