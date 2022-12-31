import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGard } from './authentication/auth-gard';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { AllDepotsInfoComponent } from './components/all-depots-info/all-depots-info.component';
import { BudgetComponent } from './components/budget/budget.component';
import { ShowBudgetComponent } from './components/budget/show-budget/show-budget.component';
import { InventoryComponent } from './components/Inventory/inventory.component';
import { HomeComponent } from './components/home/home.component';
import { DepotBudgetComponent } from './DepotManagement/depot-budget/depot-budget.component';
import { InventoryUserComponent } from './components/inventory-user/inventory-user.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: ' ',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGard],
  },
  {
    path: 'inventories',
    component: InventoryComponent,
  },
  {
    path: 'depot-list',
    component: AllDepotsInfoComponent,
  },
  {
    path: 'budget',
    component: BudgetComponent,
  },
  {
    path: 'budget-show',
    component: ShowBudgetComponent,
  },
  {
    path: 'depot-budget',
    component: DepotBudgetComponent,
  },
  {
    path: 'inventory-user',
    component: InventoryUserComponent,
  },

  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGard],
})
export class AppRoutingModule {}
