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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _currencies_catalog_currencies_catalog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currencies-catalog/currencies-catalog.component */ "./src/app/currencies-catalog/currencies-catalog.component.ts");
/* harmony import */ var _currency_details_currency_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./currency-details/currency-details.component */ "./src/app/currency-details/currency-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/currencies', pathMatch: 'full' },
    { path: 'currencies', component: _currencies_catalog_currencies_catalog_component__WEBPACK_IMPORTED_MODULE_2__["CurrenciesCatalogComponent"] },
    { path: 'currency/:id', component: _currency_details_currency_details_component__WEBPACK_IMPORTED_MODULE_3__["CurrencyDetailsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _currencies_catalog_currencies_catalog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./currencies-catalog/currencies-catalog.component */ "./src/app/currencies-catalog/currencies-catalog.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _currency_details_currency_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./currency-details/currency-details.component */ "./src/app/currency-details/currency-details.component.ts");
/* harmony import */ var _currency_search_currency_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./currency-search/currency-search.component */ "./src/app/currency-search/currency-search.component.ts");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _currencies_catalog_currencies_catalog_component__WEBPACK_IMPORTED_MODULE_4__["CurrenciesCatalogComponent"],
                _currency_details_currency_details_component__WEBPACK_IMPORTED_MODULE_6__["CurrencyDetailsComponent"],
                _currency_search_currency_search_component__WEBPACK_IMPORTED_MODULE_7__["CurrencySearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/currencies-catalog/currencies-catalog.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/currencies-catalog/currencies-catalog.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n    text-decoration: none;\r\n    margin: 6px 0px 6px 0px;\r\n}\r\n\r\n.grid {\r\n    margin: 0;\r\n}\r\n\r\n.module {\r\n    text-align: center;\r\n    color: #eee;\r\n    height: 100%;\r\n    min-width: 120px;\r\n    background-color: #607d8b;\r\n    border-radius: 2px;\r\n  }\r\n\r\n.module:hover {\r\n    background-color: #eee;\r\n    cursor: pointer;\r\n    color: #607d8b;\r\n}\r\n\r\n.grid-pad {\r\n    padding: 10px 0;\r\n}"

/***/ }),

/***/ "./src/app/currencies-catalog/currencies-catalog.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/currencies-catalog/currencies-catalog.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <h1>Available currencies</h1>\r\n</div>\r\n\r\n<div class=\"grid grid-pad row\">\r\n  <a *ngFor=\"let currency of currencies\" routerLink=\"/currency/{{currency.id}}\" class=\"col-6 col-sm-6 col-md-3 col-lg-2 col-xl-2\">\r\n      <div class=\"module\">\r\n        <div>ID: {{ currency.id }}</div>\r\n        <div>Type: {{ currency.attributes.currency_type }}</div> \r\n        <div>Symbol:{{ currency.attributes.symbol }}</div>\r\n      </div>\r\n  </a>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <pagination [boundaryLinks]=\"true\" \r\n              firstText=\"&laquo;\" lastText=\"&raquo;\" \r\n              (pageChanged)=\"pageChanged($event)\"\r\n              [(ngModel)]=\"totalItems\"></pagination>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/currencies-catalog/currencies-catalog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/currencies-catalog/currencies-catalog.component.ts ***!
  \********************************************************************/
/*! exports provided: CurrenciesCatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrenciesCatalogComponent", function() { return CurrenciesCatalogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_currency_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/currency.service */ "./src/app/service/currency.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurrenciesCatalogComponent = /** @class */ (function () {
    function CurrenciesCatalogComponent(currencyService, _changeDetectionRef) {
        this.currencyService = currencyService;
        this._changeDetectionRef = _changeDetectionRef;
        this.currencies = [];
    }
    CurrenciesCatalogComponent.prototype.ngOnInit = function () {
        this.getCurrencies();
    };
    CurrenciesCatalogComponent.prototype.getCurrencies = function () {
        var _this = this;
        this.currencyService.getCurrencies('1', '100')
            .subscribe(function (response) {
            _this.currencies = response.data;
            _this.totalItems = response.meta.pages;
            _this._changeDetectionRef.detectChanges();
        });
        // let first_100_currencies = this.currencyService.getCurrencies('1', '100');
        // let second_100_currencies = this.currencyService.getCurrencies('2', '100');
        // forkJoin([first_100_currencies, second_100_currencies])
        //   .subscribe(results => {
        //     this.currencies = results[0].data.concat(results[1].data);
        //   });
    };
    CurrenciesCatalogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-currencies-catalog',
            template: __webpack_require__(/*! ./currencies-catalog.component.html */ "./src/app/currencies-catalog/currencies-catalog.component.html"),
            styles: [__webpack_require__(/*! ./currencies-catalog.component.css */ "./src/app/currencies-catalog/currencies-catalog.component.css")]
        }),
        __metadata("design:paramtypes", [_service_currency_service__WEBPACK_IMPORTED_MODULE_1__["CurrencyService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], CurrenciesCatalogComponent);
    return CurrenciesCatalogComponent;
}());



/***/ }),

/***/ "./src/app/currency-details/currency-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/currency-details/currency-details.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/currency-details/currency-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/currency-details/currency-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='currencyData'> \r\n  <h2>{{ currencyData.id }}</h2>\r\n  <ul>\r\n    <li>code: {{currencyData.attributes.code}}</li>\r\n    <li>name: {{currencyData.attributes.name}}</li>\r\n    <li>currency_type: {{currencyData.attributes.currency_type}}</li>\r\n    <li>code_iso_numeric3: {{currencyData.attributes.code_iso_numeric3}}</li>\r\n    <li>code_iso_alpha3: {{currencyData.attributes.code_iso_alpha3}}</li>\r\n  </ul>\r\n</div>\r\n\r\n<button (click)=\"goBack()\">Go to currencies catalog</button>\r\n"

/***/ }),

/***/ "./src/app/currency-details/currency-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/currency-details/currency-details.component.ts ***!
  \****************************************************************/
/*! exports provided: CurrencyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyDetailsComponent", function() { return CurrencyDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_currency_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/currency.service */ "./src/app/service/currency.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CurrencyDetailsComponent = /** @class */ (function () {
    function CurrencyDetailsComponent(currencyService, route, location) {
        this.currencyService = currencyService;
        this.route = route;
        this.location = location;
    }
    CurrencyDetailsComponent.prototype.ngOnInit = function () {
        this.getCurrency();
    };
    CurrencyDetailsComponent.prototype.getCurrency = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.currencyService.getCurrency(id)
            .subscribe(function (response) { return _this.currencyData = response.data; });
    };
    CurrencyDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    CurrencyDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-currency-details',
            template: __webpack_require__(/*! ./currency-details.component.html */ "./src/app/currency-details/currency-details.component.html"),
            styles: [__webpack_require__(/*! ./currency-details.component.css */ "./src/app/currency-details/currency-details.component.css")]
        }),
        __metadata("design:paramtypes", [_service_currency_service__WEBPACK_IMPORTED_MODULE_1__["CurrencyService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], CurrencyDetailsComponent);
    return CurrencyDetailsComponent;
}());



/***/ }),

/***/ "./src/app/currency-search/currency-search.component.css":
/*!***************************************************************!*\
  !*** ./src/app/currency-search/currency-search.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/currency-search/currency-search.component.html":
/*!****************************************************************!*\
  !*** ./src/app/currency-search/currency-search.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" />\r\n"

/***/ }),

/***/ "./src/app/currency-search/currency-search.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/currency-search/currency-search.component.ts ***!
  \**************************************************************/
/*! exports provided: CurrencySearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencySearchComponent", function() { return CurrencySearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurrencySearchComponent = /** @class */ (function () {
    function CurrencySearchComponent() {
    }
    CurrencySearchComponent.prototype.ngOnInit = function () {
    };
    CurrencySearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-currency-search',
            template: __webpack_require__(/*! ./currency-search.component.html */ "./src/app/currency-search/currency-search.component.html"),
            styles: [__webpack_require__(/*! ./currency-search.component.css */ "./src/app/currency-search/currency-search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CurrencySearchComponent);
    return CurrencySearchComponent;
}());



/***/ }),

/***/ "./src/app/service/currency.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/currency.service.ts ***!
  \*********************************************/
/*! exports provided: CurrencyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyService", function() { return CurrencyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurrencyService = /** @class */ (function () {
    function CurrencyService(http) {
        this.http = http;
        this.currenciesUrl = 'https://api.openfintech.io/v1/currencies';
    }
    CurrencyService.prototype.getCurrencies = function (pageNumber, pageSize) {
        var url = this.currenciesUrl + "?page[number]=" + pageNumber + "&page[size]=" + pageSize;
        return this.http.get(url);
    };
    CurrencyService.prototype.getCurrency = function (id) {
        var url = this.currenciesUrl + "/" + id;
        return this.http.get(url);
    };
    CurrencyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CurrencyService);
    return CurrencyService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Kata_SGcib\AngularExample\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map