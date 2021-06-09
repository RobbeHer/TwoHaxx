import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenerGiveFeedbackComponent } from './listener-give-feedback.component';

describe('ListenerGiveFeedbackComponent', () => {
  let component: ListenerGiveFeedbackComponent;
  let fixture: ComponentFixture<ListenerGiveFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenerGiveFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenerGiveFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
