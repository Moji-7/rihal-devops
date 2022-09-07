import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportingRoutingModule } from './reporting-routing.module';
import { ChartsModule } from '@rihal/charts';
import { ReportingHomeComponent } from '../../containers/reporting-home/reporting-home.component';
import { ReportingSummeryComponent } from '../../components/reporting-summery/reporting-summery.component';
import { StudentSummeryInfoComponent } from '../../components/student-summery-info/student-summery-info.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AuthModule } from '@rihal/auth';
import { SharedWidgetsModule } from '@rihal/shared-widgets';
import { MaterialModule } from '@rihal/material';


@NgModule({
  declarations: [ReportingHomeComponent, StudentSummeryInfoComponent,ReportingSummeryComponent],
  imports: [
    CommonModule,
    ReportingRoutingModule,
    MaterialModule,
    AuthModule,
    LayoutModule,
    SharedWidgetsModule,
    ChartsModule,
  ],
  bootstrap: [ReportingHomeComponent],
})
export class ReportingModule {}
