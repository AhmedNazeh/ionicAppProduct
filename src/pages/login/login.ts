import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FunctionsProvider } from '../../providers/functions/functions';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  userData = {"email": "",'name':'','phone':'','code':''};
  
  responseData: any;
  btncode:boolean=false;
  codenum: any;
  usageData :any;
  all: any;
  constructor(public navCtrl: NavController,
    public authServiceProvider :AuthServiceProvider,
    public functionsProvider :FunctionsProvider,
    public events: Events,public navParams: NavParams) {

  }


  
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  getRndInteger(min, max) {

    let integer = Math.floor(Math.random() * (max - min + 1) ) + min;
   
     console.log(integer);

    return  integer
  }
  


  sendcode(){



    this.functionsProvider.loadingfun();


    if(this.userData.phone ){

      this.codenum=this.getRndInteger(1111,10000);
      this.userData.email= this.codenum+'@newqrapp.com';
      this.userData.name= 'user'+this.getRndInteger(1111,10000);
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




  openUsage(){
    this.authServiceProvider.getData('page')
    .then(data => {
      this.all=data;
      this.usageData = this.all.data;  
      console.log(this.usageData)
      var listPage = []
      for (var i of this.all.data) {
        listPage.push(i);
      }
      
      let findUsage = listPage.find(x=>x.id == 3);
    this.navCtrl.push('PagesPage',{one:findUsage});
   
       // let useInfo = this.usageData.find(x=>x.id == 3);
      
      });
  }

  login() {
    
   // this.functionsProvider.loadingfun();
    // console.log(this.userData.email);
    if(this.userData.code && this.userData.name){
      if(this.userData.code == this.codenum){
        this.code();
      }else{
        
         // this.functionsProvider.loading.dismiss();
          this.functionsProvider.presentToast('هذا الكود غير صحيح');
      }
      
    } else {
     // this.functionsProvider.loading.dismiss();
      this.functionsProvider.presentToast('يجب ملاء الحقول');

    }

  }


  code(){
    this.authServiceProvider.postData(this.userData,'users/add').then((result) => {
      this.responseData = result;
      if(this.responseData.data){

    
        if (this.responseData.data.block == 0) {
          localStorage.setItem('userData', JSON.stringify(this.responseData.data));
    
        //  this.functionsProvider.loading.dismiss();
         this.events.publish('user:created', this.responseData.data, Date.now());
              
        //  this.navCtrl.setRoot(MyApp);
          this.navCtrl.insert(0,MyApp);
          this.navCtrl.popToRoot();
        } else {
          this.btncode=false;
          
            this.functionsProvider.presentToast('لقد تم حظر هذا الحساب');

        }          
    
      }
      else{
        this.functionsProvider.presentToast('هناك خطأ فى البيانات');

       }
       
      // this.functionsProvider.loading.dismiss();
    }, (err) => {
      // Error log
     // this.functionsProvider.loading.dismiss();
      this.functionsProvider.presentToast(err);

    });

  }

  
  
  // login() {
    
  //   this.functionsProvider.loadingfun();
  //   console.log(this.userData.phone);
  //   if(this.userData.phone != ""){


  //   this.authServiceProvider.postData(this.userData,'users/login').then((result) => {
  //     this.responseData = result;
  //     if(this.responseData.data){
  //     console.log(this.responseData.data);
  //     localStorage.setItem('userData', JSON.stringify(this.responseData.data));


  //          this.functionsProvider.loading.dismiss();
  //          this.events.publish('user:created', this.responseData.data, Date.now());
          
  //     this.navCtrl.setRoot(MyApp);

  //     }
  //     else{
  //       this.functionsProvider.loading.dismiss();
  //       this.functionsProvider.presentToast('هناك خطأ فى البيانات');

  //      }
  //   }, (err) => {
  //     // Error log
  //     this.functionsProvider.loading.dismiss();
  //     this.functionsProvider.presentToast(err);

  //   });

  //   } else {
  //     this.functionsProvider.loading.dismiss();
  //     this.functionsProvider.presentToast('يجب ملاء الحقول');

  //   }

  // }

  // in(){
  //   this.navCtrl.push('AgreementPage');
  // }

  // rest(){
  //   this.navCtrl.push('AgreementPage');
  // }
}