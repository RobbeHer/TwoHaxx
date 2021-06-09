import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditPlanningComponent } from './admin-edit-planning.component';

describe('AdminEditPlanningComponent', () => {
  let component: AdminEditPlanningComponent;
  let fixture: ComponentFixture<AdminEditPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
