import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  transactions: any[] = [
    {
      title: 'Transaction 1',
      description: 'This is the description for Transaction 1.',

    },
    {
      title: 'Transaction 2',
      description: 'This is the description for Transaction 2.',
      date: '2023-07-02',
    
    },
  ];
  constructor(private menuController: MenuController) {}

  openMenu() {
    this.menuController.enable(true, 'main-menu');
    this.menuController.open('main-menu');
  }

  ngOnInit() {}
}
