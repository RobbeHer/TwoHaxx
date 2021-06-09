import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenerJoinRoomComponent } from './listener-join-room.component';

describe('ListenerJoinRoomComponent', () => {
  let component: ListenerJoinRoomComponent;
  let fixture: ComponentFixture<ListenerJoinRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenerJoinRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenerJoinRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
