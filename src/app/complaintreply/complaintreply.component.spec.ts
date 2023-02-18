import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintreplyComponent } from './complaintreply.component';

describe('ComplaintreplyComponent', () => {
  let component: ComplaintreplyComponent;
  let fixture: ComponentFixture<ComplaintreplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintreplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintreplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
