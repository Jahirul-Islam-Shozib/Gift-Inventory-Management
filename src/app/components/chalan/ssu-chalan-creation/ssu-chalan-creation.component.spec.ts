import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsuChalanCreationComponent } from './ssu-chalan-creation.component';

describe('SsuChalanCreationComponent', () => {
  let component: SsuChalanCreationComponent;
  let fixture: ComponentFixture<SsuChalanCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsuChalanCreationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsuChalanCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
