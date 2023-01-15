import { Subject } from 'rxjs';
// import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HttpClient } from '@angular/common/http';
import { AuthResponseData } from './auth-response.model';
import { AuthInfoService } from '../Service/authIfo.service';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;
  loginUserData: any;
  private isSsuLogin = false;
  private isDepotLogin = false;

  constructor(
    private router: Router,
    private afauth: AngularFireAuth,
    private http: HttpClient,
    private authInfoService: AuthInfoService
  ) {}

  signUp(authData: AuthData) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCWyDgK_OagUGfC5pdXW5CK8UgWr1Jz4P8',
      {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true,
      }
    );
  }

  login(authData: AuthData) {
    return this.http.post('http://localhost:8080/user/login', {
      email: authData.email,
      password: authData.password,
      //returnSecureToken: true,
    });
  }

  logout() {
    // this.user = null;
    this.afauth.signOut();
    this.isAuthenticated = false;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  isAuth() {
    return this.isAuthenticated;
  }
  isSsuValid() {
    return this.isSsuLogin;
  }

  isDepotValid() {
    return this.isDepotLogin;
  }

  authSuccessfully() {
    this.isAuthenticated = true;
    this.authChange.next(true);
  }

  ssuLoginSuccessfully() {
    this.isSsuLogin = true;
  }
}
