import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Classes, Countries } from '@rihal/data-models';
import { first, Observable, of } from 'rxjs';

import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student/student.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertService } from '@rihal/layout';
//import { AlertComponent } from 'libs/layout/src/lib/containers/layout/alert/alert.component';

@Component({
  selector: 'rihal-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.scss'],
})
export class StudentRegisterComponent implements OnInit {
  constructor(
    private crudservice: StudentService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    // private userService: UserService,
    private alertService: AlertService
  ) {}

  studentId!: string;
  isAddMode = false;
  loading = false;
  submitted = false;

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
    this.studentId = this.route.snapshot.params['studentId'];
    console.log('>>>>>>>>>>>>>>>>>>' + this.studentId);
    this.isAddMode = !this.studentId;
    if (!this.isAddMode) {
      this.crudservice.find(parseInt(this.studentId))
        .pipe(first())
        .subscribe((x) => this.registerForm.patchValue(x));
    }
  }

  // this.route.params.subscribe((routeParams) => {
  //   // this.router.navigate([this.router.url])
  //   this.studentId = routeParams['studentId']; // this.route.snapshot.params['studentId'];
  //   console.log('>>>>>>>>>>>>>>>>>>' + this.studentId);
  //   this.isAddMode = !this.studentId;

  //   if (!this.isAddMode) {
  //     this.crudservice
  //       .find(parseInt(this.studentId))
  //       .pipe(first())
  //       .subscribe((x) => this.registerForm.patchValue(x));
  //   }
  // });

  // convenience getter for easy access to registerForm fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if registerForm is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createUser();
    } else {
      this.updateUser();
    }
  }

  private createUser() {
    this.crudservice
      .createStudentClass(this.registerForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('User added', {
            keepAfterRouteChange: true,
          });
          this.router.navigate(['../'], { relativeTo: this.route });
        },
        error: (error) => {
          this.alertService.error(error);
          this.loading = false;
        },
      });
  }

  private updateUser() {
    this.crudservice
      .updateStudentClass(this.studentId, this.registerForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('User updated', {
            keepAfterRouteChange: true,
          });
          this.router.navigate(['../../'], { relativeTo: this.route });
        },
        error: (error) => {
          this.alertService.error(error);
          this.loading = false;
        },
      });
  }
}
// register() {
//   this.isValidFormSubmitted = false;
//   if (this.registerForm.invalid) {
//     return;
//   }
//   console.log('User Name: ' + this.registerForm.value);
//   // Initialize Params Object
//   const myFormData = new FormData();
//  // myFormData.append('name', this.registerForm.value.name?);
//  // myFormData.append('dateOfBirth', this.registerForm.value.dateOfBirth);

//   this.crudservice.addStudentClass(myFormData); //caaling add user service
//   //show alert and redirect
//   this._snackBar.openFromComponent(AlertComponent, {
//     duration: 3* 1000,
//   });
//   this.router.navigate([`/student-home/classes`]); //after registerForm submit page will redirect to users page

//   this.isValidFormSubmitted = true;
//   //hello$ = this.http.get<Message>('/api/hello');
//   // let user: User = this.userForm.value;
//   // this.userService.createUser(user);
//   this.registerForm.reset();
//   // this.submitForm.emit({
//   //   username: this.registerForm.value.username,
//   //   password: this.registerForm.value.password
//   // } as Authenticate);
// }
//}
//https://blog.logrocket.com/how-build-ecommerce-app-nestjs/
