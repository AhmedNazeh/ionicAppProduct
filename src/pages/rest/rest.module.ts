import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestPage } from './rest';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    RestPage,
  ],
  imports: [
    IonicPageModule.forChild(RestPage),
    TranslateModule
  ],
})
export class RestPageModule {}
