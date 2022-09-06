import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportingRoutingModule } from './reporting-routing.module';
import { ChartsModule } from '@rihal/charts';
import { ReportingHomeComponent } from '../../containers/reporting-home/reporting-home.component';
import { ReportingSummeryComponent } from '../../components/reporting-summery/reporting-summery.component';

@NgModule({
  declarations: [ReportingHomeComponent,ReportingSummeryComponent],
  imports: [
    CommonModule,
    ReportingRoutingModule,
   ChartsModule
  ]
})
export class ReportingModule { }
