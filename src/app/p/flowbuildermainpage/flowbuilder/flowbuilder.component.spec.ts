import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowbuilderComponent } from './flowbuilder.component';

describe('FlowbuilderComponent', () => {
  let component: FlowbuilderComponent;
  let fixture: ComponentFixture<FlowbuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowbuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
