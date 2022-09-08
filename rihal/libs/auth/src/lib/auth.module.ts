import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { MaterialModule } from '@rihal/material';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer, initialState as authInitialState } from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';
import { AuthInterceptor } from './interceptors/auth.interceptor';

export const authRoutes: Route[] = [
  { path: 'login', component: LoginComponent},
];
@NgModule({
  imports: [
  CommonModule, RouterModule, HttpClientModule, MaterialModule, ReactiveFormsModule,  
  StoreModule.forFeature('auth', authReducer, { initialState: authInitialState }), 
  EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [LoginComponent, LoginFormComponent],
   providers: [
   AuthEffects,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AuthModule {}