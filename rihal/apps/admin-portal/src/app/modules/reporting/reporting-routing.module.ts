import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportingSummeryComponent } from '../../components/reporting-summery/reporting-summery.component';

import { ReportingHomeComponent } from '../../containers/reporting-home/reporting-home.component';

const routes: Routes = [
  {
    path: '',
    component: ReportingHomeComponent,
    children: [
      { path: 'by:classes', component: ReportingSummeryComponent },
      { path: 'by:countries', component: ReportingSummeryComponent },
      { path: 'by:age', component: ReportingSummeryComponent },
    ],
  },
];
@NgModule({
 // declarations: [ReportingHomeComponent, ReportingSummeryComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportingRoutingModule {}
