import {Component, Input} from '@angular/core';
import {BodyComponent} from "./body/body.component";
import {MedicoControllerService, TblMedico} from "../Rest";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SistemaMedico';

  @Input()
  isLogin: Boolean= false;

  constructor(

  ) {

    let varSession = sessionStorage.getItem('estado');
    this.isLogin = varSession?.toLowerCase()=='true';



  }

}


