import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { AdminPage } from '../admin/admin';
import { TutorPage } from '../tutor/tutor';

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

    constructor(public navCtrl: NavController, public navParams: NavParams, public restApi: RestApiProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoguinPage');
        this.restApi.getUsuarios().then(data => {
            this.usuarios = data;
        });
    }


    login() {
        //Metodo para devolver un solo usuario
        this.restApi.getUsuario(this.user.value, this.password.value).then(data => {
            this.usuario = data;
            this.validaringreso(this.usuario[0].nivel.descripcion);
        });

        // // //Metodo para users.json
        // const usuario = this.usuarioYClaveCorrecta();
        // if (usuario) {
        //     console.log("Usuario correcto");
        //     if (Object.is(usuario.tipoUsuario.tipo, "Admin")) {
        //         console.log(usuario.tipoUsuario.tipo);
        //         this.navCtrl.push(AdminPage);
        //     } else {
        //         console.log(usuario.tipoUsuario.tipo);
        //         this.navCtrl.push(TutorPage, { tutor: usuario.tutor, hijos: usuario.tutor.hijos });
        //     }

        // } else {
        //     console.log("Usuario incorrecto");
        // }
    }

    validaringreso(NivelUser) {
        console.log("Usuario correcto");
        if (NivelUser == "Admin") {
            console.log("Usuario Administrador");
            this.navCtrl.push(AdminPage);
        } else {
            console.log("Usuario Tutor " + this.usuario[0].tutor.Apellidos_Nombres);
            this.navCtrl.push(TutorPage, { tutor: this.usuario[0].tutor, hijos: this.usuario[0].tutor.hijos });
        }
    }

    //No se utiliza
    //Comprueba y devuelve un usuario por usuario y clave
    usuarioYClaveCorrecta() {
        for (const key in this.usuarios) {
            console.log('Key ' + key);
            console.log('Property ' + this.usuarios.hasOwnProperty(key));
            if (this.usuarios.hasOwnProperty(key)) {
                const element = this.usuarios[key];
                if (Object.is(this.user.value, element.usuario) && Object.is(this.password.value, element.clave)) {
                    return element;
                }
            }
        }
        return null;
    }

}
