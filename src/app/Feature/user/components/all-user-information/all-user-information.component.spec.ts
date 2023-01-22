import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUserInformationComponent } from './all-user-information.component';

describe('AllUserInformationComponent', () => {
  let component: AllUserInformationComponent;
  let fixture: ComponentFixture<AllUserInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUserInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllUserInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
