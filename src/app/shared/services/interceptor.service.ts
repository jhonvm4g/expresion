import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environments';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private toastr: ToastrService,
    private router: Router,
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('loginToken');
    
    if(token != null){
    request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`),
        });
    }
    request = request.clone({
      headers: request.headers.set('Accept', 'application/json'),
    });
    request = request.clone({
      headers: request.headers.set('Cache-Control', 'no-cache'),
    });
    request = request.clone({
      headers: request.headers.set('Pragma', 'no-cache'),
    });
    request = request.clone({
      headers: request.headers.set('Content-Type', 'application/json'),
    });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.statusText === 'Unknown Error' || error.status === 500 || error.status === 504 || error.status === 404 || error.status === 400) {
            localStorage.clear();
            console.log(error.message)
        }
        else if(error.status === 401)
        {
            this.toastr.info('Su sesión ha expirado.');
            console.log(error.message)
        }
        return throwError(error);
      })
    );
  }
}
