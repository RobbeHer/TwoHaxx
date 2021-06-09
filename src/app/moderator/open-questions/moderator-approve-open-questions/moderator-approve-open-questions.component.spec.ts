import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorApproveOpenQuestionsComponent } from './moderator-approve-open-questions.component';

describe('ModeratorApproveOpenQuestionsComponent', () => {
  let component: ModeratorApproveOpenQuestionsComponent;
  let fixture: ComponentFixture<ModeratorApproveOpenQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeratorApproveOpenQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeratorApproveOpenQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
