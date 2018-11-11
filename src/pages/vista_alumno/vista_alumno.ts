import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NotificacionesPage } from '../notificaciones/notificaciones';
import { ObservacionesPage } from '../observaciones/observaciones';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'page-vista_alumno',
  templateUrl: 'vista_alumno.html'
})
export class Vista_alumnoPage {
  hijo: any;
  documento: any;
 

  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: DomSanitizer ) {
    this.hijo = this.navParams.get('hijo');
    this.documento = this.sanitizer.bypassSecurityTrustResourceUrl('https://docs.google.com/document/d/e/2PACX-1vTZhdoPMFVah2ri4xzj8W1MxtXKrvkWN-Hbf5HdagXjWfGykrhaWK8fqa4iW14NO_mwSLCPItLhrRNx/pub?embedded=true');
   if (this.hijo.horario.trayecto.id=="1"){
       this.documento = this.sanitizer.bypassSecurityTrustResourceUrl('https://docs.google.com/document/d/e/2PACX-1vTZhdoPMFVah2ri4xzj8W1MxtXKrvkWN-Hbf5HdagXjWfGykrhaWK8fqa4iW14NO_mwSLCPItLhrRNx/pub?embedded=true');
    }else if(this.hijo.horario.trayecto.id=="2"){
       this.documento = this.sanitizer.bypassSecurityTrustResourceUrl('https://docs.google.com/document/d/e/2PACX-1vRWT2tRwDnxA_9ndNzuITKI_KyjrrwELSx-oWyVGs6UDUpiV4-1pxS2iAg06cjhJuglsl1-2nsuBYsF/pub?embedded=true');
    }else if(this.hijo.horario.trayecto.id=="3"){
      this.documento = this.sanitizer.bypassSecurityTrustResourceUrl('https://docs.google.com/document/d/e/2PACX-1vTc7LswZ-uR3uE5t0zSZdovnd0NqqXkUBFRp4hsQSE2Ib3yLnlSPTDylaLthSKBlaDgglw-NXbC_TbL/pub?embedded=true');
    }else if(this.hijo.horario.trayecto.id=="4"){
      this.documento = this.sanitizer.bypassSecurityTrustResourceUrl('https://docs.google.com/document/d/e/2PACX-1vSdCyvd3liDrpPOBlcSEiOV2J0TJTTHnJhDypxgEh1hlU01bmUax2RxY-Ms_MYacBtxIs9cgG3qRNPO/pub?embedded=true'); 
    }
    console.log("Id trayecto",this.hijo.horario.trayecto.id)
    console.log("enlace",this.documento)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HijoPage');
    console.log(this.hijo);
  }

  irPaginaNotificaciones(hijo) {
    this.navCtrl.push(NotificacionesPage, { hijo: hijo});
    console.log("Notificaciones alumno", hijo);
  }
  
   irPaginaObservaciones(hijo) {
    console.log("Observaciones");
    this.navCtrl.push(ObservacionesPage, { hijo: hijo });
  }
  
}
