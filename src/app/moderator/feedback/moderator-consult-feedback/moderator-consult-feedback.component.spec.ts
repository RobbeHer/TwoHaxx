import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorConsultFeedbackComponent } from './moderator-consult-feedback.component';

describe('ModeratorConsultFeedbackComponent', () => {
  let component: ModeratorConsultFeedbackComponent;
  let fixture: ComponentFixture<ModeratorConsultFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeratorConsultFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeratorConsultFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
