import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenerNavigationComponent } from './listener-navigation.component';

describe('ListenerNavigationComponent', () => {
  let component: ListenerNavigationComponent;
  let fixture: ComponentFixture<ListenerNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenerNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenerNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
