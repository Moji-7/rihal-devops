import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { CallerService } from './services/caller.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from '@rihal/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@rihal/layout';
import { SharedWidgetsModule } from '@rihal/shared-widgets';
import { AuthModule } from '@rihal/auth';


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent,RegisterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:"register",component:RegisterComponent}
    ], { initialNavigation: 'enabledBlocking' }),
    MaterialModule,
    LayoutModule,

    SharedWidgetsModule,
  ],
  providers: [CallerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
