import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePageRelatedItemComponent } from './single-page-related-item.component';

describe('SinglePageRelatedItemComponent', () => {
  let component: SinglePageRelatedItemComponent;
  let fixture: ComponentFixture<SinglePageRelatedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePageRelatedItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePageRelatedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
