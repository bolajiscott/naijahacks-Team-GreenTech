import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { SignupModalPage } from '../signup-modal/signup-modal';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  openModal(type: string){
    const modal = this.modalCtrl.create(SignupModalPage, {type});
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {

      }
    })
  }

  openSignupModal(){
    this.openModal('signupForm');
  }

  openLoginModal(){
    this.openModal('loginForm')
  }
}
