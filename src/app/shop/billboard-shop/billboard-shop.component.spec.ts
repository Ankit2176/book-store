import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillboardShopComponent } from './billboard-shop.component';

describe('BillboardShopComponent', () => {
  let component: BillboardShopComponent;
  let fixture: ComponentFixture<BillboardShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillboardShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillboardShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
