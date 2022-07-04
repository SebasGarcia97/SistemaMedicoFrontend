import {Component, Input, OnInit} from '@angular/core';
import {MedicoControllerService, TblMedico, TblRol} from "../../Rest";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  valor: string | null
  constructor(

  ) {
    let varSession = sessionStorage.getItem('id');
    this.valor = varSession

    console.log(this.valor)
  }

  ngOnInit(): void {




  }

}
