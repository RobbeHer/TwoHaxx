import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenerOpenQuestionComponent } from './listener-open-question.component';

describe('ListenerOpenQuestionComponent', () => {
  let component: ListenerOpenQuestionComponent;
  let fixture: ComponentFixture<ListenerOpenQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenerOpenQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenerOpenQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
