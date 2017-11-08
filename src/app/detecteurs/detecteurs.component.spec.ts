import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetecteursComponent } from './detecteurs.component';

describe('DetecteursComponent', () => {
  let component: DetecteursComponent;
  let fixture: ComponentFixture<DetecteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetecteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetecteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
