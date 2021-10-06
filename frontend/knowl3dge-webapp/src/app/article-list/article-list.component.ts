import { Article } from './../interfaces/article';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  articles!: Article[];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.getArticles();
  }

  async getArticles(): Promise<void> {
    const articles = await this.articleService.getArticles().toPromise();
    this.articles = articles;

    for (let article of articles) {
      if (article.content) {
        article.content = this.shorten(article.content);
      }
    }
  }

  shorten(input: string): string {
    if (input.length > 150) {
      return input.substring(0, 150).trim() + '...';
    }
    return input;
  }
}
