import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboards',
  templateUrl: './admin-dashboards.page.html',
  styleUrls: ['./admin-dashboards.page.scss'],
})
export class AdminDashboardsPage implements OnInit {
  presentingElement : Element | null = null;
  
  public alertButton = [
    {
      text:'Cancel',
      role:'cancel',
    },
    {
      text: 'OK',
      role: 'Confirm'
    }
  ]

  constructor() { }
  swiperSlideChanged(e:any){
    console.log('changed :', e );
  }
  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

}
