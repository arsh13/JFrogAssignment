import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCveComponent } from './display-cve.component';

describe('DisplayCveComponent', () => {
  let component: DisplayCveComponent;
  let fixture: ComponentFixture<DisplayCveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
