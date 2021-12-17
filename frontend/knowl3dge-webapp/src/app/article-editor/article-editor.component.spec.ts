import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleEditorComponent } from './article-editor.component';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { TagService } from '../services/tag.service';
import { ArticleService } from '../services/article.service';

describe('ArticleEditorComponent', () => {
  let component: ArticleEditorComponent;
  let fixture: ComponentFixture<ArticleEditorComponent>;

  let activatedRouteStub;
  let articleServiceSpy = jasmine.createSpyObj('ArticleService', [
    'getArticle',
    'createArticle',
    'editArticle',
  ]);
  let tagServiceSpy = jasmine.createSpyObj('TagService', ['getTags']);
  let routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(() => {
    activatedRouteStub = {
      snapshot: {
        paramMap: convertToParamMap({
          articleId: '1',
        }),
      },
    };

    TestBed.configureTestingModule({
      declarations: [ArticleEditorComponent],
      providers: [
        { provide: FormBuilder },
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: Router, useValue: routerSpy },
        { provide: ArticleService, useValue: articleServiceSpy },
        { provide: TagService, useValue: tagServiceSpy },
      ],
      imports: [
        MatInputModule,
        MatCardModule,
        MatDividerModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(ArticleEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
