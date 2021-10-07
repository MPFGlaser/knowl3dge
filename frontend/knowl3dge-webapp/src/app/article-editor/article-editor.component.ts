import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private articleService: ArticleService
  ) {}

  onSubmit(): void {
    console.warn('Article edited', this.editForm.value);
    this.editForm.reset();
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const articleIdFromRoute = Number(routeParams.get('articleId'));

    // If the url contains an article id, get the article
    if (articleIdFromRoute) {
      this.getArticle(articleIdFromRoute);
    }
  }

  async getArticle(id: number) {
    try {
      const article = await this.articleService.getArticle(id).toPromise();
      this.article = article;
    } catch (error) {
      console.warn('incorrect article id provided');
      this.router.navigate(['/404']);
    }
  }
}
