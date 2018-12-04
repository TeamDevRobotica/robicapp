import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Vista_alumnoPage } from '../vista_alumno/vista_alumno';
import { RestApiProvider } from '../../providers/rest-api/rest-api';


@Component({
  selector: 'page-vista_tutor',
  templateUrl: 'vista_tutor.html'
})
export class Vista_TutorPage {

  tutor: any;
  hijos: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restApi: RestApiProvider) {
    this.tutor = this.navParams.get('tutor');
    this.hijos = this.navParams.get('hijos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorPage');
    console.log('Tutor', this.tutor);
  }

  // irPaginaHijo(hijo) {
  //   console.log("Notificaciones");
  //   this.navCtrl.push(Vista_alumnoPage, { hijo: hijo });
  // }

  async irPaginaHijo(hijo) {
    console.log("Notificaciones " + hijo.Dni);
    let hijoApi;
    await this.restApi.getPersonaConTodasSusRelaciones(hijo.Dni).then(hijo => {
      hijoApi = hijo;
    });
    this.navCtrl.push(Vista_alumnoPage, { hijo: hijoApi });
  }
}
