import { UserCredentials } from './../interfaces/userCredentials';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiBaseUrl = environment.API_URL.substring(0, environment.API_URL.length - 4);

  constructor(
    private http: HttpClient,
    private userService: UserService,
  ) {}

  async login(credentials: UserCredentials): Promise<boolean> {
    return this.sendLoginRequest(credentials)
      .toPromise()
      .then((resp) => {
        this.setTokenInLocalStorage(resp['Authorization']);
        return true;
      }).catch((err) => {
        console.warn(err);
        return false;
      });
  }

  private sendLoginRequest(credentials: UserCredentials) {
    return this.http.post<any>(`${this.apiBaseUrl}/login`, credentials);
  }

  private setTokenInLocalStorage(inputToken: string) {
    const token = inputToken.split(' ')[1];
    localStorage.setItem('token', token);
    this.userService.updateLocalStorage();
  }

  // Empties the localstorage logging out the user.
  logout() {
    this.userService.emptyLocalStorage();
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
