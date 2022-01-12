import { Article } from './../interfaces/article';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { AssignedTag } from '../interfaces/assignedTag';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit, OnDestroy {
  @Input() article!: Article;
  @Input() assignedTags?: AssignedTag[] = [];
  @Input() isFavourited?: boolean;
  @Input() isDetailsPage?: boolean;

  isAdmin: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.article.content = this.shorten(this.article.content);
    this.userService.currentRole.subscribe((role) => {
      this.isAdmin = role === 'ADMIN';
    });
  }

  ngOnDestroy(): void {
    this.userService.currentRole.unsubscribe();
  }

  // Checks if an article has tags assigned to it
  checkForTags(articleId: number): AssignedTag[] {
    if (this.assignedTags) {
      return this.assignedTags.filter((x) => x.articleId?.id == articleId);
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

  favouriteClicked() {
    if (!this.isFavourited) {
      this.userService.addFavourite(this.article.id);
      this.isFavourited = true;
      console.warn('Added to favourites');
    } else {
      this.userService.removeFavourite(this.article.id);
      this.isFavourited = false;
      console.warn('Removed from favourites');
    }
  }
}
