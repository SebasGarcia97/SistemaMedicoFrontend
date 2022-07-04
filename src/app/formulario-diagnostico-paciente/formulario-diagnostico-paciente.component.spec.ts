import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDiagnosticoPacienteComponent } from './formulario-diagnostico-paciente.component';

describe('FormularioDiagnosticoPacienteComponent', () => {
  let component: FormularioDiagnosticoPacienteComponent;
  let fixture: ComponentFixture<FormularioDiagnosticoPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioDiagnosticoPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDiagnosticoPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
