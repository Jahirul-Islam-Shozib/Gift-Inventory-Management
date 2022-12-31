import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotBudgetComponent } from './depot-budget.component';

describe('DepotBudgetComponent', () => {
  let component: DepotBudgetComponent;
  let fixture: ComponentFixture<DepotBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepotBudgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepotBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
