import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOverviewAccountsComponent } from './admin-overview-accounts.component';

describe('AdminOverviewAccountsComponent', () => {
  let component: AdminOverviewAccountsComponent;
  let fixture: ComponentFixture<AdminOverviewAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOverviewAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOverviewAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
