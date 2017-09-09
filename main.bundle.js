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
exports.push([module.i, ".container {\n    height: 100vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n.info-container {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n.info-container .info-header {\n    -webkit-box-flex: 4;\n        -ms-flex: 4;\n            flex: 4;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.info-container .info-header .title {\n    -webkit-box-flex:2;\n        -ms-flex:2;\n            flex:2;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    text-align: center;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-size: 1.5em;\n}\n\n.info-container .info-header .title .location-name {\n    color: #05668D;\n    font-weight: 600;\n}\n\n.info-container .info-header .buttons {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    margin-right: 10px;\n}\n\n.info-container .info-header .icon-button {\n    background: #D4CBFF;\n    color: #4C417D;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 1em;\n    width: 30px;\n    height: 30px;\n    border: solid 1px #A08BFE;\n    border-radius: 2px; \n    outline: none;\n}\n\nbutton + button {\n    margin-left: 10px;\n}\n\n.info-container .info-content {\n    -webkit-box-flex: 3;\n        -ms-flex: 3;\n            flex: 3;\n}\n\n.map-container {\n    -webkit-box-flex: 2;\n        -ms-flex: 2;\n            flex: 2;\n    margin: 10px;\n    border: solid 1px #CDCDCD;\n    /* border-radius: 2px; */\n}\n\n@media(min-width:481px) {\n\n    .info-container .info-header .title {\n        font-size: 2.5em;\n    }\n\n    .info-container .info-header .buttons {\n        margin-right: 20px;\n    }\n\n    .info-container .info-header .icon-button {\n        font-size: 1.5em;\n        width: 40px;\n        height: 40px;\n        box-shadow: 1px 0px 2px 0px rgba(0, 0, 0, 0.2);\n    }\n\n    button + button {\n        margin-left: 15px;\n    }\n\n    .map-container {\n        margin: 20px;\n        box-shadow: 1px 0px 2px 0px rgba(0, 0, 0, 0.2);\n    }\n}\n\n@media(min-width:768px) {\n    \n    .info-container {\n        -webkit-box-flex: 2;\n            -ms-flex: 2;\n                flex: 2;\n    }\n    \n    .map-container {\n        -webkit-box-flex: 3;\n            -ms-flex: 3;\n                flex: 3;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- restrict the google maps api key here:\nhttps://console.developers.google.com/apis/credentials/key/79?authuser=1&project=weather-app-1503815962397&pli=1 -->\n<div class=\"container\">\n\n  <div class=\"info-container\">\n\n    <div class=\"info-header\">\n        <div class=\"title\">\n          <span> What's the weather like in <br/><span class=\"location-name\">{{ locationName }}</span></span>\n        </div>\n        <div class=\"buttons\">\n          <button class=\"icon-button\" (click)=\"switchTemperatureScale()\">\n            <span *ngIf=\"!getFarenheit\">°F</span>\n            <span *ngIf=\"getFarenheit\">°C</span>\n          </button>\n          <button class=\"icon-button\" (click)=\"setUserLocation()\">\n              <i class=\"fa fa-location-arrow\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n    </div>\n\n    <div class=\"info-content\">\n      <app-weather-component\n          [location]=\"locationObject\"\n          [farenheit]=\"getFarenheit\"\n          (locationName)=\"getLocationName($event)\">\n      </app-weather-component>\n    </div>\n\n  </div> <!-- /info-container -->\n\n  <!-- <button \n    type=\"button\"\n    class=\"btn\" \n    (click)=\"showModal()\">\n    Open Modal\n  </button> -->\n\n  <!-- <app-location-modal #locationModal>\n  </app-location-modal> -->\n\n  <div class=\"map-container\">\n    <app-map-component\n        [userLocation]=\"locationObject\"\n        (changeMarkerLocation)=\"changeMarkerLocation($event)\">\n    </app-map-component>\n  </div> <!-- /map-container -->\n\n</div> <!-- /container -->"

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
        this.getFarenheit = false;
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
            var definedUserLocation = {
                lat: startPos.coords.latitude,
                lng: startPos.coords.longitude,
                zoom: 8
            };
            _this.userLocation = definedUserLocation;
            _this.locationObject = definedUserLocation;
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
    AppComponent.prototype.getLocationName = function (event) {
        this.locationName = event;
    };
    AppComponent.prototype.setUserLocation = function () {
        this.locationObject = this.userLocation;
    };
    AppComponent.prototype.switchTemperatureScale = function () {
        this.getFarenheit ? this.getFarenheit = false : this.getFarenheit = true;
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
exports.push([module.i, "agm-map {\n    height: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map.component.html":
/***/ (function(module, exports) {

module.exports = "<agm-map\n  [latitude]=\"lat\"\n  [longitude]=\"lng\"\n  [zoom]=\"zoom\"\n  (mapClick)=\"mapClicked($event)\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n</agm-map>\n"

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
exports.push([module.i, ".container {\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.container .weather-text {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border: solid 1px #CDCDCD;\n    border-radius: 2px;\n    margin: 10px 5px 0px 10px;\n}\n.container .weather-text > div {\n    margin: 2px;\n}\n.container .weather-icon {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border: solid 1px #CDCDCD;\n    border-radius: 2px;\n    margin: 10px 10px 0px 5px;\n}\n\n@media(min-width:481px) {\n\n    .container .weather-text {\n        font-size: 1.5em;\n        margin: 10px 10px 0px 20px;\n        box-shadow: 1px 0px 2px 0px rgba(0, 0, 0, 0.2);\n    }\n    \n    .container .weather-icon {\n        margin: 10px 20px 0px 10px;\n        box-shadow: 1px 0px 2px 0px rgba(0, 0, 0, 0.2);\n    }\n\n    .container .weather-icon .icon {\n        width: 100px;\n        height: 100px;\n    }\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/weather.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"weather-text\">\n        <div *ngIf=\"farenheit && temperatureFarenheit\">{{ temperatureFarenheit }}<span> °F</span></div>\n        <div *ngIf=\"!farenheit && temperatureCelsius\">{{ temperatureCelsius }}<span> °C</span></div>\n        <div>{{ weatherDescription }}</div>\n    </div>\n    <div class=\"weather-icon\">\n        <img class=\"icon\" src=\"{{ weatherIcon }}\">\n    </div>\n</div>"

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
        this.locationName = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
    }
    WeatherComponent.prototype.ngOnChanges = function (changes) {
        if (this.location && changes.location) {
            this.lat = this.location.lat;
            this.lng = this.location.lng;
            this.callApi(this.lat, this.lng);
        }
    };
    WeatherComponent.prototype.callApi = function (lat, lng) {
        var _this = this;
        this.http.get("https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lng)
            .subscribe(function (resp) {
            if (!resp['error']) {
                var apiSuccess = resp;
                _this.resolveApiSuccess(apiSuccess);
            }
        }, function (err) {
            console.log('Something went wrong!', err);
        });
    };
    WeatherComponent.prototype.resolveApiSuccess = function (data) {
        if (data) {
            this.locationName.emit(data.name);
            this.weatherDescription = data.weather[0].main;
            this.temperatureCelsius = Math.round(data.main.temp);
            this.temperatureFarenheit = this.fromCelsiusToFarenheit(this.temperatureCelsius);
            this.weatherIcon = data.weather[0].icon;
        }
    };
    WeatherComponent.prototype.fromCelsiusToFarenheit = function (celsius) {
        var farenheit = Math.round(celsius * 1.8 + 32);
        return farenheit;
    };
    return WeatherComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Object)
], WeatherComponent.prototype, "location", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Boolean)
], WeatherComponent.prototype, "farenheit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Output */])(),
    __metadata("design:type", Object)
], WeatherComponent.prototype, "locationName", void 0);
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