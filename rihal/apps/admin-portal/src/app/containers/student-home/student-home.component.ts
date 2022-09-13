import {
  Component,
  ViewChild,
  HostListener,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Classes, Countries } from '@rihal/data-models';
import { CachedService } from '@rihal/shared-widgets';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'rihal-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentHomeComponent implements OnInit, OnDestroy {
  //implements OnInit{
  constructor(private cachedService: CachedService) {}
  public classesSubscription?: Subscription;
  public countriesSubscription?: Subscription;
  dataCountries$!: Observable<Countries[]>
  dataClasses$!: Observable<Classes[]>
  ngOnInit(): void {
    //this.fetchCachedEntities();
  }
  private fetchCachedEntities() {
   this.cachedService.fetchCountries('countries');
    this.dataCountries$ = this.cachedService.dataCountries$//.subscribe();
    this.cachedService.fetchClasses('classes');
    this.dataClasses$ = this.cachedService.dataClasses$//.subscribe();
  }
  ngOnDestroy() {
    if (this.countriesSubscription) {
      this.countriesSubscription.unsubscribe();
    }
    if (this.classesSubscription) {
      this.classesSubscription.unsubscribe();
    }
  }
}
