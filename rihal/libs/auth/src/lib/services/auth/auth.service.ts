import { Injectable } from '@angular/core';
import { Authenticate } from '@rihal/data-models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(authenticate: Authenticate): Observable<any> {
	   console.log('ali 2')
    return this.httpClient.post('http://localhost:3000/login', authenticate);
  }
}