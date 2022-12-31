import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { InventoryUserModel } from '../shared/inventory-user.model';

@Injectable({
  providedIn: 'root',
})
export class InventoryUserService {
  inventoryUserChange = new Subject<InventoryUserModel[]>();
  constructor(private http: HttpClient) {}

  public inventoryUser: InventoryUserModel[] = [
    new InventoryUserModel(
      2562626,
      'Zahir',
      'Islam',
      'zahir@gmail.com',
      '01234@34',
      'DSA12',
      'Active',
      'Dhaka Tejgaon'
    ),
    new InventoryUserModel(
      2319,
      'Zahir',
      'Islam',
      'zahir@gmail.com',
      '01234@34',
      'DSA12',
      'Active',
      'Dhaka Tejgaon'
    ),
    new InventoryUserModel(
      4545,
      'Zahir',
      'Islam',
      'zahir@gmail.com',
      '01234@34',
      'DSA12',
      'Active',
      'Dhaka Tejgaon'
    ),
  ];

  public getAllInventoryUser() {
    return this.inventoryUser.slice();
  }

  setInventoryUserStoreData(data: InventoryUserModel[]) {
    this.inventoryUser = data;
    this.inventoryUserChange.next(this.inventoryUser.slice());
  }

  addNewUser(user: InventoryUserModel) {
    this.inventoryUser.push(user);
    this.inventoryUserChange.next(this.inventoryUser.slice());
  }

  updateUserInfo(id: number, updateData: InventoryUserModel) {
    const index = this.inventoryUser.findIndex(
      (checkItem: InventoryUserModel) => {
        return checkItem.userId === id;
      }
    );

    this.inventoryUser[index] = updateData;
    this.inventoryUserChange.next(this.inventoryUser.slice());
  }
  deleteUser(id: number) {
    const index = this.inventoryUser.findIndex(
      (checkItem: InventoryUserModel) => {
        return checkItem.userId === id;
      }
    );
    this.inventoryUser.splice(index, 1);
    this.inventoryUserChange.next(this.inventoryUser.slice());
  }

  storeInventoryUserData(inputUser: InventoryUserModel) {
    this.http
      .post('http://localhost:8080/inventory/user/signup', inputUser)
      .subscribe((response) => {
        //console.log(this.response);
      });
  }

  fetchAllInventoryUserData() {
    return this.http
      .get<InventoryUserModel[]>('http://localhost:8080/inventory/user/all')
      .pipe(
        tap((data) => {
          this.setInventoryUserStoreData(data);
        })
      );
  }
}
