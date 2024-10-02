import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopifyGridComponent } from './shopify-grid.component';

describe('ShopifyGridComponent', () => {
  let component: ShopifyGridComponent;
  let fixture: ComponentFixture<ShopifyGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopifyGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopifyGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
