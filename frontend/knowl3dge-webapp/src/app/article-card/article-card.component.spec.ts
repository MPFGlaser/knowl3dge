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
import { UserService } from '../services/user.service';
import { BehaviorSubject } from 'rxjs';

describe('ArticleCardComponent', () => {
  let component: ArticleCardComponent;
  let fixture: ComponentFixture<ArticleCardComponent>;
  let userServiceStub: Partial<UserService>;

  beforeEach(() => {
    userServiceStub = {
      isLoggedIn: new BehaviorSubject<boolean>(true),
      currentUsername: new BehaviorSubject<string>('test'),
      currentUserId: new BehaviorSubject<number>(1),
      currentRole: new BehaviorSubject<string>('USER'),
      addFavourite: () => {
        return;
      },
      removeFavourite: () => {
        return;
      },
    };

    TestBed.configureTestingModule({
      declarations: [ArticleCardComponent],
      imports: [
        MatCardModule,
        MatChipsModule,
        MatDividerModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatIconModule,
        AppRoutingModule,
      ],
      providers: [
        {
          provide: UserService,
          useValue: userServiceStub,
        },
      ],
    }).compileComponents();

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
