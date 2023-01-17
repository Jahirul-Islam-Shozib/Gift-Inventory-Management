import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSummaryCardComponent } from './product-summary-card.component';

describe('ProductSummaryCardComponent', () => {
  let component: ProductSummaryCardComponent;
  let fixture: ComponentFixture<ProductSummaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSummaryCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
