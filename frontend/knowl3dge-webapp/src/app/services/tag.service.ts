import { Tag } from '../interfaces/tag';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  apiBaseUrl = 'http://localhost:8080/api/tags';

  constructor(private http: HttpClient) { }

  getTags(){
    return this.http.get<Tag[]>(`${this.apiBaseUrl}/all`);
  }
}
