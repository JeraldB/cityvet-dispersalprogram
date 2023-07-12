import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddLivestocksComponent } from '../../components/add-livestocks/add-livestocks.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-livestock',
  templateUrl: './admin-livestock.page.html',
  styleUrls: ['./admin-livestock.page.scss'],
})
export class AdminLivestockPage implements OnInit {
  livestock: any[] = [];
  filteredLivestock: any[] = [];
  searchQuery = '';

  constructor(
    private modalController: ModalController,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.loadLivestockData();
  }

  loadLivestockData() {
    this.http
      .get<any>('http://localhost:8000/api/livestocks/allLivestock')
      .subscribe({
        next: (response) => {
          if (response.hasOwnProperty('livestock')) {
            this.livestock = response.livestock;
            this.filteredLivestock = response.livestock;
          } else {
            console.log('Invalid response format:', response);
          }
          console.log('Livestock data:', response);
        },
        error: (error) => {
          console.log('Error fetching livestock data:', error);
        },
      });
  }

  filterLivestock() {
    this.filteredLivestock = this.livestock.filter((item) =>
      item.animalType.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: AddLivestocksComponent,
    });

    modal.onDidDismiss().then((result) => {
      if (result.data && result.data.added) {
        this.loadLivestockData();
      }
    });

    await modal.present();
  }
}
