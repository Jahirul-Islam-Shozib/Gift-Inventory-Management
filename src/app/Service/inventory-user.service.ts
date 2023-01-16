import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject, tap } from 'rxjs';
import { InventoryUserModel } from '../shared/models/inventory-user.model';

@Injectable({
  providedIn: 'root',
})
export class InventoryUserService {
  inventoryUserChange = new Subject<InventoryUserModel[]>();
  constructor(
    private http: HttpClient,
    private ref: DynamicDialogRef,
    private dialogService: DialogService
  ) {}

  public inventoryUser: InventoryUserModel[] = [
    new InventoryUserModel(
      0,
      'AA',
      'BB',
      'AABB@gmail.com',
      '3264644',
      '01676034088',
      'dso_admin',
      'true'
    ),
  ];

  setInventoryUserStoreData(data: InventoryUserModel[]) {
    this.inventoryUser = data;
    console.log(this.inventoryUser);
    this.inventoryUserChange.next(this.inventoryUser.slice());
  }

  public getAllInventoryUser() {
    return this.inventoryUser.slice();
  }

  addNewUser(user: InventoryUserModel) {
    this.inventoryUser.push(user);
    this.inventoryUserChange.next(this.inventoryUser.slice());
  }

  updateUserInfo(id: number, updateData: InventoryUserModel) {
    const index = this.inventoryUser.findIndex(
      (checkItem: InventoryUserModel) => {
        return checkItem.id === id;
      }
    );

    this.inventoryUser[index] = updateData;
    this.inventoryUserChange.next(this.inventoryUser.slice());
  }
  deleteUser(id: number, api_key: any) {
    const finalUserData = this.getAllInventoryUser();
    const index = this.inventoryUser.findIndex(
      (checkItem: InventoryUserModel) => {
        return checkItem.id === id;
      }
    );
    this.inventoryUser.splice(index, 1);
    this.inventoryUserChange.next(this.inventoryUser.slice());

    this.http
      .put(
        `http://localhost:8080/user/disable/${id}`,
        { finalUserData },
        {
          headers: new HttpHeaders({
            Authorization: `Bearer+${api_key}`,
          }),
        }
      )
      .subscribe({
        next: (response) => {
          //   console.log();
        },
        error: (err) => {
          //this.ref.close();
          //this.dialogService.destroy();
          console.log(err);
        },
      });
  }

  storeInventoryUserData(inputUser: InventoryUserModel, api_key: any) {
    this.http
      .post('http://localhost:8080/user/create', inputUser, {
        headers: new HttpHeaders({
          Authorization: `Bearer+${api_key}`,
        }),
      })
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchAllInventoryUserData(api_key: any) {
    return this.http
      .get<InventoryUserModel[]>('http://localhost:8080/user/all', {
        headers: new HttpHeaders({
          Authorization: `Bearer+${api_key}`,
        }),
      })
      .pipe(
        tap((data) => {
          this.setInventoryUserStoreData(data);
        })
      );
  }

  updateInventoryUserDatabyId(
    updateId: number,
    updatedUserData: InventoryUserModel[],
    api_key: any
  ) {
    this.http
      .put(`http://localhost:8080/user/update/${updateId}`, updatedUserData, {
        headers: new HttpHeaders({
          Authorization: `Bearer+${api_key}`,
        }),
      })
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (err) => {
          //this.ref.close();
          //this.dialogService.destroy();
          console.log(err);
        },
      });
  }
}
