import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//import { NxModule } from '@nrwl/nx';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule, Route } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { authRoutes, AuthModule } from '@rihal/auth'; //added
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Added
import { MaterialModule } from '@rihal/material';
import { LayoutModule } from '@rihal/layout';
import { SharedWidgetsModule } from '@rihal/shared-widgets';
import { AuthGuard } from '@rihal/auth';

import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentHomeComponent } from './containers/student-home/student-home.component';
import { StudentRegisterComponent } from './components/student-register/student-register.component';
import { StudentIntroComponent } from './components/student-intro/student-intro.component';
import { WelcomeComponent } from './containers/welcome/welcome.component';
//import { ChartComponent } from '@swimlane/ngx-charts';
import { ChartsModule } from '@rihal/charts';
import { StudentSummeryInfoComponent } from './components/student-summery-info/student-summery-info.component';
import { StudentIndividualSummeryComponent } from './components/student-individual-summery/student-individual-summery.component';
//import { ReportingSummeryComponent } from './components/reporting-summery/reporting-summery.component';

const studentRoutes: Route[] = [
  { path: '', component: StudentIntroComponent },
  {
    path: '',
    component: StudentHomeComponent,
    children: [
      { path: 'classes', component: StudentListComponent },
      { path: 'register', component: StudentRegisterComponent },
   //   { path: 'edit-student/:id', component: EditStudentComponent },
   { path: 'register/:studentId', component: StudentRegisterComponent }
    ],
  },
  { path: 'auth', children: authRoutes },
];
@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    StudentListComponent,
    StudentHomeComponent,
    StudentRegisterComponent,
    StudentIntroComponent,
    WelcomeComponent,
    StudentIndividualSummeryComponent,
    //StudentSummeryInfoComponent,
    // ReportingHomeComponent,
    // ReportingSummeryComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // NxModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent },
      { path: 'auth', children: authRoutes },
      { path: 'student', children: studentRoutes },
      {
        path: 'admin',
        loadChildren: () =>
          import('./modules/reporting/reporting.module').then(
            (m) => m.ReportingModule
          ),
        // data: { icon: 'perm_media', text: 'register new class ' },
      },

      //{path:"edit/:id", component:EditComponent},
      //{path:"show/:id", component:ShowComponent}
    ]),
    MaterialModule,
    AuthModule,
    LayoutModule,
    SharedWidgetsModule,
    ChartsModule,
    // StoreModule.forRoot({}),
    StoreModule.forRoot(
      {},


      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
