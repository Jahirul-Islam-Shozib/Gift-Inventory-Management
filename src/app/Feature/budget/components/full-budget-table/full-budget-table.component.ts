import { Component, Input, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/services/Data Fetch & Store/data-storage.service';
import { DataModel } from 'src/app/shared/models/data.model';

@Component({
  selector: 'app-full-budget-table',
  templateUrl: './full-budget-table.component.html',
  styleUrls: ['./full-budget-table.component.scss'],
})
export class FullBudgetTableComponent implements OnInit {
  @Input() budgetData!: DataModel[];
  cols: any[] = [];

  constructor() {}

  ngOnInit() {
    this.cols = [
      { field: 'budgetID', header: 'Budget Id' },
      { field: 'sapCode', header: 'SAP Code' },
      { field: 'productName', header: 'Product name' },
      { field: 'productionUnit', header: 'Production Unit' },
      { field: 'packageSize', header: 'Package Size' },
      { field: 'category', header: 'Product Category' },
      { field: 'sbu', header: 'SBU' },
      { field: 'fieldColleagueID', header: 'FC Id' },
      { field: 'fieldColleagueName', header: 'FC Name' },
      { field: 'quantity', header: 'Quantity' },
      { field: 'depotID', header: 'Depot Id' },
      { field: 'depotName', header: 'Depot name' },
      { field: 'month', header: 'Month' },
      { field: 'year', header: 'Year' },
    ];
  }
}
