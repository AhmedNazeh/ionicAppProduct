import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the PagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pages',
  templateUrl: 'pages.html',
})
export class PagesPage {

  one:{id:'', name:'',body:''};
  usageData :any;
  all: any;
  isLogin = false; 
  id: any; 
  lang : string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public authServiceProvider :AuthServiceProvider) {
      
    this.one=this.navParams.get('one');
   let mylang= localStorage.getItem('lng') ;
   if(mylang){
    this.lang = mylang;
   }else{
     this.lang = 'ar';
   }
    if(this.one == null){
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
     
          this.one = findUsage;
         // let useInfo = this.usageData.find(x=>x.id == 3);
        
        });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesPage');
    var userdata=JSON.parse(localStorage.getItem('userData'));
    if(userdata){
      this.isLogin = true;
    }

  }

  ok(){
    this.navCtrl.setRoot(LoginPage);
  }

}
