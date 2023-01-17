import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-field-officer-status-card',
  templateUrl: './field-officer-status-card.component.html',
  styleUrls: ['./field-officer-status-card.component.scss'],
})
export class FieldOfficerStatusCardComponent implements OnInit {
  api_key: any;
  fieldOfficerStatus: any = {};
  constructor(private primengConfig: PrimeNGConfig, private http: HttpClient) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.api_key = window.localStorage.getItem('token');
    this.getFieldOfficerStatus();
  }

  getFieldOfficerStatus() {
    return this.http
      .get<any>('http://localhost:8080/admin/dashboard/totalFieldColleague', {
        headers: new HttpHeaders({
          Authorization: `Bearer+${this.api_key}`,
        }),
      })
      .subscribe({
        next: (response: any) => {
          console.log('response:: ', response);
          this.fieldOfficerStatus = response;
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }
}
