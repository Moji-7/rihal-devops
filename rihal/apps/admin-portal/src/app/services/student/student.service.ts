import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { studentClassesDto, StudentSummeryInfo } from '@rihal/data-models';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseURL = `http://localhost:3333/api/student`;
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

  public getStudentClasses() {
    const options = {
      params: new HttpParams({ fromString: '_page=1&_limit=20' }),
    };
    return this.http
      .post<studentClassesDto[]>(`${this.baseURL}/search`, null)
      .pipe(retry(3), catchError(this.handleError));
    //return this.httpClient.get(this.REST_API_SERVER, options).pipe(retry(3), catchError(this.handleError));
  }
  public find(studentId: number) {
    return this.http
      .get<studentClassesDto>(`${this.baseURL}/find/${studentId}`)
      .pipe(retry(3), catchError(this.handleError));
    //return this.httpClient.get(this.REST_API_SERVER, options).pipe(retry(3), catchError(this.handleError));
  }

  createStudentClass(params: any) {
    return this.http.post(this.baseURL, params);
  }

  updateStudentClass(id: string, params: any) {
    return this.http.put(`${this.baseURL}/${id}`, params);
  }

  deleteStudentClass(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
