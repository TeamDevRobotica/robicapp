import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { HomePage } from '../home/home';

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
  Pass:any;
  PassConf:any;
  miFormulario: FormGroup;
  datos : any;
  validardatos:any;
  validation_messages = {
    'apellidoYNombre': [
      { type: 'required', message: 'El apellido y nombre es requerido' }
    ],
    'dni': [
      { type: 'required', message: 'El dni es requerido' }
    ],
    'usuario': [
      { type: 'required', message: 'El Usuario es requerido.' },
      { type: 'minlength', message: 'El Usuario necesita 8 caracteres como minimo.' },
      { type: 'maxlength', message: 'El Usuario contienen mas de 30 caracteres.' }
    ],
    'passwordRetry': [
      { type: 'required', message: 'El turno es requerido' }
    ]  
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public restApi: RestApiProvider, public alertCtrl: AlertController) {
    this.miFormulario = this.crearFormulario();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  guardar() {
    this.Pass=this.miFormulario.get('passwordRetry.password').value;
    this.PassConf=this.miFormulario.get('passwordRetry.passwordConfirmation').value;
    this.validardatos = this.validar(this.Pass,this.PassConf)

    if (this.validardatos){
      this.datos = [
        {
          "apellidoYNombre" : this.miFormulario.get('apellidoYNombre').value,
          "dni" : this.miFormulario.get('dni').value,
          "nombreUsuario" : this.miFormulario.get('dni').value,
          "claveUsuario" : this.miFormulario.get('passwordRetry.password').value
        }
      ];
      this.restApi.registrarUsuario(this.datos).then(result => {
        console.log(result);
      }, err => {
        console.log(err);
      });
      this.registroCorrecto();
    }else{
      this.passIncorrecto();
    }
  }

validar(pass, passconf){
  if (pass==passconf){
    return true;
  }else{
    return false;
  }
}
  private crearFormulario() {
    return this.formBuilder.group({
      apellidoYNombre: ['', Validators.compose([Validators.required, Validators.maxLength(8), Validators.maxLength(30)])],
      dni: ['', Validators.required],
      usuario: ['', Validators.compose([Validators.required, Validators.maxLength(8), Validators.maxLength(30)])],
      passwordRetry: this.formBuilder.group({
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required]
      }),
    });
  }

  passIncorrecto() {
    const alert = this.alertCtrl.create({
      title: 'Las contraseñas no coinciden!',
      buttons: ['OK']
    });
    alert.present();
  }

  registroCorrecto() {
    const alert = this.alertCtrl.create({
      title: 'Registro correcto!',
      subTitle: 'Espere a ser validado',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.push(HomePage);
  }
}
