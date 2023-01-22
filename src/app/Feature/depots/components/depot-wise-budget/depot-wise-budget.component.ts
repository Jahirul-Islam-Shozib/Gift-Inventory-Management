import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { DataStorageService } from 'src/app/shared/services/Data Fetch & Store/data-storage.service';
import { DataModel } from 'src/app/shared/models/data.model';

@Component({
  selector: 'app-depot-wise-budget',
  templateUrl: './depot-wise-budget.component.html',
  styleUrls: ['./depot-wise-budget.component.scss'],
  providers: [DialogService],
})
export class DepotWiseBudgetComponent implements OnInit {
  depotId!: string;
  api_key: any;
  dataItems!: DataModel[];
  constructor(
    private dataStorageService: DataStorageService,
    public dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.api_key = window.localStorage.getItem('token');
    this.fetchDepotId();
  }
  fetchDepotId() {
    this.dataStorageService.fetchAllDbData(this.api_key).subscribe({
      next: (response) => {
        this.dataItems = response;
      },
      error: (err) => {
        console.log(err);
        this.dataItems = [];
      },
    });
  }
}
