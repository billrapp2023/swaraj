import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgansearchComponent } from './organsearch.component';

describe('OrgansearchComponent', () => {
  let component: OrgansearchComponent;
  let fixture: ComponentFixture<OrgansearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgansearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgansearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
