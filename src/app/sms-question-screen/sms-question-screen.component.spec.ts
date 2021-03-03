import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsQuestionScreenComponent } from './sms-question-screen.component';

describe('SmsQuestionScreenComponent', () => {
  let component: SmsQuestionScreenComponent;
  let fixture: ComponentFixture<SmsQuestionScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsQuestionScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsQuestionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
