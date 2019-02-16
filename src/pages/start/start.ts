import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupSsPage } from '../serviceSeeker/signup-ss/signup-ss';
import { SigninSsPage } from '../serviceSeeker/signin-ss/signin-ss';
import { SignupSpPage } from '../serviceProvider/signup-sp/signup-sp';
import { SigninSpPage } from '../serviceProvider/signin-sp/signin-sp';
import { VerificationSsPage } from '../serviceSeeker/verification-ss/verification-ss';
/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 **/
@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');

  }
  gotoServiceSeekerSignup() {
    this.navCtrl.push(VerificationSsPage)

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
}
