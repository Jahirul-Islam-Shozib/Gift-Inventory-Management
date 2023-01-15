import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInfoService {
  constructor(private http: HttpClient) {}
  //userDetailsCalled = new Subject<any[]>();
  userDetails: any;
  userDetailsCalled = new BehaviorSubject<any>({});

  getUserDetailsData() {
    return this.userDetails;
  }
  setUserDetailsData(userData: any) {
    this.userDetails = userData;
    this.userDetailsCalled.next(this.userDetails);
  }

  getUserDataAfterLogin(token: any) {
    return this.http
      .get('http://localhost:8080/user/claim_object', {
        headers: new HttpHeaders({
          Authorization: `Bearer+${token}`,
        }),
      })
      .pipe(
        tap((data) => {
          this.setUserDetailsData(data);
          console.log(data);
        })
      );
  }
}
