import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovehospComponent } from './approvehosp.component';

describe('ApprovehospComponent', () => {
  let component: ApprovehospComponent;
  let fixture: ComponentFixture<ApprovehospComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovehospComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovehospComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
