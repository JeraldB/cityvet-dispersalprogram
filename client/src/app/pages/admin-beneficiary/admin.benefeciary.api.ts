import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminBenefeciaryApi {
  private baseUrl = 'http://localhost:8000/api/benefeciaries'; 

  constructor(private http: HttpClient) { }

  getAllBeneficiaries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAll`); // Explicitly specify the type as any[]
  }

  updateBeneficiary(beneficiaryId: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/editBeneficiary/${beneficiaryId}`, data);
  }
}