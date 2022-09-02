import { Component, HostBinding, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '@rihal/auth';
import { User } from '@rihal/data-models';
import { Observable } from 'rxjs';
import { getUser } from '@rihal/auth';

import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  user$!: Observable<User>;
  @HostBinding('class') className = '';

  toggleControl = new FormControl(false);
  constructor(
    private store: Store<AuthState>,
    private overlay: OverlayContainer
  ) {}

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
  }
}
