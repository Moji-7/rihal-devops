import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import {  StudentSummeryInfo, ViewTitle } from '@rihal/data-models';
import { forkJoin, map, mergeMap, Observable, of } from 'rxjs';
import { ReportService } from '../../services/student/report.service';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'rihal-reporting-summery',
  templateUrl: './reporting-summery.component.html',
  styleUrls: ['./reporting-summery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportingSummeryComponent implements OnInit {
  byCeriteria: string = 'classes' as string;
  currentTitle!: ViewTitle;
  studentSummeryInfos$!: Observable<StudentSummeryInfo[]>;
  // options

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#ff0', '#cf0', '#03f'],
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reportservice: ReportService
  ) {}

  fetchdata() {
    const queryParams = this.route.snapshot.queryParams;
    const routeParams = this.route.snapshot.params;
    // this.route.queryParams.subscribe(queryParams => {
    // });
    this.route.params.subscribe((routeParams) => {
     // this.router.navigate([this.router.url])
      this.byCeriteria = routeParams['by'];
      this.currentTitle = this.titles(this.byCeriteria);
      //get result
      if (this.byCeriteria === 'ageAverage')
        this.studentSummeryInfos$ = this.reportservice.averageStudentsAge();
      else
        this.studentSummeryInfos$ = this.reportservice.fetchCountBy(
          this.byCeriteria,
          0
        );
    });
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.fetchdata();

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

  titles(byCeriteria: string): ViewTitle {
    const titles: ViewTitle[] = [
      { name: 'classes', icon: 'classes', text: 'students per classes' },
      { name: 'countries', icon: 'perm_media', text: 'students per countries' },
      { name: 'ageAverage', icon: 'classes', text: 'students average age' },
    ];
    console.log('umad');
    return titles.filter((x) => x.name === byCeriteria)[0];
  }
}
