import {
  AfterViewInit,
  Component,
  ViewChild,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import Swal from 'sweetalert2/dist/sweetalert2.js';
import { studentClassesDto, StudentSummeryInfo } from '@rihal/data-models';
import { Observable, of, Subject, switchMap, takeUntil } from 'rxjs';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { StudentService } from '../../services/student/student.service';

@Component({
  selector: 'rihal-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit, AfterViewInit, OnDestroy {
  displyby!: string | null;
  students!: studentClassesDto[];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private route: ActivatedRoute,
    private crudservice: StudentService
  ) {}

  displayedColumns: string[] = [
    'name',
    'dateOfBirth',
    'age',
    'classesId',
    'countriesId',
  ];
  dataSource = new MatTableDataSource<studentClassesDto>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.displyby = this.route.snapshot.paramMap.get('displyby');
    this.loaddata();
  }

  loaddata() {
    //age:ageCalculetor(new Date("2015-03-25")),className:"arts",countryName:"swiss"
    this.crudservice
      .getStudentClasses()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: studentClassesDto[]) => {
        //  console.log(res);
        this.students = res;
        this.dataSource = new MatTableDataSource<studentClassesDto>(
          this.students
        );
      });
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  //Delete User
  delete(id: string) {
    // const user = this.users.find(x => x.id === id);
    // if (!user) return;
    // user.isDeleting = true;

    if (confirm('Are you sure to delete?')) {
      // Initialize Params Object
      var myFormData = new FormData();
      // Begin assigning parameters
      // myFormData.append('deleteid', id);
      this.crudservice.deleteStudentClass(2);
      //sweetalert message popup
      // Swal.fire({
      //   title: 'Hurray!!',
      //   text:   "User has been deleted successfully",
      //   icon: 'success'
      // });
      alert('success');
      this.loaddata();
    }
  }
    ageCalculetor = (birthdateString: string): number => {
    const birthdate=new Date(birthdateString);
    const timeDiff = Math.abs(Date.now() - birthdate.getTime());
    const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    return age;
  };

}

