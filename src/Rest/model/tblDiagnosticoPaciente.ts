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
import { TblPaciente } from './tblPaciente';
import { TblHistoriaClinica } from "./tblHistoriaClinica";


export interface TblDiagnosticoPaciente {
  idDiagnosticoPaciente?: number;
  dpDiagnostico?: string;
  dpFecha?: string;
  dpMedicacion?: string;
  dpObservacion?: string;
  tblHistoriaClinica?: TblHistoriaClinica ;
  tblMedico?: TblMedico ;
  tblPaciente?: TblPaciente;
}
