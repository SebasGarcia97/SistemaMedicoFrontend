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
export class UsuarioControllerService {

    protected basePath = '//env-9292028.jelastic.saveincloud.net/';
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
     * findByUsuarioId
     * 
     * @param idMedico idMedico
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findByUsuarioIdUsingGET(idMedico?: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public findByUsuarioIdUsingGET(idMedico?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public findByUsuarioIdUsingGET(idMedico?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public findByUsuarioIdUsingGET(idMedico?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<any>('get',`${this.basePath}/usuario/findByUsuarioId`,
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
     * getUsuario
     * 
     * @param usuNombre usuNombre
     * @param usuPassword usuPassword
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUsuarioUsingGET(usuNombre?: string, usuPassword?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getUsuarioUsingGET(usuNombre?: string, usuPassword?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getUsuarioUsingGET(usuNombre?: string, usuPassword?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getUsuarioUsingGET(usuNombre?: string, usuPassword?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (usuNombre !== undefined && usuNombre !== null) {
            queryParameters = queryParameters.set('usuNombre', <any>usuNombre);
        }
        if (usuPassword !== undefined && usuPassword !== null) {
            queryParameters = queryParameters.set('usuPassword', <any>usuPassword);
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

        return this.httpClient.request<any>('get',`${this.basePath}/usuario/getUsuario`,
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
     * getUsuariobyCedula
     * 
     * @param cedulaMedico cedulaMedico
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUsuariobyCedulaUsingGET(cedulaMedico?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getUsuariobyCedulaUsingGET(cedulaMedico?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getUsuariobyCedulaUsingGET(cedulaMedico?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getUsuariobyCedulaUsingGET(cedulaMedico?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (cedulaMedico !== undefined && cedulaMedico !== null) {
            queryParameters = queryParameters.set('cedulaMedico', <any>cedulaMedico);
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

        return this.httpClient.request<any>('get',`${this.basePath}/usuario/getUsuariobyCedula`,
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
     * postUsuario
     * 
     * @param idMedico idMedico
     * @param usuNombre usuNombre
     * @param usuPassword usuPassword
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postUsuarioUsingPOST(idMedico?: number, usuNombre?: string, usuPassword?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postUsuarioUsingPOST(idMedico?: number, usuNombre?: string, usuPassword?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postUsuarioUsingPOST(idMedico?: number, usuNombre?: string, usuPassword?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postUsuarioUsingPOST(idMedico?: number, usuNombre?: string, usuPassword?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (idMedico !== undefined && idMedico !== null) {
            queryParameters = queryParameters.set('idMedico', <any>idMedico);
        }
        if (usuNombre !== undefined && usuNombre !== null) {
            queryParameters = queryParameters.set('usuNombre', <any>usuNombre);
        }
        if (usuPassword !== undefined && usuPassword !== null) {
            queryParameters = queryParameters.set('usuPassword', <any>usuPassword);
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

        return this.httpClient.request<any>('post',`${this.basePath}/usuario/post`,
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
     * updateUsuario
     * 
     * @param usuNombreActual usuNombreActual
     * @param usuNombreNuevo usuNombreNuevo
     * @param usuPasswordActual usuPasswordActual
     * @param usuPasswordNuevo usuPasswordNuevo
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUsuarioUsingPUT(usuNombreActual?: string, usuNombreNuevo?: string, usuPasswordActual?: string, usuPasswordNuevo?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateUsuarioUsingPUT(usuNombreActual?: string, usuNombreNuevo?: string, usuPasswordActual?: string, usuPasswordNuevo?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateUsuarioUsingPUT(usuNombreActual?: string, usuNombreNuevo?: string, usuPasswordActual?: string, usuPasswordNuevo?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateUsuarioUsingPUT(usuNombreActual?: string, usuNombreNuevo?: string, usuPasswordActual?: string, usuPasswordNuevo?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {





        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (usuNombreActual !== undefined && usuNombreActual !== null) {
            queryParameters = queryParameters.set('usuNombreActual', <any>usuNombreActual);
        }
        if (usuNombreNuevo !== undefined && usuNombreNuevo !== null) {
            queryParameters = queryParameters.set('usuNombreNuevo', <any>usuNombreNuevo);
        }
        if (usuPasswordActual !== undefined && usuPasswordActual !== null) {
            queryParameters = queryParameters.set('usuPasswordActual', <any>usuPasswordActual);
        }
        if (usuPasswordNuevo !== undefined && usuPasswordNuevo !== null) {
            queryParameters = queryParameters.set('usuPasswordNuevo', <any>usuPasswordNuevo);
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

        return this.httpClient.request<any>('put',`${this.basePath}/usuario/putUsuario`,
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
