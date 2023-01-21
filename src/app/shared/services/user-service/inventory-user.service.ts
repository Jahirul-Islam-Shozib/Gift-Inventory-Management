import { AnimationQueryMetadata } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InventoryUserModel } from '../../models/inventory-user.model';

@Injectable({
  providedIn: 'root',
})
export class InventoryUserService {
  inventoryUserChange = new Subject<InventoryUserModel[]>();
  constructor(private http: HttpClient) {}

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
  banUser(id: number, api_key: any) {
    const userDeleteURL: string = `${environment.API_END_POINT}/user/disable/${id}`;
    const finalUserData = this.getAllInventoryUser();
    this.http
      .put(
        userDeleteURL,
        { finalUserData },
        {
          headers: new HttpHeaders({
            Authorization: `Bearer+${api_key}`,
          }),
        }
      )
      .subscribe({
        next: (response) => {
          //   console.log(response);
        },
        error: (err) => {
          //console.log(err);
        },
      });
  }

  storeInventoryUserData(
    inputUser: InventoryUserModel,
    api_key: any
  ): Observable<any> {
    const userCreateURL: string = `${environment.API_END_POINT}/user/create`;
    return this.http.post(userCreateURL, inputUser, {
      headers: new HttpHeaders({
        Authorization: `Bearer+${api_key}`,
      }),
    });
  }

  fetchAllInventoryUserData(api_key: any) {
    const usersInfoURL: string = `${environment.API_END_POINT}/user/all`;
    return this.http
      .get<InventoryUserModel[]>(usersInfoURL, {
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
  ): Observable<any> {
    const updateUserURL: string = `${environment.API_END_POINT}/user/update/${updateId}`;
    return this.http.put(updateUserURL, updatedUserData, {
      headers: new HttpHeaders({
        Authorization: `Bearer+${api_key}`,
      }),
    });
  }
}
