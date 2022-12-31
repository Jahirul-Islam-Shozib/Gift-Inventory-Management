import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryUserComponent } from './inventory-user.component';

describe('InventoryUserComponent', () => {
  let component: InventoryUserComponent;
  let fixture: ComponentFixture<InventoryUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
