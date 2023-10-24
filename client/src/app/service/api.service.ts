import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../pages/home/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8000/api/';


  constructor(private http: HttpClient,) { }

// signup
registerUser(userData: any): Observable<any> {
  return this.http.post(`${this.baseUrl}auth/register/user`, userData);
}

// login 
loginUser(credentials: any): Observable<any> {
  return this.http.post(`${this.baseUrl}auth/login/user`, credentials);
}

// availments
createAvailment(availmentData: any): Observable<any> {
  return this.http.post(`${this.baseUrl}availments/service`, availmentData);
}

// user
getProfile(): Observable<any> {
  // Get the JWT token from local storage
  const token = localStorage.getItem('jwt');

  // Prepare headers with the JWT token
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  // Make an authenticated API request
  return this.http.get<any>(`${this.baseUrl}user/profile`, { headers });
}

// list availment request
getAllAvailments(): Observable<any> {
  const url = `${this.baseUrl}availments/allService`; 
  return this.http.get<any>(url);
}

getUserById(userId: number): Observable<any> {
  const url = `${this.baseUrl}availments/user/${userId}`; // Replace this with your server's API endpoint to fetch user by ID
  return this.http.get<any>(url);
}

disperseLivestock(formData: any) {
  const url = `${this.baseUrl}dispers/livestock`;
  return this.http.post(url, formData);
}
getTransactionsForUser(userId: number): Observable<any> {
  const url = `${this.baseUrl}dispers/transactions/${userId}`;
  return this.http.get<any>(url);
}
 getTransactionsForLoggedInBeneficiary(userProfile: User): Observable<any> {
    if (userProfile && userProfile.userId) {
      return this.getTransactionsForUser(userProfile.userId);
    } else {
      return new Observable((observer) => {
        observer.error('User profile or userId is missing');
      });
    }
  }

  acceptAvailment(availmentId: number): Observable<any> {
   
    const url = `${this.baseUrl}availments/service/${availmentId}/accept`;
    return this.http.put(url, {});
  }
}
