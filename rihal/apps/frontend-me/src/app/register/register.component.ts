import {
  Component,
  OnDestroy,
  OnInit,
  ɵɵNgOnChangesFeature,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rihal-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  constructor() {}
  subscribtion?: Subscription;

  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    family: new FormControl(''),
    fullName: new FormControl(''),
  });

  get myForm() {
    return this.formGroup.controls;
  }

  formValues!: string | null;

  onSubmit = () => {
    console.log(JSON.stringify(this.formGroup.value, null, 2));
    //this.formValues = this.formGroup.value ?? '';
  };

  ngOnInit(): void {
   // this.subscribtion = this.onChanges();
    // this.subscribtion?.unsubscribe();
  }
  onChanges = () => {
    return this.formGroup.valueChanges.subscribe((vals) =>
      this.formGroup.patchValue({ fullName: vals?.name + ' ' + vals?.family })
    );
  };
  ngOnDestroy(): void {
    this.subscribtion?.unsubscribe();
  }
}
