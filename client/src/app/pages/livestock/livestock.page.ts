import { Component, OnInit } from '@angular/core';
import { DispersedLivestockApi } from './api.livestock';

@Component({
  selector: 'app-livestock',
  templateUrl: './livestock.page.html',
  styleUrls: ['./livestock.page.scss'],
})
export class LivestockPage implements OnInit {
  dispersedLivestock: any[] = [];
  selectedBeneficiary: any;

  constructor(private DispersedLivestockApi:DispersedLivestockApi) {}

  ngOnInit() {}

  onBeneficiarySelect(e: any) {
    this.selectedBeneficiary = e.detail.value;
    console.log(this.selectedBeneficiary);
  }
}
