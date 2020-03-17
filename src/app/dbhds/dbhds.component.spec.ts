import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbhdsComponent } from './dbhds.component';

describe('DbhdsComponent', () => {
  let component: DbhdsComponent;
  let fixture: ComponentFixture<DbhdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbhdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbhdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
