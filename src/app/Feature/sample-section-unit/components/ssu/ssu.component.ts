import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AuthInfoService } from 'src/app/shared/services/auth-service/authInfo.service';
import { DataStorageService } from 'src/app/shared/services/Data Fetch & Store/data-storage.service';
import { DataModel } from 'src/app/shared/models/data.model';
import { SampleSectionUnitChalanComponent } from '../../sample-section-unit-chalan/sample-section-unit-chalan.component';
import { Subscription } from 'rxjs';
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
export class SsuComponent implements OnInit, OnDestroy {
  dataItems: DataModel[] = [];
  api_key: any;
  cols: any[] = [];

  inventoryStores: InventoryStore[];

  selectedInventoryStores!: InventoryStore;
  subscription!: Subscription;
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
    this.subscription = this.authInfoService.userDetailsCalled.subscribe(
      (data) => {
        this.authInfoData = data;
      }
    );
    this.getInventriesByStoreName(this.selectedInventoryStores.code);
  }

  onChangeInventoryStore(event: any) {
    console.log(event.value);
    this.getInventriesByStoreName(event.value.code);
  }

  private getInventriesByStoreName(storeCode: string) {
    this.dataStorageService.fetchSsuData(storeCode, this.api_key).subscribe({
      next: (response: any) => {
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
      header: 'Invoice',
      width: '60%',
      height: '100%',
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
