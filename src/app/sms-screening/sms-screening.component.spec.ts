import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsScreeningComponent } from './sms-screening.component';

describe('SmsScreeningComponent', () => {
  let component: SmsScreeningComponent;
  let fixture: ComponentFixture<SmsScreeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsScreeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
