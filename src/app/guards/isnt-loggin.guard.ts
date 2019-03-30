import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsntLogginGuard implements CanActivate {
  constructor(
    private _authSrv: AuthService,
    private _router: Router
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve) => {
      this._authSrv.stateSession().subscribe(data => {
        if (data !== null) {
          resolve(true);
        }
        this._router.navigate(['/login']);
        resolve(false);
      }, error => {
        this._router.navigate(['/login']);
        resolve(false);
      });
    });
  }
}
