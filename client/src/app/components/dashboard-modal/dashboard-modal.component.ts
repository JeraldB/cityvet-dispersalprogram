import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard-modal',
  templateUrl: './dashboard-modal.component.html',
  styleUrls: ['./dashboard-modal.component.scss'],
})
export class DashboardModalComponent implements OnInit {
  @Input() data: any[] = [];

  constructor(private modalController: ModalController) {}

  updateData() {
    // Perform necessary operations to update the 'data' array based on user input

    this.modalController.dismiss(this.data);
  }

  closeModal() {
    this.modalController.dismiss();
  }

  ngOnInit() {}
}
