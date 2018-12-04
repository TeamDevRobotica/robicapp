import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AccessoPage } from '../accesso/accesso';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html'
})
export class PrincipalPage {

  constructor(public navCtrl: NavController) {
  }

  goToAccesso(params) {
    if (!params) params = {};
    this.navCtrl.push(AccessoPage);
  }
  goToSignup(params) {
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }
  goToLogin(params) {
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
}
