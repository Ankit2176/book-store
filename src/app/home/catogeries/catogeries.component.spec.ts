import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatogeriesComponent } from './catogeries.component';

describe('CatogeriesComponent', () => {
  let component: CatogeriesComponent;
  let fixture: ComponentFixture<CatogeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatogeriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatogeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
