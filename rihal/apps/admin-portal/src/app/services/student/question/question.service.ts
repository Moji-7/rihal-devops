import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuestionDto, StudentSummeryInfo } from '@rihal/data-models';
import { environment } from 'apps/admin-portal/src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private baseURL = environment.apiUrl + '/question';

  constructor(private readonly httpClient: HttpClient) {}

  get(): Observable<QuestionDto[]> {
    return this.httpClient.get<QuestionDto[]>(this.baseURL + '/all', {});
  }
  create(question: QuestionDto) {
    return this.httpClient.post(this.baseURL + '/create', question )
  //  .pipe(
  //   // // catchError(()=>throwError());
  //   )
   
  }
}
