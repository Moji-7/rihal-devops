import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from './../../services/auth/auth.service';
import { Authenticate } from '@rihal/data-models';
import { AuthState } from '../../+state/auth.reducer';
import * as authActions from '../../+state/auth.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  //constructor(private authService: AuthService) {}
  constructor(private store: Store<AuthState>) {}

  ngOnInit() {}

  login(authenticate: Authenticate): void {
    // this.authService.login(authenticate).subscribe();
    this.store.dispatch(new authActions.Login(authenticate));
  }
}
