import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'rihal-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent implements AfterViewChecked, OnInit {
  @Input() _dateOfBirth!: string | null; //for update form
  @Input() dateOfBirthForm!: FormGroup; //use for send form value to parent

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}
  ngAfterViewChecked(): void {
    //debugger;
    this.dateOfBirthForm.controls['dateOfBirth'].patchValue(this._dateOfBirth);
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit() {}
}
