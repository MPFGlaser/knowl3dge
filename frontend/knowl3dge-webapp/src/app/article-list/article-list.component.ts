import { AssignedTagService } from './../services/assigned-tag.service';
import { AssignedTag } from './../interfaces/assignedTag';
import { TagService } from '../services/tag.service';
import { Tag } from './../interfaces/tag';
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
  tags?: Tag[];
  assignedTags?: AssignedTag[];

  constructor(
    private articleService: ArticleService,
    private tagService: TagService,
    private assignedTagService: AssignedTagService
  ) {}

  ngOnInit(): void {
    this.getTags();
    this.getAssignedTags();
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

  async getTags(): Promise<void> {
    const tags = await this.tagService.getTags().toPromise();
    this.tags = tags;

    console.warn(this.tags);
  }

  async getAssignedTags(): Promise<void> {
    const assignedTags = await this.assignedTagService
      .getAssignedTags()
      .toPromise();
    this.assignedTags = assignedTags;

    console.warn(this.assignedTags);
  }

  checkForTags(articleId: number): AssignedTag[]{
    if(this.assignedTags){
      console.warn(this.assignedTags.filter(x => x.article_id == articleId));
      return this.assignedTags.filter(x => x.article_id == articleId);
    }
    return [];
  }

  shorten(input: string): string {
    if (input.length > 150) {
      return input.substring(0, 150).trim() + '...';
    }
    return input;
  }
}
