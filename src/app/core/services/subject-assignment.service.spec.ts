import { TestBed } from '@angular/core/testing';

import { SubjectAssignmentService } from './subject-assignment.service';

describe('SubjectAssignmentService', () => {
  let service: SubjectAssignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectAssignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
