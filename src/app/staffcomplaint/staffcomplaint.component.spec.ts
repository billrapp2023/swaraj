import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffcomplaintComponent } from './staffcomplaint.component';

describe('StaffcomplaintComponent', () => {
  let component: StaffcomplaintComponent;
  let fixture: ComponentFixture<StaffcomplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffcomplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffcomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
