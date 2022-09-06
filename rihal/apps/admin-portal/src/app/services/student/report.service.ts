import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentSummeryInfo } from '@rihal/data-models';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private baseURL = `http://localhost:3000/api/reports`;

  constructor(private http: HttpClient) {}

  public fetchCountBy(joinTable:string,studentId:number) {
    return this.http.get<StudentSummeryInfo[]>(`${this.baseURL}/fetchCountBy`, {
      params: { joinTable: joinTable,studentId:studentId }
    });
  }
  //StudentSummeryInfo==> dto

  public averageStudentsAge() {
    return this.http.get<StudentSummeryInfo[]>(`${this.baseURL}/averageStudentsAge`);
  }
}
