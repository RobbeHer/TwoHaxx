import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenerAnswerPollsComponent } from './listener-answer-polls.component';

describe('ListenerAnswerPollsComponent', () => {
  let component: ListenerAnswerPollsComponent;
  let fixture: ComponentFixture<ListenerAnswerPollsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenerAnswerPollsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenerAnswerPollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
