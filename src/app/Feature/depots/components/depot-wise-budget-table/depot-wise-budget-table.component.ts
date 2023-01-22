import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';
import { DataModel } from 'src/app/shared/models/data.model';
interface depotId {
  name?: string;
  code?: string;
}
@Component({
  selector: 'app-depot-wise-budget-table',
  templateUrl: './depot-wise-budget-table.component.html',
  styleUrls: ['./depot-wise-budget-table.component.scss'],
})
export class DepotWiseBudgetTableComponent implements OnInit {
  depotId!: string;
  @Input() depotData!: DataModel[];

  cols: any[] = [];
  depotsId!: depotId[];
  @ViewChild('dt') table!: Table;
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.depotsId = [
      { name: 'depot01', code: 'depot01' },
      { name: 'depot02', code: 'depot02' },
      { name: 'depot03', code: 'depot03' },
      { name: 'depot04', code: 'depot04' },
      { name: 'depot05', code: 'depot05' },
      { name: 'depot06', code: 'depot06' },
      { name: 'depot07', code: 'depot07' },
      { name: 'depot08', code: 'depot08' },
      { name: 'depot09', code: 'depot09' },
      { name: 'depot10', code: 'depot10' },
      { name: 'depot11', code: 'depot11' },
      { name: 'depot12', code: 'depot12' },
    ];
  }

  // filtercheck($event: any) {
  //   console.log($event);
  // }
}
