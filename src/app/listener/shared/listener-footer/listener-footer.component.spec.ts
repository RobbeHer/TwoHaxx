import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenerFooterComponent } from './listener-footer.component';

describe('ListenerFooterComponent', () => {
  let component: ListenerFooterComponent;
  let fixture: ComponentFixture<ListenerFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenerFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
