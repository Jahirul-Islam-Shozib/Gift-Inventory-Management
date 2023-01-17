import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/services/Data Fetch & Store/data-storage.service';
import { DataModel } from 'src/app/shared/models/data.model';
interface BudgetOfSpecificMonth {
  name: string;
  code: string;
}
@Component({
  selector: 'app-show-full-budget-by-filter',
  templateUrl: './show-full-budget-by-filter.component.html',
  styleUrls: ['./show-full-budget-by-filter.component.scss'],
})
export class ShowFullBudgetByFilterComponent implements OnInit {
  api_key: any;
  allDbData!: DataModel[];
  budgetMonths: BudgetOfSpecificMonth[];
  selectedBudgetOfSpecificMonth!: BudgetOfSpecificMonth;
  constructor(private dataStorageService: DataStorageService) {
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
    //console.log(event.value);
  }

  showFullBudget() {
    this.dataStorageService.fetchAllDbData(this.api_key).subscribe({
      next: (response) => {
        this.allDbData = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
