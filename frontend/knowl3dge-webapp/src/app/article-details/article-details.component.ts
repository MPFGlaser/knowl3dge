import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
})
export class ArticleDetailsComponent implements OnInit {
  article: Article | undefined;
  routeParams = this.route.snapshot.paramMap;
  articleIdFromRoute = Number(this.routeParams.get('articleId'));

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.getArticle(this.articleIdFromRoute);
  }

  async getArticle(id: number) {
    const article = await this.articleService.getArticle(id).toPromise();
    this.article = article;
  }
}
