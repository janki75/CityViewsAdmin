import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingelectionComponent } from './upcomingelection.component';

describe('UpcomingelectionComponent', () => {
  let component: UpcomingelectionComponent;
  let fixture: ComponentFixture<UpcomingelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
