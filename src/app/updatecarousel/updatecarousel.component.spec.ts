import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecarouselComponent } from './updatecarousel.component';

describe('UpdatecarouselComponent', () => {
  let component: UpdatecarouselComponent;
  let fixture: ComponentFixture<UpdatecarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
