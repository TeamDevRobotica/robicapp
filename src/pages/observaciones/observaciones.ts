import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ObservacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-observaciones',
  templateUrl: 'observaciones.html',
})
export class ObservacionesPage {

  hijo: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hijo = this.navParams.get('hijo');
    console.log("imprime observa")
    console.log(this.hijo)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObservacionesPage');
  }

}
