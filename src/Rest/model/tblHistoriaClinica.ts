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
import { TblDepartamento } from './tblDepartamento';
import { TblPaciente } from './tblPaciente';

export interface TblHistoriaClinica { 
    hcFecha?: string;
    idHistoriaClinica?: number;
    tblDepartamento?: TblDepartamento;
    tblPaciente?: TblPaciente;
}