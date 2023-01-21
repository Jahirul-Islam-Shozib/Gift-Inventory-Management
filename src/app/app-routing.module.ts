import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Feature/not-found/not-found.component';
import { AuthGuard } from './Guards/auth.guard';
//import { RoleGuard } from './Guards/role.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inventory-dashboard',
    data: {
      roles: ['admin'],
    },
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./Feature/authentication/authentication.module').then(
        (mod) => mod.AuthenticationModule
      ),
    // canActivate: [AuthGuard],
    data: {
      roles: ['admin'],
    },
  },
  {
    path: 'inventory-dashboard',
    loadChildren: () =>
      import('./Feature/dashboard/dashboard.module').then(
        (mod) => mod.DashboardModule
      ),

    canActivate: [AuthGuard],
    data: {
      roles: ['admin'],
    },
  },
  {
    path: 'inventory',
    loadChildren: () =>
      import('./Feature/sample-section-unit/sample-section-unit.module').then(
        (mod) => mod.SampleSectionUnitModule
      ),
    canActivate: [AuthGuard],
    data: {
      roles: ['admin'],
    },
  },
  {
    path: 'inventory-budget',
    loadChildren: () =>
      import('./Feature/budget/budget.module').then((mod) => mod.BudgetModule),

    canActivate: [AuthGuard],
    data: {
      roles: ['admin'],
    },
  },
  {
    path: 'inventory-depots',
    loadChildren: () =>
      import('./Feature/depots/depots.module').then((mod) => mod.DepotsModule),

    canActivate: [AuthGuard],
    data: {
      roles: ['admin', 'depot'],
    },
  },
  {
    path: 'inventory-user',
    loadChildren: () =>
      import('./Feature/user/user.module').then((mod) => mod.UserModule),

    canActivate: [AuthGuard],
    data: {
      roles: ['admin'],
    },
  },

  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
