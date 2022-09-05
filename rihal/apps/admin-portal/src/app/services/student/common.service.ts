import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private baseURL = `http://localhost:3000/api`
  studentClass:any;
  constructor(private http:HttpClient) { }
//get all users  details

public getStudentClasses(){
  return this.http.get(`${this.baseURL}/getAll`);
}
//add new user
public addStudentClass(studentClass: any){
  // return this.http.post(`${this.baseURL}/create`, studentClass).subscribe((res: Response) => {
  //   this.addStudentClass(studentClass);
  // });
}
public deleteStudentClass(id:number)
{
 // return this.http.post('http://localhost/users.php/', userid).subscribe((res: Response) => {});
}
}
