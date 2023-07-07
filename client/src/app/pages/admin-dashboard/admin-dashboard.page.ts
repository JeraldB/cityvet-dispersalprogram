import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {
  presentingElement : Element | null = null;

  constructor() { }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page')
  }

}
