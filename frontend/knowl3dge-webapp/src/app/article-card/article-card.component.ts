import { Article } from './../interfaces/article';
import { Component, Input, OnInit } from '@angular/core';
import { AssignedTag } from '../interfaces/assignedTag';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit{
  @Input() article!: Article;
  @Input() assignedTags?: AssignedTag[] = [];

  ngOnInit(){
    this.article.content = this.shorten(this.article.content);
  }
  // Checks if an article has tags assigned to it
  checkForTags(articleId: number): AssignedTag[] {
    if (this.assignedTags) {
      return this.assignedTags.filter((x) => x.article?.id == articleId);
    }
    return [];
  }

  // Shortens the preview bit of the article content
  shorten(input: string): string {
    if (input.length > 150) {
      return input.substring(0, 150).trim() + '...';
    }
    return input;
  }
}
