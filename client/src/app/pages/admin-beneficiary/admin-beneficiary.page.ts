import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
@Component({
  selector: 'app-admin-beneficiary',
  templateUrl: './admin-beneficiary.page.html',
  styleUrls: ['./admin-beneficiary.page.scss'],
})
export class AdminBeneficiaryPage implements OnInit {
  selectedBeneficiary: any;
  items: any[]= [];
  constructor() { }

  ngOnInit() {
    this.generateItems();
  }

  private generateItems(){
    const count = this.items.length + 1;
    for (let i = 0 ; i < 100 ; i++){
      this.items.push(`Item ${count + i}`);
    }
  }
  onIonInfinite(ev:any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    },500)
  }
  onBeneficiarySelect(e: any) {
    this.selectedBeneficiary = e.detail.value;
    console.log(this.selectedBeneficiary);
  }

}
