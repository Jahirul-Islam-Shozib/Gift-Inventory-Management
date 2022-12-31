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
  constructor(
    private inventoryUserService: InventoryUserService,
    public dialogService: DialogService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.inventoryUser = this.inventoryUserService.getAllInventoryUser();
    this.inventoryUserService.inventoryUserChange.subscribe((items) => {
      this.inventoryUser = items;
    });

    this.cols = [
      { field: 'userId', header: 'User Id' },
      { field: 'firstName', header: 'FirstName' },
      { field: 'lastName', header: 'LastName' },
      { field: 'email', header: 'Email' },
      { field: 'password', header: 'Password' },
      { field: 'role', header: 'User Role' },
      { field: 'status', header: 'User status' },
      { field: 'workPlace', header: 'Work Zone' },
    ];
    this.onFetchUserData();
  }

  onFetchUserData() {
    this.inventoryUserService.fetchAllInventoryUserData().subscribe();
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
