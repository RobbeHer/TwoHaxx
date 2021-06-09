import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOverviewTalksComponent } from './admin-overview-talks.component';

describe('AdminOverviewTalksComponent', () => {
  let component: AdminOverviewTalksComponent;
  let fixture: ComponentFixture<AdminOverviewTalksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOverviewTalksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOverviewTalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
