import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGard } from './Guards/auth-gard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./Feature/authentication/authentication.module').then(
        (mod) => mod.AuthenticationModule
      ),
    canActivate: [AuthGard],
  },
  {
    path: 'inventory-dashboard',
    loadChildren: () =>
      import('./Feature/dashboard/dashboard.module').then(
        (mod) => mod.DashboardModule
      ),
    canActivate: [AuthGard],
  },
  {
    path: 'inventory',
    loadChildren: () =>
      import('./Feature/sample-section-unit/sample-section-unit.module').then(
        (mod) => mod.SampleSectionUnitModule
      ),
    canActivate: [AuthGard],
  },
  {
    path: 'inventory-budget',
    loadChildren: () =>
      import('./Feature/budget/budget.module').then((mod) => mod.BudgetModule),
    canActivate: [AuthGard],
  },
  {
    path: 'inventory-depots',
    loadChildren: () =>
      import('./Feature/depots/depots.module').then((mod) => mod.DepotsModule),
    canActivate: [AuthGard],
  },
  {
    path: 'inventory-user',
    loadChildren: () =>
      import('./Feature/user/user.module').then((mod) => mod.UserModule),
    canActivate: [AuthGard],
  },

  {
    path: '**',
    loadChildren: () =>
      import('./Feature/authentication/authentication.module').then(
        (mod) => mod.AuthenticationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGard],
})
export class AppRoutingModule {}
