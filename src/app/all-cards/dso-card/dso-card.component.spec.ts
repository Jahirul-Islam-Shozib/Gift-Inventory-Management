import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsoCardComponent } from './dso-card.component';

describe('DsoCardComponent', () => {
  let component: DsoCardComponent;
  let fixture: ComponentFixture<DsoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
