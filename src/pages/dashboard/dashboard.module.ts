import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';
import { FarmsMapPageModule } from '../farms-map/farms-map.module';

@NgModule({
  declarations: [
    DashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardPage),
    FarmsMapPageModule
  ],
})
export class DashboardPageModule {}
