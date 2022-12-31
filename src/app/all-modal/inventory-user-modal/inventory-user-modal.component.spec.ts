import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryUserModalComponent } from './inventory-user-modal.component';

describe('InventoryUserModalComponent', () => {
  let component: InventoryUserModalComponent;
  let fixture: ComponentFixture<InventoryUserModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryUserModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
