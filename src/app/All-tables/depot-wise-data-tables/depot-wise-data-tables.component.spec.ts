import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotWiseDataTablesComponent } from './depot-wise-data-tables.component';

describe('DepotWiseDataTablesComponent', () => {
  let component: DepotWiseDataTablesComponent;
  let fixture: ComponentFixture<DepotWiseDataTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepotWiseDataTablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepotWiseDataTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
