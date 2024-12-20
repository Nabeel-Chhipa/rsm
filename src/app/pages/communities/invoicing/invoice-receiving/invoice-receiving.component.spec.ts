import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceReceivingComponent } from './invoice-receiving.component';

describe('InvoiceReceivingComponent', () => {
  let component: InvoiceReceivingComponent;
  let fixture: ComponentFixture<InvoiceReceivingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceReceivingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceReceivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
