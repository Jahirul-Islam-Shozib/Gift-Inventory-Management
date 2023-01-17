import { Component, Input, OnInit } from '@angular/core';
import { DataModel } from 'src/app/shared/models/data.model';

@Component({
  selector: 'app-sample-section-unit-table',
  templateUrl: './sample-section-unit-table.component.html',
  styleUrls: ['./sample-section-unit-table.component.scss'],
})
export class SampleSectionUnitTableComponent implements OnInit {
  @Input() inventoryData!: DataModel[];
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
