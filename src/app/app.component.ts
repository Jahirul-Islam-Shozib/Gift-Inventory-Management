import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth-service/auth.service';
import { AuthInfoService } from './shared/services/auth-service/authInfo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'access_authentication';
  api_key: any;
  localStorageUser: any;
  constructor(
    private authInfoService: AuthInfoService,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit() {
    this.localStorageUser = localStorage.getItem('loginUserDetails')
      ? localStorage.getItem('loginUserDetails')
      : '';

    let user =
      this.localStorageUser && this.localStorageUser.length
        ? JSON.parse(this.localStorageUser)
        : null;
    // console.log(user.role);

    if (this.authService.isAuth() && user.role == 'depot') {
      this.router.navigate(['inventory-depots/depot-wise-budget']);
    } else if (this.authService.isAuth() && user.role == 'ssu') {
      this.router.navigate(['inventory/ssu']);
    }
    this.api_key = window.localStorage.getItem('token');
    if (this.api_key) {
      this.reloadPage();
    }
  }
  reloadPage() {
    this.authInfoService
      .getUserDataAfterLogin(this.api_key)
      .subscribe((response: any) => {
        //console.log(response);
        if (response) {
          this.authService.authChange.next(true);
        }
      });
  }
}
