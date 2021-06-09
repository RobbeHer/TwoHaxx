import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenerChooseRoomComponent } from './listener-choose-room.component';

describe('ListenerChooseRoomComponent', () => {
  let component: ListenerChooseRoomComponent;
  let fixture: ComponentFixture<ListenerChooseRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenerChooseRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenerChooseRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
