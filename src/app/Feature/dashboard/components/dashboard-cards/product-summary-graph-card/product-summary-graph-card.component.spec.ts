import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSummaryGraphCardComponent } from './product-summary-graph-card.component';

describe('ProductSummaryGraphCardComponent', () => {
  let component: ProductSummaryGraphCardComponent;
  let fixture: ComponentFixture<ProductSummaryGraphCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSummaryGraphCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSummaryGraphCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
