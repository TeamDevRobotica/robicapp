import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { HomePage } from '../home/home';
import { AccessoPage } from '../accesso/accesso';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',

})
export class RegistroPage {
  niveles: any;
  Pass: any;
  PassConf: any;
  miFormulario: FormGroup;
  datos: any;
  validardatos: any;
  // validation_messages = {
  //   'apellidoYNombre': [
  //     { type: 'required', message: 'El apellido y nombre es requerido.' },
  //     { type: 'maxlength', message: 'Longitud maxima 50 caracteres.' }
  //   ],
  //   'dni': [
  //     { type: 'required', message: 'El dni es requerido.' },
  //     { type: 'maxlength', message: 'Longitud maxima 8.' },
  //     { type: 'minlength', message: 'Longitud minima 8.' }
  //   ],
  //   'usuario': [
  //     { type: 'required', message: 'El Usuario es requerido.' },
  //     { type: 'maxlength', message: 'El Usuario contienen mas de 30 caracteres.' }
  //   ],
  //   'password': [
  //     { type: 'required', message: 'La contraseña es requerida' }
  //   ],
  //   'passwordConfirmation': [
  //     { type: 'required', message: 'La Confirmacion es requerida.' },
  //     { type: 'equalTo', message: 'Las contraseñas no coinciden.' }
  //   ]
  // }

  validation_messages = {
    'nombreYApellido': [
      { type: 'required', message: 'Nombre y Apellido es requerido.' },
      { type: 'minlength', message: 'El Nombre y el Apellido necesita 10 caracteres como minimo.' },
      { type: 'maxlength', message: 'El Nombre y el Apellido contienen mas de 30 caracteres.' }
    ],
    'nivel': [
      { type: 'required', message: 'El nivel es requerido' }
    ],
    'dni': [
      { type: 'required', message: 'El dni es requerido' },
      { type: 'minlength', message: 'El dni necesita 8 caracteres como minimo' },
      { type: 'tutorNoValido', message: 'El dni tiene usuario' }
    ],
    'nombreUsuario': [
      { type: 'required', message: 'El nombre de Usuario es requerido' },
      { type: 'maxlength', message: 'El Usuario contienen mas de 30 caracteres.' }
    ],
    'claveUsuario': [
      { type: 'required', message: 'La clave de Usuario es requerido' }
    ],
    'confirmarClave': [
      { type: 'required', message: 'La Confirmacion es requerida.' },
      { type: 'equalTo', message: 'Las contraseñas no coinciden.' }
    ]
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public restApi: RestApiProvider, public alertCtrl: AlertController) {
    this.miFormulario = this.crearFormulario();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
    this.restApi.getNiveles().then(data => {
      this.niveles = data;
    });
    console.log(this.niveles);
  }

  guardar() {
    // this.datos = [
    //   {
    //     "apellidoYNombre": this.miFormulario.get('apellidoYNombre').value,
    //     "dni": this.miFormulario.get('dni').value,
    //     "nombreUsuario": this.miFormulario.get('usuario').value,
    //     "claveUsuario": this.miFormulario.get('password').value
    //   }
    // ];
    this.restApi.registrar(this.miFormulario.value).then(result => {
      console.log(result);
    }, err => {
      console.log(err);
    });
    this.registroCorrecto();
  }

  validar(pass, passconf) {
    if (pass == passconf) {
      return true;
    } else {
      return false;
    }
  }

  private crearFormulario() {
    return this.formBuilder.group({
      nivel: ['', Validators.required],
      nombreYApellido: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      dni: ['', Validators.compose([Validators.required])],
      nombreUsuario: ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
      /* 'passwordRetry': this.formBuilder.group({ */
      claveUsuario: ['', Validators.required],
      confirmarClave: ['', Validators.compose([Validators.required, this.equalto('claveUsuario')])]
      /* }) */
    });
  }

  equalto(field_name): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let input = control.value;
      let isValid = control.root.value[field_name] == input;
      if (!isValid)
        return { 'equalTo': { isValid } };
      else
        return null;
    };
  }

  registroCorrecto() {
    const alert = this.alertCtrl.create({
      title: 'Registro correcto!',
      subTitle: 'Espere a ser validado',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.push(AccessoPage);
  }

}
