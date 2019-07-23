import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FunctionsProvider } from '../../providers/functions/functions';
import { MyApp } from '../../app/app.component';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  userData = {id:'',name:'',"email": "","password": ""};
  responseData: any;
  data: any;
 
  
  constructor(public navCtrl: NavController,
    public authServiceProvider :AuthServiceProvider,
    public functionsProvider :FunctionsProvider, public navParams: NavParams, public events: Events) {

      this.data=JSON.parse(localStorage.getItem('userData')).id;

      this.userData.id=this.data.id;
      this.userData.name=this.data.name;
      this.userData.email=this.data.email;
    
    
    }

  login() {
    
    this.functionsProvider.loadingfun();
    console.log(this.userData.email);
    if(this.userData.email != "" ){


    this.authServiceProvider.postData(this.userData,'users/update').then((result) => {
      this.responseData = result;
      if(this.responseData.data){
      console.log(this.responseData.data);
      localStorage.setItem('userData', JSON.stringify(this.responseData.data));


           this.functionsProvider.loading.dismiss();
           this.events.publish('user:created', this.responseData.data, Date.now());
          
      this.navCtrl.setRoot(MyApp);

      }
      else{
        this.functionsProvider.loading.dismiss();
        this.functionsProvider.presentToast('هناك خطأ فى البيانات');

       }
    }, (err) => {
      // Error log
      this.functionsProvider.loading.dismiss();
      this.functionsProvider.presentToast(err);

    });

    } else {
      this.functionsProvider.loading.dismiss();
      this.functionsProvider.presentToast('يجب ملاء الحقول');

    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

}
