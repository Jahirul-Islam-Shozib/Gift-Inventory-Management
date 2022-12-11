import { Subject } from 'rxjs';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user!: User;
  private isAuthenticated = true;

  constructor(private router: Router, private afauth: AngularFireAuth) {}

  registerUser(authData: AuthData) {
    // this.user = {
    //   email: authData.email,
    //   userId: Math.round(Math.random() * 10000).toString(),
    // };
    // this.router.navigate(['/login']);
    // this.authChange.next(true);

    this.afauth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {
        console.log(result);
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  login(authData: AuthData) {
    // this.user = {
    //   email: authData.email,
    //   userId: Math.round(Math.random() * 10000).toString(),
    // };
    // this.authSuccessfully();
    // this.authChange.next(true);

    this.afauth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {
        console.log(result);
        this.authSuccessfully();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  logout() {
    // this.user = null;
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
  private authSuccessfully() {
    this.isAuthenticated = true;
    this.authChange.next(true);
    this.router.navigate(['/home']);
  }
}
