import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddPlanningComponent } from './admin-add-planning.component';

describe('AdminAddPlanningComponent', () => {
  let component: AdminAddPlanningComponent;
  let fixture: ComponentFixture<AdminAddPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
