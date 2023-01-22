import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { environment } from 'src/environments/environment';

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
    const caregorySumUrl: string = `${environment.API_END_POINT}/dashboard/categoryWiseSummary`;
    return this.http
      .get<any>(caregorySumUrl, {
        headers: new HttpHeaders({
          Authorization: `Bearer+${this.api_key}`,
        }),
      })
      .subscribe({
        next: (response: any) => {
          this.productSummary = response;
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }
}
