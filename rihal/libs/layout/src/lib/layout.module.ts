import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';
import { MaterialModule } from '@rihal/material';    // Added
import { RouterModule } from '@angular/router';   // Added

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule], // Added
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class LayoutModule {}