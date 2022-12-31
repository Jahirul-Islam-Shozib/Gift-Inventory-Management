import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDepotsInfoComponent } from './all-depots-info.component';

describe('AllDepotsInfoComponent', () => {
  let component: AllDepotsInfoComponent;
  let fixture: ComponentFixture<AllDepotsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDepotsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDepotsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
