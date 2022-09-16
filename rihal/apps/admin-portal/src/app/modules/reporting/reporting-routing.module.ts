import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportingSummeryComponent } from '../../components/reporting-summery/reporting-summery.component';

import { ReportingHomeComponent } from '../../containers/reporting-home/reporting-home.component';

const routes: Routes = [
  {
    path: '',
    component: ReportingHomeComponent,
    children: [
      { path: 'summeryBy', component: ReportingSummeryComponent },
      { path: 'specificStudent', component: ReportingSummeryComponent },
    // { path: 'summery', component: ReportingSummeryComponent },
     // { path: 'summery', component: ReportingSummeryComponent },
    ],
  },
];
@NgModule({
 // declarations: [ReportingHomeComponent, ReportingSummeryComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportingRoutingModule {}
