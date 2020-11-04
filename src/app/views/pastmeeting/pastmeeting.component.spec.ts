import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastmeetingComponent } from './pastmeeting.component';

describe('PastmeetingComponent', () => {
  let component: PastmeetingComponent;
  let fixture: ComponentFixture<PastmeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastmeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastmeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
