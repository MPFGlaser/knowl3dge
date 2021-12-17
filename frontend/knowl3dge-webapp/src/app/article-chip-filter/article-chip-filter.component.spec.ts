import { MatChipsModule } from '@angular/material/chips';
import { Tag } from './../interfaces/tag';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { asyncData } from 'src/testing/async-observable-helpers';
import { TagService } from '../services/tag.service';

import { ArticleChipFilterComponent } from './article-chip-filter.component';

describe('ArticleChipFilterComponent', () => {
  let component: ArticleChipFilterComponent;
  let fixture: ComponentFixture<ArticleChipFilterComponent>;

  let tagServiceSpy: jasmine.SpyObj<TagService>;

  beforeEach(() => {
    tagServiceSpy = jasmine.createSpyObj('TagService', ['getTags']);

    let tagList: Tag[] = [
      { id: 1, name: 'tag1' },
      { id: 2, name: 'tag2' },
    ];
    tagServiceSpy.getTags.and.returnValue(asyncData(tagList));

    TestBed.configureTestingModule({
      declarations: [ArticleChipFilterComponent],
      providers: [{ provide: TagService, useValue: tagServiceSpy }],
      imports: [
        MatChipsModule,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ArticleChipFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
