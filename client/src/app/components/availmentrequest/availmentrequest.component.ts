import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/service/api.service';
import { forkJoin } from 'rxjs';
import { ToastController } from '@ionic/angular';


export interface Availment {
  id: number;
  // Add other properties of an availment here
  isAccepted: boolean;
  // Other properties of an availment...
}

@Component({
  selector: 'app-availmentrequest',
  templateUrl: './availmentrequest.component.html',
  styleUrls: ['./availmentrequest.component.scss'],
})
export class AvailmentrequestComponent  implements OnInit {
  @Input() presentingElement: any; 
  availments: any[] = [];

  isModalOpen = false;
  alertButton = ['OK'];

  constructor(private modalController: ModalController, private ApiService: ApiService, private toastController:ToastController) {}

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  dismissModal() {
    this.modalController.dismiss();
  }
  ngOnInit() {  this.fetchAllAvailments();}

  fetchAllAvailments() {
    this.ApiService.getAllAvailments().subscribe(
      (availments: Availment[]) => {
        // Cast availments to Availment[] since TypeScript might not infer it automatically from the API response
        this.availments = availments.filter((availment: Availment) => !availment.isAccepted); // Use Availment as the type for the availment parameter
        this.fetchUserDetailsForAvailments();
      },
      (error) => {
        console.error('Error fetching availments:', error);
      }
    );
  }

  fetchUserDetailsForAvailments() {
    for (const availment of this.availments) {
      this.ApiService.getUserById(availment.userId).subscribe(
        (user) => {
          // Add user data to each availment object
          availment.user = user;
  
          // Log the user data for debugging
          console.log('User data for availment:', availment.user);

        },
        (error) => {
          console.error('Error fetching user details:', error);
        }
      );
    }
  }
  async onApprove(availmentId: number) {
    try {
      // Make the PUT request to accept the availment
      await this.ApiService.acceptAvailment(availmentId).toPromise();

      // Update the status locally if needed
      const acceptedAvailment = this.availments.find((availment) => availment.id === availmentId);
      if (acceptedAvailment) {
        acceptedAvailment.isAccepted = true;
      }

      // Display a success toast
      const toast = await this.toastController.create({
        message: 'Availment approved successfully!',
        duration: 2000, // Display the toast for 2 seconds
        color: 'success',
        position: 'bottom',
      });
      toast.present();
    } catch (error) {
      console.error('Error accepting availment:', error);

      // Handle any errors from the API request if needed

      // Display an error toast
      const toast = await this.toastController.create({
        message: 'Error accepting availment. Please try again later.',
        duration: 2000, // Display the toast for 2 seconds
        color: 'danger',
        position: 'bottom',
      });
      toast.present();
    }
  }
}