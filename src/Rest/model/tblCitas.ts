/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { TblMedico } from './tblMedico';


export interface TblCitas {
  idCita?: number;
  citaApellidoPaciente?: string;
  citaCedulaPaciente?: string;
  citaNombrePaciente?: string;
  citaTelefonoPaciente?: string;
  citaEstado?: string;
  citaFecha?: string;
  fechaHoraCita?: string;
  citaHora?: string;
  tblMedico?: TblMedico;
}
