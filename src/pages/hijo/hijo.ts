import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HijoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hijo',
  templateUrl: 'hijo.html',
})
export class HijoPage {

  hijo: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hijo = this.navParams.get('hijo');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HijoPage');
    console.log(this.hijo);
  }

}
