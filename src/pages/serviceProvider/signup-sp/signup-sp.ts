import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/**
 * Generated class for the SignupSpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup-sp',
  templateUrl: 'signup-sp.html',
})
export class SignupSpPage {
  form: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fb: FormBuilder, ) {
    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.email, Validators.required
      ])],
      phone: ['', Validators.compose([
        Validators.required
      ])],
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([
        Validators.required
      ])],
      address: ['', Validators.required],
      zipcode: ['', Validators.required],
      categoryName: ['', Validators.required],
      rate: ['', Validators.required],
      city: [''],
      detail: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])],
      type: ['companies', Validators.required],
      cvr: ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupSpPage');
  }
  onSegmentChange(event) {
    this.form.reset();
    if (event === 'All')
      this.form.controls['type'].setValue('companies');
    else
      this.form.controls['type'].setValue('freelancers');

  }
}
