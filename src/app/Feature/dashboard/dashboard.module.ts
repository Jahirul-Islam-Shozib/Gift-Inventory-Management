import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardViewComponent } from './components/dashboard-view/dashboard-view.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardCardComponent } from './components/dashboard-cards/dashboard-card/dashboard-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductSummaryCardComponent } from './components/dashboard-cards/product-summary-card/product-summary-card.component';
import { FieldOfficerStatusCardComponent } from './components/dashboard-cards/field-officer-status-card/field-officer-status-card.component';
import { ProductSummaryGraphCardComponent } from './components/dashboard-cards/product-summary-graph-card/product-summary-graph-card.component';
import { BudgetRatioPieChartCardComponent } from './components/dashboard-cards/budget-ratio-pie-chart-card/budget-ratio-pie-chart-card.component';
@NgModule({
  declarations: [
    DashboardViewComponent,
    DashboardCardComponent,
    ProductSummaryCardComponent,
    FieldOfficerStatusCardComponent,
    ProductSummaryGraphCardComponent,
    BudgetRatioPieChartCardComponent,
  ],
  imports: [CommonModule, SharedModule, DashboardRoutingModule],
})
export class DashboardModule {}
