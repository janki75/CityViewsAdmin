import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditelectionpositionComponent } from './editelectionposition.component';

describe('EditelectionpositionComponent', () => {
  let component: EditelectionpositionComponent;
  let fixture: ComponentFixture<EditelectionpositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditelectionpositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditelectionpositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
