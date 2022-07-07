import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { BasicErrorControllerService } from './api/basicErrorController.service';
import { CitasControllerService } from './api/citasController.service';
import { DiagnosticoPacienteControllerService } from './api/diagnosticoPacienteController.service';
import { DiagnosticoSvControllerService } from './api/diagnosticoSvController.service';
import { HistoriaClinicaControllerService } from './api/historiaClinicaController.service';
import { MedicoControllerService } from './api/medicoController.service';
import { PacienteControllerService } from './api/pacienteController.service';
import { RolControllerService } from './api/rolController.service';
import { UsuarioControllerService } from './api/usuarioController.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    BasicErrorControllerService,
    CitasControllerService,
    DiagnosticoPacienteControllerService,
    DiagnosticoSvControllerService,
    HistoriaClinicaControllerService,
    MedicoControllerService,
    PacienteControllerService,
    RolControllerService,
    UsuarioControllerService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders <any>{
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
