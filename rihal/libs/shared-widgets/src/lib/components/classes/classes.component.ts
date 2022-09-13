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
  @Input() class!: string;
  filteredOptions!: Observable<any[]>;
  className = new FormControl('');
  form = new FormGroup({
    className: new FormControl('', Validators.required),
  });

  constructor(private publicService: PublicService) {
    this.filteredOptions = this.className.valueChanges.pipe(
      startWith(''),
      map((symbol) =>
        symbol ? this._filterSymbols(symbol) : this._classes.slice()
      )
    );
  }

  ngOnInit() {
    console.log(this.class);
    this.subscription = this.publicService.getall('classes').subscribe(
      (response) => {
        this.classes = response;
      },
      (err) => console.error(err),
     () => {
        this.className.setValue(this.class);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private _filterSymbols(value: string): Classes[] {
    const filterValue = value.toLowerCase();

    return this._classes.filter((symbol) =>
      symbol.name.toLowerCase().includes(filterValue)
    );
  }

  //select symbol on auto complete
  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    console.log(event.option.id);
    //other subscriber componet will get value
    // event.option.value as StockSymbol;
    let selectedSymbol = this._filterSymbols(event.option.value)[0]; // : this.symbols.slice()
    //broad cast i selected
    // this.sharedService.selectSymbol.next(selectedSymbol);
  }
  // displayFn(id:number) {
  //   if (!id) return '';

  //   let index = this.states.findIndex(state => state.id === id);
  //   return this.states[index].name;
  // }
  // displayFn(_class: Classes) {
  //   return _class.name;
  // }

  displayFn(_class: string) {
    if (this.classes) {
      const index = this.classes.findIndex((state) => state.name === _class);
      return this.classes[index].name;
    }
    return '';
  }
}
