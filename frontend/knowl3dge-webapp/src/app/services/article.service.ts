import { Article } from './../interfaces/article';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tag } from '../interfaces/tag';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  apiBaseUrl = environment.API_URL + '/articles';

  token = localStorage.getItem('token');
  headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  };

  constructor(private http: HttpClient) {}

  getArticles(tags?: Tag[]) {
    let query = '';
    if (tags) {
      query = this.generateQueryString(tags);
    }
    console.warn(`${this.apiBaseUrl}${query}`);
    return this.http.get<Article[]>(`${this.apiBaseUrl}${query}`, {
      headers: this.headers,
    });
  }

  getArticle(id: number) {
    return this.http.get<Article>(`${this.apiBaseUrl}/${id}`, {
      headers: this.headers,
    });
  }

  createArticle(article: Article) {
    const body = JSON.stringify(article);
    return this.http.post<Article>(`${this.apiBaseUrl}/new`, body, {
      headers: this.headers,
    });
  }

  editArticle(article: Article) {
    const body = JSON.stringify(article);
    return this.http.put<Article>(`${this.apiBaseUrl}/edit`, body, {
      headers: this.headers,
    });
  }

  generateQueryString(tags?: Tag[]): string {
    var query = '';
    if (!tags) return query;

    tags.forEach((tag) => {
      if (tag.id) {
        query += 'tag=' + tag.id + '&';
      }
    });

    if (query.length > 0) {
      query = '?' + query.slice(0, query.length - 1);
    }

    console.warn(query);
    return query;
  }
}
