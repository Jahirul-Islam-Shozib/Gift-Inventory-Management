import { TestBed } from '@angular/core/testing';

import { InventoryUserService } from './inventory-user.service';

describe('InventoryUserService', () => {
  let service: InventoryUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
