import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { InventoryUserService } from 'src/app/shared/services/user-service/inventory-user.service';
import { InventoryUserModel } from 'src/app/shared/models/inventory-user.model';
import { UserInformationDialogComponent } from '../user-information-dialog/user-information-dialog.component';
import { Subscription } from 'rxjs';
interface InventoryStore {
  name: string;
  code: string;
}
@Component({
  selector: 'app-all-user-information',
  templateUrl: './all-user-information.component.html',
  styleUrls: ['./all-user-information.component.scss'],
  providers: [DialogService, MessageService],
})
export class AllUserInformationComponent implements OnInit, OnDestroy {
  inventoryUser!: InventoryUserModel[];
  subscription!: Subscription;
  cols: any[] = [];
  api_key: any;

  constructor(
    private inventoryUserService: InventoryUserService,
    public dialogService: DialogService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.api_key = window.localStorage.getItem('token');
    this.inventoryUser = this.inventoryUserService.getAllInventoryUser();
    this.subscription = this.inventoryUserService.inventoryUserChange.subscribe(
      (items) => {
        this.inventoryUser = items;
      }
    );
    this.onFetchUserData();

    this.cols = [
      { field: 'id', header: 'User Id' },
      { field: 'firstName', header: 'FirstName' },
      { field: 'lastName', header: 'LastName' },
      { field: 'email', header: 'Email' },
      { field: 'contactNumber', header: 'Contact Number' },
      { field: 'role', header: 'User Role' },
      { field: 'status', header: 'User status' },
    ];
  }

  onFetchUserData() {
    this.inventoryUserService
      .fetchAllInventoryUserData(this.api_key)
      .subscribe();
  }
  onEditUser(item: InventoryUserModel) {
    this.dialogService.open(UserInformationDialogComponent, {
      data: item,
      header: 'Inventory User Information',
      width: '50%',
      height: '65%',
    });
    this.onFetchUserData();
  }

  onBanUser(id: number) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Deactivated this User?',
      accept: () => {
        this.inventoryUserService.banUser(id, this.api_key);
      },
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
