import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AssignedTag } from '../interfaces/assignedTag';

@Injectable({
  providedIn: 'root'
})
export class AssignedTagService {
  apiBaseUrl = 'http://localhost:8080/api/tags';

  token = localStorage.getItem('token');
  headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  };

  constructor(private http: HttpClient) { }

  getAssignedTags(){
    return this.http.get<AssignedTag[]>(`${this.apiBaseUrl}/all_assigned`, {headers: this.headers});
  }
}
