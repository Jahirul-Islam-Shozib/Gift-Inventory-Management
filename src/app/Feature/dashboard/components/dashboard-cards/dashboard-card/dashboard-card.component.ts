import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

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
    return this.http
      .get<any>('http://localhost:8080/admin/dashboard/active_deactivate', {
        headers: new HttpHeaders({
          Authorization: `Bearer+${this.api_key}`,
        }),
      })
      .subscribe({
        next: (response: any) => {
          console.log('response:: ', response);
          this.userStatus = response;
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }
}
