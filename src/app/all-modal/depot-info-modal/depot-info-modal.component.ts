import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { DepotInfoService } from 'src/app/Service/depot-info.service';
import { DepotInfoModel } from 'src/app/shared/depotInfo.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-depot-info-modal',
  templateUrl: './depot-info-modal.component.html',
  styleUrls: ['./depot-info-modal.component.scss'],
  providers: [MessageService],
})
export class DepotInfoModalComponent implements OnInit {
  depotInfoForm!: FormGroup;
  editMode = false;
  api_key: any;

  constructor(
    private depotInfoService: DepotInfoService,
    private dialogService: DialogService,
    public config: DynamicDialogConfig,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.api_key = window.localStorage.getItem('token');
    if (this.config.data) {
      this.editMode = true;
      this.initForm(this.config.data);
    } else {
      //   let data = new DepotInfoModel();
      //   this.initForm(data);
      this.initForm();
    }

    //console.log(this.config.data);
  }

  initForm(data?: DepotInfoModel) {
    this.depotInfoForm = new FormGroup({
      id: new FormControl(data ? data.id : null),
      depotName: new FormControl(
        data ? data.depotName : null,
        Validators.required
      ),
      // depotCode: new FormControl(
      //   data ? data.depotCode : null,
      //   Validators.required
      // ),
      location: new FormControl(
        data ? data.location : null,
        Validators.required
      ),
      user_id: new FormControl(data ? data.user_id : null),
      // depotAddress: new FormControl(
      //   data ? data.depotAddress : null,
      //   Validators.required
      // ),
      // adminName: new FormControl(
      //   data ? data.adminName : null,
      //   Validators.required
      // ),
      // adminEmail: new FormControl(
      //   data ? data.adminEmail : null,
      //   Validators.required
      // ),
      // adminMobile: new FormControl(
      //   data ? data.adminMobile : null,
      //   Validators.required
      // ),
    });
  }
  onAddDepot() {
    console.log(this.depotInfoForm.value);
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
    } else {
      this.depotInfoService.addNewDepot(this.depotInfoForm.value);
      this.depotInfoService.storeIndividualDepotData(
        this.depotInfoForm.value,
        this.api_key
      );
      this.depotInfoForm.reset();
    }
    // this.router.navigate(['/depot-list']);
  }
}
