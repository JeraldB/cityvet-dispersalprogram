import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly TOKEN_KEY = 'jwt';

  constructor() {}

  login(token: string) {
    // Save the JWT token to local storage
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  logout() {
    // Remove the JWT token from local storage
    localStorage.removeItem(this.TOKEN_KEY);
  }

  getAccessToken(): string {
    // Get the JWT token from local storage
    const token = localStorage.getItem(this.TOKEN_KEY);

    // If the token is null or undefined, return an empty string
    return token ? token : '';
  }
  isLoggedIn(): boolean {
    // Check if the user is logged in (i.e., JWT token is present)
    return !!this.getAccessToken();
  }
  
}

