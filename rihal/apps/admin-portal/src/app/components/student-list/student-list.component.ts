import { AfterViewInit, Component, ViewChild, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { studentsDto,ageCalculetor } from '@rihal/data-models';
import { Observable, of, switchMap } from 'rxjs';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'rihal-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit,AfterViewInit  {
  displyby!:string|null;
  students!: studentsDto[];

  constructor(  private route: ActivatedRoute) {}
  displayedColumns: string[] = ['name', 'dateOfBirth',"age", 'class',"country"];
  dataSource = new MatTableDataSource<studentsDto>


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.displyby=this.route.snapshot.paramMap.get('displyby');
    
    const getService$:studentsDto[] = [
      { name:"john ince",dateOfBirth:"2002-02-09",age:ageCalculetor(new Date("2015-03-25")),className:"arts",countryName:"swiss" },
      { name:"sam cool",dateOfBirth:"1996-08-14",age:ageCalculetor(new Date("1996-08-14")),className:"physics",countryName:"france" },
      { name:"mary smith",dateOfBirth:"1990-08-24",age:ageCalculetor(new Date("1990-08-24")),className:"arts",countryName:"netherlands" }
  ];
   // this.students$ = this.service.getHero(displyby);
  //  getService$.subscribe(ww=>ww.map({
  //     this.students$ =ww;
  //   }))
  this.students=getService$;
  this.dataSource = new MatTableDataSource<studentsDto>(this.students);
  }

}
