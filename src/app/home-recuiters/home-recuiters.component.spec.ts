import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRecuitersComponent } from './home-recuiters.component';

describe('HomeRecuitersComponent', () => {
  let component: HomeRecuitersComponent;
  let fixture: ComponentFixture<HomeRecuitersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRecuitersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRecuitersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
