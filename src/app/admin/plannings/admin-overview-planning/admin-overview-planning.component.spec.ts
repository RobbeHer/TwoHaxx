import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOverviewPlanningComponent } from './admin-overview-planning.component';

describe('AdminOverviewPlanningComponent', () => {
  let component: AdminOverviewPlanningComponent;
  let fixture: ComponentFixture<AdminOverviewPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOverviewPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOverviewPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
