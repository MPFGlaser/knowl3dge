import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleChipFilterComponent } from './article-chip-filter.component';

describe('ArticleChipFilterComponent', () => {
  let component: ArticleChipFilterComponent;
  let fixture: ComponentFixture<ArticleChipFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleChipFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleChipFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
