import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyCustomerComponent } from './identify-customer.component';

describe('IdentifyCustomerComponent', () => {
  let component: IdentifyCustomerComponent;
  let fixture: ComponentFixture<IdentifyCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdentifyCustomerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IdentifyCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
