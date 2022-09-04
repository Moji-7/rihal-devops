import { Component, OnInit,Input } from '@angular/core';
import { Classes } from '@rihal/data-models';
import {FormControl} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, startWith, switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'rihal-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
})
export class ClassesComponent implements OnInit {

  constructor() {}
  classes$!:Observable<Classes[]>;//@Input()
  inputControl = new FormControl('');
  filteredOptions!: Observable<Classes[]>;
  ngOnInit() {
    const getClasses$: Observable<Classes[]> = of([
      { id: 1, name: 'art of physics' },
      { id: 2, name: 'programming fondumentals' },
    ]);
    this.classes$ = getClasses$;
  // this.classes$ = this.inputControl.valueChanges.pipe(
  //   tap( res => {console.log("hiiiiii"+res)}),
  //         startWith(' '), debounceTime(400),distinctUntilChanged(),
  //   switchMap(value => this._filter(value || '')),
  // );
  }


  _filter(val: string): Observable<any[]> {
    return this.classes$
     .pipe(
       map(response => response.filter(option => {
         return option.name.toLowerCase().indexOf(val.toLowerCase()) === 0
       }))
     )
   }

}
