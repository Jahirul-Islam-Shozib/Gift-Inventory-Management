import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldOfficerStatusCardComponent } from './field-officer-status-card.component';

describe('FieldOfficerStatusCardComponent', () => {
  let component: FieldOfficerStatusCardComponent;
  let fixture: ComponentFixture<FieldOfficerStatusCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldOfficerStatusCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldOfficerStatusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
