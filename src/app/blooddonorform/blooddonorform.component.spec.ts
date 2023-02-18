import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlooddonorformComponent } from './blooddonorform.component';

describe('BlooddonorformComponent', () => {
  let component: BlooddonorformComponent;
  let fixture: ComponentFixture<BlooddonorformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlooddonorformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlooddonorformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
