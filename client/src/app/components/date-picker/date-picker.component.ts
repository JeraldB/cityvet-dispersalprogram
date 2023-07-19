import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent  implements OnInit {
  selectedDate!: string;

  constructor(private modalController: ModalController) {}

  closeModal() {
    this.modalController.dismiss();
  }

  selectDate() {
    this.modalController.dismiss({ selectedDate: this.selectedDate });
  }

  ngOnInit() {}

}
