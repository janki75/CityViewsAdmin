import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateincomeComponent } from './updateincome.component';

describe('UpdateincomeComponent', () => {
  let component: UpdateincomeComponent;
  let fixture: ComponentFixture<UpdateincomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateincomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateincomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
