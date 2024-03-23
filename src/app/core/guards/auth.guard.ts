import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { map, take, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.isLoggedIn().pipe(
      take(1),
      switchMap((isLoggedIn: boolean) => {
        if (!isLoggedIn) {
          this.router.navigate(['/login']);
          return [false];
        }
        // Permitir acceso si el usuario está autenticado
        return [true];
      }),
      map((result: boolean) => {
        if (!result) {
          this.router.navigate(['/login']);
          return false;
        }
        return true; // Permitir acceso si el usuario está autenticado
      })
    );
  }
}
