import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillboardCheckoutComponent } from './billboard-checkout.component';

describe('BillboardCheckoutComponent', () => {
  let component: BillboardCheckoutComponent;
  let fixture: ComponentFixture<BillboardCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillboardCheckoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillboardCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
