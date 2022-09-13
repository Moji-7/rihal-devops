import { AfterViewChecked, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'rihal-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent implements AfterViewChecked{

  @Input() selectedVal!: string| null;
  form = new FormGroup({
    dateOfBirth: new FormControl('', Validators.required),
  });

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}
  ngAfterViewChecked(): void {
    this.form.patchValue({dateOfBirth:this.selectedVal});
    this.changeDetectorRef.detectChanges();
  }


}
