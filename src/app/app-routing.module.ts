import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from "./login/login.component";
import {FormularioPacienteComponent} from "./formulario-paciente/formulario-paciente.component";
import {ListaPacientesComponent} from "./lista-pacientes/lista-pacientes.component";
import {BodyComponent} from "./body/body.component";
import {FormularioFichaMedicaComponent} from "./formulario-ficha-medica/formulario-ficha-medica.component";
import {ListaFichaMedicaComponent} from "./lista-ficha-medica/lista-ficha-medica.component";
import {
  FormularioDiagnosticoPacienteComponent
} from "./formulario-diagnostico-paciente/formulario-diagnostico-paciente.component";
import {FormularioSignosVitalesComponent} from "./formulario-signos-vitales/formulario-signos-vitales.component";
import {TablaFichaMedicaComponent} from "./tabla-ficha-medica/tabla-ficha-medica.component";
import {HeaderComponent} from "./header/header.component";
import {ListaConsultasMedicasComponent} from "./lista-consultas-medicas/lista-consultas-medicas.component";
import {ConsultasMedicasComponent} from "./consultas-medicas/consultas-medicas.component";

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'inicio', component:BodyComponent},
  {path:'formularioPaciente', component:FormularioPacienteComponent},
  {path:'formularioPaciente/:id', component:FormularioPacienteComponent},
  {path:"listaPacientes", component:ListaPacientesComponent},
  {path:"formularioFichaMedica", component:FormularioFichaMedicaComponent},
  {path:"listaFichaMedica", component:ListaFichaMedicaComponent},
  {path:'diagnosticoPaciente/:id', component:FormularioDiagnosticoPacienteComponent},
  {path:'signosVitales/:id', component:FormularioSignosVitalesComponent},
  {path:'tablaFichaMedica/:id', component:TablaFichaMedicaComponent},
  {path:'listaConsultaMedica', component: ListaConsultasMedicasComponent},
  {path:'consultaMedicas/:id', component:ConsultasMedicasComponent},
  {path:'consultaMedicas', component:ConsultasMedicasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
