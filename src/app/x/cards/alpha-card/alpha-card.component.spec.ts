import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaCardComponent } from './alpha-card.component';

describe('AlphaCardComponent', () => {
  let component: AlphaCardComponent;
  let fixture: ComponentFixture<AlphaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
