import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '@rihal/auth';
import { User } from '@rihal/data-models';
import { Observable } from 'rxjs';
import { getUser } from '@rihal/auth';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user$!: Observable<User>;

  constructor(private store: Store<AuthState>) {}

  ngOnInit() {
	 // debugger;
    this.user$ = this.store.select(getUser);
  }
}
