import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {PacienteControllerService, TblPaciente} from "../../Rest";
import {TblPersona} from "../../Rest";
import {Router} from "@angular/router";



@Component({
  selector: 'app-formulario-paciente',
  templateUrl: './formulario-paciente.component.html',
  styleUrls: ['./formulario-paciente.component.scss']
})
export class FormularioPacienteComponent implements OnInit {

  lista: any;
  id: string | null;
  persona: TblPersona = {}
  paciente: TblPaciente = {}



  constructor(private pacienteService: PacienteControllerService,
              private router:Router,
              private rutaActiva: ActivatedRoute) {
    this.id = this.rutaActiva.snapshot.paramMap.get('id');
  }


  ngOnInit(): void {
    if (this.id != null) {
      const val = Number(this.id);
      this.pacienteService.pacientesByIDUsingGET(val).subscribe(data => {
        this.paciente = data;
        //OBJETO A CADENA DE STRING
        var personObjecj = JSON.stringify(data);
        //CADEANA DE STRING A VALOR
        var valor = JSON.parse(personObjecj);
        this.persona.perCedula = valor.tblPersona.perCedula;
        this.persona.perApellido = valor.tblPersona.perApellido;
        this.persona.perEmail = valor.tblPersona.perEmail;
        this.persona.perDireccion = valor.tblPersona.perDireccion;
        this.persona.perFechaNac = valor.tblPersona.perFechaNac
        this.persona.perNombre = valor.tblPersona.perNombre;
        this.persona.perTelefono = valor.tblPersona.perTelefono;
      });
    }
  }

  crearPaciente(){
    this.paciente.estadoPaciente = true;
    this.pacienteService.postPacienteUsingPOST(
      this.persona.perApellido,
      this.persona.perCedula,
      this.persona.perEmail,
      this.persona.perDireccion,
      this.persona.perFechaNac,
      this.persona.perNombre,
      this.paciente.pacDiscapacidad,
      this.persona.perTelefono).subscribe(data =>{
        alert("PACIENTE CREADO EXITOSAMENTE");
        this.router.navigate(["/listaPacientes"])
    });
  }


  editarPaciente() {
    this.pacienteService.actualizarPacienteUsingPUT(
      this.persona.perApellido,
      this.persona.perCedula,
      this.persona.perEmail,
      this.persona.perDireccion,
      this.persona.perFechaNac,
      this.persona.perNombre,
      this.paciente.pacDiscapacidad,
      this.persona.perTelefono).subscribe(data =>{
      alert("PACIENTE EDITADO EXITOSAMENTE");
      this.router.navigate(["/listaPacientes"])
    });
  }
}
