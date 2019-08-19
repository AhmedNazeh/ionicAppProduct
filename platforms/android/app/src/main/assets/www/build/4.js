webpackJsonp([4],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPageModule", function() { return ContactusPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contactus__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContactusPageModule = /** @class */ (function () {
    function ContactusPageModule() {
    }
    ContactusPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contactus__["a" /* ContactusPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contactus__["a" /* ContactusPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], ContactusPageModule);
    return ContactusPageModule;
}());

//# sourceMappingURL=contactus.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_functions_functions__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactusPage = /** @class */ (function () {
    function ContactusPage(navCtrl, navParams, authServiceProvider, functionsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.functionsProvider = functionsProvider;
        this.userData = { user_id: "", name: "", email: "", subject: "", phone: "", message: "" };
        this.lang = '';
    }
    ContactusPage.prototype.login = function () {
        var _this = this;
        this.functionsProvider.loadingfun();
        if (this.userData.name != "" && this.userData.email != "" && this.userData.subject != "" && this.userData.phone != "" && this.userData.message != "") {
            var user_id = JSON.parse(localStorage.getItem('userData')).id;
            this.userData.user_id = user_id;
            this.authServiceProvider.postData(this.userData, 'contact/add').then(function (result) {
                _this.responseData = result;
                _this.functionsProvider.loading.dismiss();
                console.log(_this.responseData);
                if (_this.responseData != null) {
                    _this.functionsProvider.presentToast('تم ارسال رسالتك بنجاح');
                    _this.userData = { user_id: "", name: "", email: "", subject: "", phone: "", message: "" };
                }
                else {
                    _this.functionsProvider.presentToast('هناك خطأ فى البيانات');
                }
            }, function (err) {
                // Error log
                _this.functionsProvider.loading.dismiss();
                _this.functionsProvider.presentToast(err);
            });
        }
        else {
            this.functionsProvider.loading.dismiss();
            this.functionsProvider.presentToast('يجب ملاء الحقول');
        }
    };
    ContactusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contactus',template:/*ion-inline-start:"E:\Ionic Apps\ionicProducts\ionicAppProduct\src\pages\contactus\contactus.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title text-right>\n\n            <img src="assets/logo.png" style="height: 42px;" alt="">\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n\n\n    <form (ngSubmit)="login()">\n\n\n\n        <ion-item text-right>\n\n            <ion-label stacked>{{"Name" | translate}}</ion-label>\n\n            <ion-input type="text" [(ngModel)]="userData.name" name="name" text-right></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item text-right>\n\n            <ion-label stacked>{{"EMail" | translate}}</ion-label>\n\n            <ion-input type="email" text-right [(ngModel)]="userData.email" name="email"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item text-right>\n\n            <ion-label stacked>{{"Phone" | translate}}</ion-label>\n\n            <ion-input type="text" text-right [(ngModel)]="userData.phone" name="phone"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item text-right>\n\n            <ion-label stacked>{{"Subject" | translate}}</ion-label>\n\n            <ion-input type="text" text-right [(ngModel)]="userData.subject" name="subject"></ion-input>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item text-right>\n\n            <ion-label stacked>{{"Message" | translate}}</ion-label>\n\n            <ion-textarea text-right [(ngModel)]="userData.message" name="message"></ion-textarea>\n\n        </ion-item>\n\n\n\n\n\n        <button ion-button round full style="height:36px;" type="submit" block>{{"Send" | translate}}</button>\n\n    </form>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\Ionic Apps\ionicProducts\ionicAppProduct\src\pages\contactus\contactus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_functions_functions__["a" /* FunctionsProvider */]])
    ], ContactusPage);
    return ContactusPage;
}());

//# sourceMappingURL=contactus.js.map

/***/ })

});
//# sourceMappingURL=4.js.map