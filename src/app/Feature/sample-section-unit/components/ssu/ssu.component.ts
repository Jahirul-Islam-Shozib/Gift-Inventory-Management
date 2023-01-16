import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AuthInfoService } from 'src/app/Service/authInfo.service';
import { DataStorageService } from 'src/app/Service/Data Fetch & Store/data-storage.service';
import { DataModel } from 'src/app/shared/models/data.model';
import { SampleSectionUnitChalanComponent } from '../../sample-section-unit-chalan/sample-section-unit-chalan.component';
interface InventoryStore {
  name: string;
  code: string;
}
@Component({
  selector: 'app-ssu',
  templateUrl: './ssu.component.html',
  styleUrls: ['./ssu.component.scss'],
  providers: [DialogService],
})
export class SsuComponent implements OnInit {
  dataItems: DataModel[] = [];
  api_key: any;
  cols: any[] = [];

  inventoryStores: InventoryStore[];

  selectedInventoryStores!: InventoryStore;

  authInfoData: any;

  constructor(
    private dataStorageService: DataStorageService,
    public dialogService: DialogService,
    private authInfoService: AuthInfoService
  ) {
    this.inventoryStores = [
      { name: 'Dso', code: 'DSO' },
      { name: 'Du', code: 'DU' },
      { name: 'Dpg', code: 'DPG' },
    ];
    this.selectedInventoryStores = { name: 'Dso', code: 'DSO' };
  }

  ngOnInit() {
    this.api_key = window.localStorage.getItem('token');
    this.authInfoData = this.authInfoService.getUserDetailsData();
    this.authInfoService.userDetailsCalled.subscribe((data) => {
      this.authInfoData = data;
    });

    console.log(this.authInfoData);

    this.getInventriesByStoreName(this.selectedInventoryStores.code);
  }

  onChangeInventoryStore(event: any) {
    console.log(event.value);
    this.getInventriesByStoreName(event.value.code);
  }

  private getInventriesByStoreName(storeCode: string) {
    this.dataStorageService.fetchData(storeCode, this.api_key).subscribe({
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
  openChalanDialog() {
    this.dialogService.open(SampleSectionUnitChalanComponent, {
      data: this.authInfoData,
      header: 'Create Invoice',
      width: '70%',
      height: '100%',
    });
  }
}
