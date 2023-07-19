import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginApi {
  private baseUrl = 'http://localhost:8000/api/auth';

  constructor(private http: HttpClient) {}

  loginUser(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login/user`, userData);
  }
}