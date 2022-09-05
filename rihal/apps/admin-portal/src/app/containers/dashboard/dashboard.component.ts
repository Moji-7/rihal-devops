import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { studentClassesDto, StudentSummeryInfo } from '@rihal/data-models';
import { forkJoin, map, mergeMap, Observable, of } from 'rxjs';
import { ReportService } from '../../services/student/report.service';

@Component({
  selector: 'rihal-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  summeryInfoNeeded$ = of(['perCalss', 'perAge', 'perCountry']);
  studentSummeryInfos$!: Observable<StudentSummeryInfo[]>;

  constructor(private reportservice: ReportService) {}

  ngOnInit(): void {
    const getService$: Observable<StudentSummeryInfo[]> = of([
      { title: 'perCalss', desc: 'Count of students per class', value: 26 },
      { title: 'perAge', desc: 'Average age of students ', value: 36 },
      { title: 'perCountry', desc: 'Count of students per country', value: 5 },
    ]);
    this.studentSummeryInfos$ = getService$;
    const carIds = ['perCalss', 'perAge', 'perCountry']; // unique ids
    const httpCalls = carIds.map((id) => this.reportservice.getSummeryInfo(id)); // array of streams
    const carsList$ = forkJoin(httpCalls).pipe(
      map((results:any[]) =>
        results.map((r, index) => ({ title: carIds[index], value: r.value }))
      )
    );
    carsList$.subscribe(console.log);



    // this.reportservice.getSummeryInfo().subscribe((res: StudentSummeryInfo[])=>{
    //   this.studentSummeryInfos$  = res;
    // });

    // this.studentSummeryInfos$ =this.summeryInfoNeeded$
    // .pipe(
    //   mergeMap((persons) => forkJoin(persons.map((person) =>
    //   this.reportservice.getSummeryInfo(person)
    // ));
  }
}
