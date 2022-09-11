import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, ReplaySubject } from 'rxjs';


import { PublicService } from './public.service';
import { Classes, Countries } from '@rihal/data-models';

@Injectable({
  providedIn: 'root',
})
export class CachedService {
  private dataCountriesSubject = new ReplaySubject<Countries[]>(1);
  private dataClassesSubject = new ReplaySubject<Classes[]>(1);
  dataCountries$: Observable<Countries[]> = this.dataCountriesSubject.asObservable();
  dataClasses$: Observable<Classes[]> = this.dataClassesSubject.asObservable();
  constructor(private http: HttpClient, private publicService: PublicService) {}

  fetchCountries(entity:string) {
    this.publicService
      .getall(entity)
      .subscribe((res) => this.dataCountriesSubject.next(res));
  }
  fetchClasses(entity:string) {
    this.publicService
      .getall(entity)
      .subscribe((res) => this.dataClassesSubject.next(res));
  }
}
