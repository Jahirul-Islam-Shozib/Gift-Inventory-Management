import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFullBudgetByFilterComponent } from './show-full-budget-by-filter.component';

describe('ShowFullBudgetByFilterComponent', () => {
  let component: ShowFullBudgetByFilterComponent;
  let fixture: ComponentFixture<ShowFullBudgetByFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFullBudgetByFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowFullBudgetByFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
