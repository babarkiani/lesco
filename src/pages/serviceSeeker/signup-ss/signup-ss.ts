import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the SignupSsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup-ss',
  templateUrl: 'signup-ss.html',
})
export class SignupSsPage {
  form: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fb: FormBuilder, ) {
    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.email, Validators.required
      ])],
      lastName: ['', Validators.required],
      phone: ['', Validators.compose([
        Validators.required, Validators.maxLength(12)
      ])],
      firstName: ['', Validators.required],
      password: ['', Validators.compose([
        Validators.required
      ])],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupSsPage');
  }

}
