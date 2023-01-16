import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleSectionUnitChalanComponent } from './sample-section-unit-chalan.component';

describe('SampleSectionUnitChalanComponent', () => {
  let component: SampleSectionUnitChalanComponent;
  let fixture: ComponentFixture<SampleSectionUnitChalanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleSectionUnitChalanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleSectionUnitChalanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
