import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { idToken } from '@angular/fire/auth';
import { Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DepotInfoModel } from '../../models/depotInfo.model';

@Injectable({
  providedIn: 'root',
})
export class DepotInfoService {
  depotsInfoChange = new Subject<DepotInfoModel[]>();
  constructor(private http: HttpClient) {}

  public depotsInfo: DepotInfoModel[] = [];

  setAllDepotsInfo(data: DepotInfoModel[]) {
    this.depotsInfo = data;
    console.log(this.depotsInfo);
    this.depotsInfoChange.next(this.depotsInfo.slice());
  }
  getDepotInfo() {
    return this.depotsInfo.slice();
  }

  addNewDepot(depot: DepotInfoModel) {
    this.depotsInfo.push(depot);
    this.depotsInfoChange.next(this.depotsInfo.slice());
  }

  updateDepot(id: number, updateData: DepotInfoModel) {
    const index = this.depotsInfo.findIndex((checkItem: DepotInfoModel) => {
      return checkItem.id === id;
    });

    this.depotsInfo[index] = updateData;
    this.depotsInfoChange.next(this.depotsInfo.slice());
  }
  deleteDepot(id: number, api_key: any) {
    const depotDeleteURL: string = `${environment.API_END_POINT}/depot/delete/${id}`;
    const index = this.depotsInfo.findIndex((checkItem: DepotInfoModel) => {
      return checkItem.id === id;
    });
    this.depotsInfo.splice(index, 1);
    this.depotsInfoChange.next(this.depotsInfo.slice());
    this.http
      .delete(depotDeleteURL, {
        headers: new HttpHeaders({
          Authorization: `Bearer+${api_key}`,
        }),
      })
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  storeIndividualDepotData(inputUser: DepotInfoModel, api_key: any) {
    const depotCreateURL: string = `${environment.API_END_POINT}/depot/add`;
    this.http
      .post(depotCreateURL, inputUser, {
        headers: new HttpHeaders({
          Authorization: `Bearer+${api_key}`,
        }),
      })
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchAllDepotsInfoData(api_key: any) {
    const depotsInfoURL: string = `${environment.API_END_POINT}/depot/viewAll`;
    return this.http
      .get<DepotInfoModel[]>(depotsInfoURL, {
        headers: new HttpHeaders({
          Authorization: `Bearer+${api_key}`,
        }),
      })
      .pipe(
        tap((data) => {
          this.setAllDepotsInfo(data);
        })
      );
  }

  updateIndividualDepotInfobyId(
    updatedUserData: DepotInfoModel[],
    api_key: any
  ) {
    const depotInfoUpdateURL: string = `${environment.API_END_POINT}/depot/edit`;
    this.http
      .put(depotInfoUpdateURL, updatedUserData, {
        headers: new HttpHeaders({
          Authorization: `Bearer+${api_key}`,
        }),
      })
      .subscribe((response) => {
        console.log(response);
      });
  }
}
