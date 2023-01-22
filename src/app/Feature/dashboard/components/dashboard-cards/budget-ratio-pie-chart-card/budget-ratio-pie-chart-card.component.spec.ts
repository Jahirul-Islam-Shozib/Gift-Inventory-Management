import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetRatioPieChartCardComponent } from './budget-ratio-pie-chart-card.component';

describe('BudgetRatioPieChartCardComponent', () => {
  let component: BudgetRatioPieChartCardComponent;
  let fixture: ComponentFixture<BudgetRatioPieChartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BudgetRatioPieChartCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetRatioPieChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
