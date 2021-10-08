import { Tag } from './../interfaces/tag';
import { TagService } from '../services/tag.service';
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
  tags: Tag[] | undefined;
  public title = 'New Article';
  private editing = false;
  private articleIdFromRoute = 0;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService,
    private tagService: TagService
  ) {}

  editForm = this.formBuilder.group({
    Title: '',
    Author: '',
    Content: '',
  });

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.articleIdFromRoute = Number(routeParams.get('articleId'));

    // If the url contains an article id, get the article
    if (this.articleIdFromRoute) {
      this.getArticle(this.articleIdFromRoute);
      this.editing = true;
      this.title = 'Edit Article';
    }
  }

  // Tries to get article by id. If it does not exist, redirect to 404 page
  async getArticle(id: number): Promise<void> {
    try {
      const article = await this.articleService.getArticle(id).toPromise();
      this.article = article;
    } catch (error) {
      console.warn('incorrect article id provided');
      this.router.navigate(['/404']);
    }
    this.populateFields();
  }

  populateFields(): void {
    this.editForm.get('Title')?.setValue(this.article?.title);
    this.editForm.get('Author')?.setValue(this.article?.authorId);
    this.editForm.get('Content')?.setValue(this.article?.content);
  }

  onSubmit(): void {
    console.warn(this.editForm.value);
    console.warn(this.editForm.value.Title);
    console.warn(new Date().getTime());
    const articleSubmitted = {
      id: 0,
      authorId: this.editForm.value.Author,
      title: this.editForm.value.Title,
      content: this.editForm.value.Content,
      visible: true,
    } as Article;

    if (this.editing) {
      // Set edit date to current unix timestamp, leave creation date as is.
      console.warn('Article edited', this.editForm.value);
      articleSubmitted.id = this.articleIdFromRoute;
      articleSubmitted.creationDate = this.article?.creationDate as number;
      articleSubmitted.editDate = new Date().getTime();
      this.articleService.editArticle(articleSubmitted);
    } else {
      // Set creation date to current unix timestamp, leave edit date null
      console.warn('Article created', this.editForm.value);
      articleSubmitted.creationDate = new Date().getTime();
      this.articleService.createArticle(articleSubmitted);
    }
    this.editForm.reset();
  }
}
