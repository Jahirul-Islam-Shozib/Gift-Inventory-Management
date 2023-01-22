import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '../shared/services/auth-service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  localStorageData: any;

  constructor(private authService: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let data = route.data;
    this.localStorageData = localStorage.getItem('loginUserDetails')
      ? localStorage.getItem('loginUserDetails')
      : '';

    let user =
      this.localStorageData && this.localStorageData.length
        ? JSON.parse(this.localStorageData)
        : null;

    //console.log(user);
    if (user == null) {
      this.router.navigate(['/auth/login']);
      return false;
    }

    if (data && data['roles']) {
      const guardRoles = data['roles'];
      const currentUserRole = user && user.role;
      console.log(currentUserRole);
      if (
        currentUserRole &&
        guardRoles &&
        guardRoles.includes(currentUserRole) &&
        this.authService.isAuth()
      ) {
        return true;
      }
      this.router.navigate(['/auth/login']);
      return false;
    }

    return false;
  }
}
