import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@rihal/material'; // Added
import { CountriesComponent } from './components/countries/countries.component';
import { ClassesComponent } from './components/classes/classes.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule, MaterialModule],
  declarations: [CountriesComponent, ClassesComponent, DatepickerComponent],
  exports: [ReactiveFormsModule, CountriesComponent, ClassesComponent,DatepickerComponent],
})
export class SharedWidgetsModule {}
