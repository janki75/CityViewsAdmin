import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmonthlysalaryComponent } from './viewmonthlysalary.component';

describe('ViewmonthlysalaryComponent', () => {
  let component: ViewmonthlysalaryComponent;
  let fixture: ComponentFixture<ViewmonthlysalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmonthlysalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmonthlysalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
