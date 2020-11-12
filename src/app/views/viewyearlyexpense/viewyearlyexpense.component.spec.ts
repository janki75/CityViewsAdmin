import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewyearlyexpenseComponent } from './viewyearlyexpense.component';

describe('ViewyearlyexpenseComponent', () => {
  let component: ViewyearlyexpenseComponent;
  let fixture: ComponentFixture<ViewyearlyexpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewyearlyexpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewyearlyexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
