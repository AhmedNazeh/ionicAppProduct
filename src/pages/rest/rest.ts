import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the RestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rest',
  templateUrl: 'rest.html',
})
export class RestPage {

  userData = {phone:""};
 
  toast:any;
  code:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public authServiceProvider :AuthServiceProvider,
    public toastCtrl :ToastController ,
      public alertCtrl: AlertController) {
  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestPage');
  }


  
  login(){
    this.code=this.getRndInteger(1111,10000);
     
    console.log(this.userData);
    this.authServiceProvider.getData('user/sendcode/'+this.userData.phone+'/'+this.code)
    .then(dataa => {
    

     
      this.presentPrompt();
    });

  }

  
  getRndInteger(min, max) {

    let integer = Math.floor(Math.random() * (max - min + 1) ) + min;
   
     console.log(integer);

    return  integer
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'قم بتاكيد أمتلاك الحساب',
      inputs: [
        {
          name: 'num',
          placeholder: 'اكتب الكود'
        }
      ],
      buttons: [
        {
          text: 'الغاء',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ارسال',
          handler: data => {

            console.log(this.code);
            console.log(data.num);

              if(this.code == data.num){
                this.presentToast('تم التحقق ');  
                this.sendnewpass();                  
              } else {
                this.presentToast('هناك خطأ فى كود التحقيق');
                this.presentPrompt();                           
              }        

          


            
          }
        }
      ]
    });
    alert.present();
  }


  presentToast(x) {
    this.toast = this.toastCtrl.create({
      message: x ,
      duration: 3000
    });
    this.toast.present();
  }






  sendnewpass(){
    this.authServiceProvider.getData('users/rest/'+this.userData.phone  )
                  .then(dataa => {
                  
                this.presentToast('تم ارسال كلمه مرور جديده '); 
                this.navCtrl.pop(); 
                  });
  }


}
