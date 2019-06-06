/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResulttableComponent } from './header.component';

describe('ResulttableComponent', () => {
  let component: ResulttableComponent;
  let fixture: ComponentFixture<ResulttableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResulttableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResulttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
