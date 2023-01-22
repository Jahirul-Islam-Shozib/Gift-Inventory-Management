import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowFullBudgetByFilterComponent } from './components/show-full-budget-by-filter/show-full-budget-by-filter.component';
import { UploadBudgetComponent } from './components/upload-budget/upload-budget.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'upload-budget',
  },
  {
    path: 'upload-budget',
    component: UploadBudgetComponent,
  },
  {
    path: 'show-full-budget',
    component: ShowFullBudgetByFilterComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudgetRoutingModule {}
