import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pregunta3Component } from './pregunta3.component';

describe('Pregunta3Component', () => {
  let component: Pregunta3Component;
  let fixture: ComponentFixture<Pregunta3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pregunta3Component]
    });
    fixture = TestBed.createComponent(Pregunta3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
