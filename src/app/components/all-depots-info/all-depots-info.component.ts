import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DepotInfoModalComponent } from 'src/app/all-modal/depot-info-modal/depot-info-modal.component';
import { DepotInfoService } from 'src/app/Service/depot-info.service';
import { DepotInfoModel } from 'src/app/shared/depotInfo.model';

@Component({
  selector: 'app-all-depots-info',
  templateUrl: './all-depots-info.component.html',
  styleUrls: ['./all-depots-info.component.scss'],
  providers: [DialogService, MessageService],
})
export class AllDepotsInfoComponent implements OnInit {
  depotItems!: DepotInfoModel[];
  cols: any[] = [];
  api_key: any;

  constructor(
    private depotInfoService: DepotInfoService,
    public dialogService: DialogService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.api_key = window.localStorage.getItem('token');

    // this.depotItems = this.depotInfoService.getDepotInfo();
    // this.depotInfoService.depotsInfoChange.subscribe((items) => {
    //   this.depotItems = items;
    //   console.log(items);
    // });

    this.onFetchDepotInfoData();

    // this.cols = [
    //   { field: 'depotName', header: 'Depot Name' },
    //   //{ field: 'depotCode', header: 'Depot Code' },
    //   { field: 'location', header: 'Depot Location' },

    //   { field: 'email', header: 'Admin Email' },
    //   { field: 'firstName', header: 'Admin Name' },
    //   { field: 'contactNumber', header: 'Admin Mobile' },
    // ];
  }

  onFetchDepotInfoData() {
    this.depotInfoService.fetchAllDepotsInfoData(this.api_key).subscribe({
      next: (response: any) => {
        console.log('response:: ', response);
        this.depotItems = response;
        // this.getUserDataOnDepot(this.depotItems);
      },
      error: (err: any) => {
        console.log(err);
        this.depotItems = [];
      },
    });
  }

  // onFetchDepotInfoData() {
  //   this.depotInfoService.fetchAllDepotsInfoData(this.api_key).subscribe();
  // }

  // getUserDataOnDepot(userData: any) {
  //   this.firstName = userData[0].user.firstName;
  //   console.log(userData[0].user.email);
  // }

  onEditDepot(item: DepotInfoModel) {
    this.dialogService.open(DepotInfoModalComponent, {
      data: item,
      header: 'Depot Information',
      width: '50%',
      height: '80%',
    });
  }

  onDeleteDepot(id: string) {
    this.depotInfoService.deleteDepot(id);
  }
}
