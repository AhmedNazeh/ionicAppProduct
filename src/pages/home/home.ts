import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { FunctionsProvider } from '../../providers/functions/functions';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  showing:boolean=false;
  bay:boolean=false;
  all: any;
  data: any;
  upurl: string;
  responseData: any;
  x:boolean=true;
  userData={user_id:'',barcode_id:'',info:''};
  allads: any;
  ads: any;
  showads: boolean =true;
  constructor(public navCtrl: NavController,
    private qrScanner: QRScanner,
    public authServiceProvider :AuthServiceProvider,
    public functionsProvider :FunctionsProvider,
    private vibration: Vibration) {

      this.upurl=this.authServiceProvider.UpUrl;
      this.userData.user_id=JSON.parse(localStorage.getItem('userData')).id;

      
      this.x=true;

      this.open();

      
      this.GetAds();

  }

  open(){

    // Optionally request the permission early
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {

        if (status.authorized) {
          // camera permission was granted
          this.qrScanner.show()
  
          
          
          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {

// alert(text);

            this.GetInfo(text);
            console.log('Scanned something : ', text);


            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });

        } else if (status.denied) {
          this.functionsProvider.presentToast('camera permission was permanently denied');
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          
          this.functionsProvider.presentToast('permission was denied, but not permanently. You can ask for permission again at a later time');
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => this.functionsProvider.presentToast(e));


    }


  Send(){

  
    
      this.functionsProvider.loadingfun();
  
      
      this.authServiceProvider.postData(this.userData,'trderoredr/add').then((result) => {
        this.responseData = result;
        if(this.responseData.data){
          this.functionsProvider.loading.dismiss();   
          this.bay=true;
          this.x=false;
          this.functionsProvider.presentToast('تم الشراء بنجاح');
        } else {
          this.functionsProvider.loading.dismiss();
          this.functionsProvider.presentToast('هناك خطأ فى البيانات');
  
        }
      }, (err) => {
        // Error log
        this.functionsProvider.loading.dismiss();
        this.functionsProvider.presentToast(err);
  
      });
  
  
      

      
  }
  

  GetInfo(id){
   
      
    this.functionsProvider.loadingfun();
    this.authServiceProvider.getData('barcode/getById/'+id)
    .then(data => {
        this.all=data;
        this.data = this.all.data;  
        if(this.all.error != ''){
          this.showing=true;
          this.vibration.vibrate(1000);
          
          
        }else{
          
          this.showing=false;
        }
        this.userData.barcode_id=id;
  
          this.x=false;
    });
      this.functionsProvider.loading.dismiss();

  }
 
  maked(){
    
    this.x=true;
    this.showing=false;
    this.open();
    
  }




  GetAds(){
    this.functionsProvider.loadingfun();
    this.authServiceProvider.getData('startads')
    .then(data => {
        this.allads=data;
        this.ads = this.allads.data;  
        
      
      this.functionsProvider.loading.dismiss();
    });
  }

  hideads(){
    this.showads=false;
  }
 
}
