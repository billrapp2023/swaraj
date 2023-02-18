import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhospitalComponent } from './viewhospital.component';

describe('ViewhospitalComponent', () => {
  let component: ViewhospitalComponent;
  let fixture: ComponentFixture<ViewhospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewhospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewhospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
