/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PointageComponent } from './Pointage.component';

describe('PointageComponent', () => {
  let component: PointageComponent;
  let fixture: ComponentFixture<PointageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
