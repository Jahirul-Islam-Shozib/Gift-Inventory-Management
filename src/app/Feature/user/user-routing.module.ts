import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUserInformationComponent } from './components/all-user-information/all-user-information.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user-info',
  },
  {
    path: 'user-info',
    component: AllUserInformationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
