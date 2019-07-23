import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FunctionsProvider } from '../../providers/functions/functions';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the RepotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-repot',
  templateUrl: 'repot.html',
})
export class RepotPage {
  responseData: any;
  userData={'user_id':"",'reason':"",'image':'','shopname':'','neighborhood':'','street':'','photo':''};
  fd: any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public authServiceProvider :AuthServiceProvider,
    public functionsProvider :FunctionsProvider) {
      console.log('RepotPage');
    
  }



  login() {
    this.functionsProvider.loadingfun();
    if(this.userData.reason != "" ){

      let user_id =   JSON.parse(localStorage.getItem('userData')).id;
      this.userData.user_id = user_id;
    this.authServiceProvider.postData(this.userData,'communication/add').then((result) => {
      this.responseData = result;
               this.functionsProvider.loading.dismiss();
      
      
      if(this.responseData != null){
        
        this.functionsProvider.presentToast('تم ارسال بلاغك بنجاح');
       
      this.userData={'user_id':"",'reason':"",'image':'','shopname':'','neighborhood':'','street':'','photo':''};
      
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

  

  public OnResumeSelect1(fileInput: any) {        


    var file = fileInput.target.files[0];  
    console.log(file.name);
    
    this.userData.image=file.name;
    
    this.fd = new FormData();

    
    this.functionsProvider.loadingfun();
    
    
   // JUST APPEND EVERY OTHER DATA THAT YOU WANT IT TO COME WITH THE
   //CHOOSEN FILE, LIKE NAME,PH NO ETC
   this.fd.append("file_upload", file);
   
   
   //BELOW IS THE CODE FOR SENDING THAT FILE TO YOUR CUSTOM SERVER
    let xhr = new XMLHttpRequest();
    

    xhr.open('POST', this.authServiceProvider.Url+'/l.php', true);
     

       xhr.onload = function() {
         

         if (xhr.status == 200) {

          
           var resp = xhr.response;
             
           console.log(resp)
           
           };
      }
     
       xhr.send(this.fd);
       setTimeout(() =>{
       
        this.functionsProvider.loading.dismiss();
        }, 3000);

  }

  

  public OnResumeSelect2(fileInput: any) {        


    var file = fileInput.target.files[0];  
    console.log(file.name);
    
    this.userData.photo=file.name;
    
    this.fd = new FormData();

    
    this.functionsProvider.loadingfun();
    
    
   // JUST APPEND EVERY OTHER DATA THAT YOU WANT IT TO COME WITH THE
   //CHOOSEN FILE, LIKE NAME,PH NO ETC
   this.fd.append("file_upload", file);
   
   
   //BELOW IS THE CODE FOR SENDING THAT FILE TO YOUR CUSTOM SERVER
    let xhr = new XMLHttpRequest();
    

    xhr.open('POST', this.authServiceProvider.Url+'/l.php', true);
     

       xhr.onload = function() {
         

         if (xhr.status == 200) {

          
           var resp = xhr.response;
             
           console.log(resp)
           
           };
      }
     
       xhr.send(this.fd);
       setTimeout(() =>{
       
        this.functionsProvider.loading.dismiss();
        }, 3000);

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad RepotPage');
  }

}
