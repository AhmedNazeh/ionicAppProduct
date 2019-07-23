webpackJsonp([2],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestPageModule", function() { return RestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RestPageModule = /** @class */ (function () {
    function RestPageModule() {
    }
    RestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rest__["a" /* RestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rest__["a" /* RestPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], RestPageModule);
    return RestPageModule;
}());

//# sourceMappingURL=rest.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(26);
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
 * Generated class for the RestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RestPage = /** @class */ (function () {
    function RestPage(navCtrl, navParams, authServiceProvider, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.userData = { phone: "" };
    }
    RestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RestPage');
    };
    RestPage.prototype.login = function () {
        var _this = this;
        this.code = this.getRndInteger(1111, 10000);
        console.log(this.userData);
        this.authServiceProvider.getData('user/sendcode/' + this.userData.phone + '/' + this.code)
            .then(function (dataa) {
            _this.presentPrompt();
        });
    };
    RestPage.prototype.getRndInteger = function (min, max) {
        var integer = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(integer);
        return integer;
    };
    RestPage.prototype.presentPrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'قم بتاكيد أمتلاك الحساب',
            inputs: [
                {
                    name: 'num',
                    placeholder: 'اكتب الكود'
                }
            ],
            buttons: [
                {
                    text: 'الغاء',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'ارسال',
                    handler: function (data) {
                        console.log(_this.code);
                        console.log(data.num);
                        if (_this.code == data.num) {
                            _this.presentToast('تم التحقق ');
                            _this.sendnewpass();
                        }
                        else {
                            _this.presentToast('هناك خطأ فى كود التحقيق');
                            _this.presentPrompt();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    RestPage.prototype.presentToast = function (x) {
        this.toast = this.toastCtrl.create({
            message: x,
            duration: 3000
        });
        this.toast.present();
    };
    RestPage.prototype.sendnewpass = function () {
        var _this = this;
        this.authServiceProvider.getData('users/rest/' + this.userData.phone)
            .then(function (dataa) {
            _this.presentToast('تم ارسال كلمه مرور جديده ');
            _this.navCtrl.pop();
        });
    };
    RestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rest',template:/*ion-inline-start:"D:\My Project\Ionic Apps\myApp0\src\pages\rest\rest.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title text-right>\n            <img src="assets/logo.png" style="height: 42px;" alt="">\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <form (ngSubmit)="login()">\n        <ion-list dir="rtl">\n\n            <ion-item text-right>\n                <ion-label stacked>{{"Phone" | translate}}</ion-label>\n                <ion-input type="tel" text-right [(ngModel)]="userData.phone" name="phone" style="text-align: right;"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <button ion-button round full style="height: 36px;" type="submit">\n       {{"SendCode" | translate}}\n      </button>\n\n\n            </ion-item>\n        </ion-list>\n    </form>\n</ion-content>'/*ion-inline-end:"D:\My Project\Ionic Apps\myApp0\src\pages\rest\rest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RestPage);
    return RestPage;
}());

//# sourceMappingURL=rest.js.map

/***/ })

});
//# sourceMappingURL=2.js.map