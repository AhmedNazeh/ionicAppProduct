webpackJsonp([7],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_functions_functions__ = __webpack_require__(31);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, authServiceProvider, functionsProvider, events, navParams) {
        this.navCtrl = navCtrl;
        this.authServiceProvider = authServiceProvider;
        this.functionsProvider = functionsProvider;
        this.events = events;
        this.navParams = navParams;
        this.userData = { "email": "", 'name': '', 'phone': '', 'code': '' };
        this.btncode = false;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.getRndInteger = function (min, max) {
        var integer = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(integer);
        return integer;
    };
    LoginPage.prototype.sendcode = function () {
        var _this = this;
        this.functionsProvider.loadingfun();
        if (this.userData.phone) {
            this.codenum = this.getRndInteger(1111, 10000);
            this.userData.email = this.codenum + '@newqrapp.com';
            this.userData.name = 'user' + this.getRndInteger(1111, 10000);
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
    LoginPage.prototype.openUsage = function () {
        var _this = this;
        this.authServiceProvider.getData('page')
            .then(function (data) {
            _this.all = data;
            _this.usageData = _this.all.data;
            console.log(_this.usageData);
            var listPage = [];
            for (var _i = 0, _a = _this.all.data; _i < _a.length; _i++) {
                var i = _a[_i];
                listPage.push(i);
            }
            var findUsage = listPage.find(function (x) { return x.id == 3; });
            _this.navCtrl.push('PagesPage', { one: findUsage });
            // let useInfo = this.usageData.find(x=>x.id == 3);
        });
    };
    LoginPage.prototype.login = function () {
        // this.functionsProvider.loadingfun();
        // console.log(this.userData.email);
        if (this.userData.code && this.userData.name) {
            if (this.userData.code == this.codenum) {
                this.code();
            }
            else {
                // this.functionsProvider.loading.dismiss();
                this.functionsProvider.presentToast('هذا الكود غير صحيح');
            }
        }
        else {
            // this.functionsProvider.loading.dismiss();
            this.functionsProvider.presentToast('يجب ملاء الحقول');
        }
    };
    LoginPage.prototype.code = function () {
        var _this = this;
        this.authServiceProvider.postData(this.userData, 'users/add').then(function (result) {
            _this.responseData = result;
            if (_this.responseData.data) {
                if (_this.responseData.data.block == 0) {
                    localStorage.setItem('userData', JSON.stringify(_this.responseData.data));
                    //  this.functionsProvider.loading.dismiss();
                    _this.events.publish('user:created', _this.responseData.data, Date.now());
                    //  this.navCtrl.setRoot(MyApp);
                    _this.navCtrl.insert(0, __WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */]);
                    _this.navCtrl.popToRoot();
                }
                else {
                    _this.btncode = false;
                    _this.functionsProvider.presentToast('لقد تم حظر هذا الحساب');
                }
            }
            else {
                _this.functionsProvider.presentToast('هناك خطأ فى البيانات');
            }
            // this.functionsProvider.loading.dismiss();
        }, function (err) {
            // Error log
            // this.functionsProvider.loading.dismiss();
            _this.functionsProvider.presentToast(err);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\My Project\Ionic Apps\myApp0\src\pages\login\login.html"*/'<ion-content scroll="false">\n\n    <div class="splash-info">\n        <div class="splash-logo"></div>\n        <div class="splash-intro">\n\n            {{"LogIn" | translate}}\n        </div>\n    </div>\n    <div padding>\n\n\n        <form (ngSubmit)="login()">\n            <ion-list>\n\n\n                <ion-item *ngIf="!btncode">\n\n                    <ion-label stacked>{{"Phone" | translate}}</ion-label>\n                    <ion-input type="tel" color="dark" [(ngModel)]="userData.phone" name="phone" placeholder="مثال 0096650505050"></ion-input>\n                </ion-item>\n                <ion-item *ngIf="btncode">\n\n                    <ion-label stacked>{{"ActiveCode" | translate}}</ion-label>\n                    <ion-input type="number" color="dark" [(ngModel)]="userData.code" name="code"></ion-input>\n                </ion-item>\n\n\n\n                <ion-item *ngIf="!btncode">\n                    <p ion-button block style="color:white" (click)="sendcode()">\n                        {{"ActiveCode" | translate}}\n                    </p>\n                    <!-- <p class="ion-float-right" ion-button style="color:white" (click)="openUsage()" style="color:white;float: right;margin-top: 20px;background-color: #906311;width: 150px;">\n                        شروط الاستخدام\n                    </p> -->\n                </ion-item>\n                <ion-item *ngIf="btncode">\n                    <p ion-button block style="color:white" (click)="login()">\n                        {{"LogIn" | translate}}\n                    </p>\n                </ion-item>\n\n                <!--ion-item>\n            <p ion-button block style="color:white" (click)="in()" >\n              تسجيل\n            </p>\n        </ion-item-->\n\n\n\n            </ion-list>\n        </form>\n\n        <!--button ion-button (click)="rest()" style="color:white;background-color: transparent;" block>\n          استرجاع كلمه المرور\n        </button-->\n\n\n    </div>\n</ion-content>'/*ion-inline-end:"D:\My Project\Ionic Apps\myApp0\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_functions_functions__["a" /* FunctionsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_rate__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_functions_functions__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_pages_pages__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { SocialSharing } from '@ionic-native/social-sharing';







var MyApp = /** @class */ (function () {
    function MyApp(platform, 
        // private socialSharing: SocialSharing,
        authServiceProvider, appRate, statusBar, events, socialSharing, functionsProvider, fcm, splashScreen, translate) {
        var _this = this;
        this.authServiceProvider = authServiceProvider;
        this.appRate = appRate;
        this.events = events;
        this.socialSharing = socialSharing;
        this.functionsProvider = functionsProvider;
        this.fcm = fcm;
        this.translate = translate;
        this.lang = 'ar';
        this.txtLang = 'English';
        translate.setDefaultLang(this.lang);
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            var userLng = localStorage.getItem('lng');
            if (userLng) {
                _this.lang = userLng;
                if (userLng == 'ar') {
                    _this.translate.setDefaultLang('ar');
                    _this.txtLang = 'English';
                    _this.lang = 'ar';
                }
                else {
                    _this.translate.setDefaultLang('en');
                    _this.txtLang = 'عربى';
                    _this.lang = 'en';
                }
                console.log(_this.lang);
            }
            statusBar.styleDefault();
            splashScreen.hide();
            //localStorage.clear();
            _this.GetPageDate();
            if (localStorage.getItem('userData')) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
                _this.name = JSON.parse(localStorage.getItem('userData')).name;
                _this.fcm.subscribeToTopic('user_' + JSON.parse(localStorage.getItem('userData')).id);
                if (JSON.parse(localStorage.getItem('userData')).block == 1) {
                    _this.functionsProvider.presentToast('تم ايقاف هذا الحساب');
                    _this.logout();
                }
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_pages_pages__["a" /* PagesPage */];
            }
        });
        events.subscribe('user:created', function (user, time) {
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
            _this.fcm.subscribeToTopic('user_' + JSON.parse(localStorage.getItem('userData')).id);
            _this.name = JSON.parse(localStorage.getItem('userData')).name;
        });
    }
    MyApp_1 = MyApp;
    MyApp.prototype.GoHome = function () {
        this.nav.setRoot(MyApp_1);
    };
    MyApp.prototype.GoPage = function (one) {
        this.nav.push('PagesPage', { one: one, lang: this.lang });
    };
    MyApp.prototype.GetPageDate = function () {
        var _this = this;
        this.authServiceProvider.getData('page')
            .then(function (data) {
            console.log(data);
            _this.all = data;
            _this.data = _this.all.data;
        });
    };
    MyApp.prototype.rateApp = function () {
        this.appRate.preferences.storeAppURL = {
            ios: 'com.orgnal.qr',
            android: 'https://play.google.com/store/apps/details?id=com.orgnal.qr&hl=en',
            windows: 'ms-windows-store://review/?ProductId=<store_id>'
        };
        this.appRate.promptForRating(true);
    };
    MyApp.prototype.shareApp = function () {
        var options = {
            message: 'Hi Check this app and download it',
            subject: 'Hi',
            files: ['', ''],
            url: 'https://play.google.com/store/apps/details?id=com.orgnal.qr&hl=en',
            chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title
        };
        this.socialSharing.shareWithOptions(options);
    };
    MyApp.prototype.Gocontact = function () {
        this.nav.push('ContactusPage');
    };
    MyApp.prototype.GoRepot = function () {
        this.nav.push('RepotPage');
    };
    MyApp.prototype.user = function () {
        this.nav.push('UserPage');
    };
    MyApp.prototype.backToLogin = function () {
        this.nav.setRoot(MyApp_1);
    };
    MyApp.prototype.logout = function () {
        localStorage.removeItem("userData");
        this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_pages_pages__["a" /* PagesPage */];
        //  setTimeout(() => this.backToLogin(), 1000);
    };
    MyApp.prototype.changeLang = function () {
        console.log(this.lang);
        if (this.lang == 'ar') {
            localStorage.setItem('lng', 'en');
            this.translate.setDefaultLang('en');
            this.txtLang = 'عربى';
            this.lang = 'en';
        }
        else {
            localStorage.setItem('lng', 'ar');
            this.translate.setDefaultLang('ar');
            this.txtLang = 'English';
            this.lang = 'ar';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = MyApp_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\My Project\Ionic Apps\myApp0\src\app\app.html"*/'<ion-menu [content]="content">\n\n\n    <ion-content class="my-container">\n        <ion-list>\n            <ion-item menuClose>\n                <ion-avatar item-end>\n                    <img src="assets/user.png">\n                </ion-avatar>\n\n                <h2 text-right style="font-weight: bold !important;">\n\n                    {{"welcomeMsg" | translate}}\n                </h2>\n                <h2 text-right>\n                    {{name}}\n\n                </h2>\n\n\n            </ion-item>\n\n            <ion-item menuClose text-center (click)="GoHome()">\n                <ion-icon name="md-home" item-end></ion-icon>\n                {{"Home" | translate }}\n            </ion-item>\n\n\n            <ion-item menuClose *ngFor="let x of data" text-center (click)="GoPage(x)">\n                <ion-icon name="information-circle" item-end></ion-icon>\n                <p style="color: white;font-size: 1.7rem;" *ngIf="lang== \'ar\'">{{x.name}}</p>\n                <p style="color: white;font-size: 1.7rem;" *ngIf="lang== \'en\'">{{x.en_name}}</p>\n            </ion-item>\n            <ion-item tappable text-center menuClose no-line (click)="shareApp()">\n                <ion-icon name="md-share" item-right></ion-icon>\n                {{"ShareApp" | translate }}\n            </ion-item>\n            <ion-item tappable text-center menuClose no-line (click)="rateApp()">\n                <ion-icon name="md-thumbs-up" item-right></ion-icon>\n                {{"RateApp" | translate }}\n            </ion-item>\n\n\n            <ion-item menuClose text-center (click)="GoRepot()">\n                <ion-icon name="mail" item-end></ion-icon>\n                {{"ReportProduct" | translate}}\n            </ion-item>\n            <ion-item menuClose text-center (click)="Gocontact()">\n                <ion-icon name="mail" item-end></ion-icon>\n                {{"CallUs" | translate}}\n            </ion-item>\n\n            <ion-item menuClose text-center (click)="logout()">\n                <ion-icon name="log-out" item-end></ion-icon>\n                {{"LogOut" | translate}}\n            </ion-item>\n\n            <ion-item menuClose text-center (click)="changeLang()">\n                <ion-icon name="construct" item-end></ion-icon>\n                {{txtLang}}\n            </ion-item>\n\n\n        </ion-list>\n    </ion-content>\n\n</ion-menu>\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\My Project\Ionic Apps\myApp0\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_rate__["a" /* AppRate */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_9__providers_functions_functions__["a" /* FunctionsProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
    var MyApp_1;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/agreement/agreement.module": [
		298,
		5
	],
	"../pages/contactus/contactus.module": [
		299,
		4
	],
	"../pages/login/login.module": [
		300,
		6
	],
	"../pages/pages/pages.module": [
		179
	],
	"../pages/repot/repot.module": [
		301,
		3
	],
	"../pages/rest/rest.module": [
		302,
		2
	],
	"../pages/signup/signup.module": [
		303,
		1
	],
	"../pages/user/user.module": [
		304,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\My Project\Ionic Apps\myApp0\src\pages\tabs\tabs.html"*/'<ion-tabs selectedIndex="2">\n    <ion-tab [root]="tab3Root" tabTitle="{{\'contactTab\' | translate }}" tabIcon="contacts"></ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle="{{\'RecordTab\' | translate}}" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="tab1Root" tabTitle="{{\'HomeTab\' | translate}}" tabIcon="home"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"D:\My Project\Ionic Apps\myApp0\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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




var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, authServiceProvider, functionsProvider) {
        this.navCtrl = navCtrl;
        this.authServiceProvider = authServiceProvider;
        this.functionsProvider = functionsProvider;
        this.upurl = this.authServiceProvider.UpUrl;
        this.id = JSON.parse(localStorage.getItem('userData')).id;
        this.GetDate(this.id);
    }
    AboutPage.prototype.GetDate = function (id) {
        var _this = this;
        this.functionsProvider.loadingfun();
        this.authServiceProvider.getData('trderoredrb/' + id)
            .then(function (data) {
            _this.all = data;
            _this.data = _this.all.data;
            console.log(_this.data);
            _this.functionsProvider.loading.dismiss();
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\My Project\Ionic Apps\myApp0\src\pages\about\about.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title text-right>\n            <img src="assets/logo.png" style="height: 42px;" alt="">\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <!-- <ion-list>\n        \n        <ion-item *ngFor="let x of data">\n           \n            <h2 text-right>title</h2>\n            <p>{{x.created_at}}</p>\n            <ion-thumbnail item-end>\n                <img src="{{upurl}}{{x.image}}">\n              </ion-thumbnail>\n        </ion-item>\n        \n      </ion-list> -->\n    <ion-card *ngFor="let x of data">\n        <ion-card-header>\n            <ion-row justify-content-between>\n                <ion-col col-auto>\n                    <img src="{{upurl}}{{x.image}}" style="height: 180px;" item-left/>\n                </ion-col>\n                <ion-col>\n                    <ion-row text-wrap style="direction: rtl;color: white;">\n                        <ion-label>{{"ProductName" | translate}}</ion-label>\n                        <ion-label>{{x.title}}</ion-label>\n\n                    </ion-row>\n                    <ion-row text-wrap style="direction: rtl;color: white;">\n                        <ion-label>{{"StoreName" | translate}}</ion-label>\n                        <ion-label>{{x.store}}</ion-label>\n\n                    </ion-row>\n                    <ion-row text-wrap style="direction: rtl;color: white;">\n                        <ion-label>{{"PurchaseDate" | translate}}</ion-label>\n                        <ion-label>{{x.created_at}}</ion-label>\n\n                    </ion-row>\n                    <ion-row text-wrap style="direction: rtl;color: white;">\n                        <ion-label>{{"ExpirationDate" | translate}}</ion-label>\n                        <ion-label>{{x.expiration}}</ion-label>\n\n                    </ion-row>\n                    <ion-row text-wrap style="direction: rtl;color: white;">\n                        <ion-label>{{"City" | translate}}</ion-label>\n                        <ion-label>{{x.city}}</ion-label>\n\n                    </ion-row>\n\n                    <ion-row text-wrap style="direction: rtl;color: white;">\n                        <ion-label>{{"QrMsg" | translate}}</ion-label>\n                        <ion-label>{{x.qrmassage}}</ion-label>\n\n                    </ion-row>\n\n                </ion-col>\n            </ion-row>\n        </ion-card-header>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"D:\My Project\Ionic Apps\myApp0\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_functions_functions__["a" /* FunctionsProvider */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
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




var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, authServiceProvider, functionsProvider) {
        this.navCtrl = navCtrl;
        this.authServiceProvider = authServiceProvider;
        this.functionsProvider = functionsProvider;
        this.lang = '';
        this.upurl = this.authServiceProvider.UpUrl;
        this.GetDate();
    }
    ContactPage.prototype.GetDate = function () {
        var _this = this;
        this.authServiceProvider.getData('page')
            .then(function (data) {
            _this.all = data;
            _this.data = _this.all.data;
        });
        this.authServiceProvider.getData('socialmedia')
            .then(function (data) {
            _this.all2 = data;
            _this.data2 = _this.all2.data;
        });
    };
    ContactPage.prototype.GoContact = function () {
        this.navCtrl.push('ContactusPage');
    };
    ContactPage.prototype.GoRepot = function () {
        this.navCtrl.push('RepotPage');
    };
    ContactPage.prototype.GoPage = function (x) {
        this.navCtrl.push('PagesPage', { one: x });
    };
    ContactPage.prototype.ionViewDidEnter = function () {
        var mylang = localStorage.getItem('lng');
        if (mylang) {
            this.lang = mylang;
        }
        else {
            this.lang = 'ar';
        }
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\My Project\Ionic Apps\myApp0\src\pages\contact\contact.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title text-right>\n            <img src="assets/logo.png" style="height: 42px;" alt="">\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n\n        <button ion-item text-right *ngFor="let x of data" (click)="GoPage(x)">\n            <p style="color: white;font-size: 1.7rem;" *ngIf="lang== \'ar\'">{{x.name}}</p>\n            <p style="color: white;font-size: 1.7rem;" *ngIf="lang== \'en\'">{{x.en_name}}</p>\n            <!-- {{ x.name }} -->\n      </button>\n\n        <button ion-item text-right (click)="GoRepot()">\n\n        {{"ReportProduct" | translate}}\n    </button>\n\n        <button ion-item text-right (click)="GoContact()">\n        {{"CallUs" | translate}}\n      </button>\n\n    </ion-list>\n\n\n\n\n\n    <ion-row text-center style="margin-top: 53px;">\n\n        <ion-col col-3 *ngFor="let x of data2">\n            <a href="{{x.url}}">\n                <img src="{{upurl}}{{x.image}}" style="width: 21px;" alt="">\n            </a>\n        </ion-col>\n\n    </ion-row>\n\n</ion-content>'/*ion-inline-end:"D:\My Project\Ionic Apps\myApp0\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_functions_functions__["a" /* FunctionsProvider */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_functions_functions__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_vibration__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, qrScanner, authServiceProvider, functionsProvider, vibration) {
        this.navCtrl = navCtrl;
        this.qrScanner = qrScanner;
        this.authServiceProvider = authServiceProvider;
        this.functionsProvider = functionsProvider;
        this.vibration = vibration;
        this.showing = false;
        this.bay = false;
        this.x = true;
        this.userData = { user_id: '', barcode_id: '', info: '' };
        this.showads = true;
        this.upurl = this.authServiceProvider.UpUrl;
        this.userData.user_id = JSON.parse(localStorage.getItem('userData')).id;
        this.x = true;
        this.open();
        this.GetAds();
    }
    HomePage.prototype.open = function () {
        var _this = this;
        // Optionally request the permission early
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                // camera permission was granted
                _this.qrScanner.show();
                // start scanning
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    // alert(text);
                    _this.GetInfo(text);
                    console.log('Scanned something : ', text);
                    _this.qrScanner.hide(); // hide camera preview
                    scanSub_1.unsubscribe(); // stop scanning
                });
            }
            else if (status.denied) {
                _this.functionsProvider.presentToast('camera permission was permanently denied');
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
            }
            else {
                _this.functionsProvider.presentToast('permission was denied, but not permanently. You can ask for permission again at a later time');
                // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
        })
            .catch(function (e) { return _this.functionsProvider.presentToast(e); });
    };
    HomePage.prototype.Send = function () {
        var _this = this;
        this.functionsProvider.loadingfun();
        this.authServiceProvider.postData(this.userData, 'trderoredr/add').then(function (result) {
            _this.responseData = result;
            if (_this.responseData.data) {
                _this.functionsProvider.loading.dismiss();
                _this.bay = true;
                _this.x = false;
                _this.functionsProvider.presentToast('تم الشراء بنجاح');
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
    };
    HomePage.prototype.GetInfo = function (id) {
        var _this = this;
        this.functionsProvider.loadingfun();
        this.authServiceProvider.getData('barcode/getById/' + id)
            .then(function (data) {
            _this.all = data;
            _this.data = _this.all.data;
            if (_this.all.error != '') {
                _this.showing = true;
                _this.vibration.vibrate(1000);
            }
            else {
                _this.showing = false;
            }
            _this.userData.barcode_id = id;
            _this.x = false;
        });
        this.functionsProvider.loading.dismiss();
    };
    HomePage.prototype.maked = function () {
        this.x = true;
        this.showing = false;
        this.open();
    };
    HomePage.prototype.GetAds = function () {
        var _this = this;
        this.functionsProvider.loadingfun();
        this.authServiceProvider.getData('startads')
            .then(function (data) {
            _this.allads = data;
            _this.ads = _this.allads.data;
            _this.functionsProvider.loading.dismiss();
        });
    };
    HomePage.prototype.hideads = function () {
        this.showads = false;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\My Project\Ionic Apps\myApp0\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title text-right>\n            <img src="assets/logo.png" style="height: 42px;" alt="">\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background: none transparent;">\n\n\n    <!-- <button ion-button block color="secondary" round (click)="maked()">\n  موفق  \n  </button> -->\n\n    <!-- <div *ngIf="x" class="cameraView" style="background-size: 100% 100% !important;height: 100%;">\n\n        <div *ngIf="showads" style="width: 100%;height: 200px;padding-top:85px;margin-top: 24px;">\n            <img style="width: 100%;height: 200px;" src="{{upurl}}{{ads}}">\n            <button ion-button block color="danger" round (click)="hideads()">\n       اغلاق\n     </button>\n\n        </div>\n\n\n    </div> -->\n\n    <ion-card *ngIf="data" style="direction: rtl;">\n        <ion-card-content>\n            <p style="font-weight: bold !important;color: #fff;" text-right>\n                {{data.title}}\n            </p>\n\n\n            <p text-right style="color: #fff;">\n                {{"ManufactureCompany" | translate}} : {{data.company.company_name}}\n                <br> {{"ExpirationDate" | translate}} : {{data.expiration}}\n                <br> {{"Agent" | translate}} : {{data.agents.agent_name}}<br> {{"Country" | translate}} : {{data.country.country_name}}<br> {{"City" | translate}} : {{data.city}}<br>{{"StoreName" | translate}} : {{data.store}}\n\n                <br>\n                <!-- {{data.barcode}} -->\n            </p>\n        </ion-card-content>\n        <img src="{{upurl}}{{data.image}}" />\n        <button ion-button *ngIf="!bay" block color="danger" round (click)="Send()">\n      {{"Buy" | translate}}\n    </button>\n\n    </ion-card>\n\n    <div round *ngIf="showing" style="width: 100%;\n  height: 200px;background-color: red;padding-top:85px;margin-top: 24px;color: #fff;font-size: 20px;width: 100%;" text-center>\n        {{"InvalidProduct" | translate}}\n    </div>\n\n    <button ion-button *ngIf="!x" block color="secondary" round (click)="maked()">\n    {{"ok" | translate}}\n  </button>\n</ion-content>'/*ion-inline-end:"D:\My Project\Ionic Apps\myApp0\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_functions_functions__["a" /* FunctionsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_vibration__["a" /* Vibration */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesPageModule", function() { return PagesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PagesPageModule = /** @class */ (function () {
    function PagesPageModule() {
    }
    PagesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pages__["a" /* PagesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pages__["a" /* PagesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], PagesPageModule);
    return PagesPageModule;
}());

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(237);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_qr_scanner__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_auth_service_auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_functions_functions__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_social_sharing__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_app_rate__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_fcm__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_vibration__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_pages_pages__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ngx_translate_core__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ngx_translate_http_loader__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_pages_pages_module__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















// import { BarcodeScanner } from '@ionic-native/barcode-scanner';






function setTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_21__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/agreement/agreement.module#AgreementPageModule', name: 'AgreementPage', segment: 'agreement', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contactus/contactus.module#ContactusPageModule', name: 'ContactusPage', segment: 'contactus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pages/pages.module#PagesPageModule', name: 'PagesPage', segment: 'pages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/repot/repot.module#RepotPageModule', name: 'RepotPage', segment: 'repot', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rest/rest.module#RestPageModule', name: 'RestPage', segment: 'rest', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_20__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_20__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (setTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_22__pages_pages_pages_module__["PagesPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_pages_pages__["a" /* PagesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_functions_functions__["a" /* FunctionsProvider */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_qr_scanner__["a" /* QRScanner */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_vibration__["a" /* Vibration */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_app_rate__["a" /* AppRate */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_fcm__["a" /* FCM */]
                // BarcodeScanner 
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        // Url="http://127.0.0.1:5050";
        this.Url = 'http://newqrapp.tk';
        this.apiUrl = this.Url + "/api/v1/";
        this.UpUrl = this.Url + "/files/";
        console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + type, JSON.stringify(credentials))
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                resolve(err);
            });
        });
    };
    AuthServiceProvider.prototype.getData = function (type) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + type).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                resolve(err);
            });
        });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunctionsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the FunctionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FunctionsProvider = /** @class */ (function () {
    function FunctionsProvider(http, toastCtrl, loadingCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        console.log('Hello FunctionsProvider Provider');
    }
    FunctionsProvider.prototype.presentToast = function (x) {
        this.toast = this.toastCtrl.create({
            message: x,
            duration: 3000
        });
        this.toast.present();
    };
    FunctionsProvider.prototype.loadingfun = function () {
        this.loading = this.loadingCtrl.create({
            content: 'يرجى الانتظار...'
        });
        this.loading.present();
    };
    FunctionsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]])
    ], FunctionsProvider);
    return FunctionsProvider;
}());

//# sourceMappingURL=functions.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(108);
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
 * Generated class for the PagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PagesPage = /** @class */ (function () {
    function PagesPage(navCtrl, navParams, authServiceProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.isLogin = false;
        this.lang = '';
        this.one = this.navParams.get('one');
        var mylang = localStorage.getItem('lng');
        if (mylang) {
            this.lang = mylang;
        }
        else {
            this.lang = 'ar';
        }
        if (this.one == null) {
            this.authServiceProvider.getData('page')
                .then(function (data) {
                _this.all = data;
                _this.usageData = _this.all.data;
                console.log(_this.usageData);
                var listPage = [];
                for (var _i = 0, _a = _this.all.data; _i < _a.length; _i++) {
                    var i = _a[_i];
                    listPage.push(i);
                }
                var findUsage = listPage.find(function (x) { return x.id == 3; });
                _this.one = findUsage;
                // let useInfo = this.usageData.find(x=>x.id == 3);
            });
        }
    }
    PagesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PagesPage');
        var userdata = JSON.parse(localStorage.getItem('userData'));
        if (userdata) {
            this.isLogin = true;
        }
    };
    PagesPage.prototype.ok = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    PagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pages',template:/*ion-inline-start:"D:\My Project\Ionic Apps\myApp0\src\pages\pages\pages.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title text-right>\n            <img src="assets/logo.png" style="height: 42px;" alt="">\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding text-right *ngIf="one">\n    <h3 text-right *ngIf="lang== \'ar\'">\n        {{one.name}}\n    </h3>\n    <h3 text-left *ngIf="lang== \'en\'">\n        {{one.en_name}}\n    </h3>\n    <p style="text-align: justify !important;text-justify: inter-word;direction: rtl;" *ngIf="lang== \'ar\'">\n\n        {{one.body}}\n    </p>\n    <p style="text-align: justify !important;text-justify: inter-word;direction: ltr;" *ngIf="lang== \'en\'">\n\n        {{one.en_body}}\n    </p>\n\n    <button *ngIf="one.id == 3 && !isLogin" ion-button block (click)="ok()" style="background-color: ##FC4800">{{"ok" | translate}}</button>\n</ion-content>'/*ion-inline-end:"D:\My Project\Ionic Apps\myApp0\src\pages\pages\pages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], PagesPage);
    return PagesPage;
}());

//# sourceMappingURL=pages.js.map

/***/ })

},[219]);
//# sourceMappingURL=main.js.map