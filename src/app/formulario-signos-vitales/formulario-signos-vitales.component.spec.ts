import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSignosVitalesComponent } from './formulario-signos-vitales.component';

describe('FormularioSignosVitalesComponent', () => {
  let component: FormularioSignosVitalesComponent;
  let fixture: ComponentFixture<FormularioSignosVitalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioSignosVitalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioSignosVitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
