import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { StartPage } from '../pages/start/start';
import { SigninSpPage } from '../pages/serviceProvider/signin-sp/signin-sp';
import { SigninSsPage } from '../pages/serviceSeeker/signin-ss/signin-ss';
import { SignupSsPage } from '../pages/serviceSeeker/signup-ss/signup-ss';
import { SignupSpPage } from '../pages/serviceProvider/signup-sp/signup-sp';
import { VerificationSsPage } from '../pages/serviceSeeker/verification-ss/verification-ss';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = TabsPage;
  rootPage: any = VerificationSsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
