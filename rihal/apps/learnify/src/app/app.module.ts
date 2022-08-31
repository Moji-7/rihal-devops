import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//import { NxModule } from '@nrwl/nx';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule,Route } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { authRoutes, AuthModule } from '@rihal/auth'; //added
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Added
import { LayoutModule } from '@rihal/layout';
import { AuthGuard } from '@rihal/auth';
import { ProfileComponent } from './profile/profile.component'; // added
  
const learnifyRoutes: Route[] = [
{ path: '', component: ProfileComponent }
];

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ProfileComponent],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // NxModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot([
     { path: 'auth', children: authRoutes , canActivate: [AuthGuard]},
     // { path: 'auth', children:learnifyRoutes    },

	  //{path:"edit/:id", component:EditComponent},
	  //{path:"show/:id", component:ShowComponent}
    ]),
    AuthModule,
    LayoutModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
