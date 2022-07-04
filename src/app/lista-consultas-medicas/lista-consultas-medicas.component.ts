import { Component, OnInit } from '@angular/core';
import {CitasControllerService, TblMedico, TblPaciente} from "../../Rest";
import {TblCitas} from "../../Rest/model/tblCitas";



@Component({
  selector: 'app-lista-consultas-medicas',
  templateUrl: './lista-consultas-medicas.component.html',
  styleUrls: ['./lista-consultas-medicas.component.scss']
})
export class ListaConsultasMedicasComponent implements OnInit {

  listcitasMedico: TblCitas[] = [];
  constructor(
    private citasService: CitasControllerService,
  ) { }

  ngOnInit(): void {
    this.cargarCitas();
  }

  cargarCitas(){
    this.citasService.listCitasUsingGET().subscribe(data=>{
      this.listcitasMedico = data;
      console.log(data)
    });

  }


  eliminarCita(paciente: TblCitas) {
    if (paciente != null){
      this.citasService.cancelarCitasUsingPUT(paciente.idCita).subscribe(data=>{
        paciente.citaEstado = 'CANCELADO'
      });
    }
  }
}
