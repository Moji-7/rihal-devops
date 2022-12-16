import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { resultDto, searchDto } from './models/result.dto';
import { CallerService } from './services/caller.service';

@Component({
  selector: 'rihal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private callerService: CallerService) {}

  searchDto!: searchDto;
  title$: Observable<resultDto> = this.callerService.getAll(this.searchDto);
  quotes$: Observable<string[]> = of(['...']);
  //
  getQuote = () => {
    this.quotes$=this.callerService.getQuote("Galile")
    return this.quotes$;
  };
  clicked = (quote:string) => {
    return '';
  };
  ngOnInit(): void {
    this.getQuote();
  }
}
