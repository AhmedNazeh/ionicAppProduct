import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FunctionsProvider } from '../../providers/functions/functions';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  all:any;
  data:any;
  userData = {"email": "",'name':'','phone':'','code':''};
  usageData :any[];
  s:boolean= false;
  responseData: any;

  
  btncode:boolean=false;
  x: number;
  codenum: any;
  constructor(public navCtrl: NavController,
    public authServiceProvider :AuthServiceProvider,
    public functionsProvider :FunctionsProvider,
    public events: Events,public navParams: NavParams) {


      
      this.GetDate();

     
  }


  openUsage(){
    this.authServiceProvider.getData('page')
    .then(data => {
      console.log(data)
        this.usageData.push(data);
        console.log(data)
        let useInfo = this.usageData.find(x=>x.id == 3);
        console.log(useInfo)
      });
  }
  sendcode(){



    this.functionsProvider.loadingfun();


    if(this.userData.phone ){

      this.codenum=this.getRndInteger(1111,10000);
      this.userData.email= this.codenum+'@newqrapp.com';
      console.log(this.userData);
      this.authServiceProvider.getData('user/sendcode/'+this.userData.phone+'/'+this.codenum)
      .then(data => {
        
        this.btncode=true;
        
        this.functionsProvider.loading.dismiss();
      });
    } else {
      this.functionsProvider.loading.dismiss();
      this.functionsProvider.presentToast('يجب كتابه رقم الهاتف');

    }

    
  }
  GetDate(){
    this.functionsProvider.loadingfun();
    this.authServiceProvider.getData('country')
    .then(data => {
        this.all=data;
        this.data = this.all.data;  
        
      
      this.functionsProvider.loading.dismiss();
    });
  }



  getRndInteger(min, max) {

    let integer = Math.floor(Math.random() * (max - min + 1) ) + min;
   
     console.log(integer);

    return  integer
  }
  

  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }


  

  login() {
    
   // this.functionsProvider.loadingfun();
    // console.log(this.userData.email);
    if(this.userData.code && this.userData.name){
      if(this.userData.code == this.codenum){
        this.code();
      }else{
        
    //      this.functionsProvider.loading.dismiss();
          this.functionsProvider.presentToast('هذا الكود غير صحيح');
      }
      
    } else {
    //  this.functionsProvider.loading.dismiss();
      this.functionsProvider.presentToast('يجب ملاء الحقول');

    }

  }


  code(){
    this.authServiceProvider.postData(this.userData,'users/add').then((result) => {
      this.responseData = result;
      if(this.responseData.data){
      console.log(this.responseData.data);
     
      this.functionsProvider.presentToast('تم التسجيل بنجاح');
      this.navCtrl.pop();


      }
      else{
        this.functionsProvider.presentToast('هناك خطأ فى البيانات');

       }
       
     //  this.functionsProvider.loading.dismiss();
    }, (err) => {
      // Error log
    //  this.functionsProvider.loading.dismiss();
      this.functionsProvider.presentToast(err);

    });

  }


}
