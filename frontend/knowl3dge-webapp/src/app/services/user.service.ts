import { FavouriteAssigned } from './../interfaces/favouriteAssigned';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiBaseUrl = environment.API_URL + '/user';

  public currentUsername: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  public currentUserId: BehaviorSubject<number> = new BehaviorSubject<number>(
    -1
  );
  public currentRole: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {
    this.updateLocalStorage();
  }

  token = localStorage.getItem('token');
  headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.token}`,
  };

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
      const role = this.jwtHelper.decodeToken(token).role;
      const userId = await this.getUserIdByUsername(username).toPromise();

      this.currentUsername.next(username);
      this.currentUserId.next(userId);
      this.currentRole.next(role);
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

  getAllFavourites() {
    let currentUsername = localStorage.getItem('username');
    return this.http.get<FavouriteAssigned[]>(
      `${this.apiBaseUrl}/favourites/${currentUsername}`,
      { headers: this.headers }
    );
  }

  addFavourite(articleId: number) {
    this.http
      .post(
        `${this.apiBaseUrl}/favourites`,
        { articleId: articleId },
        { headers: this.headers }
      )
      .toPromise();
    this.getAllFavourites();
  }

  removeFavourite(articleId: number) {
    this.http
      .delete(`${this.apiBaseUrl}/favourites`, {
        body: { articleId: articleId },
        headers: this.headers,
      })
      .toPromise();
    this.getAllFavourites();
  }
}
