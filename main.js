(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-landing-page></app-landing-page>\n<router-outlet></router-outlet>\n<app-repository></app-repository>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Github';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _repository_repository_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./repository/repository.component */ "./src/app/repository/repository.component.ts");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/esm5/ngx-progressbar-core.js");
/* harmony import */ var _ngx_progressbar_http_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-progressbar/http-client */ "./node_modules/@ngx-progressbar/http-client/esm5/ngx-progressbar-http-client.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__["LandingPageComponent"],
                _repository_repository_component__WEBPACK_IMPORTED_MODULE_8__["RepositoryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_9__["NgProgressModule"].forRoot(),
                _ngx_progressbar_http_client__WEBPACK_IMPORTED_MODULE_10__["NgProgressHttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/info-http/info-request.service.ts":
/*!***************************************************!*\
  !*** ./src/app/info-http/info-request.service.ts ***!
  \***************************************************/
/*! exports provided: InfoRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoRequestService", function() { return InfoRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");





var InfoRequestService = /** @class */ (function () {
    function InfoRequestService(http) {
        this.http = http;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_4__["User"]("", "", 0, 0, 0, new Date);
        this.repo = [];
    }
    InfoRequestService.prototype.infoRequest = function (name) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get("https://api.github.com/users/" + name + "?access_token=" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].pass).toPromise().then(function (response) {
                _this.user.username = response.login;
                _this.user.avatar = response.avatar_url;
                _this.user.repos = response.public_repos;
                _this.user.followers = response.followers;
                _this.user.following = response.following;
                _this.user.createdDate = response.created_at;
                resolve();
            }, function (error) {
                _this.user.username = "Null";
                _this.user.createdDate = new Date;
                reject(error);
            });
        });
        return promise;
    };
    InfoRequestService.prototype.displayRepo = function (repo) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get("https://api.github.com/users/" + repo + "/repos?access_token=" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].pass).toPromise().then(function (response) {
                for (var i in response) {
                    _this.repo.push(response[i]);
                }
                console.log(_this.repo);
                resolve();
            }, function (error) {
                _this.user.avatar = "";
                _this.user.username = "";
                reject(error);
            });
        });
        return promise;
    };
    InfoRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InfoRequestService);
    return InfoRequestService;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <ng-progress></ng-progress>\n  <h2 class=\"text-center\">Github Search</h2>\n  <form>\n    <div class=\"form-group\">\n        <label for=\"name\">Username</label>\n          <input class=\"form-control form-control-sm\" type=\"text\" id=\"inputSmall\"\n          #newUser (keyup.enter)=\"searchUser(newUser.value)\">\n        <br><br>\n        <button type=\"submit\" class=\"btn btn-info\" (click)=\"searchUser(newUser.value)\">Submit</button>\n    </div>\n    </form>\n    <div>\n    <p>Username:  {{user.username}}<img src=\"{{user.avatar}}\" width=\"10%\"></p>\n    <p>Repositories:{{user.repos}}</p>\n    <p>Followers:{{user.followers}}</p>\n    <p>Following:{{user.following}}</p>\n    <p>Created Github account: {{user.createdDate|date}}</p>\n    <br>\n  </div>\n\n  \n</div>"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _info_http_info_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../info-http/info-request.service */ "./src/app/info-http/info-request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(http, inforequest, router) {
        this.http = http;
        this.inforequest = inforequest;
        this.router = router;
    }
    LandingPageComponent.prototype.displayRepo = function (repo) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get("https://api.github.com/users/" + repo + "/repos?access_token=" + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].pass).toPromise().then(function (response) {
                for (var i in response) {
                    _this.repo.push(response[i]);
                }
                console.log(_this.repo);
                resolve();
            }, function (error) {
                _this.user.avatar = "";
                _this.user.username = "";
                reject(error);
            });
        });
    };
    LandingPageComponent.prototype.searchUser = function (newUser) {
        var _this = this;
        this.http.get("https://api.github.com/users/" + newUser + "?access_token=" + (src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].pass)).subscribe(function (data) {
            // Succesful API request
            _this.user = new _user__WEBPACK_IMPORTED_MODULE_3__["User"](data.login, data.avatar_url, data.public_repos, data.followers, data.following, data.created_at);
        }, function (err) {
            _this.user = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]("Sorry, an error occured", "", 0, 0, 0, new Date(2019, 9, 1));
            console.log("An error occured");
        });
    };
    LandingPageComponent.prototype.ngOnInit = function () {
        this.inforequest.infoRequest(name);
        this.user = this.inforequest.user;
        var id = this.router.snapshot.paramMap.get("id");
        this.inforequest.displayRepo(id);
        this.repo = this.inforequest.repo;
    };
    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _info_http_info_request_service__WEBPACK_IMPORTED_MODULE_5__["InfoRequestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/repository/repository.component.css":
/*!*****************************************************!*\
  !*** ./src/app/repository/repository.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9zaXRvcnkvcmVwb3NpdG9yeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/repository/repository.component.html":
/*!******************************************************!*\
  !*** ./src/app/repository/repository.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"submit\" class=\"btn btn-info\" (click)=\"displayRepo()\">See Repos</button>\n<div *ngFor='let rep of repo'>\n  <p>Reponame:  {{rep.reponame}}</p>\n  <p>Description:{{rep.description}}</p>\n  <p>Live link:{{rep.livelink}}</p>\n</div>"

/***/ }),

/***/ "./src/app/repository/repository.component.ts":
/*!****************************************************!*\
  !*** ./src/app/repository/repository.component.ts ***!
  \****************************************************/
/*! exports provided: RepositoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoryComponent", function() { return RepositoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _info_http_info_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../info-http/info-request.service */ "./src/app/info-http/info-request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RepositoryComponent = /** @class */ (function () {
    function RepositoryComponent(http, inforequest, router) {
        this.http = http;
        this.inforequest = inforequest;
        this.router = router;
    }
    RepositoryComponent.prototype.displayRepo = function (repo) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get("https://api.github.com/users/" + repo + "/repos?access_token=" + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].pass).toPromise().then(function (response) {
                for (var i in response) {
                    _this.repo.push(response[i]);
                }
                console.log(_this.repo);
                resolve();
            }, function (error) {
                _this.user.avatar = "";
                _this.user.username = "";
                reject(error);
            });
        });
    };
    RepositoryComponent.prototype.ngOnInit = function () {
        var id = this.router.snapshot.paramMap.get("id");
        this.inforequest.displayRepo(id);
        this.repo = this.inforequest.repo;
    };
    RepositoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-repository',
            template: __webpack_require__(/*! ./repository.component.html */ "./src/app/repository/repository.component.html"),
            styles: [__webpack_require__(/*! ./repository.component.css */ "./src/app/repository/repository.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _info_http_info_request_service__WEBPACK_IMPORTED_MODULE_4__["InfoRequestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], RepositoryComponent);
    return RepositoryComponent;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(username, avatar, repos, followers, following, createdDate) {
        this.username = username;
        this.avatar = avatar;
        this.repos = repos;
        this.followers = followers;
        this.following = following;
        this.createdDate = createdDate;
    }
    return User;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    pass: "40ff7a372c0120c3e656926b50c2b5224938dd9b"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
// 37f5743bd9bdbd7b7f17cc75c9422eee8fe179e9


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/wecode/Documents/Projectnew/Github Search/Github/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map