import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDepotsInformationComponent } from './all-depots-information.component';

describe('AllDepotsInformationComponent', () => {
  let component: AllDepotsInformationComponent;
  let fixture: ComponentFixture<AllDepotsInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDepotsInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDepotsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
