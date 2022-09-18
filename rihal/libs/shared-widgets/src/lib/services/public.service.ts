import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { catchError, retry, throwError,map,share } from 'rxjs';
import { APP_CONFIG } from '@rihal/app-config';


@Injectable({
  providedIn: 'root',
})
export class PublicService {

  //private baseURL =  environment.apiUrl+'';
  studentClass: any;
  constructor(private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: any)  {

      console.log(this.appConfig.apiUrl); // This will print `http://localhost:3333/api`
  }
  //get all users  details
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    //window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getall(entityName: string) {
    return this.http
      .get<any[]>(`${this.appConfig.apiUrl}/${entityName}`)
      .pipe(catchError(this.handleError));
  }

  find(entityName: string, id: number) {
    return this.http
      .get<any>(`${this.appConfig.apiUrl}/${entityName}/find/${id}`)
      .pipe(retry(3),catchError(this.handleError))
    ;
  }

  create(entityName: string, params: any) {
    return this.http.post(this.appConfig.apiUrl, params).pipe(
      catchError(this.handleError));
  }

  update(entityName: string, id: string, params: any) {
    return this.http.put(`${this.appConfig.apiUrl}/${entityName}/find/${id}`, params).pipe(
      catchError(this.handleError));
  }

  delete(entityName: string, id: number) {
    return this.http.delete(`${this.appConfig.apiUrl}/${entityName}/find/${id}`).pipe(
      catchError(this.handleError));
  }


}
