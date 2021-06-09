import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestChartsComponent } from './test-charts.component';

describe('TestChartsComponent', () => {
  let component: TestChartsComponent;
  let fixture: ComponentFixture<TestChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
