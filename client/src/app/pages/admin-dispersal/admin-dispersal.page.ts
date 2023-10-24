import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-admin-dispersal',
  templateUrl: './admin-dispersal.page.html',
  styleUrls: ['./admin-dispersal.page.scss'],
})
export class AdminDispersalPage implements OnInit {
  dispersalForm!: FormGroup;

  isModalOpen = false;

  setOpen(isOpen : boolean){
    this.isModalOpen = isOpen;
  }
  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {}

  ngOnInit() {
    this.dispersalForm = this.formBuilder.group({
      benefeciaryId: ['', Validators.required],
      livestockId: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.dispersalForm.valid) {
      const formData = this.dispersalForm.value;
      this.disperseLivestock(formData);
    }
  }

  disperseLivestock(formData: any) {
    this.apiService.disperseLivestock(formData).subscribe(
      (response) => {
        // Handle successful response (e.g., show success message, navigate, etc.)
        console.log('Livestock dispersed successfully:', response);
      },
      (error) => {
        // Handle error (e.g., show error message)
        console.error('Error dispersing livestock:', error);
      }
    );
  }
}



