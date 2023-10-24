import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { AdminBenefeciaryApi } from './admin.benefeciary.api';
import { ModalController } from '@ionic/angular';
import { AvailmentrequestComponent } from 'src/app/components/availmentrequest/availmentrequest.component';

@Component({
  selector: 'app-admin-beneficiary',
  templateUrl: './admin-beneficiary.page.html',
  styleUrls: ['./admin-beneficiary.page.scss'],
})
export class AdminBeneficiaryPage implements OnInit {
  beneficiaries: any[]= [];
  selectedBeneficiary: any;
  presentingElement: any;


onBeneficiarySelect(e: any) {
  this.selectedBeneficiary = e.detail.value;
  console.log(this.selectedBeneficiary);
}
  constructor(private AdminBenefeciaryApi: AdminBenefeciaryApi, private modalController: ModalController,) {}
  async openAvailmentModal() {
    const modal = await this.modalController.create({
      component: AvailmentrequestComponent,
    });
    return await modal.present();
  }

  ngOnInit() {
    this.loadBeneficiaries();
  }

  loadBeneficiaries() {
    this.AdminBenefeciaryApi.getAllBeneficiaries().subscribe({
     next : (beneficiaries: any[]) => { // Explicitly specify the type as any[]
        this.beneficiaries = beneficiaries;
      },
     error : (error) => {
        console.error('Error fetching beneficiaries:', error);
      }
  });
  }

  page = 1;
  itemsPerPage = 10;
  onIonInfinite(ev: any) {
    this.page++;
    this.loadBeneficiaries();
    setTimeout(() => {
      ev.target.complete();
    }, 500);
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: AvailmentrequestComponent,
      componentProps: {
        presentingElement: this.presentingElement,
      },
    });

    modal.present();
  }
}
