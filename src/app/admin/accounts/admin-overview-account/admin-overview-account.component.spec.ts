import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOverviewAccountComponent } from './admin-overview-account.component';

describe('AdminOverviewAccountComponent', () => {
  let component: AdminOverviewAccountComponent;
  let fixture: ComponentFixture<AdminOverviewAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOverviewAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOverviewAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
