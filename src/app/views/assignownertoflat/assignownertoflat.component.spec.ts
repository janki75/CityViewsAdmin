import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignownertoflatComponent } from './assignownertoflat.component';

describe('AssignownertoflatComponent', () => {
  let component: AssignownertoflatComponent;
  let fixture: ComponentFixture<AssignownertoflatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignownertoflatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignownertoflatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
