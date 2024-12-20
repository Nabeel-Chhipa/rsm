import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceReminderComponent } from './invoice-reminder.component';

describe('InvoiceReminderComponent', () => {
  let component: InvoiceReminderComponent;
  let fixture: ComponentFixture<InvoiceReminderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceReminderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
