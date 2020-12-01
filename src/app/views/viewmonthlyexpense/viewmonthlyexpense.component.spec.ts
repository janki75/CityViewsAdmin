import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmonthlyexpenseComponent } from './viewmonthlyexpense.component';

describe('ViewmonthlyexpenseComponent', () => {
  let component: ViewmonthlyexpenseComponent;
  let fixture: ComponentFixture<ViewmonthlyexpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmonthlyexpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmonthlyexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
