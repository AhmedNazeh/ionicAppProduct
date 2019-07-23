import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesPage } from './pages';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    PagesPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesPage),
    TranslateModule
  ],
})
export class PagesPageModule {}
