import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { resultDto, searchDto } from '../models/result.dto';

@Injectable({
  providedIn: 'root',
})
export class CallerService {
  constructor(private readonly httpClient: HttpClient) {}

  getAll = (searchDto: searchDto) => {
    return this.httpClient.post<resultDto>(
      'http://localhost:4444/api/create?sort="Desc"',
      searchDto
    );
  };
  getQuote = (personName: string): Observable<string[]> => {
    return of<string[]>(['Be happy', 'Be optemistic']);
  };
}
