import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {
  MedicoControllerService,
  TblMedico, TblUsuario,
  UsuarioControllerService
} from "../../Rest";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogin = {
    "username": "",
    "password": ""
  }
  userSingUp = {
    "username": "",
    "password": "",
    "confirmPassword": "",
    "idMedico": 0
  }
  listMedicos: TblMedico [] = []
  usuario: TblUsuario = {}
  constructor(private usuarioService: UsuarioControllerService, private medicoService:MedicoControllerService, private  route: Router) {
    sessionStorage.removeItem('estado')
    sessionStorage.setItem('estado', 'false')


  }
  ngOnInit(): void {

    this.medicoService.findByMedicoDepartamentoUsingGET(1).subscribe(
      data => {
          this.listMedicos = data;
      });
  }
  login() {
    this.usuarioService.getUsuarioUsingGET(this.userLogin.username,this.userLogin.password).subscribe(data =>{

      console.log(data.tblMedico.tblRol?.idRol)
      const id = data.tblMedico.tblRol?.idRol;

        if(data.tblMedico.tblRol?.idRol == 1 ){
          alert("LOGEO EXITOSO MEDICO");
          sessionStorage.setItem('estado', 'true')
          sessionStorage.setItem('id','1')
          this.route.navigate(['/inicio']).then(value => {
            window.location.reload();})
        }  else if (data.tblMedico.tblRol?.idRol == 2){
          alert("LOGEO EXITOSO ENFERMERO");
          sessionStorage.setItem('estado', 'true')
          sessionStorage.setItem('id','2')
          this.route.navigate(['/inicio']).then(value => {
            window.location.reload();})
        }
    });
  }
  createUser() {
    if(this.userSingUp.password == this.userSingUp.confirmPassword && ""!= this.userSingUp.username && this.userSingUp.idMedico != 0 ){
      this.usuarioService.postUsuarioUsingPOST(this.userSingUp.idMedico,this.userSingUp.username,this.userSingUp.password).subscribe(data => {
        alert("REGISTRO EXITOSO");
        this.route.navigate(['/login']);
      });
    }else {
      alert("ERROR DE REGISTRO");
    }
  }
}
