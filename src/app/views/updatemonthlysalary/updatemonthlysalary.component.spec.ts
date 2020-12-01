import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemonthlysalaryComponent } from './updatemonthlysalary.component';

describe('UpdatemonthlysalaryComponent', () => {
  let component: UpdatemonthlysalaryComponent;
  let fixture: ComponentFixture<UpdatemonthlysalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatemonthlysalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemonthlysalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
