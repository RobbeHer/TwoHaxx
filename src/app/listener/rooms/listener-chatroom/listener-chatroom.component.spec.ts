import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenerChatroomComponent } from './listener-chatroom.component';

describe('ListenerChatroomComponent', () => {
  let component: ListenerChatroomComponent;
  let fixture: ComponentFixture<ListenerChatroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenerChatroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenerChatroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
