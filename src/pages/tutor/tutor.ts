import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HijoPage } from '../hijo/hijo';

/**
 * Generated class for the TutorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutor',
  templateUrl: 'tutor.html',
})

export class TutorPage {

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
    this.navCtrl.push(HijoPage, { hijo: hijo });
  }

}
