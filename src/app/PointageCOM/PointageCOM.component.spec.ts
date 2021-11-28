/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PointageCOMComponent } from './PointageCOM.component';

describe('PointageCOMComponent', () => {
  let component: PointageCOMComponent;
  let fixture: ComponentFixture<PointageCOMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointageCOMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointageCOMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
