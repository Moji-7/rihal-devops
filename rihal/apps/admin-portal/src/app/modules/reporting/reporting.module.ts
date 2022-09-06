import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportingRoutingModule } from './reporting-routing.module';
import { ReportingIntroComponent } from '../../components/reporting-intro/reporting-intro.component';
import { ChartsModule } from '@rihal/charts';

@NgModule({
  declarations: [ReportingIntroComponent],
  imports: [
    CommonModule,
    ReportingRoutingModule,
   ChartsModule
  ]
})
export class ReportingModule { }
