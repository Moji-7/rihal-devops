import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';
import { LayoutComponent } from './containers/layout/layout.component';
import { MaterialModule } from '@rihal/material';    // Added
import { RouterModule } from '@angular/router';
import { AgePipe } from './pipes/age.pipe';   // Added

@NgModule({
  imports: [ReactiveFormsModule,CommonModule, MaterialModule, RouterModule], // Added
  declarations: [LayoutComponent, AgePipe],
  exports: [ReactiveFormsModule,LayoutComponent]
})
export class LayoutModule {}
