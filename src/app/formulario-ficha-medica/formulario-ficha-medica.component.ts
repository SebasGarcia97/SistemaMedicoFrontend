import { Component, OnInit } from '@angular/core';
import {
  DiagnosticoPacienteControllerService,
  HistoriaClinicaControllerService, MedicoControllerService,
  PacienteControllerService, TblDepartamento,
  TblHistoriaClinica, TblHospital, TblMedico,
  TblPaciente,
  TblPersona
} from "../../Rest";
import {ActivatedRoute, Router} from "@angular/router";
import {TblDiagnosticoPaciente} from "../../Rest/model/tblDiagnosticoPaciente";
@Component({
  selector: 'app-formulario-ficha-medica',
  templateUrl: './formulario-ficha-medica.component.html',
  styleUrls: ['./formulario-ficha-medica.component.scss']
})
export class FormularioFichaMedicaComponent implements OnInit {

  persona: TblPersona = {}
  paciente: TblPaciente = {}
  historiaClinica: TblHistoriaClinica = {}
  diagnosticoPaciente: TblDiagnosticoPaciente = {}
  departamento: TblDepartamento = {}
  hospital: TblHospital = {}

  userSingUp = {
    "username": "",
    "password": "",
    "confirmPassword": "",
    "idMedico": 0
  }

  listMedicos: TblMedico[] = []
  listPaciente: TblPaciente[] = []

  listHospital: any =[{
    name:"Hospital del Rio",
    idHospital: 1
  },
  {  name:"Hospital Regional",
    idHospital: 2
  } ]

  listDepartamento: any =[{
    name:"Medicina General",
    idDepartamento: 1
  },
    {  name:"Cardiologia",
      idDepartamento: 2
    } ]


  constructor(private pacienteService: PacienteControllerService,
              private historiaClinicaService: HistoriaClinicaControllerService,
              private medicoService:MedicoControllerService,
              private diagnosticoPacienteService:DiagnosticoPacienteControllerService,
              private router:Router,
           ) {


  }

  ngOnInit(): void {
    this.medicoService.findByMedicoDepartamentoUsingGET(1).subscribe(
      data => {
        this.listMedicos = data;
        console.log(this.listMedicos);
      }
    );
    this.pacienteService.listPacienteUsingGET1(true).subscribe(
      data=>{
        this.listPaciente = data;
        console.log(this.listPaciente);
      }
    );



  }


  crearFichaMedica(){
    this.historiaClinicaService.postUsingPOST(
      this.historiaClinica.hcFecha,
      this.departamento.idDepartamento,
      this.paciente.idPaciente,
    ).subscribe(data =>{
      console.log(data)
      alert("HISTORIAL CLINICO CREADO EXITOSAMENTE");
      this.router.navigate(["/listaFichaMedica"])
      }
    )
  }
}
