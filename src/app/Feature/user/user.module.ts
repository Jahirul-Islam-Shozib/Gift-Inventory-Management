import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUserInformationComponent } from './components/all-user-information/all-user-information.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserInformationDialogComponent } from './components/user-information-dialog/user-information-dialog.component';

console.warn('User module loaded');
@NgModule({
  declarations: [AllUserInformationComponent, UserInformationDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    UserRoutingModule,
    ReactiveFormsModule,
  ],
})
export class UserModule {}
