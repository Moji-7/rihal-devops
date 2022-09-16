import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SortDirection } from '@angular/material/sort';
import { studentClassesDto,SearchStudentClassesDto, StudentSearchDto, StudentSummeryInfo } from '@rihal/data-models';
import { environment } from 'apps/admin-portal/src/environments/environment';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseURL = `http://localhost:3333/api/student`;
 // private baseURL =environment.apiUrl+"/api/student";// `http://localhost:3333/api/student`;
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
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public getStudentClasses(sort: string, order: SortDirection, page: number, query: string):
   Observable<SearchStudentClassesDto> {
    // const options = {
    //   params: new HttpParams({ fromString: '_page=1&_limit=20' }),
    // };
    return this.http
      .post<SearchStudentClassesDto>(`${this.baseURL}/search?sort=${sort}&order=${order}&page=${page + 1}&query=${query}`, null)
      .pipe(retry(3), catchError(this.handleError));
    //return this.httpClient.get(this.REST_API_SERVER, options).pipe(retry(3), catchError(this.handleError));
  }
  public find(studentId: number) {
    return this.http
      .get<studentClassesDto>(`${this.baseURL}/${studentId}`)
      .pipe(retry(3), catchError(this.handleError));
    //return this.httpClient.get(this.REST_API_SERVER, options).pipe(retry(3), catchError(this.handleError));
  }

  createStudentClass(params: any) {
    return this.http.post(this.baseURL, params).pipe(
      catchError(this.handleError));
  }

  updateStudentClass(id: string, params: any) {
    return this.http.put(`${this.baseURL}/${id}`, params).pipe(
      catchError(this.handleError));
  }

  deleteStudentClass(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`).pipe(
      catchError(this.handleError));
  }
}
