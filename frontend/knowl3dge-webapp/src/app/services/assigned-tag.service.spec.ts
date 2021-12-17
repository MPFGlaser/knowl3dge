import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AssignedTagService } from './assigned-tag.service';

describe('AssignedTagService', () => {
  let service: AssignedTagService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({});
    service = new AssignedTagService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
