import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodstatusformsComponent } from './bloodstatusforms.component';

describe('BloodstatusformsComponent', () => {
  let component: BloodstatusformsComponent;
  let fixture: ComponentFixture<BloodstatusformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodstatusformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodstatusformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
