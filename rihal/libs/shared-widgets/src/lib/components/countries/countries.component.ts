import {
  Component,
  OnInit,
  Input,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';
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
export class CountriesComponent implements OnInit, OnDestroy {
  countries!: Countries[]; // @Input()
  subscription!: Subscription;
  @Input() countryId!: number;//use for edit form
  @Input() countryForm!: FormGroup;//use for send form value to parent
  filteredOptions!: Observable<any[]>;

  constructor(private publicService: PublicService) {}

  ngOnInit() {
    this.subscription = this.publicService.getall('countries').subscribe(
      (response) => {
        this.countries = response;
      },
      (err) => console.error(err),
      () => {
        //this.countryName.setValue(this.country);
        this.countryForm.controls['countryName'].patchValue(this.countryId);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  displayFn(_Id: number) {
    if (this.countries) {
      const index = this.countries.findIndex((c) => c.id === _Id);
      return this.countries[index].name;
    }
    return '';
  }
  // _filter(val: string): Observable<any[]> {
  //   return this.countries$.pipe(
  //     map((response) =>
  //       response.filter((option) => {
  //         return option.name.toLowerCase().indexOf(val.toLowerCase()) === 0;
  //       })
  //     )
  //   );
  // }
}
