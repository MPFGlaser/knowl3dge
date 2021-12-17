import { asyncData } from 'src/testing/async-observable-helpers';
import { UserService } from './user.service';
import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { UserCredentials } from '../interfaces/userCredentials';

describe('AuthService', () => {
  let authService: AuthService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let userServiceSpy: jasmine.SpyObj<UserService>;
  let userId: number;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    userServiceSpy = jasmine.createSpyObj('UserService', [
      'getUserIdByUsername',
      'updateLocalStorage',
      'emptyLocalStorage',
    ]);

    userServiceSpy.getUserIdByUsername.and.returnValue(asyncData(userId));

    authService = new AuthService(httpClientSpy, userServiceSpy);
  });

  // it('should set session values on login', async () => {
  //   // Arrange
  //   const credentials: UserCredentials = {
  //     username: 'jwt_api_user',
  //     password: 'password',
  //   };

  //   userId = 1;

  //   const token: string = 'Bearer test';

  //   const httpResponse: HttpResponse<any> = {
  //     status: 200,
  //     body: {
  //       Authorization: token,
  //     },
  //     type: HttpEventType.Response,
  //     clone: function (): HttpResponse<any> {
  //       throw new Error('Function not implemented.');
  //     },
  //     headers: new HttpHeaders(),
  //     statusText: '',
  //     url: null,
  //     ok: false,
  //   };

  //   httpClientSpy.post.and.returnValue(asyncData(httpResponse));

  //   userServiceSpy.updateLocalStorage.and.stub();

  //   // Act
  //   const response = authService.login(credentials);

  //   // Assert
  //   expect(response).toBeTruthy();
  //   expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
  //   expect(httpClientSpy.post.calls.mostRecent().args[0]).toBe(
  //     'http://localhost:8080/login',
  //     'correct url'
  //   );
  //   expect(userServiceSpy.updateLocalStorage.calls.count()).toBe(
  //     1,
  //     'one call to updateLocalStorage()'
  //   );
  // });

  it('should call userService to empty localstorage on logout', () => {
    // Arrange
    userServiceSpy.emptyLocalStorage.and.stub();

    // Act
    authService.logout();

    // Assert
    expect(userServiceSpy.emptyLocalStorage.calls.count()).toBe(
      1,
      'one call to emptyLocalStorage()'
    );
  });
});
