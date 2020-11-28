import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddelectionpositionComponent } from './addelectionposition.component';

describe('AddelectionpositionComponent', () => {
  let component: AddelectionpositionComponent;
  let fixture: ComponentFixture<AddelectionpositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddelectionpositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddelectionpositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
