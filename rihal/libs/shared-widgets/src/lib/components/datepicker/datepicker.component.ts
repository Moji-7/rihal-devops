import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'rihal-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent
  implements AfterViewChecked, OnInit, OnChanges
{
  @Input() _dateOfBirth!: string | null; //for update form
  @Input() dateOfBirthForm!: FormGroup; //use for send form value to parent

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}
  ngOnInit(): void {}
  ngAfterViewChecked(): void {
    //debugger;
    // this.changeDetectorRef.detectChanges();
  }

  ngOnChanges() {
    this.dateOfBirthForm.controls['dateOfBirth'].patchValue(this._dateOfBirth);
  }
}
