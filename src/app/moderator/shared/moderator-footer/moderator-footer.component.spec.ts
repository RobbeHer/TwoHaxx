import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorFooterComponent } from './moderator-footer.component';

describe('ModeratorFooterComponent', () => {
  let component: ModeratorFooterComponent;
  let fixture: ComponentFixture<ModeratorFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeratorFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeratorFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
