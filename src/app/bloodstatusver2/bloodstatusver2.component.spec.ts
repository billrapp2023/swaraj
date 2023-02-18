import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bloodstatusver2Component } from './bloodstatusver2.component';

describe('Bloodstatusver2Component', () => {
  let component: Bloodstatusver2Component;
  let fixture: ComponentFixture<Bloodstatusver2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bloodstatusver2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bloodstatusver2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
