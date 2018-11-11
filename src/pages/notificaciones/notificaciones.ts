import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-notificaciones',
  templateUrl: 'notificaciones.html'
})
export class NotificacionesPage {

  hijo: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hijo = this.navParams.get('hijo');
    console.log("imprime notif")
    console.log(this.hijo.descrpcion)
  }
  
}
