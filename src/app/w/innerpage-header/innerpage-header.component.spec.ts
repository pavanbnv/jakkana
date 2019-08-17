import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerInnerpageHeaderComponent } from './innerpage-header.component';

describe('InnerpageHeaderComponent', () => {
  let component: InnerpageHeaderComponent;
  let fixture: ComponentFixture<InnerpageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerpageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerpageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
