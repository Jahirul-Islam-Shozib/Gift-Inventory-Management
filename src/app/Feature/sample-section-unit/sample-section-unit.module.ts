import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SsuComponent } from './components/ssu/ssu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SampleSectionUnitTableComponent } from './sample-section-unit-table/sample-section-unit-table.component';
import { SampleSectionUnitChalanComponent } from './sample-section-unit-chalan/sample-section-unit-chalan.component';
import { SampleSectioUnitRoutingModule } from './sample-section-unit-routing.module';

console.warn('SSU module loaded');
@NgModule({
  declarations: [
    SsuComponent,
    SampleSectionUnitTableComponent,
    SampleSectionUnitChalanComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    SampleSectioUnitRoutingModule,
  ],
})
export class SampleSectionUnitModule {}
