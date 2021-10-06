import { Article } from './../interfaces/article';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  apiBaseUrl = 'http://localhost:8080/api/articles';

  constructor(private http: HttpClient) { }

  getArticles(){
    return this.http.get<Article[]>(`${this.apiBaseUrl}`);
  }

  getArticle(id: number){
    return this.http.get<Article>(`${this.apiBaseUrl}/${id}`);
  }

}
