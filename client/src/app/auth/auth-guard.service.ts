import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(private AuthenticationService: AuthenticationService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.AuthenticationService.isAuthenticatedUser().pipe(
      take(1),
      map((isAuthenticated: boolean) => {
        if (isAuthenticated) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}
