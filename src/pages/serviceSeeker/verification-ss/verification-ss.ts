import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Firebase } from '@ionic-native/firebase';
import * as firebase from 'firebase'

import { Subscription } from 'rxjs';
import { OtpCodeSsPage } from '../otp-code-ss/otp-code-ss';
import { HelperProvider } from '../../../providers/helper/helper';
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
  phone;
  credentials;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fb: FormBuilder, public firestore: Firebase, private helper: HelperProvider) {
    // this.form1 = this.fb.group({
    //   email: ['', Validators.compose([Validators.email, Validators.required])],
    //   phone: ['', Validators.compose([
    //     Validators.required, Validators.maxLength(12)
    //   ])],
    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerificationSsPage');
  }
  sendVerification() {
    this.helper.presentBottomToast('An sms has been sent on your number.')
    //this.firestore.verifyPhoneNumber
    console.log(this.phone);
    this.firestore.verifyPhoneNumber(`+92${this.phone}`, 60).then(cred => {
      this.credentials = cred.verificationId;
      localStorage.setItem('cred', this.credentials);
      console.log(this.credentials)
      alert(this.credentials);
      this.navCtrl.push(OtpCodeSsPage);
    })
    //this.navCtrl.push(OtpCodeSsPage);
  }

}
