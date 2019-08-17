import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowbuilderContentComponent } from './flowbuilder-content.component';

describe('FlowbuilderContentComponent', () => {
  let component: FlowbuilderContentComponent;
  let fixture: ComponentFixture<FlowbuilderContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowbuilderContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowbuilderContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
