import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorKickListenersComponent } from './moderator-kick-listeners.component';

describe('ModeratorKickListenersComponent', () => {
  let component: ModeratorKickListenersComponent;
  let fixture: ComponentFixture<ModeratorKickListenersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeratorKickListenersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeratorKickListenersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
