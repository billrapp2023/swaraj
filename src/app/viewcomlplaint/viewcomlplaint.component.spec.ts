import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcomlplaintComponent } from './viewcomlplaint.component';

describe('ViewcomlplaintComponent', () => {
  let component: ViewcomlplaintComponent;
  let fixture: ComponentFixture<ViewcomlplaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcomlplaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcomlplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
