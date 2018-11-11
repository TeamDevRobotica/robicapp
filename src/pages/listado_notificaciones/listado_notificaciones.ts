import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotificacionesPage } from '../notificaciones/notificaciones';

@Component({
  selector: 'page-listado_notificaciones',
  templateUrl: 'listado_notificaciones.html'
})
export class Listado_notificacionesPage {

  constructor(public navCtrl: NavController) {
  }
  goToNotificaciones(params){
    if (!params) params = {};
    this.navCtrl.push(NotificacionesPage);
  }
}
