import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { InventoryUserModalComponent } from 'src/app/all-modal/inventory-user-modal/inventory-user-modal.component';
import { InventoryUserService } from 'src/app/Service/inventory-user.service';
import { InventoryUserModel } from 'src/app/shared/inventory-user.model';

@Component({
  selector: 'app-inventory-user',
  templateUrl: './inventory-user.component.html',
  styleUrls: ['./inventory-user.component.scss'],
  providers: [DialogService, MessageService],
})
export class InventoryUserComponent implements OnInit {
  inventoryUser!: InventoryUserModel[];
  cols: any[] = [];
  api_key: any;

  constructor(
    private inventoryUserService: InventoryUserService,
    public dialogService: DialogService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.api_key = window.localStorage.getItem('token');

    //console.log(this.api_key);
    this.inventoryUser = this.inventoryUserService.getAllInventoryUser();
    this.inventoryUserService.inventoryUserChange.subscribe((items) => {
      this.inventoryUser = items;
    });

    this.onFetchUserData();
    this.cols = [
      { field: 'id', header: 'User Id' },
      { field: 'firstName', header: 'FirstName' },
      { field: 'lastName', header: 'LastName' },
      { field: 'email', header: 'Email' },
      // { field: 'password', header: 'Password' },
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
    this.dialogService.open(InventoryUserModalComponent, {
      data: item,
      header: 'Inventory User Information',
      width: '50%',
      height: '80%',
    });
  }

  onDeleteUser(id: number) {
    this.inventoryUserService.deleteUser(id);
  }
}
