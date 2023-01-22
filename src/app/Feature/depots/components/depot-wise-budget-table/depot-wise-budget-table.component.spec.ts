import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotWiseBudgetTableComponent } from './depot-wise-budget-table.component';

describe('DepotWiseBudgetTableComponent', () => {
  let component: DepotWiseBudgetTableComponent;
  let fixture: ComponentFixture<DepotWiseBudgetTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepotWiseBudgetTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepotWiseBudgetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
