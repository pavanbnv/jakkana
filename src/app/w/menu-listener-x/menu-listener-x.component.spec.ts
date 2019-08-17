import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListenerXComponent } from './menu-listener-x.component';

describe('MenuListenerXComponent', () => {
  let component: MenuListenerXComponent;
  let fixture: ComponentFixture<MenuListenerXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuListenerXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListenerXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
