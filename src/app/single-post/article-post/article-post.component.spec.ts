import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePostComponent } from './article-post.component';

describe('ArticlePostComponent', () => {
  let component: ArticlePostComponent;
  let fixture: ComponentFixture<ArticlePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlePostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
