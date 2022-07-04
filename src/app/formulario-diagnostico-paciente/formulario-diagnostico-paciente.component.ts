import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TblDiagnosticoPaciente} from "../../Rest/model/tblDiagnosticoPaciente";
import {
  DiagnosticoPacienteControllerService,
  DiagnosticoSvControllerService, HistoriaClinicaControllerService, MedicoControllerService, PacienteControllerService,
  TblDiagnosticoSVPaciente, TblHistoriaClinica, TblMedico, TblPaciente, TblPersona
} from "../../Rest";


@Component({
  selector: 'app-formulario-diagnostico-paciente',
  templateUrl: './formulario-diagnostico-paciente.component.html',
  styleUrls: ['./formulario-diagnostico-paciente.component.scss']
})
export class FormularioDiagnosticoPacienteComponent implements OnInit {


  diagnosticoPaciente: TblDiagnosticoPaciente = {}
  historiaClinica: TblHistoriaClinica = {}
  paciente: TblPaciente= {}
  medico: TblMedico= {}
  persona: TblPersona = {}


  listaPaciente: TblPaciente[] = []
  listMedicos: TblMedico[] = []

  id: string | null ;

  constructor(private diagnosticoPacienteService: DiagnosticoPacienteControllerService,
              private diagnosticoPacienteSV: DiagnosticoSvControllerService,
              private pacienteService: PacienteControllerService,
              private medicoService:MedicoControllerService,
              private historiaClinicaService: HistoriaClinicaControllerService,
              private  route: Router,
              private rutaActiva: ActivatedRoute) {
    this.id = this.rutaActiva.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.medicoService.findByMedicoDepartamentoUsingGET(1).subscribe(
      data => {
        this.listMedicos = data;
      }
    );
    this.pacienteService.listPacienteUsingGET1(true).subscribe(
      data=>{
        this.listaPaciente = data;
      }
    );

    const val = Number(this.id);
     this.historiaClinicaService.getHistoriaClinicaUsingGET(val).subscribe(data => {
      this.historiaClinica = data;

      this.paciente.idPaciente = this.historiaClinica.tblPaciente?.idPaciente
      this.historiaClinica.idHistoriaClinica = this.historiaClinica.idHistoriaClinica

    });
  }

  crearDiagnosticoPaciente() {
    this.diagnosticoPacienteService.postDiaPacienteUsingPOST(
      this.diagnosticoPaciente.dpDiagnostico,
      this.historiaClinica.idHistoriaClinica,
      this.medico.idMedico,
      this.paciente.idPaciente,
      this.diagnosticoPaciente.dpMedicacion,
      this.diagnosticoPaciente.dpObservacion
    ).subscribe(data =>{
        alert("HISTORIAL CLINICO CREADO EXITOSAMENTE");
        this.route.navigate(["/signosVitales",this.id])
      }
    )
  }
}
