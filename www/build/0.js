webpackJsonp([0],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserPageModule = /** @class */ (function () {
    function UserPageModule() {
    }
    UserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user__["a" /* UserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user__["a" /* UserPage */]),
            ],
        })
    ], UserPageModule);
    return UserPageModule;
}());

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_functions_functions__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_component__ = __webpack_require__(109);
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
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPage = /** @class */ (function () {
    function UserPage(navCtrl, authServiceProvider, functionsProvider, navParams, events) {
        this.navCtrl = navCtrl;
        this.authServiceProvider = authServiceProvider;
        this.functionsProvider = functionsProvider;
        this.navParams = navParams;
        this.events = events;
        this.userData = { id: '', name: '', "email": "", "password": "" };
        this.data = JSON.parse(localStorage.getItem('userData')).id;
        this.userData.id = this.data.id;
        this.userData.name = this.data.name;
        this.userData.email = this.data.email;
    }
    UserPage.prototype.login = function () {
        var _this = this;
        this.functionsProvider.loadingfun();
        console.log(this.userData.email);
        if (this.userData.email != "") {
            this.authServiceProvider.postData(this.userData, 'users/update').then(function (result) {
                _this.responseData = result;
                if (_this.responseData.data) {
                    console.log(_this.responseData.data);
                    localStorage.setItem('userData', JSON.stringify(_this.responseData.data));
                    _this.functionsProvider.loading.dismiss();
                    _this.events.publish('user:created', _this.responseData.data, Date.now());
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__app_app_component__["a" /* MyApp */]);
                }
                else {
                    _this.functionsProvider.loading.dismiss();
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
    UserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPage');
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"D:\My Project\Ionic Apps\myApp0\src\pages\user\user.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title text-right>\n            <img src="assets/logo.png" style="height: 42px;" alt="">\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n    <form (ngSubmit)="login()">\n        <ion-list>\n\n            <ion-item>\n                <ion-label stacked>{{"Name" | translate}}</ion-label>\n\n                <ion-input type="text" [(ngModel)]="userData.name" name="name"></ion-input>\n\n            </ion-item>\n\n\n            <!--ion-item>\n        <ion-input type="email"  [(ngModel)]="userData.email" name="email"></ion-input>\n        <ion-label stacked>البريد الألكترونى</ion-label>\n\n      </ion-item>\n   \n      \n\n      \n     \n      \n    \n      <ion-item>\n        <ion-input type="password"  [(ngModel)]="userData.password" name="password"></ion-input>\n        <ion-label stacked>كلمه المرور</ion-label>\n\n      </ion-item-->\n\n            <ion-item>\n                <button ion-button full color=\'danger\' style="height: 36px;" type="submit">{{"Edit" | translate}}</button>\n            </ion-item>\n\n        </ion-list>\n    </form>\n\n</ion-content>'/*ion-inline-end:"D:\My Project\Ionic Apps\myApp0\src\pages\user\user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_functions_functions__["a" /* FunctionsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ })

});
//# sourceMappingURL=0.js.map