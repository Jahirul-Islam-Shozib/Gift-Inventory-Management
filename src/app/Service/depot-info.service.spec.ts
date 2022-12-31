import { TestBed } from '@angular/core/testing';

import { DepotInfoService } from './depot-info.service';

describe('DepotInfoService', () => {
  let service: DepotInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepotInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
