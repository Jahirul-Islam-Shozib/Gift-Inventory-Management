import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDepotsInformationComponent } from './components/all-depots-information/all-depots-information.component';

import { DepotWiseBudgetComponent } from './components/depot-wise-budget/depot-wise-budget.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'depot-wise-budget',
  },
  {
    path: 'depot-info',
    component: AllDepotsInformationComponent,
  },
  {
    path: 'depot-wise-budget',
    component: DepotWiseBudgetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepotsRoutingModule {}
