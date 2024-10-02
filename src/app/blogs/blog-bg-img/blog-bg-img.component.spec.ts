import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBgImgComponent } from './blog-bg-img.component';

describe('BlogBgImgComponent', () => {
  let component: BlogBgImgComponent;
  let fixture: ComponentFixture<BlogBgImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogBgImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogBgImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
