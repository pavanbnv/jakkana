import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaNavbarComponent } from './alpha-navbar.component';

describe('AlphaNavbarComponent', () => {
  let component: AlphaNavbarComponent;
  let fixture: ComponentFixture<AlphaNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphaNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphaNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
