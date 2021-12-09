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
import { JwtHelperService } from '@auth0/angular-jwt';

describe('AuthService', () => {
  let authService: AuthService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let userServiceSpy: jasmine.SpyObj<UserService>;
  let jwtHelperSpy: jasmine.SpyObj<JwtHelperService>;
  let userId: number;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    userServiceSpy = jasmine.createSpyObj('UserService', [
      'getUserIdByUsername',
    ]);
    jwtHelperSpy = jasmine.createSpyObj('JwtHelperService', [
      'decodeToken',
      'isTokenExpired',
      'getTokenExpirationDate',
    ]);

    userServiceSpy.getUserIdByUsername.and.returnValue(asyncData(userId));

    authService = new AuthService(httpClientSpy, userServiceSpy, jwtHelperSpy);
  });

  // This should have a mock JWT for testing purposes, but how?
  it('should set session values on login', () => {
    const credentials: UserCredentials = {
      username: 'jwt_api_user',
      password: 'password',
    };

    userId = 1;
    const token: string = 'Bearer test';

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const httpResponse: HttpResponse<any> = {
      status: 200,
      body: {
        Authorization: token,
      },
      type: HttpEventType.Response,
      clone: function (): HttpResponse<any> {
        throw new Error('Function not implemented.');
      },
      headers: new HttpHeaders(),
      statusText: '',
      url: null,
      ok: false,
    };

    httpClientSpy.post.and.returnValue(asyncData(httpResponse));

    jwtHelperSpy.decodeToken.and.returnValue({
      sub: credentials.username,
      exp: tomorrow.getTime(),
    });

    jwtHelperSpy.isTokenExpired.and.returnValue(false);
    jwtHelperSpy.getTokenExpirationDate.and.returnValue(tomorrow);


    authService.login(credentials);

    expect(authService.isCurrentlyLoggedIn()).toBe(true);


    // authService.currentUserId.subscribe(id => {
    //   expect(id).toBe(userId);
    // });

    // authService.currentUsername.subscribe(username => {
    //   expect(username).toMatch(credentials.username);
    // });

    // authService.isLoggedIn.subscribe(isLoggedIn => {
    //   expect(isLoggedIn).toBe(true);
    // });
  });
});
