import { TestBed } from '@angular/core/testing';

import { SoftwareRequestService } from './software-request.service';

describe('SoftwareRequestService', () => {
  let service: SoftwareRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftwareRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
