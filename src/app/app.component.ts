import { Component, ViewChild } from '@angular/core';
import { Platform, Events, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

// import { SocialSharing } from '@ionic-native/social-sharing';
import { AppRate } from '@ionic-native/app-rate';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { SocialSharing } from '@ionic-native/social-sharing';
import { FCM } from '@ionic-native/fcm';
import { FunctionsProvider } from '../providers/functions/functions';
import { PagesPage } from '../pages/pages/pages';
import { TranslateService } from '@ngx-translate/core';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage:any;
  all: any;
  data: any;
  name:any;
  lang :string = 'ar';
  txtLang :string = 'English';
  constructor(platform: Platform, 
    // private socialSharing: SocialSharing,
    public authServiceProvider :AuthServiceProvider,
    private appRate: AppRate,statusBar: StatusBar,
    public events: Events, private socialSharing: SocialSharing,
    public functionsProvider :FunctionsProvider,
    private fcm: FCM,
    splashScreen: SplashScreen,public translate: TranslateService) {
     
     translate.setDefaultLang(this.lang);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      let userLng =  localStorage.getItem('lng');
      
      if(userLng){
          this.lang = userLng;
          if(userLng == 'ar'){
            this.translate.setDefaultLang('ar') 
            this.txtLang = 'English'
            this.lang = 'ar'
          }else{
            this.translate.setDefaultLang('en') 
            this.txtLang = 'عربى'
            this.lang = 'en'

          }
          console.log(this.lang)
      }
      statusBar.styleDefault();
      splashScreen.hide(); 

      //localStorage.clear();
      this.GetPageDate(); 
      
      if(localStorage.getItem('userData')){
        this.rootPage=TabsPage;
        this.name=JSON.parse(localStorage.getItem('userData')).name;
        this.fcm.subscribeToTopic('user_'+JSON.parse(localStorage.getItem('userData')).id);
        if (JSON.parse(localStorage.getItem('userData')).block == 1) {
          
          this.functionsProvider.presentToast('تم ايقاف هذا الحساب');
          this.logout();
        }
      }else{
        this.rootPage=PagesPage; 
         
      }


    });

    
    events.subscribe('user:created', (user, time) => {
      this.rootPage=TabsPage;     
      
      this.fcm.subscribeToTopic('user_'+JSON.parse(localStorage.getItem('userData')).id);
      this.name=JSON.parse(localStorage.getItem('userData')).name; 
    });
  }


  GoHome(){
    this.nav.setRoot(MyApp);
  }

  GoPage(one){
    this.nav.push('PagesPage',{one:one , lang : this.lang});
  }

  GetPageDate(){
    this.authServiceProvider.getData('page')
    .then(data => {
      console.log(data)
        this.all=data;
        this.data = this.all.data;  
    });
  }
  rateApp() {
    this.appRate.preferences.storeAppURL = {
        ios: 'com.orgnal.qr',
        android: 'https://play.google.com/store/apps/details?id=com.orgnal.qr&hl=en',
        windows: 'ms-windows-store://review/?ProductId=<store_id>'
    };
    this.appRate.promptForRating(true);
}
shareApp() {
    var options = {
        message: 'Hi Check this app and download it', // not supported on some apps (Facebook, Instagram)
        subject: 'Hi', // fi. for email
        files: ['', ''], // an array of filenames either locally or remotely
        url: 'https://play.google.com/store/apps/details?id=com.orgnal.qr&hl=en',
        chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title
    }
    this.socialSharing.shareWithOptions(options);
}




  Gocontact(){
    this.nav.push('ContactusPage');
  }

  
  GoRepot(){
    this.nav.push('RepotPage')
  }

  user(){
    this.nav.push('UserPage')
  }

  backToLogin(){
    this.nav.setRoot(MyApp);    
  }
  logout(){
    localStorage.removeItem("userData")
    this.rootPage=PagesPage; 
  //  setTimeout(() => this.backToLogin(), 1000);
  }

  changeLang(){
    console.log(this.lang)
    if(this.lang == 'ar'){
      localStorage.setItem('lng','en')    
      this.translate.setDefaultLang('en');
      this.txtLang = 'عربى'
      this.lang = 'en'
    }else{
      localStorage.setItem('lng','ar')
      this.translate.setDefaultLang('ar') 
      this.txtLang = 'English'
      this.lang = 'ar'
    
    }
  }

}

