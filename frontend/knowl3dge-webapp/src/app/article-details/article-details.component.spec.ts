import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, RouterModule } from '@angular/router';
import { ArticleService } from '../services/article.service';

import { ArticleDetailsComponent } from './article-details.component';
import { Article } from '../interfaces/article';
import { asyncData } from 'src/testing/async-observable-helpers';

describe('ArticleDetailsComponent', () => {
  let component: ArticleDetailsComponent;
  let fixture: ComponentFixture<ArticleDetailsComponent>;

  let activatedRouteStub;
  let articleServiceSpy: jasmine.SpyObj<ArticleService>;

  let mockArticle: Article = {
    id: 1,
    authorId: 1,
    title: 'Test Title',
    content: 'Test content',
    creationDate: 1,
    editDate: -1,
    visible: true,
  };

  beforeEach(() => {
    articleServiceSpy = jasmine.createSpyObj('ArticleService', ['getArticle']);

    activatedRouteStub = {
      snapshot: {
        paramMap: convertToParamMap({
          articleId: '1',
        }),
      },
    };

    TestBed.configureTestingModule({
      declarations: [ArticleDetailsComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: ArticleService, useValue: articleServiceSpy },
      ],
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        MatDividerModule,
        RouterModule,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ArticleDetailsComponent);
    component = fixture.componentInstance;
    articleServiceSpy.getArticle.and.returnValue(asyncData(mockArticle));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should request an article with id 1 once', () => {
    expect(articleServiceSpy.getArticle).toHaveBeenCalledWith(1);
    expect(articleServiceSpy.getArticle).toHaveBeenCalledTimes(1);
  });
});
