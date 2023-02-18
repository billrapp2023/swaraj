import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreplyComponent } from './viewreply.component';

describe('ViewreplyComponent', () => {
  let component: ViewreplyComponent;
  let fixture: ComponentFixture<ViewreplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewreplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewreplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
