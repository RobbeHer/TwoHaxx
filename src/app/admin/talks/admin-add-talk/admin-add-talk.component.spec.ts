import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddTalkComponent } from './admin-add-talk.component';

describe('AdminAddTalkComponent', () => {
  let component: AdminAddTalkComponent;
  let fixture: ComponentFixture<AdminAddTalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddTalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
