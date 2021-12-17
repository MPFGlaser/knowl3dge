import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TagService } from './tag.service';

describe('TagService', () => {
  let service: TagService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({});
    service = new TagService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
