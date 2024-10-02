import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillboardSliderComponent } from './billboard-slider.component';

describe('BillboardSliderComponent', () => {
  let component: BillboardSliderComponent;
  let fixture: ComponentFixture<BillboardSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillboardSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillboardSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
