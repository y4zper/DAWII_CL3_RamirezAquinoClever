import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pregunta1Component } from './pregunta1.component';

describe('Pregunta1Component', () => {
  let component: Pregunta1Component;
  let fixture: ComponentFixture<Pregunta1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pregunta1Component]
    });
    fixture = TestBed.createComponent(Pregunta1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
