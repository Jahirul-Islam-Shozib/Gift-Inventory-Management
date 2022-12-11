import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGard } from './authentication/auth-gard';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
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
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGard],
})
export class AppRoutingModule {}
