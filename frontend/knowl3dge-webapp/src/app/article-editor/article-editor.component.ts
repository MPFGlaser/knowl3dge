import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../interfaces/article';
import { ArticleService } from './../services/article.service';

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.scss'],
})
export class ArticleEditorComponent implements OnInit {
  article: Article | undefined;

  editForm = this.formBuilder.group({
    Title: '',
    Author: '',
    Content: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  onSubmit(): void {
    console.warn('Article edited', this.editForm.value);
    this.editForm.reset();
  }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    console.warn(routeParams);

    const articleIdFromRoute = Number(routeParams.get('articleId'));
    console.warn(routeParams);
    this.getArticle(articleIdFromRoute);
  }

  async getArticle(id: number) {
    const article = await this.articleService.getArticle(id).toPromise();
    this.article = article;
  }
}
