import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuemaintenanceComponent } from './duemaintenance.component';

describe('DuemaintenanceComponent', () => {
  let component: DuemaintenanceComponent;
  let fixture: ComponentFixture<DuemaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuemaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuemaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
