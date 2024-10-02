import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPostsComponent } from './latest-posts.component';

describe('LatestPostsComponent', () => {
  let component: LatestPostsComponent;
  let fixture: ComponentFixture<LatestPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestPostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
