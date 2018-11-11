import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Vista_alumnoPage } from '../vista_alumno/vista_alumno';


@Component({
  selector: 'page-vista_tutor',
  templateUrl: 'vista_tutor.html'
})
export class Vista_TutorPage {

  tutor: any;
  hijos: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tutor = this.navParams.get('tutor');
    this.hijos = this.navParams.get('hijos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorPage');
    console.log('Tutor', this.tutor);
  }

  irPaginaHijo(hijo) {
    console.log("Notificaciones");
    this.navCtrl.push(Vista_alumnoPage, { hijo: hijo });
  }
  
}
