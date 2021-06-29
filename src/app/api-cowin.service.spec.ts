import { TestBed } from '@angular/core/testing';

import { ApiCowinService } from './api-cowin.service';

describe('ApiCowinService', () => {
  let service: ApiCowinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCowinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
