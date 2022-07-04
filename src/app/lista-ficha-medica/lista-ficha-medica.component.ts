import { Component, OnInit } from '@angular/core';
import {
  DiagnosticoPacienteControllerService,
  HistoriaClinicaControllerService, MedicoControllerService,
  PacienteControllerService,
  TblDepartamento,
  TblHistoriaClinica,
  TblHospital,
  TblMedico,
  TblPaciente,
  TblPersona
} from "../../Rest";
import {TblDiagnosticoPaciente} from "../../Rest/model/tblDiagnosticoPaciente";
import {Router} from "@angular/router";

@Component({
  selector: 'app-lista-ficha-medica',
  templateUrl: './lista-ficha-medica.component.html',
  styleUrls: ['./lista-ficha-medica.component.scss']
})
export class ListaFichaMedicaComponent implements OnInit {

  listHistoriaClinica: TblHistoriaClinica[] =[]
  historiaClinica: TblHistoriaClinica = {}
  listPaciente: TblPaciente[] = []


  constructor(private historiaClinicaService: HistoriaClinicaControllerService,
              private  pacienteService: PacienteControllerService,
              ) { }

  ngOnInit(): void {
    this.cargarHistorialClinico();
  }

  cargarHistorialClinico(){

    this.historiaClinicaService.listHistoriaClinicaFindAllUsingGET().subscribe(data=>{
      this.listHistoriaClinica = data
    });
  }

}
