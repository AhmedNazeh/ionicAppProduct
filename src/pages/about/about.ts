import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FunctionsProvider } from '../../providers/functions/functions';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  all: any;
  data: any;
  upurl: string;
  id: any;
  constructor(public navCtrl: NavController,
    public authServiceProvider :AuthServiceProvider,
    public functionsProvider :FunctionsProvider) {
      this.upurl=this.authServiceProvider.UpUrl;
      this.id=JSON.parse(localStorage.getItem('userData')).id;

      this.GetDate(this.id);

  }

  GetDate(id){
    this.functionsProvider.loadingfun();
    this.authServiceProvider.getData('trderoredrb/'+id)
    .then(data => {
        this.all=data;
        this.data = this.all.data;  
        
       console.log(this.data) 
       this.functionsProvider.loading.dismiss();
    });
  }
}
