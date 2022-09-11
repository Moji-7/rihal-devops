import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'rihal-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent implements OnInit {

  @Input() selectedVal!: string| null;
  form = new FormGroup({
    dateOfBirth: new FormControl('', Validators.required),
  });
  constructor() {}

  ngOnInit(): void {
  //  this.person.country = this.countries.filter(c => c.id === this.person.country.id)[0];

  //  this.form.controls('dateOfBirth').setValue(this.selectedVal);
    this.form.setValue({
      dateOfBirth: this.selectedVal
    });
  }
}
