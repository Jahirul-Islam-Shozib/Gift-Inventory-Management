import { Subject } from 'rxjs';
import { AuthData } from '../../models/auth-data.model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;
  loginUserData: any;

  constructor(private router: Router, private http: HttpClient) {}

  login(authData: AuthData) {
    const loginURL: string = `${environment.API_END_POINT}/user/login`;
    return this.http.post(loginURL, {
      email: authData.email,
      password: authData.password,
    });
  }

  logout() {
    this.isAuthenticated = false;
    this.authChange.next(false);
    this.router.navigate(['/auth/login']);
    localStorage.clear();
  }

  isAuth() {
    // console.log(!!localStorage.getItem('token'));
    return !!localStorage.getItem('token');
  }

  authSuccessfully() {
    this.isAuthenticated = true;
    this.authChange.next(true);
  }
}
