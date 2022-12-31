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
  depotItems: DepotInfoModel[] = [];
  cols: any[] = [];

  constructor(
    private depotInfoService: DepotInfoService,
    public dialogService: DialogService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.depotItems = this.depotInfoService.getDepotInfo();
    this.depotInfoService.depotsInfoChange.subscribe((items) => {
      this.depotItems = items;
    });

    this.cols = [
      { field: 'depotName', header: 'Depot Name' },
      { field: 'depotCode', header: 'Depot Code' },
      { field: 'depotAddress', header: 'Depot Location' },
      { field: 'adminName', header: 'Admin Name' },
      { field: 'adminEmail', header: 'Admin Email' },
      { field: 'adminMobile', header: 'Admin Mobile' },
    ];
  }

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
