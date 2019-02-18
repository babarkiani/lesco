import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ActionSheetController, ToastController } from 'ionic-angular';

/*
  Generated class for the HelperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HelperProvider {

  loader: any;
  alert: any;

  constructor(private alertCtrl: AlertController, private loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {

  }
  load(msg) {
    this.loader = this.loadingCtrl.create({
      content: msg
    });
    this.loader.present();
  }

  dismiss() {
    if (this.loader) { this.loader.dismiss(); this.loader = null; }
  }

  presentDailog(title, feildName, placeholder, buttonText, handler) {

    const prompt = this.alertCtrl.create({
      title: title,

      inputs: [
        {
          name: feildName,
          placeholder: placeholder
        },
      ],
      buttons: [
        {
          text: buttonText,
          handler: handler
        },

      ]
    });

    prompt.present();
  }



  presentConfirm(title, message, successButton, cancelButton, onsuccess, oncancel) {
    this.alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: cancelButton,
          role: 'cancel',
          handler: oncancel
        },
        {
          text: successButton,
          handler: onsuccess
        }
      ]
    });
    this.alert.present();
  }

  dismissConfirm() {
    if (this.alert) { this.alert.dismiss(); this.alert = null; }
  }

  presentPrompt(title, inputs, buttons) {
    let alert = this.alertCtrl.create({
      title: 'Login',
      inputs: inputs
      //  [
      //   {
      //     name: 'username',
      //     placeholder: 'Username'
      //   },
      //   {
      //     name: 'password',
      //     placeholder: 'Password',
      //     type: 'password'
      //   }
      // ]
      , buttons: buttons
      //  [
      //   {
      //     text: 'Cancel',
      //     role: 'cancel',
      //     handler: data => {
      //       console.log('Cancel clicked');
      //     }
      //   },
      //   {
      //     text: 'Login',
      //     handler: data => {
      //       if (User.isValid(data.username, data.password)) {
      //         // logged in!
      //       } else {
      //         // invalid login
      //         return false;
      //       }
      //     }
      //   }
      // ]
    });
    alert.present();
  }


  presentToast(msg, dur, pos) {
    let t = this.toastCtrl.create({
      message: msg,
      duration: dur || 5000,
      position: pos || 'bottom'
    });

    t.onDidDismiss(() => {

    });

    t.present();
  }

  presentBottomToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 5000,
      position: 'bottom'
    }).present();
  }

  presentActionSheet(title, option1, option2, f1, f2) {
    let actionSheet = this.alertCtrl.create({
      title: title,
      buttons: [
        {
          text: option1,
          role: 'destructive',
          handler: f1
        },
        {
          text: option2,
          role: 'destructive',
          handler: f2
        },
      ]
    }).present();
  }

}
