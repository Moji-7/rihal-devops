import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './containers/layout/layout.component';
import { MaterialModule } from '@rihal/material'; // Added
import { RouterModule } from '@angular/router';
import { AgePipe } from './pipes/age.pipe'; // Added
import { TopNavComponent } from './containers/layout/top-nav/top-nav.component';
import { SideNavComponent } from './containers/layout/side-nav/side-nav.component';
import { AlertComponent } from './containers/layout/alert/alert.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './httperror.interceptor';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule, MaterialModule, RouterModule], // Added
  declarations: [
    LayoutComponent,
    TopNavComponent,
    SideNavComponent,
    AgePipe,
    AlertComponent,
  ],
  exports: [ReactiveFormsModule, LayoutComponent,AlertComponent,TopNavComponent,SideNavComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
  ],
})
export class LayoutModule {}
