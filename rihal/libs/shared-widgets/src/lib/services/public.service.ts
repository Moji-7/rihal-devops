import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, retry, throwError,map,share } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class PublicService {
  private baseURL = `http://localhost:3333/api`;
  studentClass: any;
  constructor(private http: HttpClient) {}
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
      .get<any[]>(`${this.baseURL}/${entityName}`)
      .pipe(catchError(this.handleError));
  }

  find(entityName: string, id: number) {
    return this.http
      .get<any>(`${this.baseURL}/${entityName}/find/${id}`)
      .pipe(retry(3),catchError(this.handleError))
    ;
  }

  create(entityName: string, params: any) {
    return this.http.post(this.baseURL, params).pipe(
      catchError(this.handleError));
  }

  update(entityName: string, id: string, params: any) {
    return this.http.put(`${this.baseURL}/${entityName}/find/${id}`, params).pipe(
      catchError(this.handleError));
  }

  delete(entityName: string, id: number) {
    return this.http.delete(`${this.baseURL}/${entityName}/find/${id}`).pipe(
      catchError(this.handleError));
  }


}
