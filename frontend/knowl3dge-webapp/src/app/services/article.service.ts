import { Article } from './../interfaces/article';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  apiBaseUrl = 'http://localhost:8080/api/articles';

  constructor(private http: HttpClient) {}

  getArticles() {
    return this.http.get<Article[]>(`${this.apiBaseUrl}`);
  }

  getArticle(id: number) {
    return this.http.get<Article>(`${this.apiBaseUrl}/${id}`);
  }

  createArticle(article: Article) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(article);
    return this.http
      .post<Article>(`${this.apiBaseUrl}/new`, body, { headers: headers })
      .subscribe();
  }

  editArticle(article: Article) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(article);
    return this.http
      .put<Article>(`${this.apiBaseUrl}/edit`, body, { headers: headers })
      .subscribe();
  }
}
