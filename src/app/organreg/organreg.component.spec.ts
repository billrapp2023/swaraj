import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganregComponent } from './organreg.component';

describe('OrganregComponent', () => {
  let component: OrganregComponent;
  let fixture: ComponentFixture<OrganregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
