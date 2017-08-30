webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- restrict the google maps api key here:\nhttps://console.developers.google.com/apis/credentials/key/79?authuser=1&project=weather-app-1503815962397&pli=1 -->\n\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!!\n  </h1>\n</div>\n\n<app-weather-component\n    [location]=\"locationObject\">\n</app-weather-component>\n\n<!-- <button \n  type=\"button\"\n  class=\"btn\" \n  (click)=\"showModal()\">\n  Open Modal\n</button> -->\n\n<!-- <app-location-modal #locationModal>\n</app-location-modal> -->\n\n<app-map-component\n    [userLocation]=\"locationObject\"\n    (changeMarkerLocation)=\"changeMarkerLocation($event)\">\n</app-map-component>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location_modal_location_modal_component__ = __webpack_require__("../../../../../src/app/location-modal/location-modal.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        // Variables
        this.title = 'Weather App';
        this.locationObject = {
            lat: null,
            lng: null,
            zoom: 2
        };
        this.confirmLocationSupport();
    }
    AppComponent.prototype.confirmLocationSupport = function () {
        if (navigator.geolocation) {
            // geolocation is supported
            this.getLocation();
        }
        else {
            // geolocation is not supported for this browser
            console.log('geolocation is not supported');
        }
    };
    AppComponent.prototype.getLocation = function () {
        var _this = this;
        var startPos;
        var geoSuccess = function (position) {
            console.log(' geo POSITTION', position);
            startPos = position;
            defineUserLocation();
        };
        var geoError = function (error) {
            console.log('geoError: ', error);
            switch (error.code) {
                case error.TIMEOUT:
                    // The user didn't accept the callout
                    break;
            }
        };
        var defineUserLocation = (function () {
            var userLocation = {
                lat: startPos.coords.latitude,
                lng: startPos.coords.longitude,
                zoom: 8
            };
            _this.locationObject = userLocation;
        });
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    };
    AppComponent.prototype.changeMarkerLocation = function (event) {
        var newMarkerLocation = {
            lat: event.lat,
            lng: event.lng,
            zoom: event.zoom
        };
        this.locationObject = newMarkerLocation;
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('locationModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__location_modal_location_modal_component__["a" /* LocationModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__location_modal_location_modal_component__["a" /* LocationModalComponent */]) === "function" && _a || Object)
], AppComponent.prototype, "locationModal", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_component__ = __webpack_require__("../../../../../src/app/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__weather_component__ = __webpack_require__("../../../../../src/app/weather.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__location_modal_location_modal_component__ = __webpack_require__("../../../../../src/app/location-modal/location-modal.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__map_component__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_7__weather_component__["a" /* WeatherComponent */],
            __WEBPACK_IMPORTED_MODULE_8__location_modal_location_modal_component__["a" /* LocationModalComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyCB1wszn_GgcWqN7-CdjFMGubnf1GWwtew'
            })
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/location-modal/location-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\n    background: rgba(0,0,0,0.6);\n}\n\n.container{\n    position: relative;\n    margin: 10% auto;\n    padding: 5px 20px 13px 20px;\n    background: #fff;\n}\n\n.modalDialog {\n    position: fixed;\n    font-family: Arial, Helvetica, sans-serif;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.8);\n    z-index: 99999;\n    opacity:0;\n    transition: opacity 400ms ease-in;\n   \n}\n\n\n\n.modalDialog:target {\n    opacity:1;\n    pointer-events: auto;\n    \n}\n.modalDialog > div {\n     \n    position: relative;\n    margin: 10% auto;\n    padding: 5px 20px 13px 20px;\n    border-radius: 10px;\n    background: #fff;\n    background: -o-linear-gradient(#fff, #999);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/location-modal/location-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade modalDialog\" \n    tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n    [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"app-modal-header\">\n                modal title\n              </div>\n              <div>\n                modal body\n              </div>\n              <div>\n                <button type=\"button\" class=\"btn\" (click)=\"hide()\">Close</button>\n              </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/location-modal/location-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocationModalComponent = (function () {
    function LocationModalComponent() {
        this.visible = false;
        this.visibleAnimate = false;
    }
    LocationModalComponent.prototype.ngOnInit = function () {
    };
    LocationModalComponent.prototype.show = function () {
        var _this = this;
        console.log('Modal shown');
        this.visible = true;
        setTimeout(function () { return _this.visibleAnimate = true; }, 100);
    };
    LocationModalComponent.prototype.hide = function () {
        var _this = this;
        console.log('Modal hidden');
        this.visible = false;
        setTimeout(function () { return _this.visible = false; }, 300);
    };
    return LocationModalComponent;
}());
LocationModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-location-modal',
        template: __webpack_require__("../../../../../src/app/location-modal/location-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/location-modal/location-modal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LocationModalComponent);

//# sourceMappingURL=location-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n    height: 300px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{ title }}</h1>\n\n<agm-map\n  [latitude]=\"lat\"\n  [longitude]=\"lng\"\n  [zoom]=\"zoom\"\n  (mapClick)=\"mapClicked($event)\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map>\n"

/***/ }),

/***/ "../../../../../src/app/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { ModalService } from '../_services/index';
var MapComponent = (function () {
    function MapComponent() {
        // @Output
        this.changeMarkerLocation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
        // Variables
        this.title = 'map selector';
        this.lat = null;
        this.lng = null;
        this.zoom = 2;
    }
    MapComponent.prototype.ngOnChanges = function (changes) {
        if (this.userLocation) {
            this.lat = this.userLocation.lat;
            this.lng = this.userLocation.lng;
            this.zoom = this.userLocation.zoom;
        }
    };
    MapComponent.prototype.mapClicked = function (event) {
        console.log('\n Marker Location Changed', this.userLocation);
        console.log('lat', event.coords.lat);
        console.log('lng', event.coords.lng);
        this.lat = event.coords.lat;
        this.lng = event.coords.lng;
        var newLocation = {
            lat: this.lat,
            lng: this.lng,
            zoom: 8
        };
        this.changeMarkerLocation.emit(newLocation);
    };
    return MapComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Object)
], MapComponent.prototype, "userLocation", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Output */])(),
    __metadata("design:type", Object)
], MapComponent.prototype, "changeMarkerLocation", void 0);
MapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-map-component',
        template: __webpack_require__("../../../../../src/app/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/map.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MapComponent);

//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/weather.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n    background: lightblue;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/weather.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    weather component\n    <div *ngIf=\"weatherData && weatherData.name\">\n        <p>{{ weatherData.name }}</p>\n        <p>{{ weatherData.main.temp }}</p>\n        <p>{{ weatherData.weather[0].main }}</p>\n        <img src=\"{{ weatherData.weather[0].icon }}\">\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/weather.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherComponent = (function () {
    function WeatherComponent(http) {
        this.http = http;
    }
    WeatherComponent.prototype.ngOnChanges = function (changes) {
        if (this.location) {
            console.log('NEW WEATHER RESULTS', this.location);
            this.lat = this.location.lat;
            this.lng = this.location.lng;
            this.callApi(this.lat, this.lng);
        }
    };
    WeatherComponent.prototype.callApi = function (lat, lng) {
        var _this = this;
        this.http.get("https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lng)
            .subscribe(function (data) {
            var apiSuccess = data;
            console.log('HTTP RESULTS: ', apiSuccess);
            _this.weatherData = apiSuccess;
        }, function (err) {
            console.log('Something went wrong!', err);
        });
    };
    return WeatherComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Object)
], WeatherComponent.prototype, "location", void 0);
WeatherComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-weather-component',
        template: __webpack_require__("../../../../../src/app/weather.component.html"),
        styles: [__webpack_require__("../../../../../src/app/weather.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], WeatherComponent);

var _a;
//# sourceMappingURL=weather.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map