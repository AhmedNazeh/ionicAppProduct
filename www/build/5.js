webpackJsonp([5],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgreementPageModule", function() { return AgreementPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agreement__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AgreementPageModule = /** @class */ (function () {
    function AgreementPageModule() {
    }
    AgreementPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__agreement__["a" /* AgreementPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__agreement__["a" /* AgreementPage */]),
            ],
        })
    ], AgreementPageModule);
    return AgreementPageModule;
}());

//# sourceMappingURL=agreement.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgreementPage; });
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
 * Generated class for the AgreementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgreementPage = /** @class */ (function () {
    function AgreementPage(navCtrl, authServiceProvider, functionsProvider) {
        this.navCtrl = navCtrl;
        this.authServiceProvider = authServiceProvider;
        this.functionsProvider = functionsProvider;
        this.GetDate();
    }
    AgreementPage.prototype.GetDate = function () {
        var _this = this;
        this.functionsProvider.loadingfun();
        this.authServiceProvider.getData('agreement')
            .then(function (data) {
            _this.all = data;
            _this.data = _this.all.data;
            _this.functionsProvider.loading.dismiss();
        });
    };
    AgreementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgreementPage');
    };
    AgreementPage.prototype.ok = function () {
        this.navCtrl.push('SignupPage');
    };
    AgreementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agreement',template:/*ion-inline-start:"E:\Ionic Apps\ionicProducts\ionicAppProduct\src\pages\agreement\agreement.html"*/'<ion-header>\n\n    <ion-navbar>\n\n\n\n        <ion-title text-right>\n\n            <img src="assets/logo.png" style="height: 42px;" alt="">\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n    <div text-right [innerHTML]="data">\n\n\n\n    </div>\n\n\n\n    <button ion-button block (click)="ok()">{{"ok" | translate}}</button>\n\n</ion-content>'/*ion-inline-end:"E:\Ionic Apps\ionicProducts\ionicAppProduct\src\pages\agreement\agreement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_functions_functions__["a" /* FunctionsProvider */]])
    ], AgreementPage);
    return AgreementPage;
}());

//# sourceMappingURL=agreement.js.map

/***/ })

});
//# sourceMappingURL=5.js.map