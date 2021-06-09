import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditTalkComponent } from './admin-edit-talk.component';

describe('AdminEditTalkComponent', () => {
  let component: AdminEditTalkComponent;
  let fixture: ComponentFixture<AdminEditTalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditTalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
