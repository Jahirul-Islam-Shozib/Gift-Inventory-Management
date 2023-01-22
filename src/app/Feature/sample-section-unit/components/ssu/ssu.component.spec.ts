import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsuComponent } from './ssu.component';

describe('SsuComponent', () => {
  let component: SsuComponent;
  let fixture: ComponentFixture<SsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
