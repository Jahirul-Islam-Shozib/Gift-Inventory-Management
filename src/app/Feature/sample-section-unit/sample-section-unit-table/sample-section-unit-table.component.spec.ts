import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleSectionUnitTableComponent } from './sample-section-unit-table.component';

describe('SampleSectionUnitTableComponent', () => {
  let component: SampleSectionUnitTableComponent;
  let fixture: ComponentFixture<SampleSectionUnitTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleSectionUnitTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleSectionUnitTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
