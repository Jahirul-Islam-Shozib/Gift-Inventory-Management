import { Injectable } from '@angular/core';
import { idToken } from '@angular/fire/auth';
import { Subject } from 'rxjs';
import { DepotInfoModel } from '../shared/depotInfo.model';

@Injectable({
  providedIn: 'root',
})
export class DepotInfoService {
  depotsInfoChange = new Subject<DepotInfoModel[]>();
  constructor() {}

  public depotsInfo: DepotInfoModel[] = [
    new DepotInfoModel(
      '11111111111',
      'Sylhet',
      '3353535',
      'starkul road',
      'Zahir Islam',
      'zahir@gmail.com',
      '01676034088'
    ),

    new DepotInfoModel(
      '222222222222',
      'Sylhet',
      '3353535',
      'starkul road',
      'Zahir Islam',
      'zahir@gmail.com',
      '01676034088'
    ),

    new DepotInfoModel(
      '3333333333',
      'Sylhet',
      '3353535',
      'starkul road',
      'Zahir Islam',
      'zahir@gmail.com',
      '01676034088'
    ),
    new DepotInfoModel(
      '444444444444',
      'Sylhet',
      '3353535',
      'starkul road',
      'Zahir Islam',
      'zahir@gmail.com',
      '01676034088'
    ),
    new DepotInfoModel(
      '555555555555',
      'Sylhet',
      '3353535',
      'starkul road',
      'Zahir Islam',
      'zahir@gmail.com',
      '01676034088'
    ),
    new DepotInfoModel(
      '66666666666',
      'Sylhet',
      '3353535',
      'starkul road',
      'Zahir Islam',
      'zahir@gmail.com',
      '01676034088'
    ),
  ];

  getDepotInfo() {
    return this.depotsInfo.slice();
  }

  addNewDepot(depot: DepotInfoModel) {
    this.depotsInfo.push(depot);
    this.depotsInfoChange.next(this.depotsInfo.slice());
  }

  updateDepot(id: string, updateData: DepotInfoModel) {
    const index = this.depotsInfo.findIndex((checkItem: DepotInfoModel) => {
      return checkItem.id === id;
    });

    this.depotsInfo[index] = updateData;
    this.depotsInfoChange.next(this.depotsInfo.slice());
  }
  deleteDepot(id: string) {
    const index = this.depotsInfo.findIndex((checkItem: DepotInfoModel) => {
      return checkItem.id === id;
    });
    this.depotsInfo.splice(index, 1);
    this.depotsInfoChange.next(this.depotsInfo.slice());
  }
}
