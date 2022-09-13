import { Component, OnInit, Input, AfterViewChecked, OnDestroy } from '@angular/core';
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
export class CountriesComponent implements OnInit, AfterViewChecked ,OnDestroy{
  countries$!: Observable<Countries[]>; // @Input()
  inputControl = new FormControl('');
  @Input() countryId!: number;
  filteredOptions!: Observable<any[]>;

  constructor(private publicService: PublicService) {}


  ngOnInit() {
    this.countries$ = this.publicService.getall('countries');
    // this.countries$ = this.inputControl.valueChanges.pipe(
    //   tap( res => {console.log("hiiiiii"+res)}),
    //         startWith(' '), debounceTime(400),distinctUntilChanged(),
    //   switchMap(value => this._filter(value || '')),
    // );
  }
  ngAfterViewChecked(): void {
    this.countries$.subscribe((x) => {
      this.inputControl.setValue(
        x.find((xx) => xx.id === this.countryId)?.name || null
      );});
  }

  ngOnDestroy(): void {

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
