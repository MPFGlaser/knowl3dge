import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../interfaces/article';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
})
export class ArticleDetailsComponent implements OnInit {
  article!: Article;
  routeParams = this.route.snapshot.paramMap;
  articleIdFromRoute = Number(this.routeParams.get('articleId'));
  isFavourited: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private userService: UserService
  ) {}

  async ngOnInit() {
    if (await this.getArticle(this.articleIdFromRoute).then((res) => res)) {
      await this.getFavouriteStatus();
    }
  }

  async getArticle(id: number): Promise<boolean> {
    return this.articleService
      .getArticle(id)
      .toPromise()
      .then((article) => {
        this.article = article;
        return true;
      })
      .catch(() => {
        console.warn('Article not found');
        return false;
      });
  }

  async getFavouriteStatus() {
    const favouritesFetched = await this.userService
      .getAllFavourites()
      .toPromise();
    this.isFavourited = favouritesFetched.some(
      (favourite) => favourite.articleId === this.article.id
    );
  }
}
