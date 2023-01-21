import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss'],
})
export class DashboardCardComponent implements OnInit {
  userStatus: any = {};
  api_key: any;
  constructor(private primengConfig: PrimeNGConfig, private http: HttpClient) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.api_key = window.localStorage.getItem('token');
    this.getUserStatus();
  }

  getUserStatus() {
    const userStatusUrl: string = `${environment.API_END_POINT}/dashboard/user`;
    return this.http
      .get<any>(userStatusUrl, {
        headers: new HttpHeaders({
          Authorization: `Bearer+${this.api_key}`,
        }),
      })
      .subscribe({
        next: (response: any) => {
          this.userStatus = response;
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }
}
