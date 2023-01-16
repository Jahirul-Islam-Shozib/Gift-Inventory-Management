import { Component, Input, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/Service/Data Fetch & Store/data-storage.service';
import { DataModel } from 'src/app/shared/data.model';

@Component({
  selector: 'app-full-budget-table',
  templateUrl: './full-budget-table.component.html',
  styleUrls: ['./full-budget-table.component.scss'],
})
export class FullBudgetTableComponent implements OnInit {
  @Input() inventoryData!: DataModel[];
  cols: any[] = [];

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit() {
    this.cols = [
      { field: 'budgetId', header: 'Budget Id' },
      { field: 'sapCode', header: 'SAP Code' },
      { field: 'productName', header: 'Product name' },
      { field: 'productionUnit', header: 'Production Unit' },
      { field: 'packageSize', header: 'Package Size' },
      { field: 'category', header: 'Product Category' },
      { field: 'sbu', header: 'SBU' },
      { field: 'fieldColleagueID', header: 'FC Id' },
      { field: 'fieldColleagues', header: 'FC Name' },
      { field: 'quantity', header: 'Quantity' },
      { field: 'depotID', header: 'Depot Id' },
      { field: 'depotName', header: 'Depot name' },
      { field: 'month', header: 'Month' },
      { field: 'year', header: 'Year' },
    ];
  }
}
