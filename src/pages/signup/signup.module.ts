import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import { SignupModalPageModule } from '../signup-modal/signup-modal.module';
import { DashboardPageModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [
    SignupPage,
  ],

  imports: [
    IonicPageModule.forChild(SignupPage),
    SignupModalPageModule,
    DashboardPageModule
  ],
})
export class SignupPageModule {}
