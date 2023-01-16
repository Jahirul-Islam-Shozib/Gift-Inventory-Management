import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { DataStorageService } from 'src/app/Service/Data Fetch & Store/data-storage.service';
import { DataModel } from 'src/app/shared/data.model';

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
    public dialogService: DialogService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.api_key = window.localStorage.getItem('token');

    //console.log(this.api_key);
  }

  sendDepotId() {
    console.log(this.depotId);
    this.fetchDepotId(this.depotId);
  }

  fetchDepotId(code: string) {
    this.dataStorageService.fetchDepot(code, this.api_key).subscribe({
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
