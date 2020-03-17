import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dbhdstemplate1Component } from './dbhdstemplate1.component';

describe('Dbhdstemplate1Component', () => {
  let component: Dbhdstemplate1Component;
  let fixture: ComponentFixture<Dbhdstemplate1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dbhdstemplate1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dbhdstemplate1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
