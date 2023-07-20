import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dispersal',
  templateUrl: './admin-dispersal.page.html',
  styleUrls: ['./admin-dispersal.page.scss'],
})
export class AdminDispersalPage implements OnInit {
  isModalOpen = false;

  setOpen(isOpen : boolean){
    this.isModalOpen = isOpen;
  }

  constructor() { }

  ngOnInit() {
  }

}
