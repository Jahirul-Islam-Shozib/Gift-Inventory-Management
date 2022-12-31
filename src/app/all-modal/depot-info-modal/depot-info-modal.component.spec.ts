import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotInfoModalComponent } from './depot-info-modal.component';

describe('DepotInfoModalComponent', () => {
  let component: DepotInfoModalComponent;
  let fixture: ComponentFixture<DepotInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepotInfoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepotInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
