import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateaboutComponent } from './updateabout.component';

describe('UpdateaboutComponent', () => {
  let component: UpdateaboutComponent;
  let fixture: ComponentFixture<UpdateaboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateaboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
