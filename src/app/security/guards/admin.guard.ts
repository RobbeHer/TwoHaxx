import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  constructor(private _authenticationService: AuthenticationService, private router : Router) { } 

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._authenticationService.isLoggedIn()) {
      if (this._authenticationService.isAdmin()) {
        return true;
      } else {
        this.router.navigate(['/forbidden']);
      }
    } else {
      this.router.navigate(['/sign-in'], { queryParams: { returnUrl: state.url } });
    } 
    return false;
  }
}
