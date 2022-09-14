import { AfterViewInit, Component, HostBinding, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '@rihal/auth';
import { User } from '@rihal/data-models';
import { Observable, Subscription } from 'rxjs';
import { getUser } from '@rihal/auth';

import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { NgProgress, NgProgressComponent, NgProgressRef } from 'ngx-progressbar';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, AfterViewInit {
  @Input() roleType!: string;
  //@ViewChild(NgProgressComponent) progressBar!: NgProgressComponent;
  sideNavOpened = true;
  sideNavMode: 'side' | 'over' = 'side';
  toolBarHeight = 64;
  // private readonly mediaWatcher: Subscription;
  user$!: Observable<User>;
  @HostBinding('class') className = '';

  toggleControl = new FormControl(false);
  progressRef!: NgProgressRef;

  constructor(
    //media: MediaObserver,
    private store: Store<AuthState>,
    private overlay: OverlayContainer,
    private progress: NgProgress
  ) {
    // this.mediaWatcher = media.media$.subscribe((change: MediaChange) => {
    //   if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
    //     if (this.sideNavOpened) {
    //       this.sideNavOpened = false;
    //     }
    //     this.sideNavMode = 'over';
    //   } else {
    //     this.sideNavOpened = true;
    //     this.sideNavMode = 'side';
    //   }
    //   if (change.mqAlias === 'xs') {
    //     this.toolBarHeight = 56;
    //   } else {
    //     this.toolBarHeight = 64;
    //   }
    // });
  }

  ngOnInit() {
    // debugger;
    this.user$ = this.store.select(getUser);
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
    //for progress all http requests
    this.progressRef = this.progress.ref('myProgress');
  }
startLoading() {
  this.progressRef.start();
}

completeLoading() {
  this.progressRef.complete();
}

changeProgressColor() {
  this.progressRef.setConfig({ color: 'green' });
}
  ngAfterViewInit() {
   // this.progressBar.start();
  }
  ngOnDestroy(): void {
    //this.mediaWatcher.unsubscribe();
  }
}
