import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiBaseUrl = 'http://localhost:8080/api/user';

  public currentUsername: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  public currentUserId: BehaviorSubject<number> = new BehaviorSubject<number>(
    -1
  );
  public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  token = localStorage.getItem('token');
  headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.token}`,
  };

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {
    this.updateLocalStorage();
  }

  // Tries to update the userId and username in localStorage based on the token
  async updateLocalStorage() {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        this.emptyLocalStorage();
        throw new Error('No token found in localStorage');
      }
      if (this.jwtHelper.isTokenExpired(token)) {
        this.emptyLocalStorage();
        throw new Error('Token is expired or invalid');
      }

      const username = this.jwtHelper.decodeToken(token).sub;
      const userId = await this.getUserIdByUsername(username).toPromise();

      this.currentUsername.next(username);
      this.currentUserId.next(userId);
      this.isLoggedIn.next(true);

      localStorage.setItem('userId', userId.toString());
      localStorage.setItem('username', username);
    } catch (error) {
      console.log(error);
    }
  }

  // Removes everything from localstorage if something's wrong
  emptyLocalStorage() {
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    localStorage.removeItem('token');

    this.currentUsername.next('');
    this.currentUserId.next(-1);
    this.isLoggedIn.next(false);
  }

  // Gets the userid of the user with the given username from the backend
  getUserIdByUsername(username: string) {
    return this.http.get<number>(`${this.apiBaseUrl}/getuserid/${username}`);
  }
}
