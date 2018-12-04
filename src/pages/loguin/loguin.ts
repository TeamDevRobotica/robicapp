import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { AdminPage } from '../admin/admin';
//import { TutorPage } from '../tutor/tutor';
import { Vista_TutorPage } from '../vista_tutor/vista_tutor';

/**
 * Generated class for the LoguinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-loguin',
    templateUrl: 'loguin.html',
})
export class LoguinPage {

    @ViewChild('username') user;
    @ViewChild('password') password;

    usuarios: any;
    usuario: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public restApi: RestApiProvider, public alertCtrl: AlertController) {
    }

    ionViewDidLoad() {
    }


    passIncorrecto() {
        const alert = this.alertCtrl.create({
            title: 'Usuario incorrecto!',
            buttons: ['OK']
        });
        alert.present();
    }

    login() {
        //Metodo para devolver un solo usuario
        this.restApi.getUsuario(this.user.value, this.password.value).then(data => {
            this.usuario = data;
            //console.log(this.usuario['nivel'].descripcion)
            //this.validaringreso(this.usuario[0].nivel.descripcion);
            if (this.usuario) {
                console.log(this.usuario);
                this.validaringreso(this.usuario['nivel'].descripcion);
            } else {
                console.log('Usuario no encontrado');
                this.passIncorrecto();
            }
        });
    }

    //Ahora la funcion es asincrona
    async validaringreso(NivelUser) {
        let user: {};
        console.log("Usuario correcto");
        if (NivelUser === "Admin") {
            console.log("Usuario Administrador");
            this.navCtrl.push(AdminPage);
        } else if (NivelUser === "Tutor") {
            await this.restApi.getTutorPorIdUsuario(this.usuario['id']).then(data => {
                //Seteo mi variable con el tutor encontrado
                user = data;
            });
            console.log("Usuario Tutor " + user);
            this.navCtrl.push(Vista_TutorPage, { tutor: user, hijos: user['hijos'] }/* , { tutor: this.usuario['tutor'], hijos: this.usuario['tutor'].hijos } */);
        }
    }

}


