import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { Subscription } from 'rxjs';
import { SignupSsPage } from '../serviceSeeker/signup-ss/signup-ss';
import { SigninSsPage } from '../serviceSeeker/signin-ss/signin-ss';
import { SignupSpPage } from '../serviceProvider/signup-sp/signup-sp';
import { SigninSpPage } from '../serviceProvider/signin-sp/signin-sp';
/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {
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
    private fb: FormBuilder, ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
    this.form1 = this.fb.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
    });
  }
  gotoServiceSeekerSignup() {
    this.navCtrl.push(SignupSsPage)

  }
  gotoServiceSeekerLogin() {
    this.navCtrl.push(SigninSsPage)
  }
  gotoServiceProviderSignup() {
    this.navCtrl.push(SignupSpPage)
  }
  gotoServiceProviderLogin() {
    this.navCtrl.push(SigninSpPage)
  }
  signinCustomer(form1) {

  }

}
