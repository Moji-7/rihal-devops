
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { UserService } from '@app/_services';
import { User } from '@app/_models';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    users!: User[];

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }

    deleteUser(id: string) {
        const user = this.users.find(x => x.id === id);
        if (!user) return;
        user.isDeleting = true;
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.users = this.users.filter(x => x.id !== id));
    }
import { AfterViewInit, Component, ViewChild, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import Swal from 'sweetalert2/dist/sweetalert2.js';
import { studentClassesDto,ageCalculetor, StudentSummeryInfo } from '@rihal/data-models';
import { Observable, of, Subject, switchMap, takeUntil } from 'rxjs';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { StudentService } from '../../services/student/student.service';

@Component({
  selector: 'rihal-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit,AfterViewInit,OnDestroy   {
  displyby!:string|null;
  students!: studentClassesDto[];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private route: ActivatedRoute, private crudservice: StudentService) {}
  ngOnDestroy(): void {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }
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
  // const getService$:studentClassesDto[] = [
  //     { name:"john ince",dateOfBirth:"2002-02-09",age:ageCalculetor(new Date("2015-03-25")),className:"arts",countryName:"swiss" },
  //     { name:"sam cool",dateOfBirth:"1996-08-14",age:ageCalculetor(new Date("1996-08-14")),className:"physics",countryName:"france" },
  //     { name:"mary smith",dateOfBirth:"1990-08-24",age:ageCalculetor(new Date("1990-08-24")),className:"arts",countryName:"netherlands" }
  // ];
   // this.students=getService$;
  this.crudservice.getStudentClasses().pipe(takeUntil(this.destroy$)).subscribe((res: studentClassesDto[])=>{
    console.log(res);
    this.students = res;
    this.dataSource = new MatTableDataSource<studentClassesDto>(this.students);
  });


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
function ngOnDestroy() {
  throw new Error('Function not implemented.');
}

