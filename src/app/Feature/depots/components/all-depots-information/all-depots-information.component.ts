import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { DepotInfoService } from 'src/app/Service/depot-info.service';
import { DepotInfoModel } from 'src/app/shared/models/depotInfo.model';
import { DepotInformationDialogComponent } from '../depot-information-dialog/depot-information-dialog.component';

@Component({
  selector: 'app-all-depots-information',
  templateUrl: './all-depots-information.component.html',
  styleUrls: ['./all-depots-information.component.scss'],
  providers: [DialogService, MessageService],
})
export class AllDepotsInformationComponent implements OnInit {
  depotItems!: DepotInfoModel[];
  cols: any[] = [];
  api_key: any;

  constructor(
    private depotInfoService: DepotInfoService,
    public dialogService: DialogService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.api_key = window.localStorage.getItem('token');

    this.onFetchDepotInfoData();
  }

  onFetchDepotInfoData() {
    this.depotInfoService.fetchAllDepotsInfoData(this.api_key).subscribe({
      next: (response: any) => {
        console.log('response:: ', response);
        this.depotItems = response;
      },
      error: (err: any) => {
        console.log(err);
        this.depotItems = [];
      },
    });
  }

  onEditDepot(item: DepotInfoModel) {
    this.dialogService.open(DepotInformationDialogComponent, {
      data: item,
      header: 'Depot Information',
      width: '50%',
      height: '45%',
    });
    this.onFetchDepotInfoData();
  }

  onDeleteDepot(id: number) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Delete this User Information?',
      accept: () => {
        this.depotInfoService.deleteDepot(id, this.api_key);
      },
    });
  }
}
