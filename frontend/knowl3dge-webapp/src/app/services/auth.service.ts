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

  jwtHelper = new JwtHelperService();

  apiBaseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private userService: UserService) {
    this.isCurrentlyLoggedIn();
  }

  login(credentials: UserCredentials) {
      this.http
        .post<any>(`${this.apiBaseUrl}/login`, credentials, {
          observe: 'response',
        })
        .subscribe((resp) => {
          console.log('got response' + resp);
          console.log(resp);
          this.setSession(resp);
        });
  }

  private setSession(authResult: HttpResponse<any>) {
    if (authResult.status === 200 && authResult.body.Authorization) {
      let token = authResult.body.Authorization.split(' ')[1];
      localStorage.setItem('token', token);

      let username = this.jwtHelper.decodeToken(token!!).sub;
      this.isLoggedIn.next(true);
      this.currentUsername.next(username);
      this.userService
        .getUserIdByUsername(username)
        .toPromise()
        .then((id) => this.currentUserId.next(id));

      console.log('logged in');
      return this.isCurrentlyLoggedIn();
    }
    console.log('not logged in');
    return false;
  }

  isCurrentlyLoggedIn(): boolean {
    let token = localStorage.getItem('token');
    try {
      if (!this.jwtHelper.isTokenExpired(token!!)) {
        return true;
      } else {
        this.logout();
        return false;
      }
    } catch (error) {
      this.logout();
      console.warn(error);
      return false;
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn.next(false);
    this.currentUsername.next('');
    this.currentUserId.next(-1);
  }

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
