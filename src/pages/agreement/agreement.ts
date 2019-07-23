import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FunctionsProvider } from '../../providers/functions/functions';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the AgreementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agreement',
  templateUrl: 'agreement.html',
})
export class AgreementPage {

  data:any;
  all: any;
  
  constructor(public navCtrl: NavController,
    public authServiceProvider :AuthServiceProvider,
    public functionsProvider :FunctionsProvider) {
      this.GetDate();

  }

  GetDate(){
    this.functionsProvider.loadingfun();
    this.authServiceProvider.getData('agreement')
    .then(data => {
        this.all=data;
        this.data = this.all.data;  
        
      
      this.functionsProvider.loading.dismiss();
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AgreementPage');
  }

  ok(){
    this.navCtrl.push('SignupPage');
  }
}
