import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCommentsComponent } from './form-comments.component';

describe('FormCommentsComponent', () => {
  let component: FormCommentsComponent;
  let fixture: ComponentFixture<FormCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCommentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
