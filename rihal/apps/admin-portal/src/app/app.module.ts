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
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { StudentSummeryInfoComponent } from './components/student-summery-info/student-summery-info.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentHomeComponent } from './containers/student-home/student-home.component';
import { StudentRegisterComponent } from './components/student-register/student-register.component';
import { StudentIntroComponent } from './components/student-intro/student-intro.component';
import { WelcomeComponent } from './containers/welcome/welcome.component';

const studentRoutes: Route[] = [
  { path: '', component: StudentIntroComponent },
  {
    path: '',
    component: StudentHomeComponent,
    children: [
      { path: 'classes', component: StudentListComponent },
      { path: 'register', component: StudentRegisterComponent },
    ],
  },
  // ,{ path: 'students', component: StudentListComponent },
];
const adminRoutes: Route[] = [
  { path: '', component: DashboardComponent },
  // {
  //   path: 'admin',
  //   loadChildren: () =>
  //     import('@rihal/admin-dashboard').then(
  //       (module) => module.AdminDashboardModule
  //     ),
  //   canActivate: [AuthGuard],
  // },
];
@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    DashboardComponent,
    StudentSummeryInfoComponent,
    StudentListComponent,
    StudentHomeComponent,
    StudentRegisterComponent,
    StudentIntroComponent,
    WelcomeComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // NxModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent },
      { path: 'student', children: studentRoutes },
      { path: 'auth', children: authRoutes },
      { path: 'admin', children: adminRoutes },

      //{path:"edit/:id", component:EditComponent},
      //{path:"show/:id", component:ShowComponent}
    ]),
    MaterialModule,
    AuthModule,
    LayoutModule,
    SharedWidgetsModule,
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
