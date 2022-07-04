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
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';


import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class DiagnosticoSvControllerService {

    protected basePath = '//localhost:9090/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * postDiagnostico
     *
     * @param detalle detalle
     * @param estado estado
     * @param idDiagnosticoPaciente idDiagnosticoPaciente
     * @param idSignosVitales idSignosVitales
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postDiagnosticoUsingPOST(detalle?: string, estado?: string, idDiagnosticoPaciente?: number, idSignosVitales?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postDiagnosticoUsingPOST(detalle?: string, estado?: string, idDiagnosticoPaciente?: number, idSignosVitales?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postDiagnosticoUsingPOST(detalle?: string, estado?: string, idDiagnosticoPaciente?: number, idSignosVitales?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postDiagnosticoUsingPOST(detalle?: string, estado?: string, idDiagnosticoPaciente?: number, idSignosVitales?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (detalle !== undefined && detalle !== null) {
            queryParameters = queryParameters.set('detalle', <any>detalle);
        }
        if (estado !== undefined && estado !== null) {
            queryParameters = queryParameters.set('estado', <any>estado);
        }
        if (idDiagnosticoPaciente !== undefined && idDiagnosticoPaciente !== null) {
            queryParameters = queryParameters.set('idDiagnosticoPaciente', <any>idDiagnosticoPaciente);
        }
        if (idSignosVitales !== undefined && idSignosVitales !== null) {
            queryParameters = queryParameters.set('idSignosVitales', <any>idSignosVitales);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('post',`${this.basePath}/SignosVitales/post`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}