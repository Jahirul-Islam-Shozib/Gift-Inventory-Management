import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/Service/Data Fetch & Store/data-storage.service';
import { DataModel } from 'src/app/shared/data.model';
interface BudgetOfSpecificMonth {
  name: string;
  code: string;
}
@Component({
  selector: 'app-show-budget',
  templateUrl: './show-budget.component.html',
  styleUrls: ['./show-budget.component.scss'],
})
export class ShowBudgetComponent implements OnInit {
  api_key: any;
  allDbData!: DataModel[];
  budgetMonths: BudgetOfSpecificMonth[];
  selectedBudgetOfSpecificMonth!: BudgetOfSpecificMonth;
  constructor(
    private http: HttpClient,
    private dataStorageService: DataStorageService
  ) {
    this.budgetMonths = [
      { name: 'January', code: 'january' },
      { name: 'February', code: 'february' },
      { name: 'March', code: 'march' },
      { name: 'April', code: 'april' },
      { name: 'May', code: 'may' },
      { name: 'June', code: 'june' },
      { name: 'July', code: 'july' },
      { name: 'August', code: 'august' },
      { name: 'September', code: 'september' },
      { name: 'October', code: 'october' },
      { name: 'November', code: 'november' },
      { name: 'December', code: 'december' },
    ];
    this.selectedBudgetOfSpecificMonth = { name: 'January', code: 'january' };
  }

  ngOnInit(): void {
    this.api_key = window.localStorage.getItem('token');

    this.showFullBudget();
  }
  onChangeBudgetMonth(event: any) {
    console.log(event.value);
  }

  showFullBudget() {
    this.dataStorageService?.fetchAllDbData(this.api_key).subscribe({
      next: (response) => {
        this.allDbData = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
