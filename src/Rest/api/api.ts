export * from './basicErrorController.service';
import { BasicErrorControllerService } from './basicErrorController.service';
export * from './citasController.service';
import { CitasControllerService } from './citasController.service';
export * from './diagnosticoPacienteController.service';
import { DiagnosticoPacienteControllerService } from './diagnosticoPacienteController.service';
export * from './diagnosticoSvController.service';
import { DiagnosticoSvControllerService } from './diagnosticoSvController.service';
export * from './historiaClinicaController.service';
import { HistoriaClinicaControllerService } from './historiaClinicaController.service';
export * from './medicoController.service';
import { MedicoControllerService } from './medicoController.service';
export * from './pacienteController.service';
import { PacienteControllerService } from './pacienteController.service';
export * from './rolController.service';
import { RolControllerService } from './rolController.service';
export * from './usuarioController.service';
import { UsuarioControllerService } from './usuarioController.service';
export const APIS = [BasicErrorControllerService, CitasControllerService, DiagnosticoPacienteControllerService, DiagnosticoSvControllerService, HistoriaClinicaControllerService, MedicoControllerService, PacienteControllerService, RolControllerService, UsuarioControllerService];
