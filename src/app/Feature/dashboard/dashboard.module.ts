import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardViewComponent } from './components/dashboard-view/dashboard-view.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { SharedModule } from 'src/app/shared/shared.module';

console.warn('Dashboard module loaded');
@NgModule({
  declarations: [DashboardViewComponent, DashboardCardComponent],
  imports: [CommonModule, SharedModule, DashboardRoutingModule],
})
export class DashboardModule {}
