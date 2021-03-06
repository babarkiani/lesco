import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { Subscription } from 'rxjs';
import { SignupSpPage } from '../signup-sp/signup-sp';
import { ForgotPasswordSpPage } from '../forgot-password-sp/forgot-password-sp';

/**
 * Generated class for the SigninSpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin-sp',
  templateUrl: 'signin-sp.html',
})
export class SigninSpPage {
  type: string = 'worker';

  form1: FormGroup;
  user;
  image: string = '';
  ob1$: Subscription;
  loggedin: boolean = false;
  flag;
  userId;
  uploadImageId;
  worker;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fb: FormBuilder) {
    this.form1 = this.fb.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninSpPage');

  }
  gotoSignup() {
    this.navCtrl.push(SignupSpPage)
  }
  gotoForgotPassword() {
    this.navCtrl.push(ForgotPasswordSpPage)
  }
  get f1() { return this.form1.controls; }
  signinCustomer(form1) {

  }

}
