import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerChooseTalkComponent } from './speaker-choose-talk.component';

describe('SpeakerChooseTalkComponent', () => {
  let component: SpeakerChooseTalkComponent;
  let fixture: ComponentFixture<SpeakerChooseTalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerChooseTalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerChooseTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
