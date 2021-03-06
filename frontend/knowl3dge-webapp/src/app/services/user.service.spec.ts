import { FavouriteAssigned } from './../interfaces/favouriteAssigned';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { JwtHelperService } from '@auth0/angular-jwt';
import { asyncData } from 'src/testing/async-observable-helpers';

import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let jwtHelperSpy: jasmine.SpyObj<JwtHelperService>;

  beforeEach(() => {
    localStorage.clear();

    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', [
      'get',
      'post',
      'delete',
    ]);
    jwtHelperSpy = jasmine.createSpyObj('JwtHelperService', [
      'isTokenExpired',
      'decodeToken',
    ]);
    userService = new UserService(httpClientSpy, jwtHelperSpy);
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

  it('should set the right values in localStorage', async () => {
    // Arrange
    const userId = 123;
    const token = 'test_token';
    const username = 'test_username';

    localStorage.setItem('token', token);

    jwtHelperSpy.isTokenExpired.and.returnValue(false);
    jwtHelperSpy.decodeToken.and.returnValue({ sub: username });
    httpClientSpy.get.and.returnValue(asyncData(userId));

    // Act
    await userService.updateLocalStorage();

    // Assert
    expect(localStorage.getItem('userId')).toBe(userId.toString(), 'user id');
    expect(localStorage.getItem('username')).toBe(username, 'username');
    expect(localStorage.getItem('token')).toBe(token, 'token');
  });

  it('should set the right values in the variables', async () => {
    // Arrange
    const userId = 123;
    const token = 'test_token';
    const username = 'test_username';

    localStorage.setItem('token', token);

    jwtHelperSpy.isTokenExpired.and.returnValue(false);
    jwtHelperSpy.decodeToken.and.returnValue({ sub: username });
    httpClientSpy.get.and.returnValue(asyncData(userId));

    // Act
    await userService.updateLocalStorage();

    // Assert
    userService.currentUserId.subscribe((id) => {
      expect(id).toBe(userId, 'user id');
    });

    userService.currentUsername.subscribe((name) => {
      expect(name).toBe(username, 'username');
    });

    userService.isLoggedIn.subscribe((isLoggedIn) => {
      expect(isLoggedIn).toBe(true, 'is logged in');
    });
  });

  it('should empty localstorage if token is invalid', async () => {
    // Arrange
    const token = 'test_token';

    localStorage.setItem('token', token);

    jwtHelperSpy.isTokenExpired.and.returnValue(true);

    // Act
    await userService.updateLocalStorage();

    // Assert
    expect(localStorage.getItem('userId')).toBe(null, 'user id');
    expect(localStorage.getItem('username')).toBe(null, 'username');
    expect(localStorage.getItem('token')).toBe(null, 'token');
  });

  it('should empty the localstorage if token does not exist', async () => {
    // Arrange
    const userId = 123;
    const username = 'test_username';

    localStorage.setItem('userId', userId.toString());
    localStorage.setItem('username', username);

    // Act
    await userService.updateLocalStorage();

    // Assert
    expect(localStorage.getItem('userId')).toBe(null, 'user id');
    expect(localStorage.getItem('username')).toBe(null, 'username');
    expect(localStorage.getItem('token')).toBe(null, 'token');
  });

  it('should empty localstorage', () => {
    // Arrange
    const userId = 123;
    const token = 'test_token';
    const username = 'test_username';

    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId.toString());
    localStorage.setItem('username', username);

    // Act
    userService.emptyLocalStorage();

    // Assert
    expect(localStorage.getItem('userId')).toBe(null, 'user id');
    expect(localStorage.getItem('username')).toBe(null, 'username');
    expect(localStorage.getItem('token')).toBe(null, 'token');
  });

  it('should return all favourites', async () => {
    // Arrange
    const mockFavourites: FavouriteAssigned[] = [
      {
        id: 1,
        articleId: 1,
        userId: 1,
      },
      {
        id: 2,
        articleId: 2,
        userId: 1,
      },
    ];

    httpClientSpy.get.and.returnValue(asyncData(mockFavourites));

    // Act
    const response = await userService.getAllFavourites().toPromise();

    // Assert
    expect(response).toBe(mockFavourites, 'expected favourites');
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should add a favourite', async () => {
    // Arrange
    const articleId = 1;
    httpClientSpy.post.and.returnValue(asyncData(null));
    let mockHeaders = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };

    // Act
    userService.addFavourite(articleId);

    // Assert
    expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
    expect(httpClientSpy.post).toHaveBeenCalledWith(
      `${userService.apiBaseUrl}/favourites`,
      { articleId },
      {
        headers: mockHeaders,
      }
    );
  });

  it('should remove a favourite', async () => {
    // Arrange
    const articleId = 1;
    httpClientSpy.delete.and.returnValue(asyncData(null));
    let mockHeaders = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };

    // Act
    userService.removeFavourite(articleId);

    // Assert
    expect(httpClientSpy.delete.calls.count()).toBe(1, 'one call');
    expect(httpClientSpy.delete).toHaveBeenCalledWith(
      `${userService.apiBaseUrl}/favourites`,
      {
        body: { articleId },
        headers: mockHeaders,
      }
    );
  });
});
