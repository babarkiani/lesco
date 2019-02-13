import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SigninSsPage } from './signin-ss';

@NgModule({
  declarations: [
    SigninSsPage,
  ],
  imports: [
    IonicPageModule.forChild(SigninSsPage),
  ],
})
export class SigninSsPageModule {}
