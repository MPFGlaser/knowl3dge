import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Tag } from '../interfaces/tag';

import { ArticleService } from './article.service';

describe('ArticleService', () => {
  let service: ArticleService;

  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  let tagList: Tag[] = [
    {
      id: 1,
      name: 'tag1',
    },
    {
      id: 2,
      name: 'tag2',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new ArticleService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate a tagquery', () => {
    const expected = '?tag=1&tag=2';
    const result = service.generateQueryString(tagList);
    expect(result).toBe(expected);
  });
});
