import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionpositionComponent } from './electionposition.component';

describe('ElectionpositionComponent', () => {
  let component: ElectionpositionComponent;
  let fixture: ComponentFixture<ElectionpositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectionpositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionpositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
