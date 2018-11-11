import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObservacionesPage } from './observaciones';

@NgModule({
  declarations: [
    ObservacionesPage,
  ],
  imports: [
    IonicPageModule.forChild(ObservacionesPage),
  ],
})
export class ObservacionesPageModule {}
