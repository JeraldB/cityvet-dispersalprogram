import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { CookieService } from 'ngx-cookie-service'; 

@Injectable({
  providedIn: 'root'
})
export class UserApi {
    private baseUrl = 'http://localhost:8000/api/user';

    constructor(private http: HttpClient, private cookieService: CookieService) {}
  
    // Get the access token from the cookie
    private getAccessToken(): string {
      return this.cookieService.get('access_token');
    }
  
    getUserProfile(): Observable<User> {
      const accessToken = this.getAccessToken();
      console.log('Access Token:', accessToken); // Display the access token on the console
  
      // Include the access token in the request headers
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        }),
        withCredentials: true
      };
  
      return this.http.get<User>(`${this.baseUrl}/profile`, httpOptions);
    }
  }
 