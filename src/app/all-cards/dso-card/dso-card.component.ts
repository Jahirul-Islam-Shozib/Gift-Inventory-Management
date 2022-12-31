import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-dso-card',
  templateUrl: './dso-card.component.html',
  styleUrls: ['./dso-card.component.scss'],
})
export class DsoCardComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
