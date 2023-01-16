import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUserInformationComponent } from './components/all-user-information/all-user-information.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';

console.warn('User module loaded');
@NgModule({
  declarations: [AllUserInformationComponent],
  imports: [CommonModule, SharedModule, FormsModule, UserRoutingModule],
})
export class UserModule {}
