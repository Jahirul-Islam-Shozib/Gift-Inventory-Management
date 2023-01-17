import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-product-summary-card',
  templateUrl: './product-summary-card.component.html',
  styleUrls: ['./product-summary-card.component.scss'],
})
export class ProductSummaryCardComponent implements OnInit {
  api_key: any;
  productSummary: any = {};
  constructor(private primengConfig: PrimeNGConfig, private http: HttpClient) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.api_key = window.localStorage.getItem('token');
    this.getProductSummary();
  }
  getProductSummary() {
    return this.http
      .get<any>('http://localhost:8080/admin/dashboard/categoryWiseSummary', {
        headers: new HttpHeaders({
          Authorization: `Bearer+${this.api_key}`,
        }),
      })
      .subscribe({
        next: (response: any) => {
          console.log('response:: ', response);
          this.productSummary = response;
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }
}
