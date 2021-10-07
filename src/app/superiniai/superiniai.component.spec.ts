import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperiniaiComponent } from './superiniai.component';

describe('SuperiniaiComponent', () => {
  let component: SuperiniaiComponent;
  let fixture: ComponentFixture<SuperiniaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperiniaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperiniaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
