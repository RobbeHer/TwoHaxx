import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerAddPollComponent } from './speaker-add-poll.component';

describe('SpeakerAddPollComponent', () => {
  let component: SpeakerAddPollComponent;
  let fixture: ComponentFixture<SpeakerAddPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerAddPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerAddPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
