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
import { AccessoPage } from '../pages/accesso/accesso';
import { MostrarTodasLasPersonasPage } from '../pages/mostrar-todas-las-personas/mostrar-todas-las-personas';
import { TutorPage } from '../pages/tutor/tutor';
import { HijoPage } from '../pages/hijo/hijo';
import { PrincipalPage } from '../pages/principal/principal';
import { Vista_TutorPage } from '../pages/vista_tutor/vista_tutor';
import { Vista_alumnoPage } from '../pages/vista_alumno/vista_alumno';
import { Vista_preguntasPage } from '../pages/vista_preguntas/vista_preguntas';
import { Vista_informacionPage } from '../pages/vista_informacion/vista_informacion';
import { NotificacionesPage } from '../pages/notificaciones/notificaciones';
import { Listado_notificacionesPage } from '../pages/listado_notificaciones/listado_notificaciones';
import { ObservacionesPage } from '../pages/observaciones/observaciones';
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
    AccessoPage,
    MostrarTodasLasPersonasPage,
    PrincipalPage,
    Vista_TutorPage,
    Vista_alumnoPage,
    Vista_preguntasPage,
    Vista_informacionPage,
    NotificacionesPage,
    Listado_notificacionesPage,
    ObservacionesPage,
    PreinscripcionPage,
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
    AccessoPage,
    MostrarTodasLasPersonasPage,
    PrincipalPage,
    Vista_TutorPage,
    Vista_alumnoPage,
    Vista_preguntasPage,
    Vista_informacionPage,
    NotificacionesPage,
    Listado_notificacionesPage,
    ObservacionesPage,
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
