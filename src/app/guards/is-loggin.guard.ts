import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsLogginGuard implements CanActivate {
  constructor(
    private _authSrv: AuthService,
    private _router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> | boolean {
    return new Promise((resolve) => {
      this._authSrv.stateSession().subscribe(data => {
        if (data !== null) {
          console.log(data);
          this._router.navigate(['/home']);
          resolve(false);
        }
        resolve(true);
      }, error => {
        // this._router.navigate(['/login']);
        resolve(true);
      });
    });
  }
}
