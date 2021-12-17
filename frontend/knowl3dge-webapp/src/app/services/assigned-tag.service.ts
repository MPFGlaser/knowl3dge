import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AssignedTag } from '../interfaces/assignedTag';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssignedTagService {
  apiBaseUrl = environment.API_URL + '/tags';

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
