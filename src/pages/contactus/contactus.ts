import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FunctionsProvider } from '../../providers/functions/functions';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
})
export class ContactusPage {

  responseData: any;
  userData={user_id :"",name:"",email:"",subject:"",phone:"",message:""};
  lang : string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public authServiceProvider :AuthServiceProvider,
    public functionsProvider :FunctionsProvider) {
   
   
  }



  login() {
    this.functionsProvider.loadingfun();
    if(this.userData.name != "" && this.userData.email != "" && this.userData.subject != "" && this.userData.phone != "" && this.userData.message != ""){

      let user_id =   JSON.parse(localStorage.getItem('userData')).id;
      this.userData.user_id = user_id;
    this.authServiceProvider.postData(this.userData,'contact/add').then((result) => {
      this.responseData = result;
               this.functionsProvider.loading.dismiss();
      
      console.log(this.responseData )
      if(this.responseData != null){
        
        this.functionsProvider.presentToast('تم ارسال رسالتك بنجاح');
        
      this.userData={user_id :"",name:"",email:"",subject:"",phone:"",message:""};
      
      } else {
        
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
    console.log('ionViewDidLoad ContactPage');
  }

}
