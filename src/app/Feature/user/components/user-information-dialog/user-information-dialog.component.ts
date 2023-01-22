import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { InventoryUserService } from 'src/app/shared/services/user-service/inventory-user.service';
import { InventoryUserModel } from 'src/app/shared/models/inventory-user.model';
interface UserRoles {
  name: string;
  code: string;
}

@Component({
  selector: 'app-user-information-dialog',
  templateUrl: './user-information-dialog.component.html',
  styleUrls: ['./user-information-dialog.component.scss'],
})
export class UserInformationDialogComponent implements OnInit {
  inventoryUserForm!: FormGroup;
  editMode = false;
  api_key: any;
  userRoles: UserRoles[];
  selectedRoles!: UserRoles;
  role!: string;
  constructor(
    private inventoryUserService: InventoryUserService,
    private dialogService: DialogService,
    public config: DynamicDialogConfig
  ) {
    this.userRoles = [
      { name: 'Admin', code: 'admin' },
      { name: 'Depot', code: 'depot' },
      { name: 'Ssu', code: 'ssu' },
    ];
    this.selectedRoles = { name: 'Admin', code: 'admin' };
  }

  ngOnInit() {
    this.api_key = window.localStorage.getItem('token');

    if (this.config.data) {
      this.editMode = true;
      this.initForm(this.config.data);
    } else {
      this.initForm();
    }
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
    });
  }
  onAddUser() {
    console.log(this.inventoryUserForm.value);
    if (this.editMode) {
      this.inventoryUserService.updateUserInfo(
        this.config.data.id,
        this.inventoryUserForm.value
      );
      this.inventoryUserService
        .updateInventoryUserDatabyId(
          this.config.data.id,
          this.inventoryUserForm.value,
          this.api_key
        )
        .subscribe({
          next: (response) => {
            this.closeDialog();
          },
          error: (err) => {
            console.log(err);
            this.closeDialog();
          },
        });
    } else {
      this.inventoryUserService.addNewUser(this.inventoryUserForm.value);
      console.log(this.inventoryUserForm.value);
      this.closeDialog();
      this.inventoryUserService
        .storeInventoryUserData(this.inventoryUserForm.value, this.api_key)
        .subscribe({
          next: (response) => {
            this.closeDialog();
          },
          error: (err) => {
            console.log(err);
            this.closeDialog();
          },
        });
      this.inventoryUserForm.reset();
    }
  }
  closeDialog() {
    this.dialogService.dialogComponentRefMap.forEach((dialog) => {
      dialog.destroy();
    });
  }
}
