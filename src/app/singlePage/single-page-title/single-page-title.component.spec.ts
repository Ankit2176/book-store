import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePageTitleComponent } from './single-page-title.component';

describe('SinglePageTitleComponent', () => {
  let component: SinglePageTitleComponent;
  let fixture: ComponentFixture<SinglePageTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePageTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
