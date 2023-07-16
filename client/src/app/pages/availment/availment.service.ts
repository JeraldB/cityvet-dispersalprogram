import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvailmentService {
  private baseUrl = 'http://localhost:8000/api/availments';

  constructor(private http: HttpClient) {}

  createAvailment(availmentData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/service`, availmentData);
  }
}