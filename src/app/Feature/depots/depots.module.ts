import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllDepotsInformationComponent } from './components/all-depots-information/all-depots-information.component';
import { DepotWiseBudgetComponent } from './components/depot-wise-budget/depot-wise-budget.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DepotWiseBudgetTableComponent } from './components/depot-wise-budget-table/depot-wise-budget-table.component';
import { DepotsRoutingModule } from './depots-routing.module';
import { DepotInformationDialogComponent } from './components/depot-information-dialog/depot-information-dialog.component';

console.warn('Depots module loaded');
@NgModule({
  declarations: [
    AllDepotsInformationComponent,
    DepotWiseBudgetComponent,
    DepotWiseBudgetTableComponent,
    DepotInformationDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    DepotsRoutingModule,
    ReactiveFormsModule,
  ],
})
export class DepotsModule {}
