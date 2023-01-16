import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadBudgetComponent } from './components/upload-budget/upload-budget.component';
import { ShowFullBudgetByFilterComponent } from './components/show-full-budget-by-filter/show-full-budget-by-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { MessageService } from 'primeng/api';
import { BudgetRoutingModule } from './budget-routing.module';
import { FullBudgetTableComponent } from './components/full-budget-table/full-budget-table.component';

console.warn('Budget module loaded');
@NgModule({
  declarations: [
    UploadBudgetComponent,
    ShowFullBudgetByFilterComponent,
    FullBudgetTableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BudgetRoutingModule,
  ],
  providers: [MessageService],
})
export class BudgetModule {}
