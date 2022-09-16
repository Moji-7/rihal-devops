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
import {
  BehaviorSubject,
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  merge,
  Observable,
  of,
  startWith,
  Subject,
  switchMap,
  takeUntil,
} from 'rxjs';


import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { StudentService } from '../../services/student/student.service';
import { AlertService } from '@rihal/layout';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'rihal-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit, AfterViewInit, OnDestroy {
  displyby!: string | null;

  destroy$: Subject<boolean> = new Subject<boolean>();
  @ViewChild(MatSort) sort!: MatSort;
  term$ = new BehaviorSubject<string>('');
  resultsLength = 0;
  constructor(
    private route: ActivatedRoute,
    private crudservice: StudentService,
    private alertService: AlertService
  ) {}

  displayedColumns: string[] = [
    // 'id',
    'name',
    'dateOfBirth',
    'age',
    'classesName',
    'countryName',
    'action',
  ];

  dataSource = new MatTableDataSource<studentClassesDto>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    merge(
      this.sort.sortChange,
      this.term$.pipe(debounceTime(1000), distinctUntilChanged()),
      this.paginator.page
    )
      .pipe(
        startWith({}),
        switchMap((searchTerm) => {
          return this.crudservice
            .getStudentClasses(
              this.sort.active,
              this.sort.direction,
              this.paginator.pageIndex,
              searchTerm && typeof searchTerm == 'string'
                ? searchTerm.toString()
                : ''
            )
            .pipe(catchError(() => of(null)));
        }),
        map((data) => {
          if (data === null) {
            return [];
          }
          this.resultsLength = data.count;
          return data.studentClasses;
        })
      )
      .subscribe((data) => {
        this.dataSource = new MatTableDataSource<studentClassesDto>(data);
      });
  }

  ngOnInit(): void {
    this.displyby = this.route.snapshot.paramMap.get('displyby');
    // this.loaddata();
  }

  // loaddata() {
  //   //age:ageCalculetor(new Date("2015-03-25")),className:"arts",countryName:"swiss"
  //   this.crudservice
  //     .getStudentClasses()
  //     .pipe(takeUntil(this.destroy$))
  //     .subscribe((res: studentClassesDto[]) => {
  //        //console.log(res);
  //       this.students = res;
  //       this.dataSource = new MatTableDataSource<studentClassesDto>(
  //         this.students
  //       );
  //     });
  // }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  //Delete User
  delete(id: number) {
    if (confirm('Are you sure to delete?')) {
      this.crudservice.deleteStudentClass(id).subscribe(() => {
        // alert('deleted successfully');
        this.alertService.success('student class deleted, successfully', {
          keepAfterRouteChange: true,
        });
        this.ngAfterViewInit();
        //sweetalert message popup
        //this.loaddata();
      });
      //sweetalert message popup
      // Swal.fire({
      //   title: 'Hurray!!',
      //   text:   "User has been deleted successfully",
      //   icon: 'success'
      // });
    }
  }
  ageCalculetor = (birthdateString: string): number => {
    const birthdate = new Date(birthdateString);
    const timeDiff = Math.abs(Date.now() - birthdate.getTime());
    const age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    return age;
  };
}
