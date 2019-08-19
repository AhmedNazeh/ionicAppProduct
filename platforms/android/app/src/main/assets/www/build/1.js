webpackJsonp([1],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_functions_functions__ = __webpack_require__(31);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, authServiceProvider, functionsProvider, events, navParams) {
        this.navCtrl = navCtrl;
        this.authServiceProvider = authServiceProvider;
        this.functionsProvider = functionsProvider;
        this.events = events;
        this.navParams = navParams;
        this.userData = { "email": "", 'name': '', 'phone': '', 'code': '' };
        this.s = false;
        this.btncode = false;
        this.GetDate();
    }
    SignupPage.prototype.openUsage = function () {
        var _this = this;
        this.authServiceProvider.getData('page')
            .then(function (data) {
            console.log(data);
            _this.usageData.push(data);
            console.log(data);
            var useInfo = _this.usageData.find(function (x) { return x.id == 3; });
            console.log(useInfo);
        });
    };
    SignupPage.prototype.sendcode = function () {
        var _this = this;
        this.functionsProvider.loadingfun();
        if (this.userData.phone) {
            this.codenum = this.getRndInteger(1111, 10000);
            this.userData.email = this.codenum + '@newqrapp.com';
            console.log(this.userData);
            this.authServiceProvider.getData('user/sendcode/' + this.userData.phone + '/' + this.codenum)
                .then(function (data) {
                _this.btncode = true;
                _this.functionsProvider.loading.dismiss();
            });
        }
        else {
            this.functionsProvider.loading.dismiss();
            this.functionsProvider.presentToast('يجب كتابه رقم الهاتف');
        }
    };
    SignupPage.prototype.GetDate = function () {
        var _this = this;
        this.functionsProvider.loadingfun();
        this.authServiceProvider.getData('country')
            .then(function (data) {
            _this.all = data;
            _this.data = _this.all.data;
            _this.functionsProvider.loading.dismiss();
        });
    };
    SignupPage.prototype.getRndInteger = function (min, max) {
        var integer = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(integer);
        return integer;
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.login = function () {
        // this.functionsProvider.loadingfun();
        // console.log(this.userData.email);
        if (this.userData.code && this.userData.name) {
            if (this.userData.code == this.codenum) {
                this.code();
            }
            else {
                //      this.functionsProvider.loading.dismiss();
                this.functionsProvider.presentToast('هذا الكود غير صحيح');
            }
        }
        else {
            //  this.functionsProvider.loading.dismiss();
            this.functionsProvider.presentToast('يجب ملاء الحقول');
        }
    };
    SignupPage.prototype.code = function () {
        var _this = this;
        this.authServiceProvider.postData(this.userData, 'users/add').then(function (result) {
            _this.responseData = result;
            if (_this.responseData.data) {
                console.log(_this.responseData.data);
                _this.functionsProvider.presentToast('تم التسجيل بنجاح');
                _this.navCtrl.pop();
            }
            else {
                _this.functionsProvider.presentToast('هناك خطأ فى البيانات');
            }
            //  this.functionsProvider.loading.dismiss();
        }, function (err) {
            // Error log
            //  this.functionsProvider.loading.dismiss();
            _this.functionsProvider.presentToast(err);
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"E:\Ionic Apps\ionicProducts\ionicAppProduct\src\pages\signup\signup.html"*/'<ion-content scroll="false">\n\n\n\n    <div class="splash-info">\n\n        <div class="splash-logo"></div>\n\n        <div class="splash-intro">\n\n\n\n            {{"Register" | translate}}\n\n        </div>\n\n    </div>\n\n    <div padding>\n\n\n\n        <form (ngSubmit)="login()">\n\n            <ion-list>\n\n\n\n\n\n                <ion-item>\n\n\n\n                    <ion-label stacked>{{"Name" | translate}}</ion-label>\n\n                    <ion-input type="text" color="dark" [(ngModel)]="userData.name" name="name"></ion-input>\n\n\n\n                </ion-item>\n\n                <!--ion-item>\n\n              <ion-input type="email" color="dark"  [(ngModel)]="userData.email" name="email" placeholder=" البريد الالكتروني" ></ion-input>  \n\n          </ion-item-->\n\n\n\n\n\n\n\n                <ion-item *ngIf="!btncode">\n\n\n\n                    <ion-label stacked>{{"Phone" | translate}}</ion-label>\n\n                    <ion-input type="tel" color="dark" [(ngModel)]="userData.phone" name="phone" placeholder="مثال 0096650505050"></ion-input>\n\n\n\n\n\n                </ion-item>\n\n                <ion-item *ngIf="btncode">\n\n\n\n                    <ion-label stacked>{{"ActiveCode" | translate}}</ion-label>\n\n                    <ion-input type="number" color="dark" [(ngModel)]="userData.code" name="code"></ion-input>\n\n                </ion-item>\n\n\n\n\n\n\n\n                <ion-item *ngIf="!btncode">\n\n                    <p ion-button block style="color:white" (click)="sendcode()">\n\n                        {{"SendCode" | translate}}\n\n                    </p>\n\n\n\n                </ion-item>\n\n                <ion-item *ngIf="btncode">\n\n                    <p ion-button block style="color:white" (click)="login()">\n\n                        {{"LogIn" | translate}}\n\n                    </p>\n\n                </ion-item>\n\n\n\n                <!--ion-item>\n\n              \n\n              <ion-input type="{{type}}"  color="dark"  [(ngModel)]="userData.password" name="password" placeholder="كلمة السر" ></ion-input>\n\n            </ion-item>\n\n  \n\n            <ion-icon  name="ios-eye-off-outline" *ngIf="!showPass" (click)="showPassword()"></ion-icon>\n\n            <ion-icon *ngIf="showPass" name="ios-eye-outline" (click)="showPassword()"></ion-icon>\n\n           \n\n  \n\n                      \n\n          <ion-item>\n\n\n\n\n\n                <ion-label stacked text-right>نوع الحساب</ion-label>\n\n        \n\n                <ion-select interface="popover"  [(ngModel)]="userData.type" okText="موفق" cancelText="الغاء" name="type">\n\n                    <ion-option value="0"  (ionSelect)="changg($event, 0)">حساب عادى</ion-option>\n\n                    <ion-option value="1"  (ionSelect)="changg($event, 1)">حساب تاجر</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n  \n\n            \n\n\n\n   <div *ngIf="s">\n\n    \n\n            <ion-item>\n\n\n\n                <ion-input type="tel" color="dark"  [(ngModel)]="userData.phone" name="phone" placeholder="الهاتف"></ion-input>\n\n              \n\n                \n\n            </ion-item>\n\n  \n\n  \n\n          \n\n          <ion-item>\n\n\n\n\n\n                <ion-label stacked text-right>الدوله</ion-label>\n\n        \n\n              <ion-select interface="popover"  [(ngModel)]="userData.country_id" okText="موفق" cancelText="الغاء" name="country_id" >\n\n                  <ion-option *ngFor="let x of data" value="{{x.id}}">{{x.country_name}}</ion-option>\n\n              </ion-select>\n\n          </ion-item>\n\n\n\n\n\n          <ion-item>\n\n\n\n              <ion-input type="text" color="dark"  [(ngModel)]="userData.name_t" name="name_t" placeholder="الاسم التجارى" ></ion-input>\n\n            \n\n              \n\n          </ion-item>\n\n\n\n          \n\n          <ion-item>\n\n\n\n              <ion-input type="text" color="dark"  [(ngModel)]="userData.commercial_register" name="commercial_register" placeholder="السجل التجارى" ></ion-input>\n\n            \n\n              \n\n          </ion-item>\n\n          <ion-item>\n\n\n\n              <ion-input type="text" color="dark"  [(ngModel)]="userData.activity" name="activity" placeholder="النشاط" ></ion-input>\n\n            \n\n              \n\n          </ion-item>\n\n\n\n\n\n\n\n\n\n          <ion-item>\n\n\n\n              <ion-input type="text" color="dark"  [(ngModel)]="userData.city" name="city" placeholder="المدينه"></ion-input>\n\n            \n\n              \n\n          </ion-item>\n\n\n\n\n\n\n\n\n\n          <ion-item>\n\n\n\n              <ion-input type="text" color="dark"  [(ngModel)]="userData.street" name="street" placeholder="الشارع"></ion-input>\n\n            \n\n              \n\n          </ion-item>\n\n\n\n\n\n\n\n          <ion-item>\n\n\n\n              <ion-input type="text" color="dark"  [(ngModel)]="userData.postbox" name="postbox" placeholder="ص .ب"></ion-input>\n\n            \n\n              \n\n          </ion-item>\n\n\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n          \n\n            <ion-item>\n\n                <button ion-button block  type="submit" >\n\n                  تسجيل\n\n                </button>\n\n            </ion-item-->\n\n\n\n\n\n\n\n            </ion-list>\n\n        </form>\n\n\n\n\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"E:\Ionic Apps\ionicProducts\ionicAppProduct\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_functions_functions__["a" /* FunctionsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=1.js.map