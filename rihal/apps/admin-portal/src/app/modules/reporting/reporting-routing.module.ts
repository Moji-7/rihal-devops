import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportingSummeryComponent } from '../../components/reporting-summery/reporting-summery.component';

import { ReportingHomeComponent } from '../../containers/reporting-home/reporting-home.component';

const routes: Routes = [
  {
    path: '',
    component: ReportingHomeComponent,
    children: [
      { path: 'classes', component: ReportingSummeryComponent },
      { path: 'countries', component: ReportingSummeryComponent },
      { path: 'averageAge', component: ReportingSummeryComponent },
    ],
  },
];
@NgModule({
 // declarations: [ReportingHomeComponent, ReportingSummeryComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportingRoutingModule {}
