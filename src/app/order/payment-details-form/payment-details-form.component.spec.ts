import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDetailsFormComponent } from './payment-details-form.component';

describe('PaymentDetailsFormComponent', () => {
  let component: PaymentDetailsFormComponent;
  let fixture: ComponentFixture<PaymentDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
