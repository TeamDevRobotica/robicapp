import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { HomePage } from '../home/home';

/**
 * Generated class for the PreinscripcionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preinscripcion',
  templateUrl: 'preinscripcion.html',
})
export class PreinscripcionPage {
  miFormulario: FormGroup;

  turnos : any;
  nacionalidades : any;
  provincias : any;
  departamentos : any;
  localidades : any;

  indicePais : any;
  indiceProvincia : any;
  indiceDepartamento : any;

  validation_messages = {
    'turno': [
      { type: 'required', message: 'El turno es requerido' }
    ],
    'apellidoYNombre': [
      { type: 'required', message: 'Nombre y Apellido es requerido.' },
      { type: 'minlength', message: 'El Nombre y el Apellido necesita 10 caracteres como minimo.' },
      { type: 'maxlength', message: 'El Nombre y el Apellido contienen mas de 30 caracteres.' }
    ],
    'dni': [
      { type: 'required', message: 'El dni es requerido' }
    ],
    'fechaNacimiento': [
      { type: 'required', message: 'La fecha de nacimiento es requerida' }
    ],
    'nacionalidad': [
      { type: 'required', message: 'La nacionalidad es requerida' }
    ],
    'provincia': [
      { type: 'required', message: 'La provincia es requerida' }
    ],
    'departamento': [
      { type: 'required', message: 'La departamento es requerida' }
    ],
    'localidad': [
      { type: 'required', message: 'La localidad es requerida' }
    ],
    'direccion': [
      { type: 'required', message: 'La dirección es requerida' }
    ],
    'apellidoYNombreTutor': [
      { type: 'required', message: 'Nombre y Apellido es requerido.' },
      { type: 'minlength', message: 'El Nombre y el Apellido necesita 10 caracteres como minimo.' },
      { type: 'maxlength', message: 'El Nombre y el Apellido contienen mas de 30 caracteres.' }
    ],
    'dniTutor': [
      { type: 'required', message: 'El dni es requerido' }
    ],
    'email': [
      { type: 'required', message: 'El email es requerido' },
      { type: 'email', message: 'El email no tiene el formato' }
    ],
    'tel': [
      { type: 'required', message: 'El tel es requerido' }
    ],
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public restApi: RestApiProvider, public formBuilder: FormBuilder, public alertCtrl: AlertController) {
    this.restApi.getTurnos().then(data => {
        this.turnos = data;
    });
    this.restApi.getPaises().then(data => {
      console.log(data);
      this.nacionalidades = data;
      this.provincias = this.nacionalidades[0]['provincias'];
      this.departamentos =this.nacionalidades[0]['provincias'][0]['departamentos'];
      this.localidades =this.nacionalidades[0]['provincias'][0]['departamentos'][0]['localidades'];
    });
    this.miFormulario = this.crearFormulario();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad PreinscripcionPage');
  }
  //CARGA LAS PROVINCIAS EN EL SELECT
  cargarProvincias(){
    this.indicePais = this.miFormulario.get('nacionalidad').value - 1;
    this.provincias = this.nacionalidades[this.indicePais]['provincias'];
  }
  //CARGA LOS DEPARTAMENTOS EN EL SELECT
  cargarDepartamentos(){
    this.indiceProvincia = this.miFormulario.get('provincia').value - 1;
    this.departamentos =this.nacionalidades[this.indicePais]['provincias'][this.indiceProvincia]['departamentos'];
  }

  cargarLocalidades(){
    this.indiceDepartamento = this.miFormulario.get('departamento').value - 1;
    this.localidades =this.nacionalidades[this.indicePais]['provincias'][this.indiceProvincia]['departamentos'][this.indiceDepartamento]['localidades'];
  }

  guardar() {
    this.restApi.guardarPreInscripcion(this.miFormulario.value).then(result => {
      console.log(result);
      this.showAlert();
    }, err => {
      console.log(err);
    });

  }

  private crearFormulario() {
    return this.formBuilder.group({
      turno: ['', Validators.required],
      apellidoYNombre: ['', Validators.required],
      dni: ['', Validators.compose([Validators.required, Validators.maxLength(8)])],
      fechaNacimiento: ['', Validators.required],
      nacionalidad: ['', Validators.required],
      provincia: ['', Validators.required],
      departamento: ['', Validators.required],
      localidad: ['', Validators.required],
      direccion: ['', Validators.required],
      apellidoYNombreTutor: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(30)])],
      dniTutor: ['', Validators.compose([Validators.required, Validators.maxLength(8)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      tel: ['', Validators.required],
      observacion: [''],
    });
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'La preinscripción se realizo correctamente!',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.push(HomePage);
  }

}
