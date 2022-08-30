


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//import { NxModule } from '@nrwl/nx';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { authRoutes, AuthModule } from '@rihal/auth';  //added
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';   // Added
import { LayoutModule } from '@rihal/layout';

@NgModule({
  declarations: [AppComponent,NxWelcomeComponent],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
   // NxModule.forRoot(),
	HttpClientModule,
    RouterModule.forRoot([{path: 'auth', children: authRoutes}]),
    AuthModule,
	LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}