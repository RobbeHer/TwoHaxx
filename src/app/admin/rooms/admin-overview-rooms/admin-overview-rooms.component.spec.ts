import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOverviewRoomsComponent } from './admin-overview-rooms.component';

describe('AdminOverviewRoomsComponent', () => {
  let component: AdminOverviewRoomsComponent;
  let fixture: ComponentFixture<AdminOverviewRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOverviewRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOverviewRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
