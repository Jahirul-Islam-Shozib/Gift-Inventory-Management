import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotWiseBudgetComponent } from './depot-wise-budget.component';

describe('DepotWiseBudgetComponent', () => {
  let component: DepotWiseBudgetComponent;
  let fixture: ComponentFixture<DepotWiseBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepotWiseBudgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepotWiseBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
