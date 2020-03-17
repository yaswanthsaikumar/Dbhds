import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbhdsbestComponent } from './dbhdsbest.component';

describe('DbhdsbestComponent', () => {
  let component: DbhdsbestComponent;
  let fixture: ComponentFixture<DbhdsbestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbhdsbestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbhdsbestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
