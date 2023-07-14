import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { parse, format } from 'date-fns';

@Component({
  selector: 'app-add-livestocks',
  templateUrl: './add-livestocks.component.html',
  styleUrls: ['./add-livestocks.component.scss'],
})
export class AddLivestocksComponent implements OnInit {
  livestock: any = {};
  dateOfBirth: string = '';

  constructor(
    private modalController: ModalController,
    private http: HttpClient
  ) {}

  closeModal() {
    this.modalController.dismiss();
  }

  saveLivestock() {
    // form fields in the ngModel bindings
    const newLivestock = {
      breed: this.livestock.breed,
      animalType: this.livestock.animalType,
      dateOfBirth: this.livestock.dateOfBirth,
      gender: this.livestock.gender,
      health: this.livestock.health,
      // livestockStatus: this.livestock.status,
    };

    console.log('New Livestock:', newLivestock); // test

    // Send a POST request to the API
    this.http
      .post<any>(
        'http://localhost:8000/api/livestocks/addLivestock',
        newLivestock
      )
      .subscribe({
        next: (response) => {
          console.log('Livestock added:', response); // Display the response from the API
          this.modalController.dismiss({ added: true });
        },
        error: (error) => {
          console.log('Error adding livestock:', error); // Display the error message
        },
      });
  }

  ngOnInit() {
    const dateOfBirth = this.livestock.dateOfBirth;
    this.dateOfBirth = this.formatDate(dateOfBirth);
  }

  formatDate(dateString: string): string {
    if (!dateString) {
      return ''; // or return a default value
    }

    const parsedDate = parse(dateString, 'mm-dd-yy', new Date());
    const dateOfBirth = format(parsedDate, 'yyyy-mm-dd');
    return dateOfBirth;
  }
}
