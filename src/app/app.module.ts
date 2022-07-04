import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//MODULOS
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

//COMPONENTE
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {LoginComponent} from "./login/login.component";
import { FooterComponent } from './footer/footer.component';
import { FormularioPacienteComponent } from './formulario-paciente/formulario-paciente.component';
//Services
import {HttpClientModule} from "@angular/common/http";
import {
  CitasControllerService,
  DiagnosticoPacienteControllerService, DiagnosticoSvControllerService,
  MedicoControllerService,
  PacienteControllerService,
  UsuarioControllerService
} from "../Rest";
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { BodyComponent } from './body/body.component';
import { FormularioFichaMedicaComponent } from './formulario-ficha-medica/formulario-ficha-medica.component';
import { FormularioSignosVitalesComponent } from './formulario-signos-vitales/formulario-signos-vitales.component';
import { ListaFichaMedicaComponent } from './lista-ficha-medica/lista-ficha-medica.component';
import {HistoriaClinicaControllerService} from "../Rest";
import { FormularioDiagnosticoPacienteComponent } from './formulario-diagnostico-paciente/formulario-diagnostico-paciente.component';
import { TablaFichaMedicaComponent } from './tabla-ficha-medica/tabla-ficha-medica.component';
import { ConsultasMedicasComponent } from './consultas-medicas/consultas-medicas.component';
import { ListaConsultasMedicasComponent } from './lista-consultas-medicas/lista-consultas-medicas.component';
import {DatePipe} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    FormularioPacienteComponent,
    ListaPacientesComponent,
    BodyComponent,
    FormularioFichaMedicaComponent,
    FormularioSignosVitalesComponent,
    ListaFichaMedicaComponent,
    FormularioDiagnosticoPacienteComponent,
    TablaFichaMedicaComponent,
    ConsultasMedicasComponent,
    ListaConsultasMedicasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],

  providers: [
    UsuarioControllerService,
    MedicoControllerService,
    PacienteControllerService,
    ListaPacientesComponent,
    HistoriaClinicaControllerService,
    DiagnosticoPacienteControllerService,
    DiagnosticoSvControllerService,
    CitasControllerService,
    DatePipe

  ],
  bootstrap: [AppComponent]
})
export class AppModule{ }
