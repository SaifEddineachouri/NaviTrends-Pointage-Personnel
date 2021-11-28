/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CongeAccepteeComponent } from './CongeAcceptee.component';

describe('CongeAccepteeComponent', () => {
  let component: CongeAccepteeComponent;
  let fixture: ComponentFixture<CongeAccepteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongeAccepteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongeAccepteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
