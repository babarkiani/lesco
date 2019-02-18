import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';
import * as firebase from 'firebase';
import { SignupSsPage } from '../signup-ss/signup-ss';
/**
 * Generated class for the OtpCodeSsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otp-code-ss',
  templateUrl: 'otp-code-ss.html',
})
export class OtpCodeSsPage {
  code;
  credential;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private firestore: Firebase) {
    this.credential = localStorage.getItem('cred');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpCodeSsPage');
  }
  submitCode() {
    let signInCredential = firebase.auth.PhoneAuthProvider.credential(this.credential, this.code);
    firebase.auth().signInWithCredential(signInCredential).then(success => {
      if (success.uid) {
        console.log(success.uid);
        alert(success.uid);
        this.navCtrl.push(SignupSsPage);
      }

    }, err => {
      alert(err.message);
    })
  }

}
