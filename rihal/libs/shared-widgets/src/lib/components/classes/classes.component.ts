import { Component, OnInit,Input } from '@angular/core';
import { Classes } from '@rihal/data-models';
import {FormControl} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, startWith, switchMap, tap} from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { PublicService } from '../../services/public.service';

@Component({
  selector: 'rihal-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
})
export class ClassesComponent implements OnInit {
  classes$!:Observable<any[]>;//@Input()
   _classes!:Classes[];//@Input()
  inputControl = new FormControl('');
  @Input() selectedVal!: string| null;
  filteredOptions!: Observable<any[]>;

   ngOnInit() {
    // const getClasses$: Observable<Classes[]> = of([
    //   { id: 1, name: 'art of physics' },
    //   { id: 2, name: 'programming fondumentals' },
    // ]);
    this.classes$ =this.publicService.getall("classes");
    this.inputControl.setValue(this.selectedVal);
  }

  constructor(private publicService: PublicService){
    this.filteredOptions = this.inputControl.valueChanges.pipe(
      startWith(''),
      map((symbol) =>
        symbol ? this._filterSymbols(symbol) : this._classes.slice()
      )
    );
  }




   private _filterSymbols(value: string): Classes[] {
    const filterValue = value.toLowerCase();

    return this._classes.filter((symbol) =>
      symbol.name.toLowerCase().includes(filterValue)
    );
  }

  //select symbol on auto complete
  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    console.log(event.option.value);
    //other subscriber componet will get value
    // event.option.value as StockSymbol;
    let selectedSymbol = this._filterSymbols(event.option.value)[0]; // : this.symbols.slice()
    //broad cast i selected
   // this.sharedService.selectSymbol.next(selectedSymbol);
  }

}
