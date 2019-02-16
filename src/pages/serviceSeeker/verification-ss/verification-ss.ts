import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { Subscription } from 'rxjs';
import { OtpCodeSsPage } from '../otp-code-ss/otp-code-ss';
/**
 * Generated class for the VerificationSsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verification-ss',
  templateUrl: 'verification-ss.html',
})
export class VerificationSsPage {
  form1: FormGroup;
  email: any;
  phone: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fb: FormBuilder) {
    this.form1 = this.fb.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      phone: ['', Validators.compose([
        Validators.required, Validators.maxLength(12)
      ])],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerificationSsPage');
  }
  sendVerification() {
    this.navCtrl.push(OtpCodeSsPage);
  }

}
