import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FunctionsProvider } from '../../providers/functions/functions';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  all: any;
  data: any;
  all2: any;
  data2: any;
  upurl: string;
  lang : string = '';
  constructor(public navCtrl: NavController,
    public authServiceProvider :AuthServiceProvider,
    public functionsProvider :FunctionsProvider) {

     this.upurl=this.authServiceProvider.UpUrl;
    this.GetDate();
  
   
  }

  GetDate(){
   
    this.authServiceProvider.getData('page')
    .then(data => {
        this.all=data;
        this.data = this.all.data;  
    });

    this.authServiceProvider.getData('socialmedia')
    .then(data => {
        this.all2=data;
        this.data2 = this.all2.data;  
    });
  }


  
  GoContact(){
    this.navCtrl.push('ContactusPage')
  }
  GoRepot(){
    this.navCtrl.push('RepotPage')
  }

  GoPage(x){
    this.navCtrl.push('PagesPage',{one:x})
  }

  ionViewDidEnter() {
    let mylang= localStorage.getItem('lng') ; 
    if(mylang){
     this.lang = mylang;
    }else{
      this.lang = 'ar';
    }
  }

}
