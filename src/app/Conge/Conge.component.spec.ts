/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CongeComponent } from './Conge.component';

describe('CongeComponent', () => {
  let component: CongeComponent;
  let fixture: ComponentFixture<CongeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
