import { Tag } from '../interfaces/tag';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  apiBaseUrl = environment.API_URL + '/tags';

  token = localStorage.getItem('token');
  headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  };

  constructor(private http: HttpClient) { }

  getTags(){
    return this.http.get<Tag[]>(`${this.apiBaseUrl}/all`, {headers: this.headers});
  }
}
