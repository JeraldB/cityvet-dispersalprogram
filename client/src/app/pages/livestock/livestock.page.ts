import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livestock',
  templateUrl: './livestock.page.html',
  styleUrls: ['./livestock.page.scss'],
})
export class LivestockPage implements OnInit {

  selectedBeneficiary: any;

  constructor() {}

  ngOnInit() {}

  onBeneficiarySelect(e: any) {
    this.selectedBeneficiary = e.detail.value;
    console.log(this.selectedBeneficiary);
  }
}
