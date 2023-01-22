import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotInformationDialogComponent } from './depot-information-dialog.component';

describe('DepotInformationDialogComponent', () => {
  let component: DepotInformationDialogComponent;
  let fixture: ComponentFixture<DepotInformationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepotInformationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepotInformationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
