import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { rutaPrincipal } from 'src/app/constants/rutas';
import { AutorizacionService } from '../services/autorizacion.service';
import { environment } from 'src/environments/environments';

@Injectable({
    providedIn: 'root'
})
export class GeneralService {

    constructor(
        private http: HttpClient,
        private autorizacionService: AutorizacionService,
    ) {
    }

    login(usuario: any): Observable<any> {
        const headers: any = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        return this.http.post<any>(environment.serverUrlApi + rutaPrincipal.login, usuario,
            { headers })
            .pipe(
                retry(1),
                catchError(this.autorizacionService.errorHandl)
            );
    }

    obtenerLoginToken(objeto: any): Observable<any> {
        const headers: any = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        return this.http.post<any>(environment.apiAuthentication, objeto,
            { headers })
            .pipe(
                retry(1),
                catchError(this.autorizacionService.errorHandl)
            );
    }

    registrarFormulario(formulario: any): Observable<any> {
        const headers: any = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        return this.http.post<any>(environment.serverUrlApi + rutaPrincipal.registrarFormulario, formulario,
            { headers })
            .pipe(
                retry(1),
                catchError(this.autorizacionService.errorHandl)
            );
    }

    registrarUsuario(usuario: any): Observable<any> {
        const headers: any = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        return this.http.post<any>(environment.serverUrlApi + rutaPrincipal.registrarUsuario, usuario,
            { headers })
            .pipe(
                retry(1),
                catchError(this.autorizacionService.errorHandl)
            );
    }

    listarPaises(): Observable<any> {
        const headers: any = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        return this.http.get<any>(environment.serverUrlApi + rutaPrincipal.listarPaises,
            { headers })
            .pipe(
                retry(1),
                catchError(this.autorizacionService.errorHandl)
            );
    }

    listarExperiencias(usuario: any): Observable<any> {
        const headers: any = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        return this.http.post<any>(environment.serverUrlApi + rutaPrincipal.listarExperiencias, usuario,
            { headers })
            .pipe(
                retry(1),
                catchError(this.autorizacionService.errorHandl)
            );
    }
}
