import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import { SignupModalPageModule } from '../signup-modal/signup-modal.module';

@NgModule({
  declarations: [
    SignupPage,
  ],

  imports: [
    IonicPageModule.forChild(SignupPage),
    SignupModalPageModule
  ],
})
export class SignupPageModule {}
