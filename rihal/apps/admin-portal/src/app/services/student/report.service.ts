import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private baseURL = `http://localhost:3000/api`;

  constructor(private http: HttpClient) {}

  public getStudents() {
    return this.http.get(`${this.baseURL}/getAll`);
  }
  //StudentSummeryInfo==> dto

  public getSummeryInfo(title:string) {
    return this.http.get(`${this.baseURL}/getAll`);
  }
}
