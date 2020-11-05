import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingmeetingComponent } from './upcomingmeeting.component';

describe('UpcomingmeetingComponent', () => {
  let component: UpcomingmeetingComponent;
  let fixture: ComponentFixture<UpcomingmeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingmeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingmeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
