import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RepotPage } from './repot';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    RepotPage,
  ],
  imports: [
    IonicPageModule.forChild(RepotPage),
    TranslateModule
  ],
})
export class RepotPageModule {}
