import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSreplyComponent } from './view-sreply.component';

describe('ViewSreplyComponent', () => {
  let component: ViewSreplyComponent;
  let fixture: ComponentFixture<ViewSreplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSreplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSreplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
