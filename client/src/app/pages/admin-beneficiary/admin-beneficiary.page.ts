import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { AdminBenefeciaryApi } from './admin.benefeciary.api';


@Component({
  selector: 'app-admin-beneficiary',
  templateUrl: './admin-beneficiary.page.html',
  styleUrls: ['./admin-beneficiary.page.scss'],
})
export class AdminBeneficiaryPage implements OnInit {
  beneficiaries: any[]= [];
  selectedBeneficiary: any;
onBeneficiarySelect(e: any) {
  this.selectedBeneficiary = e.detail.value;
  console.log(this.selectedBeneficiary);
}
  constructor(private AdminBenefeciaryApi: AdminBenefeciaryApi) {}

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
}
