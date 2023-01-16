import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './menubar/menubar.component';
import { PrimengModule } from '../primeng.module';
import { MessageService } from 'primeng/api';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [MenubarComponent],
  imports: [CommonModule, PrimengModule, FlexLayoutModule],
  exports: [MenubarComponent, PrimengModule, FlexLayoutModule],
  providers: [MessageService],
})
export class SharedModule {}
