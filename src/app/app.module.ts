import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { QRScanner } from '@ionic-native/qr-scanner';


import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { FunctionsProvider } from '../providers/functions/functions';
import { LoginPage } from '../pages/login/login';

import { SocialSharing } from '@ionic-native/social-sharing';
import { AppRate } from '@ionic-native/app-rate';

// import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { FCM } from '@ionic-native/fcm';

import { Vibration } from '@ionic-native/vibration';
import { PagesPage } from '../pages/pages/pages';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PagesPageModule } from '../pages/pages/pages.module';


export function setTranslateLoader(http: HttpClient) {
return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    MyApp, 
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
      useFactory: (setTranslateLoader),
      deps: [HttpClient]
      }
    }),
    PagesPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    PagesPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    FunctionsProvider,
    QRScanner,
    Vibration,
    SocialSharing,
    AppRate,
    FCM
    // BarcodeScanner 
  ]
})
export class AppModule {}
