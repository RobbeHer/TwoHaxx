import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenerResultsPollsComponent } from './listener-results-polls.component';

describe('ListenerResultsPollsComponent', () => {
  let component: ListenerResultsPollsComponent;
  let fixture: ComponentFixture<ListenerResultsPollsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenerResultsPollsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenerResultsPollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
