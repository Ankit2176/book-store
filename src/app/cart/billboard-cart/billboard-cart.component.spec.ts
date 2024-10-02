import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillboardCartComponent } from './billboard-cart.component';

describe('BillboardCartComponent', () => {
  let component: BillboardCartComponent;
  let fixture: ComponentFixture<BillboardCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillboardCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillboardCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
