import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
@Component({
  selector: 'app-admin-beneficiary-tabs',
  templateUrl: './admin-beneficiary-tabs.page.html',
  styleUrls: ['./admin-beneficiary-tabs.page.scss'],
})
export class AdminBeneficiaryTabsPage implements OnInit {
  selectedBeneficiary: any;
  items : any[]=[];
  constructor() { }

  ngOnInit() {
    this.generateItems();
  }
  private generateItems(){
    const count = this.items.length + 1;
    for(let i = 0; i < 100; i++){
      this.items.push(`Item ${count + i}`);
    }
  }

  onIonInfinite(ev : any){
    this.generateItems();
    setTimeout(() =>{
      (ev as InfiniteScrollCustomEvent).target.complete()
    },500)
  }

  onBeneficiarySelect(e : any){
    this.selectedBeneficiary = e.detail.value;
    console.log(this.selectedBeneficiary)
  }

  public results = [...this.items];
  handleInput(event:any){
    const query = event.target.value.toLowerCase();
    this.results = this.items.filter((i) => i.toLowerCase().indexOf(query)> -1);
  }

}
