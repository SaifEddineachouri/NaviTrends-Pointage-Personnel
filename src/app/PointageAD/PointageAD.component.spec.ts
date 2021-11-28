/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PointageADComponent } from './PointageAD.component';

describe('PointageADComponent', () => {
  let component: PointageADComponent;
  let fixture: ComponentFixture<PointageADComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointageADComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointageADComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
