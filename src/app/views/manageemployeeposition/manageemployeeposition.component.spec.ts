import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageemployeepositionComponent } from './manageemployeeposition.component';

describe('ManageemployeepositionComponent', () => {
  let component: ManageemployeepositionComponent;
  let fixture: ComponentFixture<ManageemployeepositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageemployeepositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageemployeepositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
