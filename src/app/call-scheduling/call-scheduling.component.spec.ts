import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallSchedulingComponent } from './call-scheduling.component';

describe('CallSchedulingComponent', () => {
  let component: CallSchedulingComponent;
  let fixture: ComponentFixture<CallSchedulingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallSchedulingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
