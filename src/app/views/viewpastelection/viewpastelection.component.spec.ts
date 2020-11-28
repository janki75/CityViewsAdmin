import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpastelectionComponent } from './viewpastelection.component';

describe('ViewpastelectionComponent', () => {
  let component: ViewpastelectionComponent;
  let fixture: ComponentFixture<ViewpastelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpastelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpastelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
