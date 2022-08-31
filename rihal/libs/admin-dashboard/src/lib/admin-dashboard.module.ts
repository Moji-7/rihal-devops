import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverviewComponent } from './containers/overview/overview.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
       {path: '', pathMatch: 'full', component: OverviewComponent}
    ]),
  ],
  declarations: [OverviewComponent],
})
export class AdminDashboardModule {}
