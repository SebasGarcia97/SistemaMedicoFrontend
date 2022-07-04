import { Component, OnInit } from '@angular/core';
import {CitasControllerService, MedicoControllerService, TblMedico} from "../../Rest";
import {TblCitas} from "../../Rest/model/tblCitas";
import {ActivatedRoute, Router} from "@angular/router";
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-consultas-medicas',
  templateUrl: './consultas-medicas.component.html',
  styleUrls: ['./consultas-medicas.component.scss']
})
export class ConsultasMedicasComponent implements OnInit {

  citasPaciente: TblCitas = {}
  medico: TblMedico = {}
  listMedicos: TblMedico[] = []
  listCitas: TblCitas[] = []
  id: string | null;


  constructor(
    private citasService: CitasControllerService,
    private medicoService: MedicoControllerService,
    private route: Router,
    private rutaActiva: ActivatedRoute,
    public datepipe: DatePipe
  ) {
    this.id = this.rutaActiva.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {

    this.medicoService.findByMedicoDepartamentoUsingGET(1).subscribe(
      data => {
        this.listMedicos = data;
      }
    );

    if (this.id != null) {
      const val = Number(this.id);
      this.citasService.citaByIDUsingGET(val).subscribe(data => {
        this.listCitas = data;
        //OBJETO A CADENA DE STRING
        var personObjecj = JSON.stringify(data);
        //CADEANA DE STRING A VALOR
        var valor = JSON.parse(personObjecj);
        this.citasPaciente.idCita = valor.idCita
        this.citasPaciente.citaCedulaPaciente = valor.citaCedulaPaciente
        this.citasPaciente.citaNombrePaciente = valor.citaNombrePaciente
        this.citasPaciente.citaApellidoPaciente = valor.citaApellidoPaciente
        this.citasPaciente.citaTelefonoPaciente = valor.citaTelefonoPaciente
        let fecha = this.datepipe.transform(valor.fechaHoraCita, 'yyyy-MM-dd');
        let hora = this.datepipe.transform(valor.fechaHoraCita, 'hh:mm:ss');
        valor.citaFecha = fecha
        valor.citaHora   = hora
        this.citasPaciente.citaFecha = valor.citaFecha
        this.citasPaciente.citaHora = valor.citaHora

        console.log(fecha)
        console.log(hora)

      });
    }

  }

  crearCita() {
    this.citasService.postCitasUsingPOST(
      this.citasPaciente.citaApellidoPaciente,
      this.citasPaciente.citaCedulaPaciente,
      this.citasPaciente.citaFecha,
      this.citasPaciente.citaHora,
      this.medico.idMedico,
      this.citasPaciente.citaNombrePaciente,
      this.citasPaciente.citaTelefonoPaciente
    ).subscribe(data => {
        console.log(data)
        alert("CITA CREADA EXITOSAMENTE");
        this.route.navigate(["/listaConsultaMedica"])
      }
    )
  }

  editarCita() {
    this.citasService.updateCitasUsingPUT(
      this.citasPaciente.citaApellidoPaciente,
      this.citasPaciente.citaCedulaPaciente,
      this.citasPaciente.citaFecha,
      this.citasPaciente.citaHora,
      this.citasPaciente.idCita,
      this.medico.idMedico,
      this.citasPaciente.citaNombrePaciente,
      this.citasPaciente.citaTelefonoPaciente
    ).subscribe(data => {
        console.log(data)
        alert("CITA MODIFICADA EXITOSAMENTE");
        this.route.navigate(["/listaConsultaMedica"])
      }
    )

  }
}
