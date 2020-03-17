import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DBHDS2Component } from './dbhds2.component';

describe('DBHDS2Component', () => {
  let component: DBHDS2Component;
  let fixture: ComponentFixture<DBHDS2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DBHDS2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DBHDS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
