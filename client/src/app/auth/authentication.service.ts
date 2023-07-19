import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticated = false;

  constructor() {}

  login(token: string) {
    // Save the token to local storage or in memory
    localStorage.setItem('token', token);
    this.isAuthenticated = true;
  }

  logout() {
    // Remove the token from local storage or reset the authentication state
    localStorage.removeItem('token');
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): Observable<boolean> {
    // Return an observable that emits the boolean value
    return of(this.isAuthenticated || !!localStorage.getItem('token'));
  }
}

