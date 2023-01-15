import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { InventoryUserService } from 'src/app/Service/inventory-user.service';
import { InventoryUserModel } from 'src/app/shared/inventory-user.model';

@Component({
  selector: 'app-inventory-user-modal',
  templateUrl: './inventory-user-modal.component.html',
  styleUrls: ['./inventory-user-modal.component.scss'],
})
export class InventoryUserModalComponent implements OnInit {
  inventoryUserForm!: FormGroup;
  editMode = false;
  api_key: any;

  constructor(
    private inventoryUserService: InventoryUserService,
    public config: DynamicDialogConfig,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.api_key = window.localStorage.getItem('token');

    if (this.config.data) {
      this.editMode = true;
      this.initForm(this.config.data);
    } else {
      this.initForm();
    }

    //console.log(this.config.data);
  }

  initForm(data?: InventoryUserModel) {
    this.inventoryUserForm = new FormGroup({
      id: new FormControl(data ? data.id : null),
      role: new FormControl(data ? data.role : null, Validators.required),
      email: new FormControl(data ? data.email : null, [
        Validators.email,
        Validators.required,
      ]),
      firstName: new FormControl(
        data ? data.firstName : null,
        Validators.required
      ),
      lastName: new FormControl(
        data ? data.lastName : null,
        Validators.required
      ),
      password: new FormControl(data ? 'N/A' : null, Validators.required),
      contactNumber: new FormControl(
        data ? data.contactNumber : null,
        Validators.required
      ),
      status: new FormControl(data ? data.status : null, Validators.required),
    });
  }
  onAddUser() {
    if (this.editMode) {
      this.inventoryUserService.updateUserInfo(
        this.config.data.id,
        this.inventoryUserForm.value
      );
      this.inventoryUserService.updateInventoryUserDatabyId(
        this.config.data.id,
        this.inventoryUserForm.value,
        this.api_key
      );
    } else {
      this.inventoryUserService.addNewUser(this.inventoryUserForm.value);
      console.log(this.inventoryUserForm.value);
      this.inventoryUserService.storeInventoryUserData(
        this.inventoryUserForm.value,
        this.api_key
      );
      this.inventoryUserForm.reset();
    }
  }
}
