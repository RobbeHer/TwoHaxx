import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorManageListenersComponent } from './moderator-manage-listeners.component';

describe('ModeratorManageListenersComponent', () => {
  let component: ModeratorManageListenersComponent;
  let fixture: ComponentFixture<ModeratorManageListenersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeratorManageListenersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeratorManageListenersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
