import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  // Url="http://127.0.0.1:5050";
  Url='http://newqrapp.tk';
  apiUrl=this.Url+"/api/v1/";
  UpUrl=this.Url+"/files/";
  


  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }
  postData(credentials, type) {
    return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+type, JSON.stringify(credentials))
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        resolve(err);

      });
    });

  }

  getData(type) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+type).subscribe(data => {
        resolve(data);
      },(err)=> {
        resolve(err);
      });
    });
  }
}