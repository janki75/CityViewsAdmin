import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddflatsComponent } from './addflats.component';

describe('AddflatsComponent', () => {
  let component: AddflatsComponent;
  let fixture: ComponentFixture<AddflatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddflatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddflatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
