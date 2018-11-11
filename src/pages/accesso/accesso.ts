import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { LoguinPage } from '../loguin/loguin';
import { Vista_informacionPage } from '../vista_informacion/vista_informacion';
import { Vista_preguntasPage } from '../vista_preguntas/vista_preguntas';

@Component({
  selector: 'page-accesso',
  templateUrl: 'accesso.html'
})
export class AccessoPage {

  constructor(public navCtrl: NavController) {
  }
  goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(RegistroPage);
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoguinPage);
  }
  goToVista_informacion(params){
    if (!params) params = {};
    this.navCtrl.push(Vista_informacionPage);
  }
  goToVista_preguntas(params){
    if (!params) params = {};
    this.navCtrl.push(Vista_preguntasPage);
  }
}
