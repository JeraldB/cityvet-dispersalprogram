import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-availment',
  templateUrl: './availment.page.html',
  styleUrls: ['./availment.page.scss'],
})
export class AvailmentPage implements OnInit {
  constructor(private menuController: MenuController) {}

  openMenu() {
    this.menuController.enable(true, 'main-menu');
    this.menuController.open('main-menu');
  }
  ngOnInit() {}
}
