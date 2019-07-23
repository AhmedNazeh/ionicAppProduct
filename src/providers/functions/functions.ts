import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from 'ionic-angular';

/*
  Generated class for the FunctionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FunctionsProvider {

  toast: any;
  loading:any;
  constructor(public http: HttpClient,public toastCtrl :ToastController,public loadingCtrl: LoadingController) {
    console.log('Hello FunctionsProvider Provider');
  }

  presentToast(x) {
    this.toast = this.toastCtrl.create({
      message: x ,
      duration: 3000
    });
    this.toast.present();
  }

  loadingfun(){
    this.loading = this.loadingCtrl.create({
      content: 'يرجى الانتظار...'
    });
    this.loading.present();
    
  }

}
