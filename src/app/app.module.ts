import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RestApiProvider } from '../providers/rest-api/rest-api';
import { LoguinPage } from '../pages/loguin/loguin';
import { RegistroPage } from '../pages/registro/registro';
import { AdminPage } from '../pages/admin/admin';
import { TutorPage } from '../pages/tutor/tutor';
import { HijoPage } from '../pages/hijo/hijo';
import { PreinscripcionPage } from '../pages/preinscripcion/preinscripcion';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoguinPage,
    RegistroPage,
    AdminPage,
    TutorPage,
    HijoPage,
    PreinscripcionPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoguinPage,
    RegistroPage,
    AdminPage,
    TutorPage,
    HijoPage,
    PreinscripcionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestApiProvider
  ]
})
export class AppModule { }
