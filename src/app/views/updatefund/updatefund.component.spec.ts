import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefundComponent } from './updatefund.component';

describe('UpdatefundComponent', () => {
  let component: UpdatefundComponent;
  let fixture: ComponentFixture<UpdatefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
