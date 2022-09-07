import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { studentClassesDto, StudentSummeryInfo } from '@rihal/data-models';
import { ViewTitle } from 'libs/data-models/src/lib/studentSummeryInfo';
import { forkJoin, map, mergeMap, Observable, of } from 'rxjs';
import { ReportService } from '../../services/student/report.service';

@Component({
  selector: 'rihal-reporting-summery',
  templateUrl: './reporting-summery.component.html',
  styleUrls: ['./reporting-summery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportingSummeryComponent implements OnInit {
  // byCeriteria!:string="classes";
  byCeriteria?: string = 'classes';
  currentTitle!: ViewTitle;
  studentSummeryInfos$!: Observable<StudentSummeryInfo[]>;

  constructor(
    private route: ActivatedRoute,
    private reportservice: ReportService
  ) {}

  ngOnInit(): void {
    this.byCeriteria = this.route.snapshot.paramMap.get('by') as string;
    debugger;
     this.byCeriteria = 'countries';
    this.currentTitle = this.titles(this.byCeriteria);

    //get result
    if (this.byCeriteria === 'age')
      this.studentSummeryInfos$ = this.reportservice.averageStudentsAge();
    else
      this.studentSummeryInfos$ = this.reportservice.fetchCountBy( this.byCeriteria, 0);

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
    return titles.filter((x) => x.name === byCeriteria)[0];
  }
}

// function showChart(saleData) {
//   saleData = [
//     { name: "Mobiles", value: 105000 },
//     { name: "Laptop", value: 55000 },
//     { name: "AC", value: 15000 },
//     { name: "Headset", value: 150000 },
//     { name: "Fridge", value: 20000 }
//   ];
//}
