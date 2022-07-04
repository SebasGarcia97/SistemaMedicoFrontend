import { Component, OnInit } from '@angular/core';
import {
  DiagnosticoPacienteControllerService,
  HistoriaClinicaControllerService,
  PacienteControllerService,
  TblHistoriaClinica,
  TblPaciente
} from "../../Rest";
import {TblDiagnosticoPaciente} from "../../Rest/model/tblDiagnosticoPaciente";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tabla-ficha-medica',
  templateUrl: './tabla-ficha-medica.component.html',
  styleUrls: ['./tabla-ficha-medica.component.scss']
})
export class TablaFichaMedicaComponent implements OnInit {

  listDiagnosticoPaciente: TblDiagnosticoPaciente[] =[]

  id: string | null ;
  constructor(
    private diagnosticoPacienteService: DiagnosticoPacienteControllerService,
    private rutaActiva: ActivatedRoute
  ) {

    this.id = this.rutaActiva.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    this.cargarPaciente();
  }

  cargarPaciente(){
    const val = Number(this.id);
    this.diagnosticoPacienteService.findHistoriaClinicaUsingGET(val).subscribe(data => {
      this.listDiagnosticoPaciente = data;

    });
  }


}
