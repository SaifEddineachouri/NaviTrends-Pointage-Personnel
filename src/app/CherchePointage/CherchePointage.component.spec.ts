/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CherchePointageComponent } from './CherchePointage.component';

describe('CherchePointageComponent', () => {
  let component: CherchePointageComponent;
  let fixture: ComponentFixture<CherchePointageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CherchePointageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CherchePointageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
