import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationinfotableComponent } from './donationinfotable.component';

describe('DonationinfotableComponent', () => {
  let component: DonationinfotableComponent;
  let fixture: ComponentFixture<DonationinfotableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationinfotableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationinfotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
