import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillboardSinglePostComponent } from './billboard-single-post.component';

describe('BillboardSinglePostComponent', () => {
  let component: BillboardSinglePostComponent;
  let fixture: ComponentFixture<BillboardSinglePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillboardSinglePostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillboardSinglePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
