import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthInfoService {
  constructor(private http: HttpClient) {}
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
    const userObjectloginInfoURL: string = `${environment.API_END_POINT}/user/claim_object`;
    return this.http
      .get(userObjectloginInfoURL, {
        headers: new HttpHeaders({
          Authorization: `Bearer+${token}`,
        }),
      })
      .pipe(
        tap((data) => {
          this.setUserDetailsData(data);
          // console.log(data);
        })
      );
  }
}
