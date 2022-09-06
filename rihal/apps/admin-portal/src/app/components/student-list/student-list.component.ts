import { AfterViewInit, Component, ViewChild, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import Swal from 'sweetalert2/dist/sweetalert2.js';
import { studentClassesDto,ageCalculetor } from '@rihal/data-models';
import { Observable, of, switchMap } from 'rxjs';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { CommonService } from '../../services/student/common.service';

@Component({
  selector: 'rihal-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit,AfterViewInit  {
  displyby!:string|null;
  students!: studentClassesDto[];

  constructor(private route: ActivatedRoute, private crudservice: CommonService) {}
  displayedColumns: string[] = ['name', 'dateOfBirth',"age", 'class',"country"];
  dataSource = new MatTableDataSource<studentClassesDto>
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.displyby=this.route.snapshot.paramMap.get('displyby');
    this.loaddata();

  }

  loaddata() {
  const getService$:studentClassesDto[] = [
      { name:"john ince",dateOfBirth:"2002-02-09",age:ageCalculetor(new Date("2015-03-25")),className:"arts",countryName:"swiss" },
      { name:"sam cool",dateOfBirth:"1996-08-14",age:ageCalculetor(new Date("1996-08-14")),className:"physics",countryName:"france" },
      { name:"mary smith",dateOfBirth:"1990-08-24",age:ageCalculetor(new Date("1990-08-24")),className:"arts",countryName:"netherlands" }
  ];
  // this.crudservice.getStudentClasses().subscribe((res: studentClassesDto[])=>{
  //   this.students = res;
  // });
  this.students=getService$;
  this.dataSource = new MatTableDataSource<studentClassesDto>(this.students);
}

//Delete User
deleteuser(id:number)
{
  if(confirm("Are you sure to delete?")) {
  // Initialize Params Object
  var myFormData = new FormData();


  // Begin assigning parameters
 // myFormData.append('deleteid', id);
  this.crudservice.deleteStudentClass(id);
  //sweetalert message popup
  // Swal.fire({
  //   title: 'Hurray!!',
  //   text:   "User has been deleted successfully",
  //   icon: 'success'
  // });
  alert('success')
  this.loaddata();
}
}

}
