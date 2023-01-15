import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
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
    this.dialogService.open(DepotInfoModalComponent, {
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
