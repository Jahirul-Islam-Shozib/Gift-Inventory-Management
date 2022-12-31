import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DataModel } from 'src/app/shared/data.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient) {}

  fetchData(code: string) {
    const URL: string = `${environment.API_END_POINT}/inventory/budget/for/${code}`;
    return this.http.get<DataModel[]>(URL);
  }
}
