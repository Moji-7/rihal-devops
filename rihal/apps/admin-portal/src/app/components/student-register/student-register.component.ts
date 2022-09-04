import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Classes, Countries } from '@rihal/data-models';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'rihal-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.scss'],
})
export class StudentRegisterComponent implements OnInit {
  constructor(private http: HttpClient) {}
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
    //TODO : must get form api

  }


  register() {
    this.isValidFormSubmitted = false;
    if (this.registerForm.invalid) {
      return;
    }
    console.log('User Name: ' + this.registerForm.value);
    this.isValidFormSubmitted = true;
    hello$ = this.http.get<Message>('/api/hello');
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
