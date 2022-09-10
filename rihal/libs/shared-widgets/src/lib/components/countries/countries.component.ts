import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
  switchMap,
  tap,
} from 'rxjs/operators';
import { Countries } from '@rihal/data-models';
import { PublicService } from '../../services/public.service';

/**
 * @title Filter autocomplete
 */
@Component({
  selector: 'rihal-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  countries$!: Observable<any[]>; // @Input()
  inputControl = new FormControl('');
  filteredOptions!: Observable<any[]>;

  constructor(private publicService: PublicService) {}

  ngOnInit() {
    // const getCountries$: Observable<Countries[]> = of([
    //   { id: 1, name: 'Count of students per class' },
    //   { id: 2, name: 'Average age of students ' },
    // ]);

    this.countries$ = this.publicService.getall('countries');

    // this.countries$ = this.inputControl.valueChanges.pipe(
    //   tap( res => {console.log("hiiiiii"+res)}),
    //         startWith(' '), debounceTime(400),distinctUntilChanged(),
    //   switchMap(value => this._filter(value || '')),
    // );
  }

  _filter(val: string): Observable<any[]> {
    return this.countries$.pipe(
      map((response) =>
        response.filter((option) => {
          return option.name.toLowerCase().indexOf(val.toLowerCase()) === 0;
        })
      )
    );
  }
}
