import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@rihal/material';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';

export const authRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.authReducer, { initialState: fromAuth.authInitialState }),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: [LoginComponent, LoginFormComponent],
  providers: [AuthEffects]
})
export class AuthModule {}
