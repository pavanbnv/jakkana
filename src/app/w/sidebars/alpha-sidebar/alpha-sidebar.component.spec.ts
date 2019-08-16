import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaSidebarComponent } from './alpha-sidebar.component';

describe('AlphaSidebarComponent', () => {
  let component: AlphaSidebarComponent;
  let fixture: ComponentFixture<AlphaSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphaSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphaSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
