import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { User } from '../../models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-signup-modal',
  templateUrl: 'signup-modal.html',
})
export class SignupModalPage {

  user: User = new User();
  signupForm: FormGroup;
  loginForm: FormGroup;
  formType: string;

  constructor(public navCtrl: NavController, private viewCtrl: ViewController, public navParams: NavParams, private fb: FormBuilder) {

    this.signupForm =  fb.group({
      'name': ['', Validators.required],
      'email': ['', Validators.required],
      'farmLocation': ['', Validators.required],
      'phone': ['', Validators.required]
    });

    this.loginForm =  fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.formType = this.navParams.get('type');
  }

  ionViewDidLoad() {

  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  submit(){
    this.navCtrl.setRoot('')
  }

  login(){

  }
}
