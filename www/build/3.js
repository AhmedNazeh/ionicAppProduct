webpackJsonp([3],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepotPageModule", function() { return RepotPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repot__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RepotPageModule = /** @class */ (function () {
    function RepotPageModule() {
    }
    RepotPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__repot__["a" /* RepotPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__repot__["a" /* RepotPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], RepotPageModule);
    return RepotPageModule;
}());

//# sourceMappingURL=repot.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepotPage; });
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
 * Generated class for the RepotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RepotPage = /** @class */ (function () {
    function RepotPage(navCtrl, navParams, authServiceProvider, functionsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.functionsProvider = functionsProvider;
        this.userData = { 'user_id': "", 'reason': "", 'image': '', 'shopname': '', 'neighborhood': '', 'street': '', 'photo': '' };
        console.log('RepotPage');
    }
    RepotPage.prototype.login = function () {
        var _this = this;
        this.functionsProvider.loadingfun();
        if (this.userData.reason != "") {
            var user_id = JSON.parse(localStorage.getItem('userData')).id;
            this.userData.user_id = user_id;
            this.authServiceProvider.postData(this.userData, 'communication/add').then(function (result) {
                _this.responseData = result;
                _this.functionsProvider.loading.dismiss();
                if (_this.responseData != null) {
                    _this.functionsProvider.presentToast('تم ارسال بلاغك بنجاح');
                    _this.userData = { 'user_id': "", 'reason': "", 'image': '', 'shopname': '', 'neighborhood': '', 'street': '', 'photo': '' };
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
    RepotPage.prototype.OnResumeSelect1 = function (fileInput) {
        var _this = this;
        var file = fileInput.target.files[0];
        console.log(file.name);
        this.userData.image = file.name;
        this.fd = new FormData();
        this.functionsProvider.loadingfun();
        // JUST APPEND EVERY OTHER DATA THAT YOU WANT IT TO COME WITH THE
        //CHOOSEN FILE, LIKE NAME,PH NO ETC
        this.fd.append("file_upload", file);
        //BELOW IS THE CODE FOR SENDING THAT FILE TO YOUR CUSTOM SERVER
        var xhr = new XMLHttpRequest();
        xhr.open('POST', this.authServiceProvider.Url + '/l.php', true);
        xhr.onload = function () {
            if (xhr.status == 200) {
                var resp = xhr.response;
                console.log(resp);
            }
            ;
        };
        xhr.send(this.fd);
        setTimeout(function () {
            _this.functionsProvider.loading.dismiss();
        }, 3000);
    };
    RepotPage.prototype.OnResumeSelect2 = function (fileInput) {
        var _this = this;
        var file = fileInput.target.files[0];
        console.log(file.name);
        this.userData.photo = file.name;
        this.fd = new FormData();
        this.functionsProvider.loadingfun();
        // JUST APPEND EVERY OTHER DATA THAT YOU WANT IT TO COME WITH THE
        //CHOOSEN FILE, LIKE NAME,PH NO ETC
        this.fd.append("file_upload", file);
        //BELOW IS THE CODE FOR SENDING THAT FILE TO YOUR CUSTOM SERVER
        var xhr = new XMLHttpRequest();
        xhr.open('POST', this.authServiceProvider.Url + '/l.php', true);
        xhr.onload = function () {
            if (xhr.status == 200) {
                var resp = xhr.response;
                console.log(resp);
            }
            ;
        };
        xhr.send(this.fd);
        setTimeout(function () {
            _this.functionsProvider.loading.dismiss();
        }, 3000);
    };
    RepotPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RepotPage');
    };
    RepotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-repot',template:/*ion-inline-start:"D:\My Project\Ionic Apps\myApp0\src\pages\repot\repot.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n        <ion-title text-right>\n            <img src="assets/logo.png" style="height: 42px;" alt="">\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n    <form (ngSubmit)="login()">\n\n\n        <ion-label stacked text-center>\n            {{"ProductImage" | translate}}\n        </ion-label>\n        <ion-item>\n\n            <label ion-button for="uploadResume2" block style="background-color: #16a085;color: white;" color="secondary">{{"Upload" | translate}}</label>\n            <input style="display: none;" type="file" name="" id="uploadResume2" (change)="OnResumeSelect2($event)">\n\n        </ion-item>\n\n\n\n        <ion-item text-center>\n            <ion-label stacked>\n                {{"Reason" | translate}}\n            </ion-label>\n            <ion-textarea text-center [(ngModel)]="userData.reason" name="reason"></ion-textarea>\n        </ion-item>\n\n        <ion-item text-center>\n            <ion-label stacked>\n                {{"StoreName" | translate}}\n            </ion-label>\n            <ion-input type="text" [(ngModel)]="userData.shopname" name="shopname" text-center></ion-input>\n        </ion-item>\n\n\n        <ion-item text-center>\n            <ion-label stacked>{{"Street" | translate}}</ion-label>\n            <ion-input type="text" text-center [(ngModel)]="userData.street" name="street"></ion-input>\n        </ion-item>\n\n        <ion-item text-center>\n            <ion-label stacked>{{"Neighborhood" | translate}}</ion-label>\n            <ion-input type="email" text-center [(ngModel)]="userData.neighborhood" name="neighborhood"></ion-input>\n        </ion-item>\n\n\n\n\n        <ion-label stacked text-center>\n            {{"PurchaseInvoice" | translate}}\n        </ion-label>\n        <ion-item>\n\n            <label ion-button for="uploadResume" block style="background-color: #16a085;color: white;" color="secondary">{{"Upload" | translate}}</label>\n            <input style="display: none;" type="file" name="" id="uploadResume" (change)="OnResumeSelect1($event)">\n\n        </ion-item>\n\n\n        <button ion-button round full style="height:36px;" type="submit" block>{{"Report" | translate}}</button>\n    </form>\n\n</ion-content>'/*ion-inline-end:"D:\My Project\Ionic Apps\myApp0\src\pages\repot\repot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_functions_functions__["a" /* FunctionsProvider */]])
    ], RepotPage);
    return RepotPage;
}());

//# sourceMappingURL=repot.js.map

/***/ })

});
//# sourceMappingURL=3.js.map