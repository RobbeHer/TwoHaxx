import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerManagePollsComponent } from './speaker-manage-polls.component';

describe('SpeakerManagePollsComponent', () => {
  let component: SpeakerManagePollsComponent;
  let fixture: ComponentFixture<SpeakerManagePollsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerManagePollsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerManagePollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
