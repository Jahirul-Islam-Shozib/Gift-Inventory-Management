import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/Service/Data Fetch & Store/data-storage.service';
import { DataModel } from 'src/app/shared/data.model';
interface InventoryStore {
  name: string;
  code: string;
}
@Component({
  selector: 'app-inventoryStore-table',
  templateUrl: './inventoryStore-table.component.html',
  styleUrls: ['./inventoryStore-table.component.scss'],
})
export class InventoryStoreTableComponent implements OnInit {
  dataItems: DataModel[] = [];

  cols: any[] = [];

  inventoryStores: InventoryStore[];

  selectedInventoryStores: InventoryStore;

  constructor(private dataStorageService: DataStorageService) {
    this.inventoryStores = [
      { name: 'Dso', code: 'DSO' },
      { name: 'Du', code: 'DU' },
      { name: 'Dpg', code: 'DPG' },
    ];
    this.selectedInventoryStores = { name: 'Dso', code: 'DSO' };
  }

  ngOnInit() {
    this.getInventriesByStoreName(this.selectedInventoryStores.code);

    this.cols = [
      { field: 'budgetId', header: 'Budget Id' },
      { field: 'sapCode', header: 'SAP Code' },
      { field: 'productName', header: 'Product name' },
      { field: 'productionUnit', header: 'Production Unit' },
      { field: 'packageSize', header: 'Package Size' },
      { field: 'category', header: 'Product Category' },
      { field: 'sbu', header: 'SBU' },
      { field: 'fcid', header: 'FC Id' },
      { field: 'fieldColleagues', header: 'FC Name' },
      { field: 'quantity', header: 'Quantity' },
      { field: 'depotID', header: 'Depot Id' },
      { field: 'depotName', header: 'Depot name' },
      { field: 'month', header: 'Month' },
      { field: 'year', header: 'Year' },
    ];
  }

  onChangeInventoryStore(event: any) {
    console.log(event.value);
    this.getInventriesByStoreName(event.value.code);
  }

  private getInventriesByStoreName(storeCode: string) {
    this.dataStorageService.fetchData(storeCode).subscribe({
      next: (response: any) => {
        console.log('response:: ', response);
        this.dataItems = response;
      },
      error: (err: any) => {
        console.log(err);
        this.dataItems = [];
      },
    });
  }
}
