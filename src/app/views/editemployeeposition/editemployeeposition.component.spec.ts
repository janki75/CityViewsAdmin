import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditemployeepositionComponent } from './editemployeeposition.component';

describe('EditemployeepositionComponent', () => {
  let component: EditemployeepositionComponent;
  let fixture: ComponentFixture<EditemployeepositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditemployeepositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditemployeepositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
