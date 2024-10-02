import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePageLayoutComponent } from './single-page-layout.component';

describe('SinglePageLayoutComponent', () => {
  let component: SinglePageLayoutComponent;
  let fixture: ComponentFixture<SinglePageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePageLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
