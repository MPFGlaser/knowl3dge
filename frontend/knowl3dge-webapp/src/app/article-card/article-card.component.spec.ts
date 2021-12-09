import { AppRoutingModule } from './../app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Article } from '../interfaces/article';

import { ArticleCardComponent } from './article-card.component';

describe('ArticleCardComponent', () => {
  let component: ArticleCardComponent;
  let fixture: ComponentFixture<ArticleCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleCardComponent ],
      imports: [
        MatCardModule,
        MatChipsModule,
        MatDividerModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatIconModule,
        AppRoutingModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleCardComponent);

    const testArticle: Article = {
      id: 1,
      authorId: 1,
      title: 'Test Title',
      content: 'Test content',
      creationDate: 1,
      editDate: -1,
      visible: true,
    };

    component = fixture.componentInstance;
    component.article = testArticle;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
