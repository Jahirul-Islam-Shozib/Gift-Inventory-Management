import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/Service/Data Fetch & Store/data-storage.service';
import { DataModel } from 'src/app/shared/data.model';

@Component({
  selector: 'app-depot-budget',
  templateUrl: './depot-budget.component.html',
  styleUrls: ['./depot-budget.component.scss'],
})
export class DepotBudgetComponent implements OnInit {
  depotId!: string;
  dataItems: DataModel[] = [];
  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit(): void {}
  sendDepotId() {
    console.log(this.depotId);
    this.fetchDepotId(this.depotId);
  }

  fetchDepotId(code: string) {
    this.dataStorageService.fetchDepot(code).subscribe({
      next: (response: any) => {
        console.log('response:: ', response);
        this.dataItems = response;
      },
      error: (err: any) => {
        console.log(err);
        this.dataItems = [];
      },
    });
  }
}
