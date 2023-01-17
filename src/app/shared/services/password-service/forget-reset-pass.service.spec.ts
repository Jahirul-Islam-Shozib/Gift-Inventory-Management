import { TestBed } from '@angular/core/testing';

import { ForgetResetPassService } from './forget-reset-pass.service';

describe('ForgetResetPassService', () => {
  let service: ForgetResetPassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgetResetPassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
