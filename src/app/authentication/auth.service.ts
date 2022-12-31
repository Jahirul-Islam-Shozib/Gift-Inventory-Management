import { Subject } from 'rxjs';
// import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HttpClient } from '@angular/common/http';
import { AuthResponseData } from './auth-response.model';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  // private user!: User;
  private isAuthenticated = false;

  constructor(
    private router: Router,
    private afauth: AngularFireAuth,
    private http: HttpClient
  ) {}

  //registerUser(authData: AuthData) {
  // this.user = {
  //   email: authData.email,
  //   userId: Math.round(Math.random() * 10000).toString(),
  // };
  // this.router.navigate(['/login']);
  // this.authChange.next(true);
  ////////////////////////
  //   this.afauth
  //     .createUserWithEmailAndPassword(authData.email, authData.password)
  //     .then((result) => {
  //       console.log(result);
  //       this.router.navigate(['/login']);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

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

  //login(authData: AuthData) {
  // this.user = {
  //   email: authData.email,
  //   userId: Math.round(Math.random() * 10000).toString(),
  // };
  // this.authSuccessfully();
  // this.authChange.next(true);
  ////////////////////
  //   this.afauth
  //     .signInWithEmailAndPassword(authData.email, authData.password)
  //     .then((result) => {
  //       console.log(result);
  //       this.authSuccessfully();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  login(authData: AuthData) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCWyDgK_OagUGfC5pdXW5CK8UgWr1Jz4P8',
      {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true,
      }
    );
  }
  logout() {
    // this.user = null;
    this.afauth.signOut();
    this.isAuthenticated = false;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  // getUser() {
  //   return { ...this.user };
  // }

  isAuth() {
    // return this.user != null;
    return this.isAuthenticated;
  }

  authSuccessfully() {
    this.isAuthenticated = true;
    this.authChange.next(true);
    //this.router.navigate(['/home']);
  }
}
