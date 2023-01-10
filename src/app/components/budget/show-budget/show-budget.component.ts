import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-budget',
  templateUrl: './show-budget.component.html',
  styleUrls: ['./show-budget.component.scss'],
})
export class ShowBudgetComponent implements OnInit {
  api_key: any;
  constructor() {}

  ngOnInit(): void {
    this.api_key = window.localStorage.getItem('token');
  }
}
