import { AssignedTagService } from './../services/assigned-tag.service';
import { AssignedTag } from './../interfaces/assignedTag';
import { TagService } from '../services/tag.service';
import { Tag } from './../interfaces/tag';
import { Article } from './../interfaces/article';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { MatChip } from '@angular/material/chips';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  articles!: Article[];
  tags?: Tag[];
  assignedTags?: AssignedTag[];
  loading: boolean = true;

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

  // Gets articles when the selected tags change
  selectedTagsChanged(tags: Tag[]) {
    // Should implement debounce here!
    this.getArticles(tags);
  }

  // Toggles the clicked chip's selection attribute
  toggleSelection(chip: MatChip) {
    chip.toggleSelected();
  }

  // Gets articles and shortens their content
  async getArticles(tags?: Tag[]) {
    try {
      this.loading = true;
      const articles = await this.articleService.getArticles(tags).toPromise();
      this.loading = false;
      this.articles = articles;
    } catch (error) {
      console.warn(error);
      this.articles = [];
      this.loading = true;
    }
  }

  // Gets all tags
  async getTags(): Promise<void> {
    try {
      const tags = await this.tagService.getTags().toPromise();
      this.tags = tags;
    } catch (error) {
      console.warn(error);
    }
  }

  // Gets an array of all tags assigned to an article
  async getAssignedTags(): Promise<void> {
    try {
      const assignedTags = await this.assignedTagService
        .getAssignedTags()
        .toPromise();
      this.assignedTags = assignedTags;
    } catch (error) {
      console.warn(error);
    }
  }
}
