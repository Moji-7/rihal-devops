import { AfterViewChecked, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'rihal-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent implements AfterViewChecked{

  @Input() dateOfBirth!: string| null;
  @Input() dateOfBirthForm!: FormGroup;//use for send form value to parent

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}
  ngAfterViewChecked(): void {
    //this.form.patchValue({dateOfBirth:this.selectedVal});
    this.dateOfBirthForm.controls['dateOfBirth'].patchValue(this.dateOfBirth);
    this.changeDetectorRef.detectChanges();
  }


}
