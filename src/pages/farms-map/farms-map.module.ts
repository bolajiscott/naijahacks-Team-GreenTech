import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FarmsMapPage } from './farms-map';

@NgModule({
  declarations: [
    FarmsMapPage,
  ],
  imports: [
    IonicPageModule.forChild(FarmsMapPage),
  ],
})
export class FarmsMapPageModule {}
