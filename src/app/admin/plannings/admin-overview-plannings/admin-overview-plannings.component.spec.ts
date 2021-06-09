import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOverviewPlanningsComponent } from './admin-overview-plannings.component';

describe('AdminOverviewPlanningsComponent', () => {
  let component: AdminOverviewPlanningsComponent;
  let fixture: ComponentFixture<AdminOverviewPlanningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOverviewPlanningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOverviewPlanningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
