import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerEditPollComponent } from './speaker-edit-poll.component';

describe('SpeakerEditPollComponent', () => {
  let component: SpeakerEditPollComponent;
  let fixture: ComponentFixture<SpeakerEditPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerEditPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerEditPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
