import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Classes, Countries } from '@rihal/data-models';
import { Observable, of } from 'rxjs';

import { Router } from '@angular/router';
import { CommonService } from '../../services/student/common.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertComponent } from 'libs/layout/src/lib/containers/layout/alert/alert.component';


@Component({
  selector: 'rihal-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.scss'],
})
export class StudentRegisterComponent implements OnInit {
  constructor( private crudservice: CommonService, private router: Router,private _snackBar: MatSnackBar) {}
  classes$!: Observable<Classes[]>;
  countries$!: Observable<Countries[]>;

  unamePattern = '^[a-z0-9_-]{8,15}$';
  pwdPattern = '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?!.*s).{6,12}$';
  mobnumPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  isValidFormSubmitted = false;
  registerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(this.unamePattern),
    ]),
    dateOfBirth: new FormControl('', [Validators.required]),
    className: new FormControl('', [Validators.required]),
    countryName: new FormControl('', [Validators.required]),
  });
  // @Output() submitForm = new EventEmitter<Authenticate>();

  ngOnInit(): void {

  }


  register() {
    this.isValidFormSubmitted = false;
    if (this.registerForm.invalid) {
      return;
    }
    console.log('User Name: ' + this.registerForm.value);
    // Initialize Params Object
    const myFormData = new FormData();
    myFormData.append('name', this.registerForm.value.name);
    myFormData.append('dateOfBirth', this.registerForm.value.dateOfBirth);

    this.crudservice.addStudentClass(myFormData); //caaling add user service
    //show alert and redirect
    this._snackBar.openFromComponent(AlertComponent, {
      duration: 3* 1000,
    });
    this.router.navigate([`/student-home/classes`]); //after form submit page will redirect to users page

    this.isValidFormSubmitted = true;
    //hello$ = this.http.get<Message>('/api/hello');
    // let user: User = this.userForm.value;
    // this.userService.createUser(user);
    this.registerForm.reset();
    // this.submitForm.emit({
    //   username: this.registerForm.value.username,
    //   password: this.registerForm.value.password
    // } as Authenticate);
  }
}
//https://blog.logrocket.com/how-build-ecommerce-app-nestjs/
