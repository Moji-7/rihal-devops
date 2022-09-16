import {
  Component,
  OnInit,
  Input,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Classes } from '@rihal/data-models';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
  switchMap,
  tap,
} from 'rxjs/operators';
import {
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { PublicService } from '../../services/public.service';

@Component({
  selector: 'rihal-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
})
export class ClassesComponent implements OnInit, OnDestroy {
  classes!: Classes[]; //@Input()
  _classes!: Classes[]; //@Input()
  subscription!: Subscription;
  @Input() classesId!: number;//use for edit form
  @Input() classesForm!: FormGroup;//use for send form value to parent

  filteredOptions!: Observable<any[]>;
  constructor(private publicService: PublicService) {}

  ngOnInit() {
    //console.log(this.class);
    this.subscription = this.publicService.getall('classes').subscribe(
      (response) => {
        this.classes = response;
      },
      (err) => console.error(err),
     () => {
       // this.className.patchValue(this.class);
        this.classesForm.controls['className'].patchValue(this.classesId);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // displayFn(id:number) {
  //   if (!id) return '';
  //   let index = this.states.findIndex(state => state.id === id);
  //   return this.states[index].name;
  // }
  // displayFn(_class: Classes) {
  //   return _class.name;
  // }
  displayFn(_Id: number) {
    if (this.classes) {
      const index = this.classes.findIndex((c) => c.id === _Id);
      return this.classes[index].name;
    }
    return '';
  }
}
