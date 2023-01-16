import { Component, Input, OnInit } from '@angular/core';
import { DataModel } from 'src/app/shared/data.model';

@Component({
  selector: 'app-depot-wise-budget-table',
  templateUrl: './depot-wise-budget-table.component.html',
  styleUrls: ['./depot-wise-budget-table.component.scss'],
})
export class DepotWiseBudgetTableComponent implements OnInit {
  depotId!: string;
  @Input() depotData!: DataModel[];
  dataItems: DataModel[] = [];

  cols: any[] = [];

  constructor() {}

  ngOnInit() {
    this.cols = [
      { field: 'budgetId', header: 'Budget Id' },
      { field: 'sapCode', header: 'SAP Code' },
      { field: 'productName', header: 'Product name' },
      { field: 'productionUnit', header: 'Production Unit' },
      { field: 'packageSize', header: 'Package Size' },
      { field: 'category', header: 'Product Category' },
      { field: 'fieldColleagueID', header: 'FC Id' },
      { field: 'fieldColleagues', header: 'FC Name' },
      { field: 'quantity', header: 'Quantity' },
      { field: 'month', header: 'Month' },
      { field: 'year', header: 'Year' },
    ];
  }
}
