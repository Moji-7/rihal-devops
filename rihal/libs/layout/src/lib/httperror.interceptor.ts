import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AlertService } from './containers/layout/alert/alert.service';
import { SpinnerService } from './containers/layout/spinner.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private alertService: AlertService,
    private spinnerService: SpinnerService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinnerService.show();
    return next
      .handle(request)
      .pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.spinnerService.hide();
          }
        })
      )
      .pipe(
        catchError((err) => {
          const error = err.error?.message || err.statusText;
          this.alertService.error(error);
          this.spinnerService.hide();
          console.error(err);
          return throwError(error);
        })
      );
  }
}
