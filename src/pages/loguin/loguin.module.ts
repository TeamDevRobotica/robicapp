import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoguinPage } from './loguin';

@NgModule({
  declarations: [
    LoguinPage,
  ],
  imports: [
    IonicPageModule.forChild(LoguinPage),
  ],
})
export class LoguinPageModule {}
