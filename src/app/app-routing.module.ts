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
import { SsuChalanCreationComponent } from './components/chalan/ssu-chalan-creation/ssu-chalan-creation.component';
import { ForgotPassComponent } from './authentication/forgot-pass/forgot-pass.component';
import { ResetPassComponent } from './authentication/reset-pass/reset-pass.component';
import { SsuLoginAuthGuard } from './Service/ssuLogin-auth-guard';

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
    path: 'forgot-pass',
    component: ForgotPassComponent,
  },
  {
    path: 'reset-pass',
    component: ResetPassComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    //canActivate: [AuthGard],
  },
  {
    path: 'inventories',
    component: InventoryComponent,
    //canActivate: [AuthGard],
  },
  {
    path: 'depot-list',
    component: AllDepotsInfoComponent,
    //canActivate: [AuthGard],
  },
  {
    path: 'budget',
    component: BudgetComponent,
    canActivate: [AuthGard],
  },
  {
    path: 'budget-show',
    component: ShowBudgetComponent,
    // canActivate: [AuthGard],
  },
  {
    path: 'depot-budget',
    component: DepotBudgetComponent,
    // canActivate: [AuthGard],
  },
  {
    path: 'inventory-user',
    component: InventoryUserComponent,
    //canActivate: [AuthGard],
  },
  {
    path: 'ssu-chalan',
    component: SsuChalanCreationComponent,
    //canActivate: [AuthGard],
  },

  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGard],
})
export class AppRoutingModule {}
