import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyServiceComponent } from './company-service.component';

describe('CompanyServiceComponent', () => {
  let component: CompanyServiceComponent;
  let fixture: ComponentFixture<CompanyServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
