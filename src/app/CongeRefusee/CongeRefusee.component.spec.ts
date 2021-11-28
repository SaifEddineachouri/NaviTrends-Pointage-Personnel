/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CongeRefuseeComponent } from './CongeRefusee.component';

describe('CongeRefuseeComponent', () => {
  let component: CongeRefuseeComponent;
  let fixture: ComponentFixture<CongeRefuseeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongeRefuseeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongeRefuseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
