import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullBudgetTableComponent } from './full-budget-table.component';

describe('FullBudgetTableComponent', () => {
  let component: FullBudgetTableComponent;
  let fixture: ComponentFixture<FullBudgetTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullBudgetTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullBudgetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
