import { Component, OnInit } from '@angular/core';
import {TblDiagnosticoPaciente} from "../../Rest/model/tblDiagnosticoPaciente";
import {
  DiagnosticoPacienteControllerService,
  DiagnosticoSvControllerService, HistoriaClinicaControllerService,
  TblDiagnosticoSVPaciente, TblHistoriaClinica, TblPaciente, TblSignosVitales
} from "../../Rest";
import {ActivatedRoute, Router} from "@angular/router";
import {ThisReceiver} from "@angular/compiler";

@Component({
  selector: 'app-formulario-signos-vitales',
  templateUrl: './formulario-signos-vitales.component.html',
  styleUrls: ['./formulario-signos-vitales.component.scss']
})
export class FormularioSignosVitalesComponent implements OnInit {

  diagnosticoPaciente: TblDiagnosticoPaciente = {}
  diagnosticoSVPaciente: TblDiagnosticoSVPaciente = {}
  historiaClinica: TblHistoriaClinica = {}

  listDiagnosticoPaciente: TblDiagnosticoPaciente[] = []
  signosVitales: TblSignosVitales = {}

  listSignosVitales: any =[{
    svNombre:"Temperatura Alta",
    idSignosVitales: 1
  },
    {
      svNombre:"Temperatura Media",
      idSignosVitales: 2
    },
    {
      svNombre:"Temperatura Baja",
      idSignosVitales: 3
    }]


  id: string | null ;
  constructor(
    private diagnosticoPacienteService: DiagnosticoPacienteControllerService,
    private diagnosticoSVService:DiagnosticoSvControllerService,
    private historiaClinicaService: HistoriaClinicaControllerService,
    private rutaActiva: ActivatedRoute,
    private router:Router,
  ) {
    this.id = this.rutaActiva.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    const val = Number(this.id);
    this.diagnosticoPacienteService.findHistoriaClinicaUsingGET(val).subscribe(data => {

      this.listDiagnosticoPaciente = data


      console.log(this.listDiagnosticoPaciente)


    });

  }

  crearSignosVitales() {
    this.diagnosticoSVService.postDiagnosticoUsingPOST(
      this.diagnosticoSVPaciente.dsvDetalle,
      this.diagnosticoSVPaciente.devEstado,
      this.diagnosticoPaciente.idDiagnosticoPaciente,
      this.signosVitales.idSignosVitales,
    ).subscribe(data=> {
      this.diagnosticoSVPaciente = data;
      alert("SIGNOS VITALES AGREGADOS AL PACIENTE EXITOSAMENTE");
      this.router.navigate(["/listaFichaMedica"])
    });



  }
}
