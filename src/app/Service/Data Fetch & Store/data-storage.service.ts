import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DataModel } from 'src/app/shared/models/data.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient) {}

  fetchData(code: string, api_key: any) {
    const URL: string = `${environment.API_END_POINT}/budget/for/ssu/${code}`;
    return this.http.get<DataModel[]>(URL, {
      headers: new HttpHeaders({
        Authorization: `Bearer+${api_key}`,
      }),
    });
  }

  fetchDepot(code: string, api_key: any) {
    const URL: string = `${environment.API_END_POINT}/budget/for/depot/${code}`;
    return this.http.get<DataModel[]>(URL, {
      headers: new HttpHeaders({
        Authorization: `Bearer+${api_key}`,
      }),
    });
  }

  fetchAllDbData(api_key: any) {
    return this.http.get<DataModel[]>('http://localhost:8080/budget/all', {
      headers: new HttpHeaders({
        Authorization: `Bearer+${api_key}`,
      }),
    });
  }
}
