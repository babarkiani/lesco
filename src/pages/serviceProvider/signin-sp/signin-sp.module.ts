import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SigninSpPage } from './signin-sp';

@NgModule({
  declarations: [
    SigninSpPage,
  ],
  imports: [
    IonicPageModule.forChild(SigninSpPage),
  ],
})
export class SigninSpPageModule {}
