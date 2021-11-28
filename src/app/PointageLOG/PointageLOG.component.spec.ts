/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PointageLOGComponent } from './PointageLOG.component';

describe('PointageLOGComponent', () => {
  let component: PointageLOGComponent;
  let fixture: ComponentFixture<PointageLOGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointageLOGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointageLOGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
