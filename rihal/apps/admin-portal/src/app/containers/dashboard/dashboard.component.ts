import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
 // byCeriteria!:string="classes";
   byCeriteria!:string|null;
  studentSummeryInfo$!: Observable<StudentSummeryInfo[]>;

  constructor(private route: ActivatedRoute,private reportservice: ReportService) {}

  ngOnInit(): void {
    this.byCeriteria=this.route.snapshot.paramMap.get('byCeriteria');
    //get result
    if(this.byCeriteria==="perAge)
    this.studentSummeryInfo$ =this.reportservice.averageStudentsAge();
    else
    this.studentSummeryInfo$ =this.reportservice.fetchCountBy(this.byCeriteria,0);

    // const getService$: Observable<StudentSummeryInfo[]> = of([
    //   { title: 'perCalss', desc: 'Count of students per class', value: 26 },
    //   { title: 'perAge', desc: 'Average age of students ', value: 36 },
    //   { title: 'perCountry', desc: 'Count of students per country', value: 5 },
    // ]);
   // this.studentSummeryInfos$ = getService$;


    //forkJoin
    // summeryInfoNeeded$ = of(['perCalss', 'perAge', 'perCountry']);
    // const carIds = ['perCalss', 'perAge', 'perCountry']; // unique ids
    // const httpCalls = carIds.map((id) => this.reportservice.getSummeryInfo(id)); // array of streams
    // const carsList$ = forkJoin(httpCalls).pipe(
    //   map((results:any[]) =>
    //     results.map((r, index) => ({ title: carIds[index], value: r.value }))
    //   )
    // );
    // carsList$.subscribe(console.log);


  }
}
