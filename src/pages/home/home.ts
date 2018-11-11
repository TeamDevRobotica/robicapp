import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { LoguinPage } from '../loguin/loguin';
import { RegistroPage } from '../registro/registro';
import { PreinscripcionPage } from '../preinscripcion/preinscripcion';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  personas: any;
  constructor(public navCtrl: NavController, public restApi: RestApiProvider) {

  }
  login() {
    this.navCtrl.push(LoguinPage);
  }
  registro() {
    this.navCtrl.push(RegistroPage);
  }
  preinscripcion() {
    this.navCtrl.push(PreinscripcionPage);
  }

}
