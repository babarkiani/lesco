import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StartPage } from '../pages/start/start';


// SS pages
import { VerificationSsPage } from '../pages/serviceSeeker/verification-ss/verification-ss';
import { SigninSsPage } from '../pages/serviceSeeker/signin-ss/signin-ss';
import { SignupSsPage } from '../pages/serviceSeeker/signup-ss/signup-ss';
import { ForgotPasswordSsPage } from '../pages/serviceSeeker/forgot-password-ss/forgot-password-ss';

// SP pages
import { VerificationSpPage } from '../pages/serviceProvider/verification-sp/verification-sp';
import { SigninSpPage } from '../pages/serviceProvider/signin-sp/signin-sp';
import { SignupSpPage } from '../pages/serviceProvider/signup-sp/signup-sp';
import { ForgotPasswordSpPage } from '../pages/serviceProvider/forgot-password-sp/forgot-password-sp';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    StartPage,
    VerificationSpPage,
    SigninSpPage,
    SignupSpPage,
    VerificationSsPage,
    SigninSsPage,
    SignupSsPage,
    ForgotPasswordSpPage,
    ForgotPasswordSsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: true,
      autoFocusAssist: true
    }),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    StartPage,
    VerificationSpPage,
    SigninSpPage,
    SignupSpPage,
    VerificationSsPage,
    SigninSsPage,
    SignupSsPage,
    ForgotPasswordSpPage,
    ForgotPasswordSsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
