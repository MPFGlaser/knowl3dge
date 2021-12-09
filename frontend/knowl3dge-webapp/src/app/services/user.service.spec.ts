import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { asyncData } from 'src/testing/async-observable-helpers';

import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    userService = new UserService(httpClientSpy);
  });

  it('should return user id of the given username (HttpClient called once)', (done: DoneFn) => {
    const userId: number = 123;

    httpClientSpy.get.and.returnValue(asyncData(userId));

    userService.getUserIdByUsername('test_username').subscribe((id) => {
      expect(id).toBe(userId, 'expected user id');
      done();
    }, done.fail);
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
