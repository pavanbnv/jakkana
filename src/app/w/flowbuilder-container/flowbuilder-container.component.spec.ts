import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowbuilderContainerComponent } from './flowbuilder-container.component';

describe('FlowbuilderContainerComponent', () => {
  let component: FlowbuilderContainerComponent;
  let fixture: ComponentFixture<FlowbuilderContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowbuilderContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowbuilderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
