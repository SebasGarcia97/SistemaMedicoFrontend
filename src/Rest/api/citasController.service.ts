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
export class CitasControllerService {

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
     * ActualizarCitas
     *
     * @param citaFecha citaFecha
     * @param citaHora citaHora
     * @param idCita idCita
     * @param idMedico idMedico
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public actualizarCitasUsingPUT(citaFecha?: string, citaHora?: string, idCita?: number, idMedico?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public actualizarCitasUsingPUT(citaFecha?: string, citaHora?: string, idCita?: number, idMedico?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public actualizarCitasUsingPUT(citaFecha?: string, citaHora?: string, idCita?: number, idMedico?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public actualizarCitasUsingPUT(citaFecha?: string, citaHora?: string, idCita?: number, idMedico?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (citaFecha !== undefined && citaFecha !== null) {
            queryParameters = queryParameters.set('citaFecha', <any>citaFecha);
        }
        if (citaHora !== undefined && citaHora !== null) {
            queryParameters = queryParameters.set('citaHora', <any>citaHora);
        }
        if (idCita !== undefined && idCita !== null) {
            queryParameters = queryParameters.set('idCita', <any>idCita);
        }
        if (idMedico !== undefined && idMedico !== null) {
            queryParameters = queryParameters.set('idMedico', <any>idMedico);
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

        return this.httpClient.request<any>('put',`${this.basePath}/citas/ActualizarCitas`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }



    /**
     * CancelarCitas
     *
     * @param idCita idCita
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public cancelarCitasUsingPUT(idCita?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public cancelarCitasUsingPUT(idCita?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public cancelarCitasUsingPUT(idCita?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public cancelarCitasUsingPUT(idCita?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (idCita !== undefined && idCita !== null) {
            queryParameters = queryParameters.set('idCita', <any>idCita);
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

        return this.httpClient.request<any>('put',`${this.basePath}/citas/CancelarCitas`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * CitasByMedico
     *
     * @param idMedico idMedico
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public citasByMedicoUsingGET(idMedico?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public citasByMedicoUsingGET(idMedico?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public citasByMedicoUsingGET(idMedico?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public citasByMedicoUsingGET(idMedico?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (idMedico !== undefined && idMedico !== null) {
            queryParameters = queryParameters.set('idMedico', <any>idMedico);
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

        return this.httpClient.request<any>('get',`${this.basePath}/citas/CitasByMedico`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * EliminarCitas
     *
     * @param idCita idCita
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public eliminarCitasUsingDELETE(idCita?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public eliminarCitasUsingDELETE(idCita?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public eliminarCitasUsingDELETE(idCita?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public eliminarCitasUsingDELETE(idCita?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (idCita !== undefined && idCita !== null) {
            queryParameters = queryParameters.set('idCita', <any>idCita);
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

        return this.httpClient.request<any>('delete',`${this.basePath}/citas/EliminarCitas`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * postCitas
     *
     * @param apellido apellido
     * @param cedula cedula
     * @param citaFecha citaFecha
     * @param citaHora citaHora
     * @param idMedico idMedico
     * @param nombre nombre
     * @param telefono telefono
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postCitasUsingPOST(apellido?: string, cedula?: string, citaFecha?: string, citaHora?: string, idMedico?: number, nombre?: string, telefono?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postCitasUsingPOST(apellido?: string, cedula?: string, citaFecha?: string, citaHora?: string, idMedico?: number, nombre?: string, telefono?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postCitasUsingPOST(apellido?: string, cedula?: string, citaFecha?: string, citaHora?: string, idMedico?: number, nombre?: string, telefono?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postCitasUsingPOST(apellido?: string, cedula?: string, citaFecha?: string, citaHora?: string, idMedico?: number, nombre?: string, telefono?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {








        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (apellido !== undefined && apellido !== null) {
            queryParameters = queryParameters.set('apellido', <any>apellido);
        }
        if (cedula !== undefined && cedula !== null) {
            queryParameters = queryParameters.set('cedula', <any>cedula);
        }
        if (citaFecha !== undefined && citaFecha !== null) {
            queryParameters = queryParameters.set('citaFecha', <any>citaFecha);
        }
        if (citaHora !== undefined && citaHora !== null) {
            queryParameters = queryParameters.set('citaHora', <any>citaHora);
        }
        if (idMedico !== undefined && idMedico !== null) {
            queryParameters = queryParameters.set('idMedico', <any>idMedico);
        }
        if (nombre !== undefined && nombre !== null) {
            queryParameters = queryParameters.set('nombre', <any>nombre);
        }
        if (telefono !== undefined && telefono !== null) {
            queryParameters = queryParameters.set('telefono', <any>telefono);
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

        return this.httpClient.request<any>('post',`${this.basePath}/citas/agendar`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * UpdateCitas
     *
     * @param apellido apellido
     * @param cedula cedula
     * @param citaFecha citaFecha
     * @param citaHora citaHora
     * @param idCita idCita
     * @param idMedico idMedico
     * @param nombre nombre
     * @param telefono telefono
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateCitasUsingPUT(apellido?: string, cedula?: string, citaFecha?: string, citaHora?: string, idCita?: number, idMedico?: number, nombre?: string, telefono?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateCitasUsingPUT(apellido?: string, cedula?: string, citaFecha?: string, citaHora?: string, idCita?: number, idMedico?: number, nombre?: string, telefono?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateCitasUsingPUT(apellido?: string, cedula?: string, citaFecha?: string, citaHora?: string, idCita?: number, idMedico?: number, nombre?: string, telefono?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateCitasUsingPUT(apellido?: string, cedula?: string, citaFecha?: string, citaHora?: string, idCita?: number, idMedico?: number, nombre?: string, telefono?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {









        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (apellido !== undefined && apellido !== null) {
            queryParameters = queryParameters.set('apellido', <any>apellido);
        }
        if (cedula !== undefined && cedula !== null) {
            queryParameters = queryParameters.set('cedula', <any>cedula);
        }
        if (citaFecha !== undefined && citaFecha !== null) {
            queryParameters = queryParameters.set('citaFecha', <any>citaFecha);
        }
        if (citaHora !== undefined && citaHora !== null) {
            queryParameters = queryParameters.set('citaHora', <any>citaHora);
        }
        if (idCita !== undefined && idCita !== null) {
            queryParameters = queryParameters.set('idCita', <any>idCita);
        }
        if (idMedico !== undefined && idMedico !== null) {
            queryParameters = queryParameters.set('idMedico', <any>idMedico);
        }
        if (nombre !== undefined && nombre !== null) {
            queryParameters = queryParameters.set('nombre', <any>nombre);
        }
        if (telefono !== undefined && telefono !== null) {
            queryParameters = queryParameters.set('telefono', <any>telefono);
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

        return this.httpClient.request<any>('put',`${this.basePath}/citas/UpdateCitas`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }


  /**
   * listCita
   *
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public listCitasUsingGET(observe?: 'body', reportProgress?: boolean): Observable<any>;
  public listCitasUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
  public listCitasUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
  public listCitasUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

    return this.httpClient.request<any>('get',`${this.basePath}/citas/list`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * citaByID
   *
   * @param idCita idCita
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public citaByIDUsingGET(idCita?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
  public citaByIDUsingGET(idCita?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
  public citaByIDUsingGET(idCita?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
  public citaByIDUsingGET(idCita?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


    let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
    if (idCita !== undefined && idCita !== null) {
      queryParameters = queryParameters.set('idCita', <any>idCita);
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
    return this.httpClient.request<any>('get',`${this.basePath}/citas/getCitaByID`,
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