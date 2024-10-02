import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePageMainContentComponent } from './single-page-main-content.component';

describe('SinglePageMainContentComponent', () => {
  let component: SinglePageMainContentComponent;
  let fixture: ComponentFixture<SinglePageMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePageMainContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePageMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
