import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonoreditComponent } from './donoredit.component';

describe('DonoreditComponent', () => {
  let component: DonoreditComponent;
  let fixture: ComponentFixture<DonoreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonoreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonoreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
