import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentSummeryInfo } from '@rihal/data-models';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private baseURL = `http://localhost:3333/api/reports`;

  constructor(private http: HttpClient) {}
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  public fetchCountBy(joinTable:string,studentId:number) {
    return this.http.get<StudentSummeryInfo[]>(`${this.baseURL}/${joinTable}`, {
      params: { joinTable: joinTable,studentId:studentId }
    }).pipe(
      catchError(this.handleError));
  }
  //StudentSummeryInfo==> dto

  public averageStudentsAge() {
    return this.http.get<StudentSummeryInfo[]>(`${this.baseURL}/ageAverage`).pipe(
      catchError(this.handleError));;
  }
}
