import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { StudentSummeryInfo } from '@rihal/data-models';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'rihal-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  studentSummeryInfos$!: Observable<StudentSummeryInfo[]>;

  constructor() {}

  ngOnInit(): void {
    const getService$: Observable<StudentSummeryInfo[]> = of([
      { title: 'perCalss', desc: 'Count of students per class', value: 26 },
      { title: 'perAge', desc: 'Average age of students ', value: 36 },
      { title: 'perCountry', desc: 'Count of students per country', value: 5 },
    ]);
    this.studentSummeryInfos$ = getService$;
  }
  
}
