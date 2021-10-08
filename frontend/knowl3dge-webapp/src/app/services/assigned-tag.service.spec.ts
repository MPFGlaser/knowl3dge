import { TestBed } from '@angular/core/testing';

import { AssignedTagService } from './assigned-tag.service';

describe('AssignedTagService', () => {
  let service: AssignedTagServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignedTagServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
