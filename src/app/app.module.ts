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


import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';



import { config } from '../environment/environment';

// SS pages
import { VerificationSsPage } from '../pages/serviceSeeker/verification-ss/verification-ss';
import { SigninSsPage } from '../pages/serviceSeeker/signin-ss/signin-ss';
import { SignupSsPage } from '../pages/serviceSeeker/signup-ss/signup-ss';
import { ForgotPasswordSsPage } from '../pages/serviceSeeker/forgot-password-ss/forgot-password-ss';
import { OtpCodeSsPage } from '../pages/serviceSeeker/otp-code-ss/otp-code-ss';



// SP pages
import { VerificationSpPage } from '../pages/serviceProvider/verification-sp/verification-sp';
import { SigninSpPage } from '../pages/serviceProvider/signin-sp/signin-sp';
import { SignupSpPage } from '../pages/serviceProvider/signup-sp/signup-sp';
import { ForgotPasswordSpPage } from '../pages/serviceProvider/forgot-password-sp/forgot-password-sp';
import { OtpCodeSpPage } from '../pages/serviceProvider/otp-code-sp/otp-code-sp';
import { ApiProvider } from '../providers/api/api';
import { AuthProvider } from '../providers/auth/auth';
import { HelperProvider } from '../providers/helper/helper';


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
    ForgotPasswordSsPage,
    OtpCodeSpPage,
    OtpCodeSsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: true,
      autoFocusAssist: true
    }),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireStorageModule,


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
    ForgotPasswordSsPage,
    OtpCodeSpPage,
    OtpCodeSsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiProvider,
    AuthProvider,
    HelperProvider,
  ]
})
export class AppModule { }
