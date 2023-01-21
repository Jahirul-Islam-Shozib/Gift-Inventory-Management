import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { DepotInfoService } from 'src/app/shared/services/depot-service/depot-info.service';
import { DepotInfoModel } from 'src/app/shared/models/depotInfo.model';

@Component({
  selector: 'app-depot-information-dialog',
  templateUrl: './depot-information-dialog.component.html',
  styleUrls: ['./depot-information-dialog.component.scss'],
  providers: [MessageService],
})
export class DepotInformationDialogComponent implements OnInit {
  depotInfoForm!: FormGroup;
  editMode = false;
  api_key: any;
  displayDepot: boolean = true;

  constructor(
    private depotInfoService: DepotInfoService,
    public config: DynamicDialogConfig,
    private messageService: MessageService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.displayDepot = true;
    this.api_key = window.localStorage.getItem('token');
    if (this.config.data) {
      this.editMode = true;
      this.initForm(this.config.data);
    } else {
      this.initForm();
    }
    //console.log(this.config.data);
  }

  initForm(data?: DepotInfoModel) {
    this.depotInfoForm = new FormGroup({
      id: new FormControl(data ? data.id : null),
      depotName: new FormControl(data ? data.depotName : null, [
        Validators.required,
      ]),

      location: new FormControl(data ? data.location : null, [
        Validators.required,
      ]),
      userId: new FormControl(data ? data.userId : '', [Validators.required]),
    });
  }
  onAddDepot() {
    if (this.editMode) {
      this.depotInfoService.updateDepot(
        this.config.data.id,
        this.depotInfoForm.value
      );
      this.depotInfoService.updateIndividualDepotInfobyId(
        this.depotInfoForm.value,
        this.api_key
      );
      this.depotInfoForm.reset();
      this.closeDialog();
    } else {
      this.depotInfoService.addNewDepot(this.depotInfoForm.value);
      this.depotInfoService.storeIndividualDepotData(
        this.depotInfoForm.value,
        this.api_key
      );
      this.depotInfoForm.reset();
      this.closeDialog();
    }
  }
  closeDialog() {
    this.dialogService.dialogComponentRefMap.forEach((dialog) => {
      dialog.destroy();
    });
  }
}
