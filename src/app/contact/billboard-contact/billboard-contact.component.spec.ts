import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillboardContactComponent } from './billboard-contact.component';

describe('BillboardContactComponent', () => {
  let component: BillboardContactComponent;
  let fixture: ComponentFixture<BillboardContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillboardContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillboardContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
