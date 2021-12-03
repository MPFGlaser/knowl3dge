import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiBaseUrl = 'http://localhost:8080/api/user';

  token = localStorage.getItem('token');
  headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  };

  constructor(private http: HttpClient) { }

  getUserIdByUsername(username: string) {
    return this.http.get<number>(`${this.apiBaseUrl}/getuserid/${username}`);
  }
}
