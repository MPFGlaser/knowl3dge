import { UserCredentials } from './../interfaces/userCredentials';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public currentUsername: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  public currentUserId: BehaviorSubject<number> = new BehaviorSubject<number>(
    -1
  );

  apiBaseUrl = 'http://localhost:8080';

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private jwtHelper: JwtHelperService
  ) {
    this.isCurrentlyLoggedIn();
  }

  login(credentials: UserCredentials) {
    this.http
      .post<any>(`${this.apiBaseUrl}/login`, credentials, {
        observe: 'response',
      })
      .subscribe((resp) => {
        const token = this.getTokenFromResponse(resp);
        this.populateLocalStorage(token);
      });
  }

  private getTokenFromResponse(authResult: HttpResponse<any>): string {
    if (authResult.status === 200 && authResult.body.Authorization) {
      return authResult.body.Authorization.split(' ')[1];
    }
    return '';
  }

  // Sets the token, username and userId in the localstorage.
  private async populateLocalStorage(token: string) {
    if (this.jwtHelper.decodeToken(token)) {
      localStorage.setItem('token', token);

      let username = this.jwtHelper.decodeToken(token).sub;
      this.currentUsername.next(username);

      let userId: number = await this.userService.getUserIdByUsername(username).toPromise();
      this.currentUserId.next(userId);
      console.warn('user id is: ' + userId);

      this.isCurrentlyLoggedIn();
    } else {
      throw new Error('Token is not valid');
    }
  }

  // Checks and returns if the token is valid.
  private checkTokenValidity(token: string): boolean {
    try {
      return !this.jwtHelper.isTokenExpired(token);
    } catch (error) {
      console.warn(error);
      return false;
    }
  }

  // Checks if the user is logged in by using checkTokenValidity(). If not, logout() is called.
  isCurrentlyLoggedIn(): boolean {
    let token = localStorage.getItem('token');
    if (this.checkTokenValidity(token!!)) {
      this.isLoggedIn.next(true);
      return true;
    }
    this.logout();
    return false;
  }

  // Empties the localstorage logging out the user.
  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn.next(false);
    this.currentUsername.next('');
    this.currentUserId.next(-1);
  }

  // Sends a request with the provided credentials to register the user with the server.
  register(credentials: UserCredentials): boolean {
    try {
      this.http
        .post<any>(`${this.apiBaseUrl}/api/user`, credentials, {
          observe: 'response',
        })
        .subscribe((resp) => {
          this.login(credentials);
        });
      return true;
    } catch (error) {
      console.warn(error);
      return false;
    }
  }
}
