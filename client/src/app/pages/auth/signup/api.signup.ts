import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiSignUP {
  private baseUrl = 'http://localhost:8000/api/auth';

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register/user`, userData);
  }
}