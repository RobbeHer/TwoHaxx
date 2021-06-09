import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorSetUpFeedbackLinkComponent } from './moderator-set-up-feedback-link.component';

describe('ModeratorSetUpFeedbackLinkComponent', () => {
  let component: ModeratorSetUpFeedbackLinkComponent;
  let fixture: ComponentFixture<ModeratorSetUpFeedbackLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeratorSetUpFeedbackLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeratorSetUpFeedbackLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
