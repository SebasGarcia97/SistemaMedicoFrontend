import { Component, OnInit } from '@angular/core';
import {PacienteControllerService, TblPaciente, TblPersona} from "../../Rest";
import {Router} from "@angular/router";
@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.scss']
})
export class ListaPacientesComponent implements OnInit {

  listPaciente: TblPaciente[] = [];
  tblPersona: TblPersona[] = [];

  constructor(private  pacienteService: PacienteControllerService, private  route: Router) { }
  ngOnInit(): void {
    this.cargarPacientes();
  }

  cargarPacientes(){
    this.pacienteService.listPacienteUsingGET().subscribe(data=>{
      this.listPaciente = data;
    });
  }

  eliminarUsuario(paciente: TblPaciente) {
    if (paciente != null){
      this.pacienteService.updatePacienteInactivoUsingPUT(paciente.tblPersona?.perCedula).subscribe(data =>{
        paciente.estadoPaciente = false ;
      });
    }
  }
}
