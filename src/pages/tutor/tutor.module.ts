import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TutorPage } from './tutor';

@NgModule({
  declarations: [
    TutorPage,
  ],
  imports: [
    IonicPageModule.forChild(TutorPage),
  ],
})
export class TutorPageModule {}
