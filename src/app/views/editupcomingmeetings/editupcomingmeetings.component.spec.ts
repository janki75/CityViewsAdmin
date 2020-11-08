import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditupcomingmeetingsComponent } from './editupcomingmeetings.component';

describe('EditupcomingmeetingsComponent', () => {
  let component: EditupcomingmeetingsComponent;
  let fixture: ComponentFixture<EditupcomingmeetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditupcomingmeetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditupcomingmeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
