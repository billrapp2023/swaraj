import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Donorsearchv2Component } from './donorsearchv2.component';

describe('Donorsearchv2Component', () => {
  let component: Donorsearchv2Component;
  let fixture: ComponentFixture<Donorsearchv2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Donorsearchv2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Donorsearchv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
