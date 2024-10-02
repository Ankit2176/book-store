import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePostLayoutComponent } from './single-post-layout.component';

describe('SinglePostLayoutComponent', () => {
  let component: SinglePostLayoutComponent;
  let fixture: ComponentFixture<SinglePostLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePostLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePostLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
