import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DataModel } from 'src/app/shared/models/data.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient) {}

  fetchSsuData(code: string, api_key: any) {
    const ssuFilterURL: string = `${environment.API_END_POINT}/budget/for/ssu/${code}`;
    return this.http.get<DataModel[]>(ssuFilterURL, {
      headers: new HttpHeaders({
        Authorization: `Bearer+${api_key}`,
      }),
    });
  }

  fetchFilterBudgetDepot(code: string, api_key: any) {
    const depotFilterURL: string = `${environment.API_END_POINT}/budget/for/depot/${code}`;
    return this.http.get<DataModel[]>(depotFilterURL, {
      headers: new HttpHeaders({
        Authorization: `Bearer+${api_key}`,
      }),
    });
  }

  fetchAllDbData(api_key: any) {
    const dbDataURL: string = `${environment.API_END_POINT}/budget/all`;
    return this.http.get<DataModel[]>(dbDataURL, {
      headers: new HttpHeaders({
        Authorization: `Bearer+${api_key}`,
      }),
    });
  }
}
