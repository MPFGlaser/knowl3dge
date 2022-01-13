import { ArticleService } from './../services/article.service';
import { MatTableModule } from '@angular/material/table';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsComponent } from './statistics.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';

describe('StatisticsComponent', () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;

  let articleServiceStub: Partial<ArticleService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatisticsComponent],
      imports: [BrowserAnimationsModule, MatTableModule, MatSortModule],
      providers: [
        {
          provide: ArticleService,
          useValue: articleServiceStub,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
