import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { idToken } from '@angular/fire/auth';
import { Subject, tap } from 'rxjs';
import { DepotInfoModel } from '../shared/models/depotInfo.model';

@Injectable({
  providedIn: 'root',
})
export class DepotInfoService {
  depotsInfoChange = new Subject<DepotInfoModel[]>();
  constructor(private http: HttpClient) {}

  public depotsInfo: DepotInfoModel[] = [
    //new DepotInfoModel('11111111111', 'DepotSyl01', 'starkul road', 1001),
    //new DepotInfoModel('11111111111', 'DepotSyl01', 'starkul road', 1001),
  ];

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
    const index = this.depotsInfo.findIndex((checkItem: DepotInfoModel) => {
      return checkItem.id === id;
    });
    this.depotsInfo.splice(index, 1);
    this.depotsInfoChange.next(this.depotsInfo.slice());
    this.http
      .delete(
        `http://localhost:8080/depot/delete/${id}`,

        {
          headers: new HttpHeaders({
            Authorization: `Bearer+${api_key}`,
          }),
        }
      )
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

  storeIndividualDepotData(inputUser: DepotInfoModel, api_key: any) {
    this.http
      .post('http://localhost:8080/depot/add', inputUser, {
        headers: new HttpHeaders({
          Authorization: `Bearer+${api_key}`,
        }),
      })
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchAllDepotsInfoData(api_key: any) {
    return this.http
      .get<DepotInfoModel[]>('http://localhost:8080/depot/viewAll', {
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
    this.http
      .put(`http://localhost:8080/depot/edit`, updatedUserData, {
        headers: new HttpHeaders({
          Authorization: `Bearer+${api_key}`,
        }),
      })
      .subscribe((response) => {
        console.log(response);
      });
  }
}
