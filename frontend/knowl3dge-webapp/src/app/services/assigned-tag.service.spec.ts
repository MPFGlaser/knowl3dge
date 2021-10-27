import { TestBed } from '@angular/core/testing';

import { AssignedTagService } from './assigned-tag.service';

describe('AssignedTagService', () => {
  let service: AssignedTagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignedTagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
