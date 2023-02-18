import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsearchComponent } from './donorsearch.component';

describe('DonorsearchComponent', () => {
  let component: DonorsearchComponent;
  let fixture: ComponentFixture<DonorsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonorsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
