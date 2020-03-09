import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependancyGraphComponent } from './dependancy-graph.component';

describe('DependancyGraphComponent', () => {
  let component: DependancyGraphComponent;
  let fixture: ComponentFixture<DependancyGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependancyGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependancyGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
