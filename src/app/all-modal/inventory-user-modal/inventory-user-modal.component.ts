import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { InventoryUserService } from 'src/app/Service/inventory-user.service';
import { InventoryUserModel } from 'src/app/shared/inventory-user.model';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inventory-user-modal',
  templateUrl: './inventory-user-modal.component.html',
  styleUrls: ['./inventory-user-modal.component.scss'],
})
export class InventoryUserModalComponent implements OnInit {
  inventoryUserForm!: FormGroup;
  editMode = false;

  constructor(
    private inventoryUserService: InventoryUserService,
    private http: HttpClient,
    private dialogService: DialogService,
    public config: DynamicDialogConfig,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
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

  initForm(data?: InventoryUserModel) {
    this.inventoryUserForm = new FormGroup({
      userId: new FormControl(data ? data.userId : null, Validators.required),
      role: new FormControl(data ? data.role : null, Validators.required),
      email: new FormControl(data ? data.email : null, Validators.required),
      firstName: new FormControl(
        data ? data.firstName : null,
        Validators.required
      ),
      lastName: new FormControl(
        data ? data.lastName : null,
        Validators.required
      ),
      password: new FormControl(
        data ? data.password : null,
        Validators.required
      ),
      status: new FormControl(data ? data.status : null, Validators.required),
      workPlace: new FormControl(
        data ? data.workPlace : null,
        Validators.required
      ),
    });
  }
  onAddUser() {
    if (this.editMode) {
      this.inventoryUserService.updateUserInfo(
        this.config.data.userId,
        this.inventoryUserForm.value
      );

      this.inventoryUserForm.reset();
    } else {
      this.inventoryUserService.addNewUser(this.inventoryUserForm.value);
      console.log(this.inventoryUserForm.value);
      this.inventoryUserService.storeInventoryUserData(
        this.inventoryUserForm.value
      );
      this.inventoryUserForm.reset();
    }
  }


}
