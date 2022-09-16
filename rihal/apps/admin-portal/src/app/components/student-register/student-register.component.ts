import { HttpClient } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Classes, Countries } from '@rihal/data-models';
import { first, Observable, of, Subscription } from 'rxjs';

import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { StudentService } from '../../services/student/student.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertService } from '@rihal/layout';
import { CachedService } from '@rihal/shared-widgets';

//import { AlertComponent } from 'libs/layout/src/lib/containers/layout/alert/alert.component';

@Component({
  selector: 'rihal-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.scss'],
})
export class StudentRegisterComponent implements OnInit {
  constructor(
    public injector: Injector,
    private crudservice: StudentService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _location: Location,
    // private userService: UserService,
    private alertService: AlertService
  ) {}

  studentId!: string;
  isAddMode = false;
  buttonLabel = 'Register';
  loading = false;
  submitted = false;
  selectedCountryId!: number;
  selectedClassesId!: number;
  selectedBirthdate!: string;

  unamePattern = '^[a-z0-9_-]{8,15}$';
  pwdPattern = '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?!.*s).{6,12}$';
  mobnumPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  isValidFormSubmitted = false;
  //registerForm: FormGroup;
  //formDetail: FormGroup;
  classesForm = this.formBuilder.group({
    className: new FormControl('', [Validators.required]),
  });
  countryForm = this.formBuilder.group({
    countryName: new FormControl('', [Validators.required]),
  });
  dateOfBirthForm = this.formBuilder.group({
    dateOfBirth: new FormControl('', [Validators.required]),
  });
  registerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
     // Validators.pattern(this.unamePattern),
    ]),
    // dateOfBirth: new FormControl('', [Validators.required]),
    dateOfBirth: this.dateOfBirthForm,
    //className: new FormControl('', [Validators.required]),
    className: this.classesForm,
    countryName: this.countryForm,
  });

  // @Output() submitForm = new EventEmitter<Authenticate>();

  ngOnInit(): void {
    //for edit already registered student
    this.studentId = this.route.snapshot.params['studentId'];
    //console.log('>>>>>>>>>>>>>>>>>>' + this.studentId);
    this.isAddMode = !this.studentId;
    if (!this.isAddMode) {
      this.buttonLabel = 'Update';
      this.crudservice
        .find(parseInt(this.studentId))
        .pipe(first())
        .subscribe((x) => {
          //this.registerForm.patchValue(x);
          this.registerForm.controls['name'].patchValue(x.name);
          this.selectedCountryId = x.countriesId;
          this.selectedClassesId = x.classesId;
          this.selectedBirthdate = x.dateOfBirth;
        });
    }
    // for getting cached models from parent component
    // const parentComponent = this.injector.get(StudentHomeComponent);
    // parentComponent.dataClasses$.subscribe(x=>{
    //   console.log(x[0].name);
    //   this.selectedCountry=x[0].name
    // })
    // parentComponent.dataCountries$.subscribe(x=>{
    //   console.log(x[0].name)
    //   this.selectedCountry=x[0].name
    // })
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
   // debugger;
    this.submitted = true;
    // reset alerts on submit
    this.alertService.clear();
    if (this.registerForm.invalid) return;
    if (this.isAddMode) this.createUser();
    else this.updateUser();
  }

  private createUser() {
    this.crudservice
      .createStudentClass(this.mapStudent())
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('student class added', {
            keepAfterRouteChange: true,
          });
          this.registerForm.reset();
          // this.router.navigate(['../'], { relativeTo: this.route });
        },
        error: (error) => {
          this.alertService.error(error);
          this.loading = false;
        },
      });
  }

  private updateUser() {
    this.crudservice
      .updateStudentClass(this.studentId, this.mapStudent())
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('User updated', {
            keepAfterRouteChange: true,
          });
          this.router.navigate(['/student/classes'], {
            relativeTo: this.route,
          });
        },
        error: (error) => {
          this.alertService.error(error);
          this.loading = false;
        },
      });
  }
  private mapStudent() {
    const student = {
      name: this.registerForm.value.name,
      dateOfBirth: this.registerForm.value.dateOfBirth?.dateOfBirth,
      classes: this.registerForm.value.className?.className,
      countries: this.registerForm.value.countryName?.countryName,
    };
    console.log(student);
    return student;
  }

  backClicked() {
    this._location.back();
  }
}
