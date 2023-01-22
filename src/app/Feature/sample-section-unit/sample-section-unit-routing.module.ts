import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SsuComponent } from './components/ssu/ssu.component';

const routes: Routes = [
  {
    path: 'ssu',
    component: SsuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SampleSectioUnitRoutingModule {}
