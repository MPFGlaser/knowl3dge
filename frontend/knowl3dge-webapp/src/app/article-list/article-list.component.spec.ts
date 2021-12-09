import { asyncData } from 'src/testing/async-observable-helpers';
import { Tag } from './../interfaces/tag';
import { AssignedTag } from './../interfaces/assignedTag';
import { Article } from './../interfaces/article';
import { MatChipsModule } from '@angular/material/chips';
import { AppRoutingModule } from './../app-routing.module';
import { ArticleChipFilterComponent } from './../article-chip-filter/article-chip-filter.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleService } from '../services/article.service';
import { AssignedTagService } from '../services/assigned-tag.service';
import { TagService } from '../services/tag.service';

import { ArticleListComponent } from './article-list.component';
import {
  MatProgressSpinnerModule,
} from '@angular/material/progress-spinner';

describe('ArticleListComponent', () => {
  let component: ArticleListComponent;
  let fixture: ComponentFixture<ArticleListComponent>;

  let articleServiceSpy: jasmine.SpyObj<ArticleService>;
  let tagServiceSpy: jasmine.SpyObj<TagService>;
  let assignedTagServiceSpy: jasmine.SpyObj<AssignedTagService>;

  let mockTags: Tag[];
  let mockAssignedTags: AssignedTag[];
  let mockArticles: Article[];

  beforeEach(() => {
    articleServiceSpy = jasmine.createSpyObj('ArticleService', ['getArticles']);
    tagServiceSpy = jasmine.createSpyObj('TagService', ['getTags']);
    assignedTagServiceSpy = jasmine.createSpyObj('AssignedTagService', ['getAssignedTags']);

    tagServiceSpy.getTags.and.returnValue(asyncData(mockTags));
    assignedTagServiceSpy.getAssignedTags.and.returnValue(asyncData(mockAssignedTags));
    articleServiceSpy.getArticles.and.returnValue(asyncData(mockArticles));

    TestBed.configureTestingModule({
      declarations: [ArticleListComponent, ArticleChipFilterComponent],
      providers: [
        {
          provide: ArticleService,
          useValue: articleServiceSpy,
        },
        {
          provide: TagService,
          useValue: tagServiceSpy,
        },
        {
          provide: AssignedTagService,
          useValue: assignedTagServiceSpy,
        },
      ],
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatChipsModule,
        AppRoutingModule,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    mockTags = [
      {
        id: 1,
        name: 'tag1',
      },
      {
        id: 2,
        name: 'tag2',
      },
    ];

    mockArticles = [
      {
        id: 1,
        authorId: 1,
        title: 'title1',
        content: 'content1',
        visible: true,
      },
      {
        id: 2,
        authorId: 1,
        title: 'title2',
        content: 'content2',
        visible: true,
      },
    ];

    mockAssignedTags = [
      {
        id: 1,
        articleId: mockArticles[0],
        tagId: mockTags[0],
      },
      {
        id: 2,
        articleId: mockArticles[0],
        tagId: mockTags[1],
      },
    ];




    expect(component).toBeTruthy();
  });
});
