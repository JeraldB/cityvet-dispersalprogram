import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DispersedLivestockApi {
  private baseUrl = 'http://localhost:8000/api/dispers';

  constructor(private http: HttpClient) { }

  getDispersedLivestockForBeneficiary(beneficiaryId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/livestock/dispersed/:${beneficiaryId}`);
  }
}