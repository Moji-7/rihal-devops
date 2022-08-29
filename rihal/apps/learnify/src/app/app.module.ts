


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//import { NxModule } from '@nrwl/nx';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { authRoutes, AuthModule } from '@rihal/auth';  //added

@NgModule({
  declarations: [AppComponent,NxWelcomeComponent],
  imports: [
    BrowserModule,
   // NxModule.forRoot(),
	HttpClientModule,
    RouterModule.forRoot([{path: 'auth', children: authRoutes}]),
    AuthModule     // added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}