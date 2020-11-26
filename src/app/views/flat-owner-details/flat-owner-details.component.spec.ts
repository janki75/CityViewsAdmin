import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatOwnerDetailsComponent } from './flat-owner-details.component';

describe('FlatOwnerDetailsComponent', () => {
  let component: FlatOwnerDetailsComponent;
  let fixture: ComponentFixture<FlatOwnerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatOwnerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatOwnerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
