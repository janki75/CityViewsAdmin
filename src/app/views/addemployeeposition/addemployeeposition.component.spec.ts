import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemployeepositionComponent } from './addemployeeposition.component';

describe('AddemployeepositionComponent', () => {
  let component: AddemployeepositionComponent;
  let fixture: ComponentFixture<AddemployeepositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddemployeepositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddemployeepositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
