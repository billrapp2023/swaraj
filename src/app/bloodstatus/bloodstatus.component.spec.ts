import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodstatusComponent } from './bloodstatus.component';

describe('BloodstatusComponent', () => {
  let component: BloodstatusComponent;
  let fixture: ComponentFixture<BloodstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
