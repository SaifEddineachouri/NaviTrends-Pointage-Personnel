/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PointageTECComponent } from './PointageTEC.component';

describe('PointageTECComponent', () => {
  let component: PointageTECComponent;
  let fixture: ComponentFixture<PointageTECComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointageTECComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointageTECComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
