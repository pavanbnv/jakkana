import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaToolbarComponent } from './alpha-toolbar.component';

describe('AlphaToolbarComponent', () => {
  let component: AlphaToolbarComponent;
  let fixture: ComponentFixture<AlphaToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphaToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphaToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
