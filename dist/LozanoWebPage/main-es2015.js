(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./right-tab/right-tab.component */ "./src/app/right-tab/right-tab.component.ts");





const routes = [
    { path: '', component: _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_2__["RightTabComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                onSameUrlNavigation: "reload",
                anchorScrolling: 'enabled',
                scrollPositionRestoration: 'enabled'
            })
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        onSameUrlNavigation: "reload",
                        anchorScrolling: 'enabled',
                        scrollPositionRestoration: 'enabled'
                    })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./left-tab/left-tab.component */ "./src/app/left-tab/left-tab.component.ts");
/* harmony import */ var _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./right-tab/right-tab.component */ "./src/app/right-tab/right-tab.component.ts");
/* harmony import */ var _speed_dial_fab_speed_dial_fab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./speed-dial-fab/speed-dial-fab.component */ "./src/app/speed-dial-fab/speed-dial-fab.component.ts");





class AppComponent {
    constructor() {
        this.title = 'LozanoWebPage';
        this.FabOptions = {
            buttons: [
                {
                    icon: 'settings',
                    link: "contacto"
                },
                {
                    icon: 'contact_phone',
                    link: "contacto"
                },
                {
                    icon: 'business_center',
                    link: "experiencia"
                },
                {
                    icon: 'emoji_events',
                    link: "reconocimientos"
                },
                {
                    icon: 'desktop_mac',
                    link: "habilidades"
                },
                {
                    icon: 'school',
                    link: "educacion"
                },
                {
                    icon: 'person',
                    link: "sobre"
                },
                {
                    icon: 'home',
                    link: "inicio"
                }
            ]
        };
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [[1, "fab-button", 3, "options"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-left-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-right-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-speed-dial-fab", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.FabOptions);
    } }, directives: [_left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_1__["LeftTabComponent"], _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_2__["RightTabComponent"], _speed_dial_fab_speed_dial_fab_component__WEBPACK_IMPORTED_MODULE_3__["SpeedDialFabComponent"]], styles: [".fab-button[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n@media only screen and (max-width: 600px) {\n  .fab-button[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpb2xvemFub2NvcnRlcy9Vbml2ZXJzaWRhZCBMb2NhbC9Mb3phbm9XZWJQYWdlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FER0E7Ozs7d0NBQUE7O0FBTUE7RUFDSTtJQUNJLGFBQUE7RUNETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhYi1idXR0b257XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgTU9CSUxFIFZJRVdcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XG4gICAgLmZhYi1idXR0b257XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxufSIsIi5mYWItYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIE1PQklMRSBWSUVXXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5mYWItYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./left-tab/left-tab.component */ "./src/app/left-tab/left-tab.component.ts");
/* harmony import */ var _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./right-tab/right-tab.component */ "./src/app/right-tab/right-tab.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tab-header/tab-header.component */ "./src/app/tab-header/tab-header.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/timeline/timeline.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _speed_dial_fab_speed_dial_fab_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./speed-dial-fab/speed-dial-fab.component */ "./src/app/speed-dial-fab/speed-dial-fab.component.ts");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_12__["TabHeaderComponent"], _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_6__["RightTabComponent"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_5__["LeftTabComponent"],
        _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_6__["RightTabComponent"],
        _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_12__["TabHeaderComponent"],
        _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_13__["TimelineComponent"],
        _speed_dial_fab_speed_dial_fab_component__WEBPACK_IMPORTED_MODULE_15__["SpeedDialFabComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_5__["LeftTabComponent"],
                    _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_6__["RightTabComponent"],
                    _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_12__["TabHeaderComponent"],
                    _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_13__["TimelineComponent"],
                    _speed_dial_fab_speed_dial_fab_component__WEBPACK_IMPORTED_MODULE_15__["SpeedDialFabComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"]
                ],
                providers: [_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_12__["TabHeaderComponent"], _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_6__["RightTabComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/left-tab/left-tab.component.ts":
/*!************************************************!*\
  !*** ./src/app/left-tab/left-tab.component.ts ***!
  \************************************************/
/*! exports provided: LeftTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftTabComponent", function() { return LeftTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globals */ "./src/globals.ts");
/* harmony import */ var _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab-header/tab-header.component */ "./src/app/tab-header/tab-header.component.ts");
/* harmony import */ var _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../right-tab/right-tab.component */ "./src/app/right-tab/right-tab.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

 //Global variables








const _c0 = function () { return [""]; };
class LeftTabComponent {
    constructor(tabHeader, rightTab) {
        this.tabHeader = tabHeader;
        this.rightTab = rightTab;
        this.isCheckedDark = true;
        this.isChecked2 = false;
        //Importing the globals variables
        this.name = _globals__WEBPACK_IMPORTED_MODULE_1__["name"];
        this.job = _globals__WEBPACK_IMPORTED_MODULE_1__["job"];
    }
    ngOnInit() {
    }
    openNav() {
        document.getElementById("myNav").style.width = "100%";
    }
    closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }
    toDark() {
        if (this.isCheckedDark == true) { //Dark
            //We change the right tab, the headers and the left tab
            console.log("Dark mode.....");
            this.rightTab.darkModeRight();
            this.tabHeader.toDark();
            document.getElementById("main-tab").style.backgroundColor = "#151C21";
        }
        else { //Light
            //We change the right tab, the headers and the left tab
            console.log("Light mode.....");
            this.tabHeader.toLight();
            this.rightTab.lightModeRight();
            document.getElementById("main-tab").style.backgroundColor = "#3248F4";
        }
    }
    language() {
    }
}
LeftTabComponent.ɵfac = function LeftTabComponent_Factory(t) { return new (t || LeftTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_2__["TabHeaderComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_3__["RightTabComponent"])); };
LeftTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeftTabComponent, selectors: [["app-left-tab"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_2__["TabHeaderComponent"], _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_3__["RightTabComponent"]])], decls: 70, vars: 18, consts: [["id", "main-tab", 1, "main-tab"], [1, "face-image"], ["src", "../../assets/images/cara-hombre-sonriendo.jpg", 1, "profile-picture"], [1, "name"], [1, "name-font"], [1, "job"], [1, "page-links"], ["fragment", "inicio", 3, "routerLink"], [1, "category"], ["src", "../../assets/icons/home.png", 1, "icon"], ["fragment", "sobre", 3, "routerLink"], ["src", "../../assets/icons/user-1.png", 1, "icon"], ["fragment", "educacion", 3, "routerLink"], ["src", "../../assets/icons/atomic.png", 1, "icon"], ["fragment", "habilidades", 3, "routerLink"], ["src", "../../assets/icons/monitor.png", 1, "icon"], ["fragment", "reconocimientos", 3, "routerLink"], ["src", "../../assets/icons/trophy.png", 1, "icon"], ["fragment", "experiencia", 3, "routerLink"], ["src", "../../assets/icons/layers.png", 1, "icon"], ["fragment", "contacto", 3, "routerLink"], ["src", "../../assets/icons/chat.png", 1, "icon"], [3, "click"], ["src", "../../assets/icons/settings.png", 1, "icon"], [1, "social-media"], ["src", "../../assets/icons/github.png", 1, "social-icon"], ["src", "../../assets/icons/linkedin.png", 1, "social-icon"], ["src", "../../assets/icons/youtube.png", 1, "social-icon"], ["src", "../../assets/icons/email.png", 1, "social-icon"], ["id", "myNav", 1, "overlay"], ["href", "javascript:void(0)", 1, "closebtn", 3, "click"], [1, "overlay-content"], [1, "title_settings"], ["src", "../../assets/icons/moon.png", 1, "selector"], [1, "aux-container"], [1, "aux-top", 3, "click"], [3, "ngModel", "ngModelChange"], [1, "aux-bottom"], ["src", "../../assets/icons/sun.png", 1, "selector"], [1, "aux"], ["src", "../../assets/icons/spain.png", 1, "flags"], ["src", "../../assets/icons/uk.png", 1, "flags"]], template: function LeftTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sobre mi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Educaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Habilidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Reconocimientos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Experiencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftTabComponent_Template_a_click_38_listener() { return ctx.openNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Ajustes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftTabComponent_Template_a_click_48_listener() { return ctx.closeNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftTabComponent_Template_div_click_56_listener() { return ctx.toDark(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-slide-toggle", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LeftTabComponent_Template_mat_slide_toggle_ngModelChange_57_listener($event) { return ctx.isCheckedDark = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftTabComponent_Template_div_click_65_listener() { return ctx.language(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-slide-toggle", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LeftTabComponent_Template_mat_slide_toggle_ngModelChange_66_listener($event) { return ctx.isChecked2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.job);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isCheckedDark);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isChecked2);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: [".main-tab[_ngcontent-%COMP%] {\n  width: 20%;\n  height: 90%;\n  margin: 5%;\n  margin-top: 3%;\n  background-color: #3248f4;\n  border-radius: 22px;\n  color: white;\n  display: inline-block;\n  position: fixed;\n}\n\nspan[_ngcontent-%COMP%] {\n  vertical-align: text-top;\n}\n\na[_ngcontent-%COMP%] {\n  color: white;\n  vertical-align: text-top;\n  font-size: large;\n  text-decoration: none;\n}\n\n.face-image[_ngcontent-%COMP%] {\n  height: 20%;\n}\n\n.profile-picture[_ngcontent-%COMP%] {\n  height: 6em;\n  width: 6em;\n  border-radius: 100%;\n  margin: 10%;\n  border: 0.2em solid white;\n}\n\n.name[_ngcontent-%COMP%] {\n  height: 13%;\n}\n\n.name-font[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: x-large;\n  margin-left: 10%;\n  margin-top: 5%;\n}\n\n.job[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  margin-left: 10%;\n  font-size: large;\n}\n\n.page-links[_ngcontent-%COMP%] {\n  height: 52%;\n}\n\n.category[_ngcontent-%COMP%] {\n  font-size: large;\n  margin-top: 3.5%;\n  cursor: pointer;\n  transition-duration: 0.5s;\n}\n\n.category[_ngcontent-%COMP%]:hover {\n  \n  \n  transform: scale(1.15);\n}\n\n.icon[_ngcontent-%COMP%] {\n  height: 1.4em;\n  width: 1.4em;\n  margin-left: 10%;\n  margin-right: 5%;\n}\n\n.social-media[_ngcontent-%COMP%] {\n  height: 15%;\n  text-align: center;\n}\n\n.social-icon[_ngcontent-%COMP%] {\n  height: 2em;\n  width: 2em;\n  margin: 5%;\n  cursor: pointer;\n  transition-duration: 1.5s;\n}\n\n.social-icon[_ngcontent-%COMP%]:hover {\n  \n  \n  transform: rotate(360deg) scale(1.4);\n  \n}\n\n.overlay[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 30, 227, 0.92);\n  overflow-x: hidden;\n  transition: 0.5s;\n}\n\n.overlay-content[_ngcontent-%COMP%] {\n  position: relative;\n  top: 25%;\n  width: 100%;\n  text-align: center;\n  margin-top: 30px;\n}\n\n.overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 8px;\n  text-decoration: none;\n  font-size: 36px;\n  color: #818181;\n  display: block;\n  transition: 0.3s;\n}\n\n.overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  color: #f1f1f1;\n}\n\n.overlay[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 45px;\n  font-size: 60px;\n}\n\n.title_settings[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-weight: bold;\n  color: white;\n  inline-size: block;\n  line-height: 1em;\n}\n\nmat-slide-toggle[_ngcontent-%COMP%] {\n  margin-top: 250%;\n}\n\n.selector[_ngcontent-%COMP%] {\n  height: 60px;\n  margin: 0 5%;\n}\n\n.flags[_ngcontent-%COMP%] {\n  height: 60px;\n  margin: 0 5%;\n}\n\n.aux[_ngcontent-%COMP%] {\n  height: auto;\n  vertical-align: bottom;\n}\n\n.aux-top[_ngcontent-%COMP%] {\n  height: 50%;\n}\n\n.aux-bottom[_ngcontent-%COMP%] {\n  height: 50%;\n  color: rgba(0, 30, 227, 0);\n}\n\n.aux-container[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n\n\n@media only screen and (max-width: 600px) {\n  .main-tab[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .overlay[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n    font-size: 40px;\n    top: 15px;\n    right: 35px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpb2xvemFub2NvcnRlcy9Vbml2ZXJzaWRhZCBMb2NhbC9Mb3phbm9XZWJQYWdlL3NyYy9hcHAvbGVmdC10YWIvbGVmdC10YWIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xlZnQtdGFiL2xlZnQtdGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSx3QkFBQTtBQ0FKOztBREtBO0VBQ0ksWUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0ZKOztBRE1BO0VBQ0ksV0FBQTtBQ0hKOztBRE1BO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0hKOztBRE9BO0VBQ0ksV0FBQTtBQ0pKOztBRE9BO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0pKOztBRE9BO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSko7O0FEUUE7RUFDSSxXQUFBO0FDTEo7O0FEUUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUlBLHlCQUFBO0FDTEo7O0FEUUE7RUFDZ0MsU0FBQTtFQUNJLGVBQUE7RUFDaEMsc0JBQUE7QUNISjs7QURPQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0pKOztBRFFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDTEo7O0FEUUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBSUEseUJBQUE7QUNMSjs7QURRQTtFQUNtRCxtQ0FBQTtFQUNBLFNBQUE7RUFDL0Msb0NBQUE7RUFBK0MsK0JBQUE7QUNGbkQ7O0FES0E7RUFDSSxZQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURLRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRko7O0FES0U7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBREtFO0VBQ0UsY0FBQTtBQ0ZKOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNGSjs7QURLRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRko7O0FES0U7RUFDSSxnQkFBQTtBQ0ZOOztBREtFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNGSjs7QURLRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDRko7O0FES0U7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7QUNGSjs7QURLRTtFQUNFLFdBQUE7QUNGSjs7QURLRTtFQUNHLFdBQUE7RUFDQSwwQkFBQTtBQ0ZMOztBREtFO0VBQ0UscUJBQUE7QUNGSjs7QURNQTs7Ozt3Q0FBQTs7QUFNQTtFQUNJO0lBQ0ksYUFBQTtFQ0pOOztFRE1FO0lBQVksZUFBQTtFQ0ZkOztFREdFO0lBQ0EsZUFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xlZnQtdGFiL2xlZnQtdGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9MZWZ0IENvbnRhaW5lciBmb3IgbGlua3MgXG4ubWFpbi10YWJ7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBtYXJnaW46IDUlO1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgNzIsIDI0NCk7XG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuc3BhbntcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG59XG5cbi8vSW5kaXZpZHVhbCBwYXJ0cyBvZiB0aGUgbGVmdCB0YWJcblxuYXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vL1Byb2ZpbGUgcGljdHVyZVxuLmZhY2UtaW1hZ2V7XG4gICAgaGVpZ2h0OiAyMCU7XG59XG5cbi5wcm9maWxlLXBpY3R1cmV7XG4gICAgaGVpZ2h0OiA2ZW07XG4gICAgd2lkdGg6IDZlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIG1hcmdpbjogMTAlO1xuICAgIGJvcmRlcjogMC4yZW0gc29saWQgd2hpdGVcbn1cblxuLy9Kb2JzXG4ubmFtZXtcbiAgICBoZWlnaHQ6IDEzJTtcbn1cblxuLm5hbWUtZm9udHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmpvYntcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAgXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4vL0xpbmtzXG4ucGFnZS1saW5rc3tcbiAgICBoZWlnaHQ6IDUyJTtcbn1cblxuLmNhdGVnb3J5e1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgbWFyZ2luLXRvcDogMy41JTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAgIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG59XG5cbi5jYXRlZ29yeTpob3ZlcntcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTsgLyogSUUgOSAqL1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTsgLyogU2FmYXJpIDMtOCAqL1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7IFxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgLy9UcmFuc2l0aW9uIHRvIGFub3RoZXIgY29sb3Jcbn1cblxuLmljb257XG4gICAgaGVpZ2h0OiAxLjRlbTtcbiAgICB3aWR0aDogMS40ZW07XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuXG4vL1NvY2lhbCBtZWRpYSBsaW5rc1xuLnNvY2lhbC1tZWRpYXtcbiAgICBoZWlnaHQ6IDE1JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zb2NpYWwtaWNvbntcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICB3aWR0aDogMmVtO1xuICAgIG1hcmdpbjogNSU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMS41cztcbiAgICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogMS41cztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjVzO1xufVxuXG4uc29jaWFsLWljb246aG92ZXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtIDogcm90YXRlKDM2MGRlZykgc2NhbGUoMS40KTsgLyogQ2hyb21lLCBPcGVyYSAxNSssIFNhZmFyaSAzLjErICovXG4gICAgLW1zLXRyYW5zZm9ybSAgICAgOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjQpOyAvKiBJRSA5ICovXG4gICAgdHJhbnNmb3JtICAgICAgICAgOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjQpOyAvKiBGaXJlZm94IDE2KywgSUUgMTArLCBPcGVyYSAqL1xufVxuXG4ub3ZlcmxheSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMzAsIDIyNywgMC45Mik7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH1cbiAgXG4gIC5vdmVybGF5LWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDI1JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxuICBcbiAgLm92ZXJsYXkgYSB7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgY29sb3I6ICM4MTgxODE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgfVxuICBcbiAgLm92ZXJsYXkgYTpob3ZlciwgLm92ZXJsYXkgYTpmb2N1cyB7XG4gICAgY29sb3I6ICNmMWYxZjE7XG4gIH1cbiAgXG4gIC5vdmVybGF5IC5jbG9zZWJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICByaWdodDogNDVweDtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gIH1cblxuICAudGl0bGVfc2V0dGluZ3N7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBpbmxpbmUtc2l6ZTogYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgfVxuXG4gIG1hdC1zbGlkZS10b2dnbGV7XG4gICAgICBtYXJnaW4tdG9wOiAyNTAlO1xuICB9XG5cbiAgLnNlbGVjdG9ye1xuICAgIGhlaWdodDogNjBweDtcbiAgICBtYXJnaW46IDAgNSU7XG4gIH1cblxuICAuZmxhZ3N7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbjogMCA1JTtcbiAgfVxuXG4gIC5hdXh7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIH1cblxuICAuYXV4LXRvcHtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgfVxuXG4gIC5hdXgtYm90dG9te1xuICAgICBoZWlnaHQ6IDUwJTsgXG4gICAgIGNvbG9yOiByZ2JhKDAsIDMwLCAyMjcsIDApO1xufVxuXG4gIC5hdXgtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gIFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIE1PQklMRSBWSUVXXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xuICAgIC5tYWluLXRhYntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLm92ZXJsYXkgYSB7Zm9udC1zaXplOiAyMHB4fVxuICAgIC5vdmVybGF5IC5jbG9zZWJ0biB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIHRvcDogMTVweDtcbiAgICByaWdodDogMzVweDtcbiAgICB9XG59XG4iLCIubWFpbi10YWIge1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgbWFyZ2luOiA1JTtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjQ4ZjQ7XG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbnNwYW4ge1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG59XG5cbmEge1xuICBjb2xvcjogd2hpdGU7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZmFjZS1pbWFnZSB7XG4gIGhlaWdodDogMjAlO1xufVxuXG4ucHJvZmlsZS1waWN0dXJlIHtcbiAgaGVpZ2h0OiA2ZW07XG4gIHdpZHRoOiA2ZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG1hcmdpbjogMTAlO1xuICBib3JkZXI6IDAuMmVtIHNvbGlkIHdoaXRlO1xufVxuXG4ubmFtZSB7XG4gIGhlaWdodDogMTMlO1xufVxuXG4ubmFtZS1mb250IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5qb2Ige1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4ucGFnZS1saW5rcyB7XG4gIGhlaWdodDogNTIlO1xufVxuXG4uY2F0ZWdvcnkge1xuICBmb250LXNpemU6IGxhcmdlO1xuICBtYXJnaW4tdG9wOiAzLjUlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xufVxuXG4uY2F0ZWdvcnk6aG92ZXIge1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLyogSUUgOSAqL1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC8qIFNhZmFyaSAzLTggKi9cbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbn1cblxuLmljb24ge1xuICBoZWlnaHQ6IDEuNGVtO1xuICB3aWR0aDogMS40ZW07XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG59XG5cbi5zb2NpYWwtbWVkaWEge1xuICBoZWlnaHQ6IDE1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc29jaWFsLWljb24ge1xuICBoZWlnaHQ6IDJlbTtcbiAgd2lkdGg6IDJlbTtcbiAgbWFyZ2luOiA1JTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDEuNXM7XG4gIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogMS41cztcbiAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogMS41cztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS41cztcbn1cblxuLnNvY2lhbC1pY29uOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuNCk7XG4gIC8qIENocm9tZSwgT3BlcmEgMTUrLCBTYWZhcmkgMy4xKyAqL1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjQpO1xuICAvKiBJRSA5ICovXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS40KTtcbiAgLyogRmlyZWZveCAxNissIElFIDEwKywgT3BlcmEgKi9cbn1cblxuLm92ZXJsYXkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAzMCwgMjI3LCAwLjkyKTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4ub3ZlcmxheS1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDI1JTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLm92ZXJsYXkgYSB7XG4gIHBhZGRpbmc6IDhweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiAjODE4MTgxO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLm92ZXJsYXkgYTpob3ZlciwgLm92ZXJsYXkgYTpmb2N1cyB7XG4gIGNvbG9yOiAjZjFmMWYxO1xufVxuXG4ub3ZlcmxheSAuY2xvc2VidG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDQ1cHg7XG4gIGZvbnQtc2l6ZTogNjBweDtcbn1cblxuLnRpdGxlX3NldHRpbmdzIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBpbmxpbmUtc2l6ZTogYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG59XG5cbm1hdC1zbGlkZS10b2dnbGUge1xuICBtYXJnaW4tdG9wOiAyNTAlO1xufVxuXG4uc2VsZWN0b3Ige1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogMCA1JTtcbn1cblxuLmZsYWdzIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IDAgNSU7XG59XG5cbi5hdXgge1xuICBoZWlnaHQ6IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG5cbi5hdXgtdG9wIHtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbi5hdXgtYm90dG9tIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIGNvbG9yOiByZ2JhKDAsIDMwLCAyMjcsIDApO1xufVxuXG4uYXV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIE1PQklMRSBWSUVXXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tYWluLXRhYiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5vdmVybGF5IGEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gIC5vdmVybGF5IC5jbG9zZWJ0biB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIHRvcDogMTVweDtcbiAgICByaWdodDogMzVweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-left-tab',
                templateUrl: './left-tab.component.html',
                providers: [_tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_2__["TabHeaderComponent"], _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_3__["RightTabComponent"]],
                styleUrls: ['./left-tab.component.scss']
            }]
    }], function () { return [{ type: _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_2__["TabHeaderComponent"] }, { type: _right_tab_right_tab_component__WEBPACK_IMPORTED_MODULE_3__["RightTabComponent"] }]; }, null); })();


/***/ }),

/***/ "./src/app/right-tab/right-tab.component.ts":
/*!**************************************************!*\
  !*** ./src/app/right-tab/right-tab.component.ts ***!
  \**************************************************/
/*! exports provided: RightTabComponent, DialogContentExampleDialog, DialogContentExampleDialog2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightTabComponent", function() { return RightTabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContentExampleDialog", function() { return DialogContentExampleDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContentExampleDialog2", function() { return DialogContentExampleDialog2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globals */ "./src/globals.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tab-header/tab-header.component */ "./src/app/tab-header/tab-header.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../timeline/timeline.component */ "./src/app/timeline/timeline.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

 //Global variables












function RightTabComponent_mat_error_264_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RightTabComponent_mat_error_265_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RightTabComponent_mat_error_283_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RightTabComponent_mat_error_284_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [""]; };
class RightTabComponent {
    constructor(dialog, renderer) {
        this.dialog = dialog;
        this.renderer = renderer;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
        this.name = _globals__WEBPACK_IMPORTED_MODULE_1__["name"];
        this.job = _globals__WEBPACK_IMPORTED_MODULE_1__["job"];
        this.description = _globals__WEBPACK_IMPORTED_MODULE_1__["description"];
        this.about_description = _globals__WEBPACK_IMPORTED_MODULE_1__["about_description"];
        //Binding variables
        this.about = "Sobre mi";
        this.education = "Educación";
        this.skills = "Habilidades";
        this.rewards = "Reconocimientos";
        this.experience = "Experiencia";
        this.contact = "Contacto";
        this.main_skills = "Principales habilidades";
    }
    //Function to open the popup
    openDialog(variable) {
        const dialogRef = null;
        if (variable == 1) {
            const dialogRef = this.dialog.open(DialogContentExampleDialog);
        }
        else if (variable == 2) {
            const dialogRef = this.dialog.open(DialogContentExampleDialog2);
        }
        else {
            alert("Popup not found");
        }
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
    //Functions that implements the dark mode on this
    darkModeRight() {
        // Change background
        this.renderer.setStyle(document.body, 'background-color', "#000000");
        // Change text
        document.getElementById("container").style.color = "white";
        //Change inicio
        document.getElementById("inicio").style.backgroundColor = "#151C21";
        //Change sobre
        document.getElementById("sobre").style.backgroundColor = "#151C21";
        //Change educacion
        document.getElementById("educacion").style.backgroundColor = "#151C21";
        //Change habilidades1
        document.getElementById("habilidades1").style.backgroundColor = "#151C21";
        //Change habilidades
        document.getElementById("habilidades").style.backgroundColor = "#151C21";
        var skill = document.getElementsByClassName("skill-set");
        for (var i = 0, len = skill.length; i < len; i++) {
            skill[i].style.backgroundColor = "black";
            skill[i].style.color = "white";
        }
        //Change reconocimientos
        document.getElementById("reconocimientos").style.backgroundColor = "#151C21";
        var rewards = document.getElementsByClassName("front");
        for (var i = 0, len = rewards.length; i < len; i++) {
            rewards[i].style.backgroundColor = "black";
            rewards[i].style.color = "white";
        }
        var rewards = document.getElementsByClassName("back");
        for (var i = 0, len = rewards.length; i < len; i++) {
            rewards[i].style.backgroundColor = "black";
            rewards[i].style.color = "white";
        }
        //Change experiencia
        document.getElementById("experiencia").style.backgroundColor = "#151C21";
        //Change contacto
        document.getElementById("contacto").style.backgroundColor = "#151C21";
        document.getElementById("light-form").style.display = "none";
        document.getElementById("dark-form").style.display = "block";
        //document.getElementById("mat-form-field").style.backgroundColor = "white";
        //Change left-tab
        //this.leftTab.toDark();
        //this.tabHeader.toDark();
    }
    lightModeRight() {
        // Change background
        this.renderer.setStyle(document.body, 'background-color', "#F3F6FF");
        // Change text
        document.getElementById("container").style.color = "black";
        //Change inicio
        document.getElementById("inicio").style.backgroundColor = "#3248F4";
        //Change sobre
        document.getElementById("sobre").style.backgroundColor = "white";
        //Change educacion
        document.getElementById("educacion").style.backgroundColor = "white";
        //Change habilidades1
        document.getElementById("habilidades1").style.backgroundColor = "#3248F4";
        //Change habilidades
        document.getElementById("habilidades").style.backgroundColor = "white";
        var skill = document.getElementsByClassName("skill-set");
        for (var i = 0, len = skill.length; i < len; i++) {
            skill[i].style.backgroundColor = "white";
            skill[i].style.color = "black";
        }
        //Change reconocimientos
        document.getElementById("reconocimientos").style.backgroundColor = "white";
        var rewards = document.getElementsByClassName("front");
        for (var i = 0, len = rewards.length; i < len; i++) {
            rewards[i].style.backgroundColor = "white";
            rewards[i].style.color = "black";
        }
        var rewards = document.getElementsByClassName("back");
        for (var i = 0, len = rewards.length; i < len; i++) {
            rewards[i].style.backgroundColor = "white";
            rewards[i].style.color = "black";
        }
        //Change experiencia
        document.getElementById("experiencia").style.backgroundColor = "white";
        //Change contacto
        document.getElementById("contacto").style.backgroundColor = "white";
        document.getElementById("light-form").style.display = "block";
        document.getElementById("dark-form").style.display = "none";
    }
    ngOnInit() {
    }
}
RightTabComponent.ɵfac = function RightTabComponent_Factory(t) { return new (t || RightTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
RightTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RightTabComponent, selectors: [["app-right-tab"]], decls: 300, vars: 31, consts: [["id", "container", 1, "container"], ["id", "inicio", 1, "home"], [1, "container_name"], [1, "name"], [1, "description"], [1, "buttons"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://es.wikipedia.org/wiki/Espa%C3%B1a"], ["mat-raised-button", "", "color", "warn", 1, "button", 2, "margin-right", "20%", "margin-bottom", "5%"], ["fragment", "sobre", 3, "routerLink"], ["mat-raised-button", "", 1, "button"], ["id", "sobre", 1, "about-me"], [3, "parentData"], [1, "about-photo"], ["src", "../../assets/images/cara-hombre-sonriendo.jpg", 1, "profile-picture"], [1, "about-text"], [1, "about-hello"], [1, "about-description"], [1, "about-data"], [1, "about-data-left"], [2, "color", "rgb(68, 68, 68)"], [1, "about-data-right"], [1, "about-buttons"], ["target", "_blank", "href", "../../assets/Documents/Espa\u00F1a.pdf"], ["mat-raised-button", "", "color", "warn", 1, "button", 2, "margin-right", "20%"], ["fragment", "contacto", 3, "routerLink"], ["mat-raised-button", "", "color", "primary", 1, "button"], ["id", "educacion", 1, "time"], ["id", "habilidades1", 1, "main-skills"], [1, "main-skill"], ["src", "../../assets/icons/python.png", 1, "skill-picture"], [1, "text-skill"], ["src", "../../assets/icons/ai.png", 1, "skill-picture"], ["src", "../../assets/icons/social.png", 1, "skill-picture"], ["src", "../../assets/icons/linux.png", 1, "skill-picture"], ["id", "habilidades", 1, "skills"], [1, "skill-set", "first"], [1, "skill-title"], [1, "skill-title-column"], [1, "skill-set"], ["src", "../../assets/icons/uk.png", 1, "flag"], [1, "flag-title"], ["src", "../../assets/icons/spain.png", 1, "flag", "last"], ["id", "reconocimientos"], [1, "card", "first_card"], [1, "front"], [1, "left-card"], [1, "description-card"], [1, "right-card"], ["src", "../../assets/icons/medalla.png", 1, "reward"], [1, "back"], [1, "back-card"], [1, "card"], ["id", "experiencia", 1, "experience"], [1, "post-experience", "left-post"], ["src", "../../assets/images/t3f_icon_deg.png", 1, "post-picture", 3, "click"], [1, "text-post"], [1, "post-experience", "right-post"], ["src", "../../assets/images/uc3m.png", 1, "post-picture", 3, "click"], ["id", "contacto", 1, "about-me", "last"], [1, "contact-left"], [1, "contact-mini"], [1, "contact-mini-left"], ["target", "_blank", "rel", "noopener noreferrer", "href", "mailto:mario.lozanocortes@gmail.com"], ["src", "../../assets/icons/correo.png", 1, "contact-icon"], [1, "contact-mini-right"], [1, "section"], [1, "section__item"], ["target", "_blank", "rel", "noopener noreferrer", "href", "mailto:mario.lozanocortes@gmail.com", 1, "sm-link", "sm-link_padding-bottom", "sm-link3"], [1, "sm-link__label"], ["src", "../../assets/icons/linkedin (azul).png", 1, "contact-icon"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://es.wikipedia.org/wiki/Espa%C3%B1a", 1, "sm-link", "sm-link_padding-bottom", "sm-link3"], ["src", "../../assets/icons/alfiler.png", 1, "contact-icon"], [1, "contact-right"], ["id", "light-form", 1, "contact-form"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "placeholder", "Ex. pat@example.com", "name", "email", 3, "formControl", "ngModel", "ngModelChange"], [4, "ngIf"], ["matInput", "", "placeholder", "Ex. Carolina, Mateo", "value", "", "name", "name_email", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Ex. Propuesta de empleo", "value", "", "name", "subject", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Ex. Hola, me gustar\u00EDa conocer...", "name", "text", "rows", "3", 3, "ngModel", "ngModelChange"], ["id", "dark-form", 1, "contact-form"], [1, "example-full-width"], [3, "href"], ["mat-raised-button", "", "color", "warn", 2, "float", "right", "margin-right", "8%", "margin-top", "5%", "margin-bottom", "10%"]], template: function RightTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ver GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Conoce m\u00E1s sobre m\u00ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-tab-header", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Hola, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Nombre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Blas de Lezo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Cumplea\u00F1os:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " 3-February-1689 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Localizaci\u00F3n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Vizcaya ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " blas@marina.espa\u00F1a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Descarga mi CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Contratame");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "app-tab-header", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "app-timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Python ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Artificial Intelligence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Teamwork");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Linux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "app-tab-header", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-expansion-panel", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Technical skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Destacados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "HTML/CSS/JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Especializaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Inteligencia Artificial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Computaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Ingenier\u00EDa del software");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Lenguajes y frameworks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "C++");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "jQuery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Bash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Assembly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Herramientas y sistemas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Linux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Git");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "MacOs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "mat-expansion-panel", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Soft skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Trabajo en equipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Resiliencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Organizaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "mat-expansion-panel", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Idiomas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h2", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " Ingl\u00E9s, B2 - First");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h2", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Espa\u00F1ol, Nativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "app-tab-header", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Beca de Excelencia Universitaria de la Comunidad de Madrid. A\u00F1o 2019-2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Beca que busca el fomento de la excelencia en educaci\u00F3n reconociendo y premiando el esfuerzo y el talento de los mejores estudiantes universitarios de la Comunidad de Madrid.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Beca de Excelencia Universitaria de la Comunidad de Madrid. A\u00F1o 2018-2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Beca que busca el fomento de la excelencia en educaci\u00F3n reconociendo y premiando el esfuerzo y el talento de los mejores estudiantes universitarios de la Comunidad de Madrid.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "100 Mejores notas de la Prueba de Acceso a la Universidad. UC3M. 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Excelente resultado obtenido en la Evaluaci\u00F3n para el Acceso a la Universidad de junio 2017, estando mi calificaci\u00F3n final entre las 100 mejores de los 3.958 examinados en esta convocatoria en la Universidad Carlos III de Madrid.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Bachillerato con Honores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Media de 10/10 en la etapa de Bachillerato.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Participante del proceso de selecci\u00F3n de Becas Europa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Iniciativa \u00FAnica promovida por el Banco Santander y la Universidad Francisco de Vitoria para potenciar el talento, premiar la excelencia y apoyar la creaci\u00F3n de redes de liderazgo cuyo objetivo es premiar y potenciar el talento de los mejores alumnos preuniversitarios de Espa\u00F1a.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "app-tab-header", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RightTabComponent_Template_img_click_212_listener() { return ctx.openDialog(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Voluntario evento tecnol\u00F3gico T3chfest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RightTabComponent_Template_img_click_216_listener() { return ctx.openDialog(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Profesor particular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "app-tab-header", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "lozanocortes@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Mi LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Ubicaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Madrid, Espa\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "form", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "mat-form-field", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Tu email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_263_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](264, RightTabComponent_mat_error_264_Template, 2, 0, "mat-error", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](265, RightTabComponent_mat_error_265_Template, 4, 0, "mat-error", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "mat-form-field", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_269_listener($event) { return ctx.name_email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "mat-form-field", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Asunto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_273_listener($event) { return ctx.subject = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "mat-form-field", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Tu mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "textarea", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_textarea_ngModelChange_277_listener($event) { return ctx.text = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "form", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "mat-form-field", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Tu email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_282_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](283, RightTabComponent_mat_error_283_Template, 2, 0, "mat-error", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](284, RightTabComponent_mat_error_284_Template, 4, 0, "mat-error", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "mat-form-field", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_288_listener($event) { return ctx.name_email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "mat-form-field", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Asunto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_input_ngModelChange_292_listener($event) { return ctx.subject = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "mat-form-field", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Tu mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "textarea", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightTabComponent_Template_textarea_ngModelChange_296_listener($event) { return ctx.text = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "a", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "button", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Soy ", ctx.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentData", ctx.about);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.about_description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentData", ctx.education);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentData", ctx.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentData", ctx.rewards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentData", ctx.experience);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentData", ctx.contact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.emailFormControl)("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name_email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.emailFormControl)("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name_email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate4"]("href", "mailto:mario.lozanocortes@gmail.com?Subject=", ctx.subject, "&body=Hola%20", ctx.name, ",%20soy%20", ctx.name_email, ".%0A%0A%20%20%20", ctx.text, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _tab_header_tab_header_component__WEBPACK_IMPORTED_MODULE_6__["TabHeaderComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__["TimelineComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Bangers\");\n.container[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 65%;\n  margin-top: 3%;\n  margin-right: 5%;\n  height: 100%;\n  vertical-align: top;\n  margin-left: 30%;\n}\n.home[_ngcontent-%COMP%] {\n  background-color: #3248f4;\n  height: 90%;\n  border-radius: 22px;\n  color: white;\n  position: relative;\n}\n.container_name[_ngcontent-%COMP%] {\n  height: 72%;\n  position: relative;\n}\n.name[_ngcontent-%COMP%] {\n  font-size: 4.5em;\n  line-height: 1em;\n  position: absolute;\n  bottom: 40%;\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-bottom: 1%;\n  font-weight: bold;\n}\n.description[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10%;\n  margin-left: 10%;\n  margin-right: 10%;\n  text-align: justify;\n  line-height: 1.5em;\n  font-size: 1.1em;\n}\n.button[_ngcontent-%COMP%] {\n  padding-left: 3%;\n  padding-right: 3%;\n}\n.buttons[_ngcontent-%COMP%] {\n  margin-left: 10%;\n  margin-right: 10%;\n}\n.about-me[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 70%;\n  border-radius: 22px;\n  margin-top: 5%;\n}\n.about-photo[_ngcontent-%COMP%] {\n  width: 35%;\n  height: 70%;\n  display: inline-block;\n}\n.profile-picture[_ngcontent-%COMP%] {\n  height: 12em;\n  width: 12em;\n  border-radius: 100%;\n  margin: 19%;\n  margin-top: 7%;\n  border: 0.2em solid white;\n}\n.about-text[_ngcontent-%COMP%] {\n  width: 60%;\n  margin-right: 5%;\n  height: 70%;\n  display: inline-block;\n  vertical-align: top;\n}\n.about-hello[_ngcontent-%COMP%] {\n  margin-top: 7%;\n  font-size: 3em;\n  font-weight: bold;\n  height: 13%;\n}\n.about-description[_ngcontent-%COMP%] {\n  height: 30%;\n  color: #969696;\n  text-align: justify;\n}\n.about-data[_ngcontent-%COMP%] {\n  height: 20%;\n  color: #969696;\n}\n.about-data-left[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n}\n.about-data-right[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n}\n.about-buttons[_ngcontent-%COMP%] {\n  height: 30%;\n}\n.last[_ngcontent-%COMP%] {\n  margin-bottom: 3%;\n}\n.first[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n.time[_ngcontent-%COMP%] {\n  background-color: white;\n  height: auto;\n  border-radius: 22px;\n  margin-top: 5%;\n  font-size: 1em;\n}\n.skills[_ngcontent-%COMP%] {\n  background-color: white;\n  height: auto;\n  border-radius: 22px;\n  margin-top: 5%;\n  font-size: 1.1em;\n  line-height: 1.5em;\n  padding-bottom: 5%;\n}\n.skill-set[_ngcontent-%COMP%] {\n  margin-left: 7%;\n  margin-right: 5%;\n}\n.skill-title[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: bold;\n  color: #3248f4;\n}\n.skill-title-column[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 49%;\n  margin-top: 2%;\n  vertical-align: top;\n}\n.flag[_ngcontent-%COMP%] {\n  width: 7%;\n}\n.flag-title[_ngcontent-%COMP%] {\n  margin-top: 2%;\n}\n.skill-set[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n  padding-top: 1.7%;\n  padding-left: 2%;\n}\n.main-skills[_ngcontent-%COMP%] {\n  background-color: #3248f4;\n  height: auto;\n  border-radius: 22px;\n  margin-top: 5%;\n  font-size: 1.1em;\n  line-height: 1.5em;\n  color: white;\n}\n.main-skill[_ngcontent-%COMP%] {\n  width: 25%;\n  display: inline-block;\n  transition-duration: 1s;\n}\n.main-skill[_ngcontent-%COMP%]:hover {\n  \n  \n  transform: scale(1.15);\n}\n.main-skill[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n.text-skill[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n  font-size: large;\n  text-align: center;\n  padding-bottom: 7%;\n}\n.skill-picture[_ngcontent-%COMP%] {\n  height: 20%;\n  width: 25%;\n  padding-top: 20%;\n  padding-bottom: 13%;\n  cursor: pointer;\n}\n#reconocimientos[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 100%;\n  border-radius: 22px;\n  margin-top: 5%;\n}\n.description-card[_ngcontent-%COMP%] {\n  margin-left: 16px;\n  font-weight: bold;\n}\n.back-card[_ngcontent-%COMP%] {\n  margin-left: 10%;\n  margin-right: 10%;\n  font-style: italic;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  margin: 0;\n  box-sizing: border-box;\n}\n.reward[_ngcontent-%COMP%] {\n  width: 4em;\n}\n.card[_ngcontent-%COMP%] {\n  height: 12%;\n  width: 86%;\n  transform-style: preserve-3d;\n  position: relative;\n  transition: all 1s ease-in-out;\n  transition-duration: 1s;\n  cursor: pointer;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  margin-left: 7%;\n  color: black;\n  margin-bottom: 3%;\n}\n.front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  background-color: #fdfcfc;\n  height: 100%;\n  width: 100%;\n  border-radius: 1em;\n  border: black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform-style: preserve-3d;\n  color: black;\n  perspective: 1000px;\n  box-shadow: 2px 4px 8px 1px rgba(0, 0, 0, 0.4);\n}\n.left-card[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 90%;\n  font-size: large;\n}\n.right-card[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 10%;\n}\n.back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n.front[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], .back[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  transform: translateZ(120px);\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: rotateY(180deg);\n}\n.experience[_ngcontent-%COMP%] {\n  background-color: white;\n  height: auto;\n  border-radius: 22px;\n  margin-top: 5%;\n  font-size: 1.1em;\n  line-height: 1.5em;\n  padding-bottom: 2%;\n}\n.post-experience[_ngcontent-%COMP%] {\n  width: 30%;\n  margin-top: 5%;\n  display: inline-block;\n}\n.left-post[_ngcontent-%COMP%] {\n  margin-left: 13%;\n  margin-right: 7%;\n}\n.right-post[_ngcontent-%COMP%] {\n  margin-right: 20%;\n  vertical-align: top;\n}\n.post-picture[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  border-radius: 5%;\n  margin-bottom: 5%;\n  cursor: pointer;\n}\n.text-post[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: bold;\n  text-align: justify;\n}\n#contacto[_ngcontent-%COMP%] {\n  height: auto;\n}\n.contact-left[_ngcontent-%COMP%] {\n  width: 30%;\n  display: inline-block;\n  margin-left: 7%;\n  margin-top: 2%;\n  vertical-align: top;\n}\n.contact-mini[_ngcontent-%COMP%] {\n  height: 33%;\n  width: 100%;\n  padding-top: 10%;\n}\n.contact-mini-left[_ngcontent-%COMP%] {\n  width: 30%;\n  display: inline-block;\n}\n.contact-mini-right[_ngcontent-%COMP%] {\n  width: 70%;\n  display: inline-block;\n  padding-top: 4%;\n  vertical-align: top;\n}\n.contact-right[_ngcontent-%COMP%] {\n  width: 60%;\n  display: inline-block;\n}\n.contact-icon[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.link-contact[_ngcontent-%COMP%] {\n  line-height: 0.5;\n}\nh2[_ngcontent-%COMP%] {\n  line-height: 0;\n}\n#dark-form[_ngcontent-%COMP%] {\n  display: none;\n}\n  .mat-focused .mat-form-field-label {\n  \n  color: #3248f4 !important;\n}\n .mat-form-field-underline {\n  \n  background-color: #3248f4 !important;\n}\n .mat-form-field-ripple {\n  \n  background-color: #3248f4 !important;\n}\n.contact-form[_ngcontent-%COMP%] {\n  min-width: 100px;\n  max-width: 500px;\n  width: 100%;\n  margin-top: 5%;\n  margin-left: 2%;\n  margin-right: 1%;\n}\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.sm-link[_ngcontent-%COMP%] {\n  --uismLinkDisplay: var(--smLinkDisplay, inline-flex);\n  --uismLinkTextColor: var(--smLinkTextColor);\n  --uismLinkTextColorHover: var(--smLinkTextColorHover);\n  display: var(--uismLinkDisplay);\n  color: var(--uismLinkTextColor);\n  position: relative;\n  overflow: hidden;\n}\na.sm-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.sm-link__label[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.sm-link_padding-all[_ngcontent-%COMP%] {\n  --uismLinkLineWeight: var(--smLinkLineWeight, 2px);\n  --uismLinkLineColor: var(--smLinkLineColor, #000);\n  --uismLinkPadding: var(--smLinkPadding, 5px);\n  padding: var(--uismLinkPadding);\n}\n.sm-link_padding-all[_ngcontent-%COMP%]::before, .sm-link_padding-all[_ngcontent-%COMP%]::after {\n  width: 100%;\n  height: var(--uismLinkLineWeight);\n  left: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]::before {\n  top: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]::after {\n  bottom: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::before, .sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::after {\n  width: var(--uismLinkLineWeight);\n  height: 100%;\n  top: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::before {\n  left: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::after {\n  right: 0;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]::before, .sm-link_padding-all[_ngcontent-%COMP%]::after, .sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::before, .sm-link_padding-all[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-color: var(--uismLinkLineColor);\n  position: absolute;\n  opacity: 0;\n  will-change: transform, opacity;\n  transition-property: transform, opacity;\n}\n.sm-link_padding-all[_ngcontent-%COMP%]:hover::before, .sm-link_padding-all[_ngcontent-%COMP%]:hover::after, .sm-link_padding-all[_ngcontent-%COMP%]:hover   .sm-link__label[_ngcontent-%COMP%]::before, .sm-link_padding-all[_ngcontent-%COMP%]:hover   .sm-link__label[_ngcontent-%COMP%]::after {\n  opacity: 1;\n}\n\n.sm-link_padding-bottom[_ngcontent-%COMP%] {\n  --uismLinkLineWeight: var(--smLinkLineWeight, 2px);\n  --uismLinkLineColor: var(--smLinkLineColor, #000);\n  padding-bottom: var(--uismLinkLineWeight);\n  position: relative;\n}\n.sm-link_padding-bottom[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 100%;\n  height: var(--uismLinkLineWeight);\n  background-color: var(--uismLinkLineColor);\n  position: absolute;\n  left: 0;\n  bottom: 0;\n}\n\n.sm-link_bg[_ngcontent-%COMP%] {\n  --uismLinkLineColor: var(--smLinkLineColor, #000);\n  --uismLinkTextColorHover: var(--smLinkTextColorHover, #fff);\n  --uismLinkPadding: var(--smLinkPadding, 5px);\n  padding: var(--uismLinkPadding);\n  transition: color 0.3s ease-out;\n}\n.sm-link_bg[_ngcontent-%COMP%]::before, .sm-link_bg[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-color: var(--uismLinkLineColor);\n  opacity: 0;\n  position: absolute;\n  transition: transform 0.2s ease-out, opacity 0.2s ease-out 0.03s;\n}\n.sm-link_bg[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.sm-link_bg[_ngcontent-%COMP%]:hover::before, .sm-link_bg[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n  transition-duration: 0.35s, 0.35s;\n  transition-delay: 0s, 0s;\n}\n.sm-link_bg[_ngcontent-%COMP%]:hover {\n  color: var(--uismLinkTextColorHover);\n}\n\n.sm-link_text[_ngcontent-%COMP%]::before {\n  content: attr(data-sm-link-text);\n  color: var(--uismLinkTextColorHover);\n  position: absolute;\n}\n.sm-link_text[_ngcontent-%COMP%]::before, .sm-link_text[_ngcontent-%COMP%]   .sm-link__label[_ngcontent-%COMP%] {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.86, 0.6, 0.08, 1.01);\n  transition-duration: 0.3s;\n}\n.sm-link_text[_ngcontent-%COMP%]:hover::before, .sm-link_text[_ngcontent-%COMP%]:hover   .sm-link__label[_ngcontent-%COMP%] {\n  transition-duration: 0.4s;\n}\n\n.sm-link3[_ngcontent-%COMP%]::after {\n  transform: translate3d(-100%, 0, 0);\n  transition: transform 0.2s ease-in;\n}\n.sm-link3[_ngcontent-%COMP%]:hover::after {\n  transform: translate3d(0, 0, 0);\n}\n\n@media only screen and (max-width: 600px) {\n  .container[_ngcontent-%COMP%] {\n    margin-left: 3%;\n    margin-right: 3%;\n    width: 94%;\n    max-width: 95%;\n  }\n\n  .home[_ngcontent-%COMP%] {\n    background-color: #3248f4;\n    height: 100%;\n    border-radius: 22px;\n    color: white;\n    position: relative;\n  }\n\n  .container_name[_ngcontent-%COMP%] {\n    height: 80%;\n    position: relative;\n  }\n\n  .name[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 50%;\n    font-size: 4.5em;\n    line-height: 1em;\n    margin-left: 10%;\n    margin-right: 10%;\n    font-weight: bold;\n  }\n\n  .description[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 7%;\n    margin-left: 10%;\n    margin-right: 10%;\n    text-align: justify;\n    line-height: 1.5em;\n    font-size: 1.1em;\n  }\n\n  .about-me[_ngcontent-%COMP%] {\n    background-color: white;\n    height: 100%;\n    border-radius: 22px;\n    margin-top: 5%;\n  }\n\n  .about-photo[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 20%;\n    position: relative;\n  }\n\n  .profile-picture[_ngcontent-%COMP%] {\n    height: 12em;\n    width: 12em;\n    border-radius: 100%;\n    margin: 0;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    border: 0.2em solid white;\n  }\n\n  .about-text[_ngcontent-%COMP%] {\n    margin-top: 6%;\n    width: 86%;\n    margin-right: 7%;\n    margin-left: 7%;\n    height: 70%;\n    vertical-align: top;\n  }\n\n  .about-hello[_ngcontent-%COMP%] {\n    font-size: 2.5em;\n    font-weight: bold;\n    height: 8%;\n  }\n\n  .about-description[_ngcontent-%COMP%] {\n    height: 20%;\n    color: #969696;\n    text-align: justify;\n  }\n\n  .about-data[_ngcontent-%COMP%] {\n    height: 15%;\n    padding-top: 5%;\n    color: #969696;\n  }\n\n  .about-data-left[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 45%;\n    margin-bottom: 4%;\n  }\n\n  .about-data-right[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 45%;\n  }\n\n  .about-buttons[_ngcontent-%COMP%] {\n    padding-top: 22%;\n    height: 30%;\n    align-items: center;\n  }\n\n  .button[_ngcontent-%COMP%] {\n    font-size: 1.15em;\n    padding: 3% 3%;\n    margin-bottom: 4%;\n  }\n\n  .main-skills[_ngcontent-%COMP%] {\n    background-color: #3248f4;\n    height: auto;\n    padding: 4%;\n    border-radius: 22px;\n    margin-top: 5%;\n    line-height: 1.2em;\n    color: white;\n  }\n\n  .main-skill[_ngcontent-%COMP%] {\n    width: 50%;\n    display: inline-block;\n  }\n\n  .main-skill[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n  }\n\n  .text-skill[_ngcontent-%COMP%] {\n    width: 100%;\n    display: inline-block;\n    text-align: center;\n    padding-bottom: 7%;\n    font-size: 0.94em;\n  }\n\n  .skill-picture[_ngcontent-%COMP%] {\n    height: 7em;\n    width: auto;\n    padding-top: 10%;\n    padding-bottom: 13%;\n    cursor: pointer;\n  }\n\n  .skill-title-column[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 99%;\n    margin-top: 3%;\n    vertical-align: top;\n  }\n\n  .flag[_ngcontent-%COMP%] {\n    width: 47%;\n  }\n\n  .flag-title[_ngcontent-%COMP%] {\n    margin-top: 0;\n    min-width: 80%;\n  }\n\n  #contacto[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  .contact-left[_ngcontent-%COMP%] {\n    width: 100%;\n    display: inline-block;\n    margin-left: 7%;\n    margin-top: 2%;\n    vertical-align: top;\n  }\n\n  .contact-mini[_ngcontent-%COMP%] {\n    height: 33%;\n    width: 100%;\n    padding-top: 10%;\n  }\n\n  .contact-mini-left[_ngcontent-%COMP%] {\n    width: 25%;\n    display: inline-block;\n  }\n\n  .contact-mini-right[_ngcontent-%COMP%] {\n    width: 75%;\n    display: inline-block;\n    padding-top: 5%;\n    vertical-align: top;\n  }\n\n  .contact-right[_ngcontent-%COMP%] {\n    width: 86%;\n    display: inline-block;\n    margin-left: 7%;\n    margin-right: 7%;\n    margin-top: 3%;\n  }\n\n  .contact-icon[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n\n  .post-experience[_ngcontent-%COMP%] {\n    width: 30%;\n    margin-top: 8%;\n    margin-bottom: 2%;\n    display: inline-block;\n  }\n\n  #reconocimientos[_ngcontent-%COMP%] {\n    background-color: white;\n    height: 140%;\n    border-radius: 22px;\n    margin-top: 5%;\n  }\n\n  .description-card[_ngcontent-%COMP%] {\n    margin-left: 16px;\n    font-weight: bold;\n  }\n\n  .back-card[_ngcontent-%COMP%] {\n    margin-left: 10%;\n    margin-right: 10%;\n    font-style: italic;\n  }\n\n  @import url(\"https://fonts.googleapis.com/css?family=Bangers\");\n  *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n    margin: 0;\n    box-sizing: border-box;\n  }\n\n  .reward[_ngcontent-%COMP%] {\n    width: 4em;\n  }\n\n  .first_card[_ngcontent-%COMP%] {\n    margin-top: -15%;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    height: 16%;\n    width: 86%;\n    transform-style: preserve-3d;\n  }\n\n  .back[_ngcontent-%COMP%] {\n    font-size: x-small;\n  }\n\n  .left-card[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 80%;\n    font-size: large;\n  }\n\n  .right-card[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 20%;\n  }\n}\n\n@media only screen and (max-width: 1025px) {\n  .back[_ngcontent-%COMP%] {\n    font-size: x-small;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpb2xvemFub2NvcnRlcy9Vbml2ZXJzaWRhZCBMb2NhbC9Mb3phbm9XZWJQYWdlL3NyYy9hcHAvcmlnaHQtdGFiL3JpZ2h0LXRhYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmlnaHQtdGFiL3JpZ2h0LXRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5UFEsOERBQUE7QUF4UFI7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FER0E7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0FKO0FER0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREdBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQUo7QURHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREdBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FGO0FER0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDQUo7QURJQTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0RKO0FESUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDREo7QURJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDREo7QURJQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDREo7QURJQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDREo7QURJQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNESjtBRElBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUNESjtBRElBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDREo7QURJQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0RKO0FESUE7RUFDSSxXQUFBO0FDREo7QURJQTtFQUNJLGlCQUFBO0FDREo7QURJQTtFQUNJLGNBQUE7QUNESjtBREtBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0ZKO0FETUE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNISjtBRE1BO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDSEo7QURNQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSEo7QURNQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0hKO0FES0E7RUFDSSxTQUFBO0FDRko7QURJQTtFQUNFLGNBQUE7QUNERjtBRElBO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNESjtBREtBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNGSjtBREtBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0VBSUEsdUJBQUE7QUNGSjtBREtBO0VBQ2dDLFNBQUE7RUFDSSxlQUFBO0VBQ2hDLHNCQUFBO0FDQUo7QURHQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQUo7QURHQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0FKO0FER0E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQUo7QURJQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0RKO0FESUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDREo7QURJQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0RKO0FES0E7RUFDRSxTQUFBO0VBQ0Esc0JBQUE7QUNGRjtBREtBO0VBQ0ksVUFBQTtBQ0ZKO0FES0E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUlBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDRko7QURLRTtFQUNFLGtCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLHlCQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUNISjtBRE1FO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNITjtBRE1FO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0FDSEo7QURPRTtFQUNFLDBCQUFBO0FDSko7QURPRTtFQUNFLDRCQUFBO0FDSko7QURPRTtFQUNFLDBCQUFBO0FDSko7QURTQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ05KO0FEU0E7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDTko7QURTQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNOSjtBRFNBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQ05KO0FEU0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNOSjtBRFNBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDTko7QURVQTtFQUNJLFlBQUE7QUNQSjtBRFVBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ1BKO0FEVUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDUEo7QURVQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtBQ1BKO0FEV0E7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNSSjtBRFdBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0FDUko7QURXQTtFQUNJLFVBQUE7QUNSSjtBRFdBO0VBQ0ksZ0JBQUE7QUNSSjtBRFdBO0VBQ0ksY0FBQTtBQ1JKO0FEV0E7RUFDRSxhQUFBO0FDUkY7QURXQTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7QUNSRjtBRFdDO0VBQ0MsNEJBQUE7RUFDQSxvQ0FBQTtBQ1JGO0FEV0E7RUFDQyx5Q0FBQTtFQUNBLG9DQUFBO0FDUkQ7QURXQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1JKO0FEV0E7RUFDSSxXQUFBO0FDUko7QURhQTs7Q0FBQTtBQUlBO0VBQ0Msb0RBQUE7RUFDQSwyQ0FBQTtFQUNBLHFEQUFBO0VBRUEsK0JBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNaRDtBRGVBO0VBQ0MscUJBQUE7QUNaRDtBRGVBO0VBQ0UsY0FBQTtBQ1pGO0FEZUEsd0JBQUE7QUFFQTtFQUNDLGtEQUFBO0VBQ0EsaURBQUE7RUFDQSw0Q0FBQTtFQUVBLCtCQUFBO0FDZEQ7QURpQkE7O0VBRUUsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsT0FBQTtBQ2RGO0FEaUJBO0VBQ0UsTUFBQTtBQ2RGO0FEaUJBO0VBQ0UsU0FBQTtBQ2RGO0FEaUJBOztFQUVFLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7QUNkRjtBRGlCQTtFQUNFLE9BQUE7QUNkRjtBRGlCQTtFQUNFLFFBQUE7QUNkRjtBRGlCQTs7OztFQUlFLFdBQUE7RUFDRCwwQ0FBQTtFQUNDLGtCQUFBO0VBQ0QsVUFBQTtFQUVBLCtCQUFBO0VBQ0EsdUNBQUE7QUNmRDtBRGtCQTs7OztFQUlDLFVBQUE7QUNmRDtBRGtCQSwyQkFBQTtBQUVBO0VBQ0Msa0RBQUE7RUFDQSxpREFBQTtFQUVBLHlDQUFBO0VBQ0Esa0JBQUE7QUNqQkQ7QURvQkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0QsMENBQUE7RUFFQyxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0FDbEJGO0FEcUJBLGVBQUE7QUFFQTtFQUNDLGlEQUFBO0VBQ0EsMkRBQUE7RUFDQSw0Q0FBQTtFQUVBLCtCQUFBO0VBQ0EsK0JBQUE7QUNwQkQ7QUR1QkE7O0VBRUUsV0FBQTtFQUNELDBDQUFBO0VBQ0MsVUFBQTtFQUNBLGtCQUFBO0VBRUQsZ0VBQUE7QUNyQkQ7QUR3QkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNyQkY7QUR3QkE7O0VBRUUsVUFBQTtFQUNELGlDQUFBO0VBQ0Esd0JBQUE7QUNyQkQ7QUR3QkE7RUFDQyxvQ0FBQTtBQ3JCRDtBRHdCQSxpQkFBQTtBQUVBO0VBQ0UsZ0NBQUE7RUFDRCxvQ0FBQTtFQUNDLGtCQUFBO0FDdEJGO0FEeUJBOztFQUVFLDhCQUFBO0VBQ0QsK0RBQUE7RUFDQSx5QkFBQTtBQ3RCRDtBRHlCQTs7RUFFQyx5QkFBQTtBQ3RCRDtBRHlCQSxhQUFBO0FBRUE7RUFDRSxtQ0FBQTtFQUNBLGtDQUFBO0FDdkJGO0FEMEJBO0VBQ0UsK0JBQUE7QUN2QkY7QUQyQkE7Ozs7d0NBQUE7QUFNQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsVUFBQTtJQUNBLGNBQUE7RUN6QkY7O0VENkJBO0lBQ0UseUJBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUMxQkY7O0VEOEJBO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0VDM0JKOztFRDhCQTtJQUNJLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUMzQko7O0VEOEJBO0lBQ0ksa0JBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtFQzNCSjs7RUQrQkE7SUFDRSx1QkFBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7RUM1QkY7O0VEK0JBO0lBQ0UsV0FBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQzVCRjs7RUQrQkE7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0EsU0FBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EseUJBQUE7RUM1QkY7O0VEK0JBO0lBQ0UsY0FBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUM1QkY7O0VEK0JBO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLFVBQUE7RUM1QkY7O0VEK0JBO0lBQ0UsV0FBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtFQzVCRjs7RUQrQkE7SUFDRSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7RUM1QkY7O0VEK0JBO0lBQ0UsV0FBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtFQzVCRjs7RUQrQkE7SUFDRSxXQUFBO0lBQ0EsV0FBQTtFQzVCRjs7RUQrQkE7SUFDRSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQzVCRjs7RUQrQkE7SUFDRSxpQkFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtFQzVCRjs7RURnQ0E7SUFDRSx5QkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0VDN0JGOztFRGdDQTtJQUNFLFVBQUE7SUFDQSxxQkFBQTtFQzdCRjs7RURnQ0E7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtFQzdCRjs7RURnQ0E7SUFDRSxXQUFBO0lBQ0EscUJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUM3QkY7O0VEZ0NBO0lBQ0UsV0FBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtFQzdCRjs7RURpQ0E7SUFDRSxxQkFBQTtJQUNBLFVBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7RUM5QkY7O0VEaUNBO0lBQ0UsVUFBQTtFQzlCRjs7RURpQ0E7SUFDRSxhQUFBO0lBQ0EsY0FBQTtFQzlCRjs7RURrQ0E7SUFDRSxZQUFBO0VDL0JGOztFRGtDQTtJQUNFLFdBQUE7SUFDQSxxQkFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7RUMvQkY7O0VEa0NBO0lBQ0UsV0FBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtFQy9CRjs7RURrQ0E7SUFDRSxVQUFBO0lBQ0EscUJBQUE7RUMvQkY7O0VEbUNBO0lBQ0UsVUFBQTtJQUNBLHFCQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VDaENGOztFRG1DQTtJQUNFLFVBQUE7SUFDQSxxQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUNoQ0Y7O0VEbUNBO0lBQ0UsVUFBQTtFQ2hDRjs7RURtQ0E7SUFDRSxVQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0lBQ0EscUJBQUE7RUNoQ0Y7O0VEb0NBO0lBQ0UsdUJBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0VDakNGOztFRG9DQTtJQUNFLGlCQUFBO0lBQ0EsaUJBQUE7RUNqQ0Y7O0VEb0NBO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VDakNGOztFRG9DUSw4REFBQTtFQUNSO0lBQ0EsU0FBQTtJQUNBLHNCQUFBO0VDakNBOztFRG9DQTtJQUNFLFVBQUE7RUNqQ0Y7O0VEb0NBO0lBQ0UsZ0JBQUE7RUNqQ0Y7O0VEb0NBO0lBQ0UsV0FBQTtJQUNBLFVBQUE7SUFDQSw0QkFBQTtFQ2pDRjs7RURvQ0E7SUFDRSxrQkFBQTtFQ2pDRjs7RURvQ0E7SUFDSSxxQkFBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtFQ2pDSjs7RURvQ0E7SUFDRSxxQkFBQTtJQUNBLFVBQUE7RUNqQ0Y7QUFDRjtBRHNDQTs7Ozt3Q0FBQTtBQU1BO0VBQ0U7SUFDRSxrQkFBQTtFQ3JDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcmlnaHQtdGFiL3JpZ2h0LXRhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vVGhlIGZ1bGwgcGFnZSBpcyBvcmdhbmlzZWQgaW4gdHdvIGNvbXBvbmVudHMsIHRoZSByaWdodCBvbmUgYW5kIHRoZSBsZWZ0IG9uZVxuLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDY1JTtcbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XG59XG5cbi8vVGhlIGNsYXNzZXMgZm9yIHRoZSBjYXJkIHNldCB0byBmaXQgdGhlIGhvbWVcbi5ob21le1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgNzIsIDI0NCk7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29udGFpbmVyX25hbWV7XG4gICAgaGVpZ2h0OiA3MiU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubmFtZXtcbiAgICBmb250LXNpemU6IDQuNWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kZXNjcmlwdGlvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICBmb250LXNpemU6IDEuMWVtO1xufVxuXG4uYnV0dG9ue1xuICBwYWRkaW5nLWxlZnQ6IDMlOyBcbiAgcGFkZGluZy1yaWdodDogMyU7XG59XG5cbi5idXR0b25ze1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG5cbi8vVGhlIGNsYXNzZXMgZm9yIHRoZSBjYXJkIHNldCB0byBmaXggdGhlIGFib3V0IG1lXG4uYWJvdXQtbWV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmFib3V0LXBob3Rve1xuICAgIHdpZHRoOiAzNSU7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucHJvZmlsZS1waWN0dXJle1xuICAgIGhlaWdodDogMTJlbTtcbiAgICB3aWR0aDogMTJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIG1hcmdpbjogMTklO1xuICAgIG1hcmdpbi10b3A6IDclO1xuICAgIGJvcmRlcjogMC4yZW0gc29saWQgd2hpdGVcbn1cblxuLmFib3V0LXRleHR7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIGhlaWdodDogNzAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uYWJvdXQtaGVsbG97XG4gICAgbWFyZ2luLXRvcDogNyU7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgaGVpZ2h0OiAxMyU7XG59XG5cbi5hYm91dC1kZXNjcmlwdGlvbntcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICBjb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5hYm91dC1kYXRhe1xuICAgIGhlaWdodDogMjAlO1xuICAgIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XG59XG5cbi5hYm91dC1kYXRhLWxlZnR7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5hYm91dC1kYXRhLXJpZ2h0e1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uYWJvdXQtYnV0dG9uc3tcbiAgICBoZWlnaHQ6IDMwJTtcbn1cblxuLmxhc3R7XG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XG59XG5cbi5maXJzdHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLy9UaGUgY2xhc3NlcyBmb3IgdGhlIGNhcmQgc2V0IHRvIGZpeCB0aGUgdGltZWxpbmVcbi50aW1le1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4vL1RoZSBjbGFzc2VzIGZvciB0aGUgY2FyZCBzZXQgdG8gZml4IHRoZSBza2lsbHNcbi5za2lsbHN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xufVxuXG4uc2tpbGwtc2V0e1xuICAgIG1hcmdpbi1sZWZ0OiA3JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuXG4uc2tpbGwtdGl0bGV7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogcmdiKDUwLCA3MiwgMjQ0KTtcbn1cblxuLnNraWxsLXRpdGxlLWNvbHVtbntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDQ5JTtcbiAgICBtYXJnaW4tdG9wOiAyJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuLmZsYWd7XG4gICAgd2lkdGg6IDclO1xufVxuLmZsYWctdGl0bGV7XG4gIG1hcmdpbi10b3A6IDIlO1xufVxuXG4uc2tpbGwtc2V0IGgye1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHBhZGRpbmctdG9wOiAxLjclO1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG59XG5cbi8vVGhlIGNsYXNzZXMgZm9yIHRoZSBjYXJkIHNldCB0byBmaXggdGhlIG1haW4tc2tpbGxzXG4ubWFpbi1za2lsbHN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNTAsIDcyLCAyNDQpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1haW4tc2tpbGx7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICAgIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xufVxuXG4ubWFpbi1za2lsbDpob3ZlciB7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7IC8qIElFIDkgKi9cbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7IC8qIFNhZmFyaSAzLTggKi9cbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpOyBcbn1cblxuLm1haW4tc2tpbGwgaW1neyAvL1RoaXMgaXMgdG8gYWxpZ24gYSBwaWN0dXJlIGluIHRoZSBtaWRkdGUgb2YgYSBkaXZcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50ZXh0LXNraWxse1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNyU7XG59XG5cbi5za2lsbC1waWN0dXJle1xuICAgIGhlaWdodDogMjAlO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgcGFkZGluZy10b3A6IDIwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTMlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLy9UaGUgY2xhc3NlcyBmb3IgdGhlIGNhcmQgc2V0IHRvIGZpeCB0aGUgYWNrbm93bGVkZ2VtZW50c1xuI3JlY29ub2NpbWllbnRvc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmRlc2NyaXB0aW9uLWNhcmR7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5iYWNrLWNhcmR7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QmFuZ2VycycpO1xuKiwqOjpiZWZvcmUsKjo6YWZ0ZXJ7XG4gIG1hcmdpbjowO1xuICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XG59XG5cbi5yZXdhcmR7XG4gICAgd2lkdGg6IDRlbTtcbn1cblxuLmNhcmR7XG4gICAgaGVpZ2h0OjEyJTtcbiAgICB3aWR0aDogODYlO1xuICAgIHRyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG1hcmdpbi1sZWZ0OiA3JTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMyU7O1xuICB9XG4gIFxuICAuZnJvbnQsIC5iYWNre1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywgMjUyLCAyNTIpO1xuICAgIC8vYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiKDUwLCA3MiwgMjQ0KSAwJSwgcmdiKDY1LCA4NiwgMjQ3KSAxMDAlKTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6MWVtO1xuICAgIGJvcmRlcjogYmxhY2s7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA4cHggMXB4IHJnYmEoYmxhY2ssMC40KTtcbiAgfVxuXG4gIC5sZWZ0LWNhcmR7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgfVxuXG4gIC5yaWdodC1jYXJke1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAlO1xuICB9XG4gIFxuICBcbiAgLmJhY2t7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcbiAgfVxuICBcbiAgLmZyb250ID4gcCAsIC5iYWNrID4gcCB7XG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVooMTIwcHgpO1xuICB9XG4gIFxuICAuY2FyZDpob3ZlcntcbiAgICB0cmFuc2Zvcm06cm90YXRlWSgxODBkZWcpO1xuICB9XG5cblxuLy9UaGUgY2xhc3NlcyBmb3IgdGhlIGNhcmQgc2V0IHRvIGZpeCB0aGUgZXhwZXJpZW5jZVxuLmV4cGVyaWVuY2V7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xufVxuXG4ucG9zdC1leHBlcmllbmNle1xuICAgIHdpZHRoOiAzMCU7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubGVmdC1wb3N0e1xuICAgIG1hcmdpbi1sZWZ0OiAxMyU7XG4gICAgbWFyZ2luLXJpZ2h0OiA3JTtcbn1cblxuLnJpZ2h0LXBvc3R7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMCU7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLnBvc3QtcGljdHVyZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRleHQtcG9zdHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi8vVGhlIGNsYXNzZXMgZm9yIHRoZSBjYXJkIHNldCB0byBmaXggdGhlIGNvbnRhY3RcbiNjb250YWN0b3tcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5jb250YWN0LWxlZnR7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDclO1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5jb250YWN0LW1pbml7XG4gICAgaGVpZ2h0OiAzMyU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDEwJTtcbn1cblxuLmNvbnRhY3QtbWluaS1sZWZ0e1xuICAgIHdpZHRoOiAzMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG59XG5cbi5jb250YWN0LW1pbmktcmlnaHR7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZy10b3A6IDQlO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5jb250YWN0LXJpZ2h0e1xuICAgIHdpZHRoOiA2MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uY29udGFjdC1pY29ue1xuICAgIHdpZHRoOiA2MCU7XG59XG5cbi5saW5rLWNvbnRhY3R7XG4gICAgbGluZS1oZWlnaHQ6IDAuNTtcbn1cblxuaDJ7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG59XG5cbiNkYXJrLWZvcm17XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xuICBjb2xvcjogcmdiKDUwLCA3MiwgMjQ0KSAhaW1wb3J0YW50O1xuIH1cblxuIDo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDcyLCAyNDQpICFpbXBvcnRhbnQ7XG59IFxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cbiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDcyLCAyNDQpICFpbXBvcnRhbnQ7O1xufVxuXG4uY29udGFjdC1mb3JtIHtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDo1JTtcbiAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgfVxuICBcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuLy9HZW5lcmFsIEFuaW1hdGlvbnNcblxuLypcbiogY29yZSBzdHlsZXNcbiovXG5cbi5zbS1saW5re1xuXHQtLXVpc21MaW5rRGlzcGxheTogdmFyKC0tc21MaW5rRGlzcGxheSwgaW5saW5lLWZsZXgpO1x0XG5cdC0tdWlzbUxpbmtUZXh0Q29sb3I6IHZhcigtLXNtTGlua1RleHRDb2xvcik7XG5cdC0tdWlzbUxpbmtUZXh0Q29sb3JIb3ZlcjogdmFyKC0tc21MaW5rVGV4dENvbG9ySG92ZXIpO1x0XG5cdFxuXHRkaXNwbGF5OiB2YXIoLS11aXNtTGlua0Rpc3BsYXkpO1xuXHRjb2xvcjogdmFyKC0tdWlzbUxpbmtUZXh0Q29sb3IpO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmEuc20tbGlua3tcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uc20tbGlua19fbGFiZWx7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBzbS1saW5rX3BhZGRpbmctYWxsICovIFxuXG4uc20tbGlua19wYWRkaW5nLWFsbHtcblx0LS11aXNtTGlua0xpbmVXZWlnaHQ6IHZhcigtLXNtTGlua0xpbmVXZWlnaHQsIDJweCk7XG5cdC0tdWlzbUxpbmtMaW5lQ29sb3I6IHZhcigtLXNtTGlua0xpbmVDb2xvciwgIzAwMCk7XG5cdC0tdWlzbUxpbmtQYWRkaW5nOiB2YXIoLS1zbUxpbmtQYWRkaW5nLCA1cHgpO1xuXHRcblx0cGFkZGluZzogdmFyKC0tdWlzbUxpbmtQYWRkaW5nKTtcbn1cblxuLnNtLWxpbmtfcGFkZGluZy1hbGw6OmJlZm9yZSwgXG4uc20tbGlua19wYWRkaW5nLWFsbDo6YWZ0ZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IHZhcigtLXVpc21MaW5rTGluZVdlaWdodCk7XG4gIGxlZnQ6IDA7XG59XG5cbi5zbS1saW5rX3BhZGRpbmctYWxsOjpiZWZvcmV7XG4gIHRvcDogMDtcbn1cblxuLnNtLWxpbmtfcGFkZGluZy1hbGw6OmFmdGVye1xuICBib3R0b206IDA7XG59XG5cbi5zbS1saW5rX3BhZGRpbmctYWxsIC5zbS1saW5rX19sYWJlbDo6YmVmb3JlLFxuLnNtLWxpbmtfcGFkZGluZy1hbGwgLnNtLWxpbmtfX2xhYmVsOjphZnRlcntcbiAgd2lkdGg6IHZhcigtLXVpc21MaW5rTGluZVdlaWdodCk7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xufVxuXG4uc20tbGlua19wYWRkaW5nLWFsbCAuc20tbGlua19fbGFiZWw6OmJlZm9yZXtcbiAgbGVmdDogMDtcbn1cblxuLnNtLWxpbmtfcGFkZGluZy1hbGwgLnNtLWxpbmtfX2xhYmVsOjphZnRlcntcbiAgcmlnaHQ6IDA7XG59XG5cbi5zbS1saW5rX3BhZGRpbmctYWxsOjpiZWZvcmUsXG4uc20tbGlua19wYWRkaW5nLWFsbDo6YWZ0ZXIsXG4uc20tbGlua19wYWRkaW5nLWFsbCAuc20tbGlua19fbGFiZWw6OmJlZm9yZSxcbi5zbS1saW5rX3BhZGRpbmctYWxsIC5zbS1saW5rX19sYWJlbDo6YWZ0ZXJ7XG4gIGNvbnRlbnQ6IFwiXCI7ICAgICBcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWlzbUxpbmtMaW5lQ29sb3IpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuXHRvcGFjaXR5OiAwO1xuXHRcblx0d2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTtcblx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xufVxuXG4uc20tbGlua19wYWRkaW5nLWFsbDpob3Zlcjo6YmVmb3JlLFxuLnNtLWxpbmtfcGFkZGluZy1hbGw6aG92ZXI6OmFmdGVyLFxuLnNtLWxpbmtfcGFkZGluZy1hbGw6aG92ZXIgLnNtLWxpbmtfX2xhYmVsOjpiZWZvcmUsXG4uc20tbGlua19wYWRkaW5nLWFsbDpob3ZlciAuc20tbGlua19fbGFiZWw6OmFmdGVye1xuXHRvcGFjaXR5OiAxO1xufVxuXG4vKiBzbS1saW5rX3BhZGRpbmctYm90dG9tICovIFxuXG4uc20tbGlua19wYWRkaW5nLWJvdHRvbXtcblx0LS11aXNtTGlua0xpbmVXZWlnaHQ6IHZhcigtLXNtTGlua0xpbmVXZWlnaHQsIDJweCk7XG5cdC0tdWlzbUxpbmtMaW5lQ29sb3I6IHZhcigtLXNtTGlua0xpbmVDb2xvciwgIzAwMCk7XHRcblx0XG5cdHBhZGRpbmctYm90dG9tOiB2YXIoLS11aXNtTGlua0xpbmVXZWlnaHQpO1x0XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNtLWxpbmtfcGFkZGluZy1ib3R0b206OmFmdGVye1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiB2YXIoLS11aXNtTGlua0xpbmVXZWlnaHQpO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11aXNtTGlua0xpbmVDb2xvcik7XG5cdFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLyogc20tbGlua19iZyAqLyBcblxuLnNtLWxpbmtfYmcge1xuXHQtLXVpc21MaW5rTGluZUNvbG9yOiB2YXIoLS1zbUxpbmtMaW5lQ29sb3IsICMwMDApO1x0XG5cdC0tdWlzbUxpbmtUZXh0Q29sb3JIb3ZlcjogdmFyKC0tc21MaW5rVGV4dENvbG9ySG92ZXIsICNmZmYpO1x0XG5cdC0tdWlzbUxpbmtQYWRkaW5nOiB2YXIoLS1zbUxpbmtQYWRkaW5nLCA1cHgpO1xuXHRcblx0cGFkZGluZzogdmFyKC0tdWlzbUxpbmtQYWRkaW5nKTtcblx0dHJhbnNpdGlvbjogY29sb3IgLjNzIGVhc2Utb3V0O1xufVxuXG4uc20tbGlua19iZzo6YmVmb3JlLCBcbi5zbS1saW5rX2JnOjphZnRlcntcbiAgY29udGVudDogXCJcIjtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWlzbUxpbmtMaW5lQ29sb3IpO1x0XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgZWFzZS1vdXQsIG9wYWNpdHkgLjJzIGVhc2Utb3V0IC4wM3M7XG59XG5cbi5zbS1saW5rX2JnIC5zbS1saW5rX19sYWJlbHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuXG4uc20tbGlua19iZzpob3Zlcjo6YmVmb3JlLCBcbi5zbS1saW5rX2JnOmhvdmVyOjphZnRlcntcbiAgb3BhY2l0eTogMTtcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjogLjM1cywgLjM1cztcblx0dHJhbnNpdGlvbi1kZWxheTogMHMsIDBzO1xufVxuXG4uc20tbGlua19iZzpob3Zlcntcblx0Y29sb3I6IHZhcigtLXVpc21MaW5rVGV4dENvbG9ySG92ZXIpO1xufVxuXG4vKiBzbS1saW5rX3RleHQgKi8gXG5cbi5zbS1saW5rX3RleHQ6OmJlZm9yZXtcbiAgY29udGVudDogYXR0cihkYXRhLXNtLWxpbmstdGV4dCk7XG5cdGNvbG9yOiB2YXIoLS11aXNtTGlua1RleHRDb2xvckhvdmVyKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uc20tbGlua190ZXh0OjpiZWZvcmUsIFxuLnNtLWxpbmtfdGV4dCAuc20tbGlua19fbGFiZWx7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcblx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguODYsIC42LCAuMDgsIDEuMDEpOyBcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzO1xufVxuXG4uc20tbGlua190ZXh0OmhvdmVyOjpiZWZvcmUsXG4uc20tbGlua190ZXh0OmhvdmVyIC5zbS1saW5rX19sYWJlbHtcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjogLjRzO1xufVxuXG4vKiBlZmZlY3QgMyAqL1xuXG4uc20tbGluazM6OmFmdGVye1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLWluO1xufVxuXG4uc20tbGluazM6aG92ZXI6OmFmdGVye1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBNT0JJTEUgVklFV1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KXtcbiAgLmNvbnRhaW5lcntcbiAgICBtYXJnaW4tbGVmdDogMyU7XG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcbiAgICB3aWR0aDogOTQlO1xuICAgIG1heC13aWR0aDogOTUlO1xuICB9XG5cbiAgLy9UaGUgY2xhc3NlcyBmb3IgdGhlIGNhcmQgc2V0IHRvIGZpdCB0aGUgaG9tZVxuICAuaG9tZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDcyLCAyNDQpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAvL1RoZSBjbGFzc2VzIGZvciB0aGUgY2FyZCBzZXQgdG8gZml0IHRoZSBob21lXG4gIC5jb250YWluZXJfbmFtZXtcbiAgICAgIGhlaWdodDogODAlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLm5hbWV7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDUwJTtcbiAgICAgIGZvbnQtc2l6ZTogNC41ZW07XG4gICAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuZGVzY3JpcHRpb257XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDclO1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICAgIG1hcmdpbi1yaWdodDogMTAlO1xuICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gIH1cblxuICAvL1RoZSBjbGFzc2VzIGZvciB0aGUgY2FyZCBzZXQgdG8gZml4IHRoZSBhYm91dCBtZVxuICAuYWJvdXQtbWV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gIH1cblxuICAuYWJvdXQtcGhvdG97XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLnByb2ZpbGUtcGljdHVyZXtcbiAgICBoZWlnaHQ6IDEyZW07XG4gICAgd2lkdGg6IDEyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlcjogMC4yZW0gc29saWQgd2hpdGU7XG4gIH1cblxuICAuYWJvdXQtdGV4dHtcbiAgICBtYXJnaW4tdG9wOiA2JTtcbiAgICB3aWR0aDogODYlO1xuICAgIG1hcmdpbi1yaWdodDogNyU7XG4gICAgbWFyZ2luLWxlZnQ6IDclO1xuICAgIGhlaWdodDogNzAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cblxuICAuYWJvdXQtaGVsbG97XG4gICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBoZWlnaHQ6IDglO1xuICB9XG5cbiAgLmFib3V0LWRlc2NyaXB0aW9ue1xuICAgIGhlaWdodDogMjAlO1xuICAgIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgfVxuXG4gIC5hYm91dC1kYXRhe1xuICAgIGhlaWdodDogMTUlO1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICBjb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xuICB9XG5cbiAgLmFib3V0LWRhdGEtbGVmdHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ1JTtcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcbiAgfVxuXG4gIC5hYm91dC1kYXRhLXJpZ2h0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDUlO1xuICB9XG5cbiAgLmFib3V0LWJ1dHRvbnN7XG4gICAgcGFkZGluZy10b3A6IDIyJTtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmJ1dHRvbntcbiAgICBmb250LXNpemU6IDEuMTVlbTtcbiAgICBwYWRkaW5nOiAzJSAzJTtcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcbiAgfVxuXG4gIC8vVGhlIGNsYXNzZXMgZm9yIHRoZSBjYXJkIHNldCB0byBmaXggdGhlIG1haW4tc2tpbGxzXG4gIC5tYWluLXNraWxsc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig1MCwgNzIsIDI0NCk7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDQlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgLm1haW4tc2tpbGx7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAubWFpbi1za2lsbCBpbWd7IC8vVGhpcyBpcyB0byBhbGlnbiBhIHBpY3R1cmUgaW4gdGhlIG1pZGR0ZSBvZiBhIGRpdlxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC50ZXh0LXNraWxse1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDclO1xuICAgIGZvbnQtc2l6ZTogMC45NGVtO1xuICB9XG5cbiAgLnNraWxsLXBpY3R1cmV7XG4gICAgaGVpZ2h0OiA3ZW07XG4gICAgd2lkdGg6IGF1dG87XG4gICAgcGFkZGluZy10b3A6IDEwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTMlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIFxuICAuc2tpbGwtdGl0bGUtY29sdW1ue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogOTklO1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cblxuICAuZmxhZ3tcbiAgICB3aWR0aDogNDclO1xuICB9XG4gICAgXG4gIC5mbGFnLXRpdGxle1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWluLXdpZHRoOiA4MCU7XG4gIH1cblxuICAvL1RoZSBjbGFzc2VzIGZvciB0aGUgY2FyZCBzZXQgdG8gZml4IHRoZSBjb250YWN0XG4gICNjb250YWN0b3tcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuY29udGFjdC1sZWZ0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogNyU7XG4gICAgbWFyZ2luLXRvcDogMiU7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgfVxuXG4gIC5jb250YWN0LW1pbml7XG4gICAgaGVpZ2h0OiAzMyU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDEwJTtcbiAgfVxuXG4gIC5jb250YWN0LW1pbmktbGVmdHtcbiAgICB3aWR0aDogMjUlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICB9XG5cbiAgLmNvbnRhY3QtbWluaS1yaWdodHtcbiAgICB3aWR0aDogNzUlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nLXRvcDogNSU7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgfVxuXG4gIC5jb250YWN0LXJpZ2h0e1xuICAgIHdpZHRoOiA4NiU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiA3JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDclO1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICB9XG5cbiAgLmNvbnRhY3QtaWNvbntcbiAgICB3aWR0aDogNjAlO1xuICB9XG5cbiAgLnBvc3QtZXhwZXJpZW5jZXtcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbi10b3A6IDglO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gIC8vTW9iaWxlIHZpZXcgZm9yIHRoZSBhd2FyZHMgY2FyZFxuICAjcmVjb25vY2ltaWVudG9ze1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogMTQwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICB9XG5cbiAgLmRlc2NyaXB0aW9uLWNhcmR7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuYmFjay1jYXJke1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG5cbiAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CYW5nZXJzJyk7XG4gICosKjo6YmVmb3JlLCo6OmFmdGVye1xuICBtYXJnaW46MDtcbiAgYm94LXNpemluZzpib3JkZXItYm94O1xuICB9XG5cbiAgLnJld2FyZHtcbiAgICB3aWR0aDogNGVtO1xuICB9XG5cbiAgLmZpcnN0X2NhcmR7XG4gICAgbWFyZ2luLXRvcDogLTE1JTtcbiAgfVxuXG4gIC5jYXJke1xuICAgIGhlaWdodDogMTYlO1xuICAgIHdpZHRoOiA4NiU7XG4gICAgdHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkO1xuICB9XG5cbiAgLmJhY2t7XG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xuICB9XG5cbiAgLmxlZnQtY2FyZHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBmb250LXNpemU6IGxhcmdlO1xuICB9XG5cbiAgLnJpZ2h0LWNhcmR7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cblxufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBUQUJMRVQgVklFV1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjVweCl7XG4gIC5iYWNre1xuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgfVxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJhbmdlcnNcIik7XG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjUlO1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtYXJnaW4tbGVmdDogMzAlO1xufVxuXG4uaG9tZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjQ4ZjQ7XG4gIGhlaWdodDogOTAlO1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbnRhaW5lcl9uYW1lIHtcbiAgaGVpZ2h0OiA3MiU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm5hbWUge1xuICBmb250LXNpemU6IDQuNWVtO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNDAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgbWFyZ2luLWJvdHRvbTogMSU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBmb250LXNpemU6IDEuMWVtO1xufVxuXG4uYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAzJTtcbiAgcGFkZGluZy1yaWdodDogMyU7XG59XG5cbi5idXR0b25zIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG5cbi5hYm91dC1tZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDcwJTtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5hYm91dC1waG90byB7XG4gIHdpZHRoOiAzNSU7XG4gIGhlaWdodDogNzAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wcm9maWxlLXBpY3R1cmUge1xuICBoZWlnaHQ6IDEyZW07XG4gIHdpZHRoOiAxMmVtO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXJnaW46IDE5JTtcbiAgbWFyZ2luLXRvcDogNyU7XG4gIGJvcmRlcjogMC4yZW0gc29saWQgd2hpdGU7XG59XG5cbi5hYm91dC10ZXh0IHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgaGVpZ2h0OiA3MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmFib3V0LWhlbGxvIHtcbiAgbWFyZ2luLXRvcDogNyU7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiAxMyU7XG59XG5cbi5hYm91dC1kZXNjcmlwdGlvbiB7XG4gIGhlaWdodDogMzAlO1xuICBjb2xvcjogIzk2OTY5NjtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmFib3V0LWRhdGEge1xuICBoZWlnaHQ6IDIwJTtcbiAgY29sb3I6ICM5Njk2OTY7XG59XG5cbi5hYm91dC1kYXRhLWxlZnQge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmFib3V0LWRhdGEtcmlnaHQge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmFib3V0LWJ1dHRvbnMge1xuICBoZWlnaHQ6IDMwJTtcbn1cblxuLmxhc3Qge1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbn1cblxuLmZpcnN0IHtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi50aW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uc2tpbGxzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgcGFkZGluZy1ib3R0b206IDUlO1xufVxuXG4uc2tpbGwtc2V0IHtcbiAgbWFyZ2luLWxlZnQ6IDclO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuXG4uc2tpbGwtdGl0bGUge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzMjQ4ZjQ7XG59XG5cbi5za2lsbC10aXRsZS1jb2x1bW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0OSU7XG4gIG1hcmdpbi10b3A6IDIlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uZmxhZyB7XG4gIHdpZHRoOiA3JTtcbn1cblxuLmZsYWctdGl0bGUge1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLnNraWxsLXNldCBoMiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZy10b3A6IDEuNyU7XG4gIHBhZGRpbmctbGVmdDogMiU7XG59XG5cbi5tYWluLXNraWxscyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjQ4ZjQ7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWFpbi1za2lsbCB7XG4gIHdpZHRoOiAyNSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbiAgLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbiAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xufVxuXG4ubWFpbi1za2lsbDpob3ZlciB7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAvKiBJRSA5ICovXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLyogU2FmYXJpIDMtOCAqL1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xufVxuXG4ubWFpbi1za2lsbCBpbWcge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnRleHQtc2tpbGwge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IGxhcmdlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiA3JTtcbn1cblxuLnNraWxsLXBpY3R1cmUge1xuICBoZWlnaHQ6IDIwJTtcbiAgd2lkdGg6IDI1JTtcbiAgcGFkZGluZy10b3A6IDIwJTtcbiAgcGFkZGluZy1ib3R0b206IDEzJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jcmVjb25vY2ltaWVudG9zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5kZXNjcmlwdGlvbi1jYXJkIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYmFjay1jYXJkIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnJld2FyZCB7XG4gIHdpZHRoOiA0ZW07XG59XG5cbi5jYXJkIHtcbiAgaGVpZ2h0OiAxMiU7XG4gIHdpZHRoOiA4NiU7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBtYXJnaW4tbGVmdDogNyU7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG59XG5cbi5mcm9udCwgLmJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmNmYztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xuICBib3JkZXI6IGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgY29sb3I6IGJsYWNrO1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xuICBib3gtc2hhZG93OiAycHggNHB4IDhweCAxcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4ubGVmdC1jYXJkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogOTAlO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4ucmlnaHQtY2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwJTtcbn1cblxuLmJhY2sge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLmZyb250ID4gcCwgLmJhY2sgPiBwIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEyMHB4KTtcbn1cblxuLmNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLmV4cGVyaWVuY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMiU7XG59XG5cbi5wb3N0LWV4cGVyaWVuY2Uge1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubGVmdC1wb3N0IHtcbiAgbWFyZ2luLWxlZnQ6IDEzJTtcbiAgbWFyZ2luLXJpZ2h0OiA3JTtcbn1cblxuLnJpZ2h0LXBvc3Qge1xuICBtYXJnaW4tcmlnaHQ6IDIwJTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLnBvc3QtcGljdHVyZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRleHQtcG9zdCB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4jY29udGFjdG8ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5jb250YWN0LWxlZnQge1xuICB3aWR0aDogMzAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiA3JTtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5jb250YWN0LW1pbmkge1xuICBoZWlnaHQ6IDMzJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG59XG5cbi5jb250YWN0LW1pbmktbGVmdCB7XG4gIHdpZHRoOiAzMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNvbnRhY3QtbWluaS1yaWdodCB7XG4gIHdpZHRoOiA3MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy10b3A6IDQlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uY29udGFjdC1yaWdodCB7XG4gIHdpZHRoOiA2MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNvbnRhY3QtaWNvbiB7XG4gIHdpZHRoOiA2MCU7XG59XG5cbi5saW5rLWNvbnRhY3Qge1xuICBsaW5lLWhlaWdodDogMC41O1xufVxuXG5oMiB7XG4gIGxpbmUtaGVpZ2h0OiAwO1xufVxuXG4jZGFyay1mb3JtIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXG4gIGNvbG9yOiAjMzI0OGY0ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI0OGY0ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyNDhmNCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFjdC1mb3JtIHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIG1hcmdpbi1yaWdodDogMSU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLypcbiogY29yZSBzdHlsZXNcbiovXG4uc20tbGluayB7XG4gIC0tdWlzbUxpbmtEaXNwbGF5OiB2YXIoLS1zbUxpbmtEaXNwbGF5LCBpbmxpbmUtZmxleCk7XG4gIC0tdWlzbUxpbmtUZXh0Q29sb3I6IHZhcigtLXNtTGlua1RleHRDb2xvcik7XG4gIC0tdWlzbUxpbmtUZXh0Q29sb3JIb3ZlcjogdmFyKC0tc21MaW5rVGV4dENvbG9ySG92ZXIpO1xuICBkaXNwbGF5OiB2YXIoLS11aXNtTGlua0Rpc3BsYXkpO1xuICBjb2xvcjogdmFyKC0tdWlzbUxpbmtUZXh0Q29sb3IpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmEuc20tbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNtLWxpbmtfX2xhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIHNtLWxpbmtfcGFkZGluZy1hbGwgKi9cbi5zbS1saW5rX3BhZGRpbmctYWxsIHtcbiAgLS11aXNtTGlua0xpbmVXZWlnaHQ6IHZhcigtLXNtTGlua0xpbmVXZWlnaHQsIDJweCk7XG4gIC0tdWlzbUxpbmtMaW5lQ29sb3I6IHZhcigtLXNtTGlua0xpbmVDb2xvciwgIzAwMCk7XG4gIC0tdWlzbUxpbmtQYWRkaW5nOiB2YXIoLS1zbUxpbmtQYWRkaW5nLCA1cHgpO1xuICBwYWRkaW5nOiB2YXIoLS11aXNtTGlua1BhZGRpbmcpO1xufVxuXG4uc20tbGlua19wYWRkaW5nLWFsbDo6YmVmb3JlLFxuLnNtLWxpbmtfcGFkZGluZy1hbGw6OmFmdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogdmFyKC0tdWlzbUxpbmtMaW5lV2VpZ2h0KTtcbiAgbGVmdDogMDtcbn1cblxuLnNtLWxpbmtfcGFkZGluZy1hbGw6OmJlZm9yZSB7XG4gIHRvcDogMDtcbn1cblxuLnNtLWxpbmtfcGFkZGluZy1hbGw6OmFmdGVyIHtcbiAgYm90dG9tOiAwO1xufVxuXG4uc20tbGlua19wYWRkaW5nLWFsbCAuc20tbGlua19fbGFiZWw6OmJlZm9yZSxcbi5zbS1saW5rX3BhZGRpbmctYWxsIC5zbS1saW5rX19sYWJlbDo6YWZ0ZXIge1xuICB3aWR0aDogdmFyKC0tdWlzbUxpbmtMaW5lV2VpZ2h0KTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG59XG5cbi5zbS1saW5rX3BhZGRpbmctYWxsIC5zbS1saW5rX19sYWJlbDo6YmVmb3JlIHtcbiAgbGVmdDogMDtcbn1cblxuLnNtLWxpbmtfcGFkZGluZy1hbGwgLnNtLWxpbmtfX2xhYmVsOjphZnRlciB7XG4gIHJpZ2h0OiAwO1xufVxuXG4uc20tbGlua19wYWRkaW5nLWFsbDo6YmVmb3JlLFxuLnNtLWxpbmtfcGFkZGluZy1hbGw6OmFmdGVyLFxuLnNtLWxpbmtfcGFkZGluZy1hbGwgLnNtLWxpbmtfX2xhYmVsOjpiZWZvcmUsXG4uc20tbGlua19wYWRkaW5nLWFsbCAuc20tbGlua19fbGFiZWw6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWlzbUxpbmtMaW5lQ29sb3IpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbn1cblxuLnNtLWxpbmtfcGFkZGluZy1hbGw6aG92ZXI6OmJlZm9yZSxcbi5zbS1saW5rX3BhZGRpbmctYWxsOmhvdmVyOjphZnRlcixcbi5zbS1saW5rX3BhZGRpbmctYWxsOmhvdmVyIC5zbS1saW5rX19sYWJlbDo6YmVmb3JlLFxuLnNtLWxpbmtfcGFkZGluZy1hbGw6aG92ZXIgLnNtLWxpbmtfX2xhYmVsOjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIHNtLWxpbmtfcGFkZGluZy1ib3R0b20gKi9cbi5zbS1saW5rX3BhZGRpbmctYm90dG9tIHtcbiAgLS11aXNtTGlua0xpbmVXZWlnaHQ6IHZhcigtLXNtTGlua0xpbmVXZWlnaHQsIDJweCk7XG4gIC0tdWlzbUxpbmtMaW5lQ29sb3I6IHZhcigtLXNtTGlua0xpbmVDb2xvciwgIzAwMCk7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS11aXNtTGlua0xpbmVXZWlnaHQpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zbS1saW5rX3BhZGRpbmctYm90dG9tOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IHZhcigtLXVpc21MaW5rTGluZVdlaWdodCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVpc21MaW5rTGluZUNvbG9yKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG59XG5cbi8qIHNtLWxpbmtfYmcgKi9cbi5zbS1saW5rX2JnIHtcbiAgLS11aXNtTGlua0xpbmVDb2xvcjogdmFyKC0tc21MaW5rTGluZUNvbG9yLCAjMDAwKTtcbiAgLS11aXNtTGlua1RleHRDb2xvckhvdmVyOiB2YXIoLS1zbUxpbmtUZXh0Q29sb3JIb3ZlciwgI2ZmZik7XG4gIC0tdWlzbUxpbmtQYWRkaW5nOiB2YXIoLS1zbUxpbmtQYWRkaW5nLCA1cHgpO1xuICBwYWRkaW5nOiB2YXIoLS11aXNtTGlua1BhZGRpbmcpO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2Utb3V0O1xufVxuXG4uc20tbGlua19iZzo6YmVmb3JlLFxuLnNtLWxpbmtfYmc6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWlzbUxpbmtMaW5lQ29sb3IpO1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0LCBvcGFjaXR5IDAuMnMgZWFzZS1vdXQgMC4wM3M7XG59XG5cbi5zbS1saW5rX2JnIC5zbS1saW5rX19sYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cblxuLnNtLWxpbmtfYmc6aG92ZXI6OmJlZm9yZSxcbi5zbS1saW5rX2JnOmhvdmVyOjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzLCAwLjM1cztcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzO1xufVxuXG4uc20tbGlua19iZzpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS11aXNtTGlua1RleHRDb2xvckhvdmVyKTtcbn1cblxuLyogc20tbGlua190ZXh0ICovXG4uc20tbGlua190ZXh0OjpiZWZvcmUge1xuICBjb250ZW50OiBhdHRyKGRhdGEtc20tbGluay10ZXh0KTtcbiAgY29sb3I6IHZhcigtLXVpc21MaW5rVGV4dENvbG9ySG92ZXIpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5zbS1saW5rX3RleHQ6OmJlZm9yZSxcbi5zbS1saW5rX3RleHQgLnNtLWxpbmtfX2xhYmVsIHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuODYsIDAuNiwgMC4wOCwgMS4wMSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG59XG5cbi5zbS1saW5rX3RleHQ6aG92ZXI6OmJlZm9yZSxcbi5zbS1saW5rX3RleHQ6aG92ZXIgLnNtLWxpbmtfX2xhYmVsIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbn1cblxuLyogZWZmZWN0IDMgKi9cbi5zbS1saW5rMzo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcbn1cblxuLnNtLWxpbmszOmhvdmVyOjphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBNT0JJTEUgVklFV1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMyU7XG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcbiAgICB3aWR0aDogOTQlO1xuICAgIG1heC13aWR0aDogOTUlO1xuICB9XG5cbiAgLmhvbWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjQ4ZjQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5jb250YWluZXJfbmFtZSB7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLm5hbWUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDUwJTtcbiAgICBmb250LXNpemU6IDQuNWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNyU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICB9XG5cbiAgLmFib3V0LW1lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgfVxuXG4gIC5hYm91dC1waG90byB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgaGVpZ2h0OiAxMmVtO1xuICAgIHdpZHRoOiAxMmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IDAuMmVtIHNvbGlkIHdoaXRlO1xuICB9XG5cbiAgLmFib3V0LXRleHQge1xuICAgIG1hcmdpbi10b3A6IDYlO1xuICAgIHdpZHRoOiA4NiU7XG4gICAgbWFyZ2luLXJpZ2h0OiA3JTtcbiAgICBtYXJnaW4tbGVmdDogNyU7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgfVxuXG4gIC5hYm91dC1oZWxsbyB7XG4gICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBoZWlnaHQ6IDglO1xuICB9XG5cbiAgLmFib3V0LWRlc2NyaXB0aW9uIHtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgICBjb2xvcjogIzk2OTY5NjtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB9XG5cbiAgLmFib3V0LWRhdGEge1xuICAgIGhlaWdodDogMTUlO1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICBjb2xvcjogIzk2OTY5NjtcbiAgfVxuXG4gIC5hYm91dC1kYXRhLWxlZnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDUlO1xuICAgIG1hcmdpbi1ib3R0b206IDQlO1xuICB9XG5cbiAgLmFib3V0LWRhdGEtcmlnaHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDUlO1xuICB9XG5cbiAgLmFib3V0LWJ1dHRvbnMge1xuICAgIHBhZGRpbmctdG9wOiAyMiU7XG4gICAgaGVpZ2h0OiAzMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xuICAgIHBhZGRpbmc6IDMlIDMlO1xuICAgIG1hcmdpbi1ib3R0b206IDQlO1xuICB9XG5cbiAgLm1haW4tc2tpbGxzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI0OGY0O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiA0JTtcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAubWFpbi1za2lsbCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAubWFpbi1za2lsbCBpbWcge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC50ZXh0LXNraWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiA3JTtcbiAgICBmb250LXNpemU6IDAuOTRlbTtcbiAgfVxuXG4gIC5za2lsbC1waWN0dXJlIHtcbiAgICBoZWlnaHQ6IDdlbTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMyU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLnNraWxsLXRpdGxlLWNvbHVtbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA5OSU7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgfVxuXG4gIC5mbGFnIHtcbiAgICB3aWR0aDogNDclO1xuICB9XG5cbiAgLmZsYWctdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWluLXdpZHRoOiA4MCU7XG4gIH1cblxuICAjY29udGFjdG8ge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5jb250YWN0LWxlZnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogNyU7XG4gICAgbWFyZ2luLXRvcDogMiU7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgfVxuXG4gIC5jb250YWN0LW1pbmkge1xuICAgIGhlaWdodDogMzMlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG4gIH1cblxuICAuY29udGFjdC1taW5pLWxlZnQge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgLmNvbnRhY3QtbWluaS1yaWdodCB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZy10b3A6IDUlO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIH1cblxuICAuY29udGFjdC1yaWdodCB7XG4gICAgd2lkdGg6IDg2JTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDclO1xuICAgIG1hcmdpbi1yaWdodDogNyU7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gIH1cblxuICAuY29udGFjdC1pY29uIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG5cbiAgLnBvc3QtZXhwZXJpZW5jZSB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBtYXJnaW4tdG9wOiA4JTtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAjcmVjb25vY2ltaWVudG9zIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDE0MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbi1jYXJkIHtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5iYWNrLWNhcmQge1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG5cbiAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QmFuZ2Vyc1wiKTtcbiAgKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICAucmV3YXJkIHtcbiAgICB3aWR0aDogNGVtO1xuICB9XG5cbiAgLmZpcnN0X2NhcmQge1xuICAgIG1hcmdpbi10b3A6IC0xNSU7XG4gIH1cblxuICAuY2FyZCB7XG4gICAgaGVpZ2h0OiAxNiU7XG4gICAgd2lkdGg6IDg2JTtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB9XG5cbiAgLmJhY2sge1xuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgfVxuXG4gIC5sZWZ0LWNhcmQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogODAlO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIH1cblxuICAucmlnaHQtY2FyZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbn1cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBUQUJMRVQgVklFV1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI1cHgpIHtcbiAgLmJhY2sge1xuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RightTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-right-tab',
                templateUrl: './right-tab.component.html',
                styleUrls: ['./right-tab.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, null); })();
class DialogContentExampleDialog {
}
DialogContentExampleDialog.ɵfac = function DialogContentExampleDialog_Factory(t) { return new (t || DialogContentExampleDialog)(); };
DialogContentExampleDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogContentExampleDialog, selectors: [["dialog-content-example-dialog"]], decls: 9, vars: 0, consts: [[1, "popup-content"], [1, "popup-left"], ["src", "../../assets/images/t3f_icon_deg.png", 1, "popup-picture"], [1, "popup-right"], [1, "popup-text-post"], [1, "popup-text-description"]], template: function DialogContentExampleDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Voluntario evento tecnol\u00F3gico T3chfest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Voluntario en el T3chfest, la feria de inform\u00E1tica y nuevas tecnolog\u00EDas en la Universidad Carlos III de Madrid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".popup-content[_ngcontent-%COMP%]{\n    height: auto;\n    width: 500px;\n}\n\n.popup-left[_ngcontent-%COMP%]{\n    width: 50%;\n    display: inline-block;\n}\n\n.popup-right[_ngcontent-%COMP%]{\n    width: 50%;\n    display: inline-block;\n    vertical-align: top;\n    margin-top: 1%;\n}\n\n.popup-picture[_ngcontent-%COMP%]{\n    width: 70%;\n    border-radius: 5%;\n}\n.popup-text-post[_ngcontent-%COMP%]{\n    font-size: 2em;\n    font-weight: bold;\n    text-align: justify;\n}\n\n.popup-text-description[_ngcontent-%COMP%]{\n    margin-top: 6%;\n    text-align: justify;\n}\n\n\n\n@media only screen and (max-width: 600px){\n    .popup-content[_ngcontent-%COMP%]{\n        height: auto;\n        width: 250px;\n    }\n\n    .popup-left[_ngcontent-%COMP%]{\n        width: 100%;\n        display: inline-block;\n    }\n\n    .popup-right[_ngcontent-%COMP%]{\n        width: 100%;\n        display: inline-block;\n        vertical-align: top;\n        margin-top: 1%;\n    }\n \n    .popup-picture[_ngcontent-%COMP%]{\n        width: 100%;\n        border-radius: 5%;\n    }\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogContentExampleDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dialog-content-example-dialog',
                templateUrl: 'dialog-content-example-dialog.html',
            }]
    }], null, null); })();
class DialogContentExampleDialog2 {
}
DialogContentExampleDialog2.ɵfac = function DialogContentExampleDialog2_Factory(t) { return new (t || DialogContentExampleDialog2)(); };
DialogContentExampleDialog2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogContentExampleDialog2, selectors: [["dialog-content-example-dialog-2"]], decls: 9, vars: 0, consts: [[1, "popup-content"], [1, "popup-left"], ["src", "../../assets/images/uc3m.png", 1, "popup-picture"], [1, "popup-right"], [1, "popup-text-post"], [1, "popup-text-description"]], template: function DialogContentExampleDialog2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Profesor particular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ense\u00F1anza de mater\u00EDas STEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".popup-content[_ngcontent-%COMP%]{\n        height: auto;\n        width: 500px;\n    }\n    \n    .popup-left[_ngcontent-%COMP%]{\n        width: 50%;\n        display: inline-block;\n    }\n    \n    .popup-right[_ngcontent-%COMP%]{\n        width: 50%;\n        display: inline-block;\n        vertical-align: top;\n        margin-top: 1%;\n    }\n    \n    .popup-picture[_ngcontent-%COMP%]{\n        width: 70%;\n        border-radius: 5%;\n    }\n    .popup-text-post[_ngcontent-%COMP%]{\n        font-size: 2em;\n        font-weight: bold;\n        text-align: justify;\n    }\n    \n    .popup-text-description[_ngcontent-%COMP%]{\n        margin-top: 6%;\n        text-align: justify;\n    }\n\n    \n\n    @media only screen and (max-width: 600px){\n        .popup-content[_ngcontent-%COMP%]{\n            height: auto;\n            width: 250px;\n        } \n        .popup-picture[_ngcontent-%COMP%]{\n            width: 100%;\n            border-radius: 5%;\n        }\n\n        .popup-left[_ngcontent-%COMP%]{\n            width: 100%;\n            display: inline-block;\n        }\n\n        .popup-right[_ngcontent-%COMP%]{\n            width: 100%;\n            display: inline-block;\n            vertical-align: top;\n            margin-top: 1%;\n        }\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogContentExampleDialog2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dialog-content-example-dialog-2',
                templateUrl: 'dialog-content-example-dialog-2.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/speed-dial-fab/speed-dial-fab.animations.ts":
/*!*************************************************************!*\
  !*** ./src/app/speed-dial-fab/speed-dial-fab.animations.ts ***!
  \*************************************************************/
/*! exports provided: speedDialFabAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "speedDialFabAnimations", function() { return speedDialFabAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const speedDialFabAnimations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fabToggler', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'rotate(0deg)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'rotate(225deg)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('speedDialStagger', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('40ms', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(10px)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)' }),
                ]))
            ]), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
            ])), { optional: true })
        ])
    ])
];


/***/ }),

/***/ "./src/app/speed-dial-fab/speed-dial-fab.component.ts":
/*!************************************************************!*\
  !*** ./src/app/speed-dial-fab/speed-dial-fab.component.ts ***!
  \************************************************************/
/*! exports provided: SpeedDialFabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeedDialFabComponent", function() { return SpeedDialFabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _speed_dial_fab_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speed-dial-fab.animations */ "./src/app/speed-dial-fab/speed-dial-fab.animations.ts");
/* harmony import */ var _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../left-tab/left-tab.component */ "./src/app/left-tab/left-tab.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








function SpeedDialFabComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpeedDialFabComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [""]; };
function SpeedDialFabComponent_button_6_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const btn_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fragment", btn_r8.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](btn_r8.icon);
} }
function SpeedDialFabComponent_button_6_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpeedDialFabComponent_button_6_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const btn_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](btn_r8.icon);
} }
function SpeedDialFabComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpeedDialFabComponent_button_6_a_1_Template, 3, 4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SpeedDialFabComponent_button_6_a_2_Template, 3, 1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const btn_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", btn_r8.icon != "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", btn_r8.icon == "settings");
} }
const _c1 = function (a0) { return { value: a0 }; };
class SpeedDialFabComponent {
    constructor(leftTab) {
        this.leftTab = leftTab;
        this.buttons = [];
        this.fabTogglerState = 'inactive';
    }
    ngOnInit() {
        const maxButtons = 7;
        if (this.options.buttons.length > maxButtons) {
            this.options.buttons.splice(5, this.options.buttons.length - maxButtons);
        }
    }
    open() {
        this.leftTab.openNav();
    }
    showItems() {
        this.fabTogglerState = 'active';
        this.buttons = this.options.buttons;
    }
    hideItems() {
        this.fabTogglerState = 'inactive';
        this.buttons = [];
    }
    toggle() {
        this.buttons.length
            ? this.hideItems()
            : this.showItems();
    }
}
SpeedDialFabComponent.ɵfac = function SpeedDialFabComponent_Factory(t) { return new (t || SpeedDialFabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_2__["LeftTabComponent"])); };
SpeedDialFabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpeedDialFabComponent, selectors: [["app-speed-dial-fab"]], inputs: { options: "options" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_2__["LeftTabComponent"]])], decls: 7, vars: 6, consts: [["id", "fab-dismiss", 3, "click", 4, "ngIf"], [1, "fab-container"], ["mat-fab", "", "color", "warn", 1, "fab-toggler", 3, "click"], [1, "material-icons"], ["mat-mini-fab", "", "class", "fab-secondary", "color", "secondary", 4, "ngFor", "ngForOf"], ["id", "fab-dismiss", 3, "click"], ["mat-mini-fab", "", "color", "secondary", 1, "fab-secondary"], [3, "routerLink", "fragment", 4, "ngIf"], [3, "click", 4, "ngIf"], [3, "routerLink", "fragment"], [3, "click"]], template: function SpeedDialFabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpeedDialFabComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpeedDialFabComponent_Template_button_click_2_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SpeedDialFabComponent_button_6_Template, 3, 2, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fabTogglerState === "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fabToggler", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.fabTogglerState));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@speedDialStagger", ctx.buttons.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.buttons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".fab-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  z-index: 100;\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n}\n.fab-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  margin-bottom: 5px;\n}\n.fab-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-bottom: 17px;\n}\n.fab-toggler[_ngcontent-%COMP%] {\n  float: right;\n  z-index: 100;\n}\n#fab-dismiss[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 99;\n}\na[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpb2xvemFub2NvcnRlcy9Vbml2ZXJzaWRhZCBMb2NhbC9Mb3phbm9XZWJQYWdlL3NyYy9hcHAvc3BlZWQtZGlhbC1mYWIvc3BlZWQtZGlhbC1mYWIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NwZWVkLWRpYWwtZmFiL3NwZWVkLWRpYWwtZmFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURDSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDTjtBRENNO0VBQ0UsbUJBQUE7QUNDUjtBRElFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNESjtBRElFO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDREo7QURJRTtFQUNFLFlBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3NwZWVkLWRpYWwtZmFiL3NwZWVkLWRpYWwtZmFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhYi1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDE1cHg7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgei1pbmRleDogMTAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIFxuICAgID4gZGl2IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuZmFiLXRvZ2dsZXIge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB6LWluZGV4OiAxMDA7XG4gIH1cbiAgXG4gICNmYWItZGlzbWlzcyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB6LWluZGV4OiA5OTtcbiAgfVxuXG4gIGF7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gICAgIiwiLmZhYi1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZhYi1jb250YWluZXIgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5mYWItY29udGFpbmVyID4gZGl2IGJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDE3cHg7XG59XG5cbi5mYWItdG9nZ2xlciB7XG4gIGZsb2F0OiByaWdodDtcbiAgei1pbmRleDogMTAwO1xufVxuXG4jZmFiLWRpc21pc3Mge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogOTk7XG59XG5cbmEge1xuICBjb2xvcjogYmxhY2s7XG59Il19 */"], data: { animation: _speed_dial_fab_animations__WEBPACK_IMPORTED_MODULE_1__["speedDialFabAnimations"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpeedDialFabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-speed-dial-fab',
                templateUrl: './speed-dial-fab.component.html',
                styleUrls: ['./speed-dial-fab.component.scss'],
                providers: [_left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_2__["LeftTabComponent"]],
                animations: _speed_dial_fab_animations__WEBPACK_IMPORTED_MODULE_1__["speedDialFabAnimations"]
            }]
    }], function () { return [{ type: _left_tab_left_tab_component__WEBPACK_IMPORTED_MODULE_2__["LeftTabComponent"] }]; }, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/tab-header/tab-header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/tab-header/tab-header.component.ts ***!
  \****************************************************/
/*! exports provided: TabHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabHeaderComponent", function() { return TabHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TabHeaderComponent {
    constructor() {
        this.header = document.getElementsByClassName("header");
    }
    ngOnInit() {
    }
    toDark() {
        for (var i = 0, len = this.header.length; i < len; i++) {
            this.header[i].style.color = "#FFFFFF";
        }
    }
    toLight() {
        for (var i = 0, len = this.header.length; i < len; i++) {
            this.header[i].style.color = "black";
        }
    }
}
TabHeaderComponent.ɵfac = function TabHeaderComponent_Factory(t) { return new (t || TabHeaderComponent)(); };
TabHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabHeaderComponent, selectors: [["app-tab-header"]], inputs: { parentData: "parentData" }, decls: 3, vars: 1, consts: [[1, "header"], [1, "underline--magical"]], template: function TabHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.parentData);
    } }, styles: [".header[_ngcontent-%COMP%] {\n  height: 10%;\n  font-weight: bold;\n  font-size: xx-large;\n  color: black;\n  padding-top: 7%;\n  padding-left: 7%;\n}\n\n.underline--magical[_ngcontent-%COMP%] {\n  background-image: linear-gradient(120deg, #3248F4 0%, #8fd3f4 100%);\n  background-repeat: no-repeat;\n  background-size: 100% 0.2em;\n  background-position: 0 88%;\n  transition: background-size 0.25s ease-in;\n}\n\n.underline--magical[_ngcontent-%COMP%]:hover {\n  background-size: 100% 88%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpb2xvemFub2NvcnRlcy9Vbml2ZXJzaWRhZCBMb2NhbC9Mb3phbm9XZWJQYWdlL3NyYy9hcHAvdGFiLWhlYWRlci90YWItaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90YWItaGVhZGVyL3RhYi1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHQTtFQUNJLG1FQUFBO0VBRUEsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUNBQUE7QUNESjs7QURFSTtFQUNFLHlCQUFBO0FDQU4iLCJmaWxlIjoic3JjL2FwcC90YWItaGVhZGVyL3RhYi1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xuICAgIGhlaWdodDogMTAlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmctdG9wOiA3JTtcbiAgICBwYWRkaW5nLWxlZnQ6IDclO1xufVxuXG4vL0FuaW1hdGlvbnMgZm9yIHRoZSB1bmRlcmxpbmVkIGVsZW1lbnRzXG4udW5kZXJsaW5lLS1tYWdpY2FsIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjMzI0OEY0IDAlLCAjOGZkM2Y0IDEwMCUpO1xuICAgIC8vYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgIzMyNDhGNCAwJSwgI0ZGMDExRCAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAwLjJlbTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDg4JTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXNpemUgMC4yNXMgZWFzZS1pbjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSA4OCU7XG4gICAgfVxuICB9XG5cbiIsIi5oZWFkZXIge1xuICBoZWlnaHQ6IDEwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZy10b3A6IDclO1xuICBwYWRkaW5nLWxlZnQ6IDclO1xufVxuXG4udW5kZXJsaW5lLS1tYWdpY2FsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgIzMyNDhGNCAwJSwgIzhmZDNmNCAxMDAlKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDAuMmVtO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDg4JTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1zaXplIDAuMjVzIGVhc2UtaW47XG59XG4udW5kZXJsaW5lLS1tYWdpY2FsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDg4JTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tab-header',
                templateUrl: './tab-header.component.html',
                styleUrls: ['./tab-header.component.scss']
            }]
    }], function () { return []; }, { parentData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/timeline/timeline.component.ts":
/*!************************************************!*\
  !*** ./src/app/timeline/timeline.component.ts ***!
  \************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TimelineComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
TimelineComponent.ɵfac = function TimelineComponent_Factory(t) { return new (t || TimelineComponent)(); };
TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimelineComponent, selectors: [["app-timeline"]], decls: 40, vars: 0, consts: [[1, "timeline"], [1, "timeline-event"], [1, "timeline-event-icon"], [1, "timeline-event-copy"], [1, "timeline-event-thumbnail"]], template: function TimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "2017 - 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Universidad Carlos III de Madrid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legan\u00E9s-Madrid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Grado en Ingenier\u00EDa Inform\u00E1tica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Menci\u00F3n en computaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "2019 - 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Erasmus en KU Leuven");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Aprend\u00ED Romanche");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Konzeption, Design und Produktion von Digitalen MagaCo-Autorin der Fachb\u00FCcgital Publishing Suite\" erschienen im dpunkt.verlag.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "2015 - 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Colegio Goyi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Aranjuez-Madrid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Matricula de honor en M\u00FAsica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Delegado de clase en 2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,700);\n\n\nbody[_ngcontent-%COMP%] {\n  font-size: 1em;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: 0.05em;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.timeline[_ngcontent-%COMP%] {\n  margin: 4em auto;\n  position: relative;\n  max-width: 46em;\n}\n.timeline[_ngcontent-%COMP%]:before {\n  background-color: black;\n  content: \"\";\n  margin-left: -1px;\n  position: absolute;\n  top: 0;\n  left: 2em;\n  width: 2px;\n  height: 100%;\n}\n.timeline-event[_ngcontent-%COMP%] {\n  position: relative;\n}\n.timeline-event[_ngcontent-%COMP%]:hover   .timeline-event-icon[_ngcontent-%COMP%] {\n  transform: rotate(-45deg);\n  background-color: #3248f4;\n}\n.timeline-event[_ngcontent-%COMP%]:hover   .timeline-event-thumbnail[_ngcontent-%COMP%] {\n  box-shadow: inset 40em 0 0 0 #3248f4;\n}\n.timeline-event-copy[_ngcontent-%COMP%] {\n  padding: 2em;\n  position: relative;\n  top: -1.875em;\n  left: 4em;\n  width: 80%;\n}\n.timeline-event-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.75em;\n}\n.timeline-event-copy[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  margin-bottom: 1.2em;\n}\n.timeline-event-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.timeline-event-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(.timeline-event-thumbnail) {\n  padding-bottom: 1.2em;\n}\n.timeline-event-icon[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease-in;\n  transform: rotate(45deg);\n  background-color: black;\n  outline: 10px solid white;\n  display: block;\n  margin: 0.5em 0.5em 0.5em -0.5em;\n  position: absolute;\n  top: 0;\n  left: 2em;\n  width: 1em;\n  height: 1em;\n}\n.timeline-event-thumbnail[_ngcontent-%COMP%] {\n  -webkit-transition: box-shadow 0.5s ease-in;\n  -webkit-transition-delay: 0.1s;\n  transition: box-shadow 0.5s ease-in 0.1s;\n  color: white;\n  font-size: 0.75em;\n  background-color: black;\n  box-shadow: inset 0 0 0 0em #3248f4;\n  display: inline-block;\n  margin-bottom: 1.2em;\n  padding: 0.25em 1em 0.2em 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpb2xvemFub2NvcnRlcy9Vbml2ZXJzaWRhZCBMb2NhbC9Mb3phbm9XZWJQYWdlL3NyYy9hcHAvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21hcmlvbG96YW5vY29ydGVzL1VuaXZlcnNpZGFkIExvY2FsL0xvemFub1dlYlBhZ2Uvbm9kZV9tb2R1bGVzL2NvbXBhc3MtbWl4aW5zL2xpYi9jb21wYXNzL2NzczMvX3NoYXJlZC5zY3NzIiwiL1VzZXJzL21hcmlvbG96YW5vY29ydGVzL1VuaXZlcnNpZGFkIExvY2FsL0xvemFub1dlYlBhZ2Uvbm9kZV9tb2R1bGVzL2NvbXBhc3MtbWl4aW5zL2xpYi9jb21wYXNzL2NzczMvX2JveC1zaXppbmcuc2NzcyIsIi9Vc2Vycy9tYXJpb2xvemFub2NvcnRlcy9Vbml2ZXJzaWRhZCBMb2NhbC9Mb3phbm9XZWJQYWdlL25vZGVfbW9kdWxlcy9jb21wYXNzLW1peGlucy9saWIvY29tcGFzcy9jc3MzL190cmFuc2Zvcm0uc2NzcyIsIi9Vc2Vycy9tYXJpb2xvemFub2NvcnRlcy9Vbml2ZXJzaWRhZCBMb2NhbC9Mb3phbm9XZWJQYWdlL25vZGVfbW9kdWxlcy9jb21wYXNzLW1peGlucy9saWIvY29tcGFzcy9jc3MzL19ib3gtc2hhZG93LnNjc3MiLCIvVXNlcnMvbWFyaW9sb3phbm9jb3J0ZXMvVW5pdmVyc2lkYWQgTG9jYWwvTG96YW5vV2ViUGFnZS9ub2RlX21vZHVsZXMvY29tcGFzcy1taXhpbnMvbGliL2NvbXBhc3MvY3NzMy9fdHJhbnNpdGlvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFRUSxzRUFBQTtBQU5SLGNBQUE7QUFLQSxVQUFBO0FBRUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDTEY7QURRQSxXQUFBO0FBQ0E7RUVFaUUsc0JDWDFEO0FGT1A7QURNQSxZQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0hGO0FES0U7RUFDRSx1QkF6Qk07RUEwQk4sV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDSEo7QURPQTtFQUNFLGtCQUFBO0FDSkY7QURRSTtFRXpCNkQseUJFNlN2RDtFSmxSSix5QkF6Q0k7QUN1Q1Y7QURLSTtFRTlCNkQsb0NHMEJyRDtBSklaO0FETUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNIRjtBREtFO0VBQ0UsaUJBQUE7QUNISjtBRE1FO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtBQ0pKO0FET0U7RUFDRSxnQkFBQTtBQ0xKO0FEUUU7RUFDRSxxQkFBQTtBQ05KO0FEVUE7RU00RzBELGtDQXJDdkM7RUpwSThDLHdCRTZTdkQ7RUo1T1IsdUJBakZRO0VBa0ZSLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDREY7QURJQTtFTXdGa0QsMkNBTC9CO0VBT3lCLDhCQVQvQjtFQVk2Qyx3Q0FyQ3ZDO0VOdERqQixZQTdGUTtFQThGUixpQkFBQTtFQUVBLHVCQWpHUTtFRWdCdUQsbUNHMEJyRDtFTHlEVixxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfmNvbXBhc3MtbWl4aW5zL2xpYi9jb21wYXNzL2NzczMnO1xuXG4vKiBWYXJpYWJsZXMgKi9cbiRjb2xvci0xOiBibGFjaztcbiRjb2xvci0yOiB3aGl0ZTtcbiRjb2xvci0zOiByZ2IoNTAsIDcyLCAyNDQpO1xuXG4vKiBGb250cyAqL1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczozMDAsNzAwKTtcbmJvZHkge1xuICBmb250LXNpemU6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbn1cblxuLyogTGF5b3V0ICovXG4qIHtcbiAgQGluY2x1ZGUgYm94LXNpemluZyhib3JkZXItYm94KTtcbn1cblxuLyogU3R5bGluZyAqL1xuLnRpbWVsaW5lIHtcbiAgbWFyZ2luOiA0ZW0gYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDQ2ZW07XG4gIFxuICAmOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLTE7XG4gICAgY29udGVudDogJyc7XG4gICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAyZW07XG4gICAgd2lkdGg6IDJweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cblxuLnRpbWVsaW5lLWV2ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbiAgJjpob3ZlciB7XG4gIFxuICAgIC50aW1lbGluZS1ldmVudC1pY29uIHtcbiAgICAgIEBpbmNsdWRlIHJvdGF0ZSAoLTQ1ZGVnKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci0zO1xuICAgIH1cbiAgICBcbiAgICAudGltZWxpbmUtZXZlbnQtdGh1bWJuYWlsIHtcbiAgICAgIEBpbmNsdWRlIGJveC1zaGFkb3coaW5zZXQgNDBlbSAwIDAgMCAkY29sb3ItMyk7XG4gICAgfVxuICB9XG59XG5cbi50aW1lbGluZS1ldmVudC1jb3B5IHtcbiAgcGFkZGluZzogMmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEuODc1ZW07XG4gIGxlZnQ6IDRlbTtcbiAgd2lkdGg6IDgwJTtcbiAgXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDEuNzVlbTtcbiAgfVxuICBcbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yZW07XG4gIH1cbiAgXG4gIHN0cm9uZyB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuICBcbiAgcDpub3QoLnRpbWVsaW5lLWV2ZW50LXRodW1ibmFpbCkge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjJlbTtcbiAgfVxufVxuXG4udGltZWxpbmUtZXZlbnQtaWNvbiB7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24odHJhbnNmb3JtIDAuMnMgZWFzZS1pbik7XG4gIEBpbmNsdWRlIHJvdGF0ZSAoNDVkZWcpO1xuICBcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLTE7XG4gIG91dGxpbmU6IDEwcHggc29saWQgJGNvbG9yLTI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAuNWVtIDAuNWVtIDAuNWVtIC0wLjVlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDJlbTtcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiAxZW07XG59XG5cbi50aW1lbGluZS1ldmVudC10aHVtYm5haWwge1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKGJveC1zaGFkb3cgMC41cyBlYXNlLWluIDAuMXMpO1xuICBjb2xvcjogJGNvbG9yLTI7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xuICBcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLTE7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coaW5zZXQgMCAwIDAgMGVtIHJnYig1MCwgNzIsIDI0NCkpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDEuMmVtO1xuICBwYWRkaW5nOiAwLjI1ZW0gMWVtIDAuMmVtIDFlbTtcbn0iLCIvKiBWYXJpYWJsZXMgKi9cbi8qIEZvbnRzICovXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjMwMCw3MDApO1xuYm9keSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xufVxuXG4vKiBMYXlvdXQgKi9cbioge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogU3R5bGluZyAqL1xuLnRpbWVsaW5lIHtcbiAgbWFyZ2luOiA0ZW0gYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDQ2ZW07XG59XG4udGltZWxpbmU6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMmVtO1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50aW1lbGluZS1ldmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50aW1lbGluZS1ldmVudDpob3ZlciAudGltZWxpbmUtZXZlbnQtaWNvbiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyNDhmNDtcbn1cbi50aW1lbGluZS1ldmVudDpob3ZlciAudGltZWxpbmUtZXZlbnQtdGh1bWJuYWlsIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCA0MGVtIDAgMCAwICMzMjQ4ZjQ7XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgNDBlbSAwIDAgMCAjMzI0OGY0O1xuICBib3gtc2hhZG93OiBpbnNldCA0MGVtIDAgMCAwICMzMjQ4ZjQ7XG59XG5cbi50aW1lbGluZS1ldmVudC1jb3B5IHtcbiAgcGFkZGluZzogMmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEuODc1ZW07XG4gIGxlZnQ6IDRlbTtcbiAgd2lkdGg6IDgwJTtcbn1cbi50aW1lbGluZS1ldmVudC1jb3B5IGgzIHtcbiAgZm9udC1zaXplOiAxLjc1ZW07XG59XG4udGltZWxpbmUtZXZlbnQtY29weSBoNCB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbi1ib3R0b206IDEuMmVtO1xufVxuLnRpbWVsaW5lLWV2ZW50LWNvcHkgc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi50aW1lbGluZS1ldmVudC1jb3B5IHA6bm90KC50aW1lbGluZS1ldmVudC10aHVtYm5haWwpIHtcbiAgcGFkZGluZy1ib3R0b206IDEuMmVtO1xufVxuXG4udGltZWxpbmUtZXZlbnQtaWNvbiB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycyBlYXNlLWluO1xuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcbiAgLW8tdHJhbnNpdGlvbjogLW8tdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG91dGxpbmU6IDEwcHggc29saWQgd2hpdGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAuNWVtIDAuNWVtIDAuNWVtIC0wLjVlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDJlbTtcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiAxZW07XG59XG5cbi50aW1lbGluZS1ldmVudC10aHVtYm5haWwge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cyBlYXNlLWluO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XG4gIC1tb3otdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzIGVhc2UtaW4gMC4xcztcbiAgLW8tdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzIGVhc2UtaW4gMC4xcztcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzIGVhc2UtaW4gMC4xcztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDAuNzVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMGVtICMzMjQ4ZjQ7XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMGVtICMzMjQ4ZjQ7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDBlbSAjMzI0OGY0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDEuMmVtO1xuICBwYWRkaW5nOiAwLjI1ZW0gMWVtIDAuMmVtIDFlbTtcbn0iLCJAaW1wb3J0IFwiLi4vc3VwcG9ydFwiO1xuXG4vLyBUaGlzIG1peGluIHByb3ZpZGVzIGJhc2ljIHN1cHBvcnQgZm9yIENTUzMgcHJvcGVydGllcyBhbmRcbi8vIHRoZWlyIGNvcnJlc3BvbmRpbmcgZXhwZXJpbWVudGFsIENTUzIgcHJvcGVydGllcyB3aGVuXG4vLyB0aGUgaW1wbGVtZW50YXRpb25zIGFyZSBpZGVudGljYWwgZXhjZXB0IGZvciB0aGUgcHJvcGVydHlcbi8vIHByZWZpeC5cbkBtaXhpbiBleHBlcmltZW50YWwoJHByb3BlcnR5LCAkdmFsdWUsXG4gICRtb3ogICAgICA6ICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3ItbW96aWxsYSxcbiAgJHdlYmtpdCAgIDogJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci13ZWJraXQsXG4gICRvICAgICAgICA6ICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Itb3BlcmEsXG4gICRtcyAgICAgICA6ICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3ItbWljcm9zb2Z0LFxuICAka2h0bWwgICAgOiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLWtodG1sLFxuICAkb2ZmaWNpYWwgOiB0cnVlXG4pIHtcbiAgQGlmICR3ZWJraXQgIGFuZCAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLXdlYmtpdCAgICB7IC13ZWJraXQtI3skcHJvcGVydHl9IDogJHZhbHVlOyB9XG4gIEBpZiAka2h0bWwgICBhbmQgJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1raHRtbCAgICAgeyAgLWtodG1sLSN7JHByb3BlcnR5fSA6ICR2YWx1ZTsgfVxuICBAaWYgJG1veiAgICAgYW5kICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3ItbW96aWxsYSAgIHsgICAgLW1vei0jeyRwcm9wZXJ0eX0gOiAkdmFsdWU7IH1cbiAgQGlmICRtcyAgICAgIGFuZCAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW1pY3Jvc29mdCB7ICAgICAtbXMtI3skcHJvcGVydHl9IDogJHZhbHVlOyB9XG4gIEBpZiAkbyAgICAgICBhbmQgJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1vcGVyYSAgICAgeyAgICAgIC1vLSN7JHByb3BlcnR5fSA6ICR2YWx1ZTsgfVxuICBAaWYgJG9mZmljaWFsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgICAgICAgICAjeyRwcm9wZXJ0eX0gOiAkdmFsdWU7IH1cbn1cblxuLy8gU2FtZSBhcyBleHBlcmltZW50YWwoKSwgYnV0IGZvciBjYXNlcyB3aGVuIHRoZSBwcm9wZXJ0eSBpcyB0aGUgc2FtZSBhbmQgdGhlIHZhbHVlIGlzIHZlbmRvcml6ZWRcbkBtaXhpbiBleHBlcmltZW50YWwtdmFsdWUoJHByb3BlcnR5LCAkdmFsdWUsXG4gICRtb3ogICAgICA6ICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3ItbW96aWxsYSxcbiAgJHdlYmtpdCAgIDogJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci13ZWJraXQsXG4gICRvICAgICAgICA6ICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Itb3BlcmEsXG4gICRtcyAgICAgICA6ICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3ItbWljcm9zb2Z0LFxuICAka2h0bWwgICAgOiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLWtodG1sLFxuICAkb2ZmaWNpYWwgOiB0cnVlXG4pIHtcbiAgQGlmICR3ZWJraXQgIGFuZCAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLXdlYmtpdCAgICB7ICN7JHByb3BlcnR5fSA6IC13ZWJraXQtI3skdmFsdWV9OyB9XG4gIEBpZiAka2h0bWwgICBhbmQgJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1raHRtbCAgICAgeyAjeyRwcm9wZXJ0eX0gOiAgLWtodG1sLSN7JHZhbHVlfTsgfVxuICBAaWYgJG1veiAgICAgYW5kICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3ItbW96aWxsYSAgIHsgI3skcHJvcGVydHl9IDogICAgLW1vei0jeyR2YWx1ZX07IH1cbiAgQGlmICRtcyAgICAgIGFuZCAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLW1pY3Jvc29mdCB7ICN7JHByb3BlcnR5fSA6ICAgICAtbXMtI3skdmFsdWV9OyB9XG4gIEBpZiAkbyAgICAgICBhbmQgJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1vcGVyYSAgICAgeyAjeyRwcm9wZXJ0eX0gOiAgICAgIC1vLSN7JHZhbHVlfTsgfVxuICBAaWYgJG9mZmljaWFsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgI3skcHJvcGVydHl9IDogICAgICAgICAjeyR2YWx1ZX07IH1cbn1cbiIsIkBpbXBvcnQgXCJzaGFyZWRcIjtcblxuLy8gQ2hhbmdlIHRoZSBib3ggbW9kZWwgZm9yIE1vemlsbGEsIFdlYmtpdCwgSUU4IGFuZCB0aGUgZnV0dXJlXG4vL1xuLy8gQHBhcmFtICRic1xuLy8gICBbIGNvbnRlbnQtYm94IHwgYm9yZGVyLWJveCBdXG5cbkBtaXhpbiBib3gtc2l6aW5nKCRicykge1xuICAkYnM6IHVucXVvdGUoJGJzKTtcbiAgQGluY2x1ZGUgZXhwZXJpbWVudGFsKGJveC1zaXppbmcsICRicyxcbiAgICAtbW96LCAtd2Via2l0LCBub3QoLW8pLCBub3QoLW1zKSwgbm90KC1raHRtbCksIG9mZmljaWFsXG4gICk7XG59XG4iLCJAaW1wb3J0IFwic2hhcmVkXCI7XG5cbi8vIEBkb2Mgb2ZmXG4vLyBOb3RlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNhZmFyaSwgQ2hyb21lLCBhbmQgRmlyZWZveCBhbGwgc3VwcG9ydCAzRCB0cmFuc2Zvcm1zLiBIb3dldmVyLFxuLy8gb25seSBpbiB0aGUgbW9zdCByZWNlbnQgYnVpbGRzLiBZb3Ugc2hvdWxkIGFsc28gcHJvdmlkZSBmYWxsYmFjayAyZCBzdXBwb3J0IGZvclxuLy8gT3BlcmEgYW5kIElFLiBJRTEwIGlzIHNsYXRlZCB0byBoYXZlIDNkIGVuYWJsZWQsIGJ1dCBpcyBjdXJyZW50bHkgdW5yZWxlYXNlZC5cbi8vIFRvIG1ha2UgdGhhdCBlYXN5LCBhbGwgMkQgdHJhbnNmb3JtcyBpbmNsdWRlIGFuIGJyb3dzZXItdGFyZ2V0aW5nIHRvZ2dsZSAoJG9ubHkzZClcbi8vIHRvIHN3aXRjaCBiZXR3ZWVuIHRoZSB0d28gc3VwcG9ydCBsaXN0cy4gVGhlIHRvZ2dsZSBkZWZhdWx0cyB0byAnZmFsc2UnICgyRCksXG4vLyBhbmQgYWxzbyBhY2NlcHRzICd0cnVlJyAoM0QpLiBDdXJyZW50bHkgdGhlIGxpc3RzIGFyZSBhcyBmb2xsb3dzOlxuLy8gMkQ6IE1vemlsbGEsIFdlYmtpdCwgT3BlcmEsIE9mZmljaWFsXG4vLyAzRDogV2Via2l0LCBGaXJlZm94LlxuXG4vLyBBdmFpbGFibGUgVHJhbnNmb3JtcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0gU2NhbGUgKDJkIGFuZCAzZClcbi8vIC0gUm90YXRlICgyZCBhbmQgM2QpXG4vLyAtIFRyYW5zbGF0ZSAoMmQgYW5kIDNkKVxuLy8gLSBTa2V3ICgyZCBvbmx5KVxuXG4vLyBUcmFuc2Zvcm0gUGFyYW1ldGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIC0gVHJhbnNmb3JtIE9yaWdpbiAoMmQgYW5kIDNkKVxuLy8gLSBQZXJzcGVjdGl2ZSAoM2QpXG4vLyAtIFBlcnNwZWN0aXZlIE9yaWdpbiAoM2QpXG4vLyAtIFRyYW5zZm9ybSBTdHlsZSAoM2QpXG4vLyAtIEJhY2tmYWNlIFZpc2liaWxpdHkgKDNkKVxuXG4vLyBNaXhpbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHRyYW5zZm9ybS1vcmlnaW5cbi8vICAtIHNob3J0Y3V0czogIHRyYW5zZm9ybS1vcmlnaW4yZCwgdHJhbnNmb3JtLW9yaWdpbjNkXG4vLyAgLSBoZWxwZXJzOiAgICBhcHBseS1vcmlnaW5cbi8vIHRyYW5zZm9ybVxuLy8gIC0gc2hvcnRjdXRzOiAgdHJhbnNmb3JtMmQsIHRyYW5zZm9ybTNkXG4vLyAgLSBoZWxwZXJzOiAgICBzaW1wbGUtdHJhbnNmb3JtLCBjcmVhdGUtdHJhbnNmb3JtXG4vLyBwZXJzcGVjdGl2ZVxuLy8gIC0gaGVscGVyczogICAgcGVyc3BlY3RpdmUtb3JpZ2luXG4vLyB0cmFuc2Zvcm0tc3R5bGVcbi8vIGJhY2tmYWNlLXZpc2liaWxpdHlcbi8vIHNjYWxlXG4vLyAgLSBzaG9ydGN1dHM6ICBzY2FsZVgsIHNjYWxlWSwgc2NhbGVaLCBzY2FsZTNkXG4vLyByb3RhdGVcbi8vICAtIHNob3J0Y3V0czogIHJvdGF0ZVgsIHJvdGF0ZVksIHJvdGF0ZTNkXG4vLyB0cmFuc2xhdGVcbi8vICAtIHNob3J0Y3V0czogIHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVksIHRyYW5zbGF0ZVosIHRyYW5zbGF0ZTNkXG4vLyBza2V3XG4vLyAgLSBzaG9ydGN1dHM6ICBza2V3WCwgc2tld1lcblxuLy8gRGVmYXVsdHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBAZG9jIG9uXG5cbi8vIFRoZSBkZWZhdWx0IHgtb3JpZ2luIGZvciB0cmFuc2Zvcm1zXG4kZGVmYXVsdC1vcmlnaW4teCAgICA6IDUwJSAgICAgICAgICAgICAgICAgICAhZGVmYXVsdDtcbi8vIFRoZSBkZWZhdWx0IHktb3JpZ2luIGZvciB0cmFuc2Zvcm1zXG4kZGVmYXVsdC1vcmlnaW4teSAgICA6IDUwJSAgICAgICAgICAgICAgICAgICAhZGVmYXVsdDtcbi8vIFRoZSBkZWZhdWx0IHotb3JpZ2luIGZvciB0cmFuc2Zvcm1zXG4kZGVmYXVsdC1vcmlnaW4teiAgICA6IDUwJSAgICAgICAgICAgICAgICAgICAhZGVmYXVsdDtcblxuXG4vLyBUaGUgZGVmYXVsdCB4LW11bHRpcGxpZXIgZm9yIHNjYWxpbmdcbiRkZWZhdWx0LXNjYWxlLXggICAgIDogMS4yNSAgICAgICAgICAgICAgICAgICFkZWZhdWx0O1xuLy8gVGhlIGRlZmF1bHQgeS1tdWx0aXBsaWVyIGZvciBzY2FsaW5nXG4kZGVmYXVsdC1zY2FsZS15ICAgICA6ICRkZWZhdWx0LXNjYWxlLXggICAgICAhZGVmYXVsdDtcbi8vIFRoZSBkZWZhdWx0IHotbXVsdGlwbGllciBmb3Igc2NhbGluZ1xuJGRlZmF1bHQtc2NhbGUteiAgICAgOiAkZGVmYXVsdC1zY2FsZS14ICAgICAgIWRlZmF1bHQ7XG5cblxuLy8gVGhlIGRlZmF1bHQgYW5nbGUgZm9yIHJvdGF0aW9uc1xuJGRlZmF1bHQtcm90YXRlICAgICAgOiA0NWRlZyAgICAgICAgICAgICAgICAgIWRlZmF1bHQ7XG5cblxuLy8gVGhlIGRlZmF1bHQgeC12ZWN0b3IgZm9yIHRoZSBheGlzIG9mIDNkIHJvdGF0aW9uc1xuJGRlZmF1bHQtdmVjdG9yLXggICAgOiAxICAgICAgICAgICAgICAgICAgICAgIWRlZmF1bHQ7XG4vLyBUaGUgZGVmYXVsdCB5LXZlY3RvciBmb3IgdGhlIGF4aXMgb2YgM2Qgcm90YXRpb25zXG4kZGVmYXVsdC12ZWN0b3IteSAgICA6IDEgICAgICAgICAgICAgICAgICAgICAhZGVmYXVsdDtcbi8vIFRoZSBkZWZhdWx0IHotdmVjdG9yIGZvciB0aGUgYXhpcyBvZiAzZCByb3RhdGlvbnNcbiRkZWZhdWx0LXZlY3Rvci16ICAgIDogMSAgICAgICAgICAgICAgICAgICAgICFkZWZhdWx0O1xuXG5cbi8vIFRoZSBkZWZhdWx0IHgtbGVuZ3RoIGZvciB0cmFuc2xhdGlvbnNcbiRkZWZhdWx0LXRyYW5zbGF0ZS14IDogMWVtICAgICAgICAgICAgICAgICAgICFkZWZhdWx0O1xuLy8gVGhlIGRlZmF1bHQgeS1sZW5ndGggZm9yIHRyYW5zbGF0aW9uc1xuJGRlZmF1bHQtdHJhbnNsYXRlLXkgOiAkZGVmYXVsdC10cmFuc2xhdGUteCAgIWRlZmF1bHQ7XG4vLyBUaGUgZGVmYXVsdCB6LWxlbmd0aCBmb3IgdHJhbnNsYXRpb25zXG4kZGVmYXVsdC10cmFuc2xhdGUteiA6ICRkZWZhdWx0LXRyYW5zbGF0ZS14ICAhZGVmYXVsdDtcblxuXG4vLyBUaGUgZGVmYXVsdCB4LWFuZ2xlIGZvciBza2V3aW5nXG4kZGVmYXVsdC1za2V3LXggICAgICA6IDVkZWcgICAgICAgICAgICAgICAgICAhZGVmYXVsdDtcbi8vIFRoZSBkZWZhdWx0IHktYW5nbGUgZm9yIHNrZXdpbmdcbiRkZWZhdWx0LXNrZXcteSAgICAgIDogNWRlZyAgICAgICAgICAgICAgICAgICFkZWZhdWx0O1xuXG5cbi8vICoqVHJhbnNmb3JtLW9yaWdpbioqXG4vLyBUcmFuc2Zvcm0tb3JpZ2luIHNlbnQgYXMgYSBjb21wbGV0ZSBzdHJpbmdcbi8vXG4vLyAgICAgQGluY2x1ZGUgYXBwbHktb3JpZ2luKCBvcmlnaW4gWywgM0Qtb25seSBdIClcbi8vXG4vLyB3aGVyZSAnb3JpZ2luJyBpcyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IGNvbnRhaW5pbmcgMS0zICh4L3kveikgY29vcmRpbmF0ZXNcbi8vIGluIHBlcmNlbnRhZ2VzLCBhYnNvbHV0ZSAocHgsIGNtLCBpbiwgZW0gZXRjLi4pIG9yIHJlbGF0aXZlXG4vLyAobGVmdCwgdG9wLCByaWdodCwgYm90dG9tLCBjZW50ZXIpIHVuaXRzXG4vL1xuLy8gQHBhcmFtIG9ubHkzZCBTZXQgdGhpcyB0byB0cnVlIHRvIG9ubHkgYXBwbHkgdGhpc1xuLy8gbWl4aW4gd2hlcmUgYnJvd3NlcnMgaGF2ZSAzRCBzdXBwb3J0LlxuQG1peGluIGFwcGx5LW9yaWdpbigkb3JpZ2luLCAkb25seTNkKSB7XG4gICRvbmx5M2Q6ICRvbmx5M2Qgb3IgLWNvbXBhc3MtbGlzdC1zaXplKC1jb21wYXNzLWxpc3QoJG9yaWdpbikpID4gMjtcbiAgQGlmICRvbmx5M2Qge1xuICAgIEBpbmNsdWRlIGV4cGVyaW1lbnRhbCh0cmFuc2Zvcm0tb3JpZ2luLCAkb3JpZ2luLFxuICAgICAgLW1veiwgLXdlYmtpdCwgLW8sIC1tcywgbm90KC1raHRtbCksIG9mZmljaWFsXG4gICAgKTtcbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgZXhwZXJpbWVudGFsKHRyYW5zZm9ybS1vcmlnaW4sICRvcmlnaW4sXG4gICAgICAtbW96LCAtd2Via2l0LCAtbywgLW1zLCBub3QoLWtodG1sKSwgb2ZmaWNpYWxcbiAgICApO1xuICB9XG59XG5cbi8vIFRyYW5zZm9ybS1vcmlnaW4gc2VudCBhcyBpbmRpdmlkdWFsIGFyZ3VtZW50czpcbi8vXG4vLyAgICAgQGluY2x1ZGUgdHJhbnNmb3JtLW9yaWdpbiggWyBvcmlnaW4teCwgb3JpZ2luLXksIG9yaWdpbi16LCAzRC1vbmx5IF0gKVxuLy9cbi8vIHdoZXJlIHRoZSAzICdvcmlnaW4tJyBhcmd1bWVudHMgcmVwcmVzZW50IHgveS96IGNvb3JkaW5hdGVzLlxuLy9cbi8vICoqTk9URToqKiBzZXR0aW5nIHogY29vcmRpbmF0ZXMgdHJpZ2dlcnMgM0Qgc3VwcG9ydCBsaXN0LCBsZWF2ZSBmYWxzZSBmb3IgMkQgc3VwcG9ydFxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oXG4gICRvcmlnaW4teDogJGRlZmF1bHQtb3JpZ2luLXgsXG4gICRvcmlnaW4teTogJGRlZmF1bHQtb3JpZ2luLXksXG4gICRvcmlnaW4tejogZmFsc2UsXG4gICRvbmx5M2Q6ICAgaWYoJG9yaWdpbi16LCB0cnVlLCBmYWxzZSlcbikge1xuICAkb3JpZ2luOiB1bnF1b3RlKCcnKTtcbiAgQGlmICRvcmlnaW4teCBvciAkb3JpZ2luLXkgb3IgJG9yaWdpbi16IHtcbiAgICBAaWYgJG9yaWdpbi14IHsgJG9yaWdpbjogJG9yaWdpbi14OyB9IEBlbHNlIHsgJG9yaWdpbjogNTAlOyB9XG4gICAgQGlmICRvcmlnaW4teSB7ICRvcmlnaW46ICRvcmlnaW4gJG9yaWdpbi15OyB9IEBlbHNlIHsgQGlmICRvcmlnaW4teiB7ICRvcmlnaW46ICRvcmlnaW4gNTAlOyB9fVxuICAgIEBpZiAkb3JpZ2luLXogeyAkb3JpZ2luOiAkb3JpZ2luICRvcmlnaW4tejsgfVxuICAgIEBpbmNsdWRlIGFwcGx5LW9yaWdpbigkb3JpZ2luLCAkb25seTNkKTtcbiAgfVxufVxuXG5cbi8vIFRyYW5zZm9ybSBzZW50IGFzIGEgY29tcGxldGUgc3RyaW5nOlxuLy9cbi8vICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0oIHRyYW5zZm9ybXMgWywgM0Qtb25seSBdIClcbi8vXG4vLyB3aGVyZSAndHJhbnNmb3JtcycgaXMgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZiBhbGwgdGhlIHRyYW5zZm9ybXMgdG8gYmUgYXBwbGllZC5cbkBtaXhpbiB0cmFuc2Zvcm0oXG4gICR0cmFuc2Zvcm0sXG4gICRvbmx5M2Q6IGZhbHNlXG4pIHtcbiAgQGlmICRvbmx5M2Qge1xuICAgIEBpbmNsdWRlIGV4cGVyaW1lbnRhbCh0cmFuc2Zvcm0sICR0cmFuc2Zvcm0sXG4gICAgICAtbW96LCAtd2Via2l0LCAtbywgLW1zLCBub3QoLWtodG1sKSwgb2ZmaWNpYWxcbiAgICApO1xuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBleHBlcmltZW50YWwodHJhbnNmb3JtLCAkdHJhbnNmb3JtLFxuICAgICAgLW1veiwgLXdlYmtpdCwgLW8sIC1tcywgbm90KC1raHRtbCksIG9mZmljaWFsXG4gICAgKTtcbiAgfVxufVxuXG4vLyBTaG9ydGN1dCB0byB0YXJnZXQgYWxsIGJyb3dzZXJzIHdpdGggMkQgdHJhbnNmb3JtIHN1cHBvcnRcbkBtaXhpbiB0cmFuc2Zvcm0yZCgkdHJhbnMpIHtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKCR0cmFucywgZmFsc2UpO1xufVxuXG4vLyBTaG9ydGN1dCB0byB0YXJnZXQgb25seSBicm93c2VycyB3aXRoIDNEIHRyYW5zZm9ybSBzdXBwb3J0XG5AbWl4aW4gdHJhbnNmb3JtM2QoJHRyYW5zKSB7XG4gIEBpbmNsdWRlIHRyYW5zZm9ybSgkdHJhbnMsIHRydWUpO1xufVxuXG4vLyBAZG9jIG9mZlxuLy8gM0QgUGFyYW1ldGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBAZG9jIG9uXG5cbi8vIFNldCB0aGUgcGVyc3BlY3RpdmUgb2YgM0QgdHJhbnNmb3JtcyBvbiB0aGUgY2hpbGRyZW4gb2YgYW4gZWxlbWVudDpcbi8vXG4vLyAgICAgIEBpbmNsdWRlIHBlcnNwZWN0aXZlKCBwZXJzcGVjdGl2ZSApXG4vL1xuLy8gd2hlcmUgJ3BlcnNwZWN0aXZlJyBpcyBhIHVuaXRsZXNzIG51bWJlciByZXByZXNlbnRpbmcgdGhlIGRlcHRoIG9mIHRoZVxuLy8gei1heGlzLiBUaGUgaGlnaGVyIHRoZSBwZXJzcGVjdGl2ZSwgdGhlIG1vcmUgZXhhZ2dlcmF0ZWQgdGhlIGZvcmVzaG9ydGVuaW5nLlxuLy8gdmFsdWVzIGZyb20gNTAwIHRvIDEwMDAgYXJlIG1vcmUtb3ItbGVzcyBcIm5vcm1hbFwiIC0gYSBnb29kIHN0YXJ0aW5nLXBvaW50LlxuQG1peGluIHBlcnNwZWN0aXZlKCRwKSB7XG4gIEBpbmNsdWRlIGV4cGVyaW1lbnRhbChwZXJzcGVjdGl2ZSwgJHAsXG4gICAgLW1veiwgLXdlYmtpdCwgLW8sIC1tcywgbm90KC1raHRtbCksIG9mZmljaWFsXG4gICk7XG59XG5cbi8vIFNldCB0aGUgb3JpZ2luIHBvc2l0aW9uIGZvciB0aGUgcGVyc3BlY3RpdmVcbi8vXG4vLyAgICAgIEBpbmNsdWRlIHBlcnNwZWN0aXZlLW9yaWdpbihvcmlnaW4teCBbb3JpZ2luLXldKVxuLy9cbi8vIHdoZXJlIHRoZSB0d28gYXJndW1lbnRzIHJlcHJlc2VudCB4L3kgY29vcmRpbmF0ZXNcbkBtaXhpbiBwZXJzcGVjdGl2ZS1vcmlnaW4oJG9yaWdpbjogNTAlKSB7XG4gIEBpbmNsdWRlIGV4cGVyaW1lbnRhbChwZXJzcGVjdGl2ZS1vcmlnaW4sICRvcmlnaW4sXG4gICAgLW1veiwgLXdlYmtpdCwgLW8sIC1tcywgbm90KC1raHRtbCksIG9mZmljaWFsXG4gICk7XG59XG5cbi8vIERldGVybWluZSB3aGV0aGVyIGEgM0Qgb2JqZWN0cyBjaGlsZHJlbiBhbHNvIGxpdmUgaW4gdGhlIGdpdmVuIDNEIHNwYWNlXG4vL1xuLy8gICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0tc3R5bGUoIFsgc3R5bGUgXSApXG4vL1xuLy8gd2hlcmUgYHN0eWxlYCBjYW4gYmUgZWl0aGVyIGBmbGF0YCBvciBgcHJlc2VydmUtM2RgLlxuLy8gQnJvd3NlcnMgZGVmYXVsdCB0byBgZmxhdGAsIG1peGluIGRlZmF1bHRzIHRvIGBwcmVzZXJ2ZS0zZGAuXG5AbWl4aW4gdHJhbnNmb3JtLXN0eWxlKCRzdHlsZTogcHJlc2VydmUtM2QpIHtcbiAgQGluY2x1ZGUgZXhwZXJpbWVudGFsKHRyYW5zZm9ybS1zdHlsZSwgJHN0eWxlLFxuICAgIC1tb3osIC13ZWJraXQsIC1vLCAtbXMsIG5vdCgta2h0bWwpLCBvZmZpY2lhbFxuICApO1xufVxuXG4vLyBEZXRlcm1pbmUgdGhlIHZpc2liaWxpdHkgb2YgYW4gZWxlbWVudCB3aGVuIGl0J3MgYmFjayBpcyB0dXJuZWRcbi8vXG4vLyAgICAgQGluY2x1ZGUgYmFja2ZhY2UtdmlzaWJpbGl0eSggWyB2aXNpYmlsaXR5IF0gKVxuLy9cbi8vIHdoZXJlIGB2aXNpYmlsaXR5YCBjYW4gYmUgZWl0aGVyIGB2aXNpYmxlYCBvciBgaGlkZGVuYC5cbi8vIEJyb3dzZXJzIGRlZmF1bHQgdG8gdmlzaWJsZSwgbWl4aW4gZGVmYXVsdHMgdG8gaGlkZGVuXG5AbWl4aW4gYmFja2ZhY2UtdmlzaWJpbGl0eSgkdmlzaWJpbGl0eTogaGlkZGVuKSB7XG4gIEBpbmNsdWRlIGV4cGVyaW1lbnRhbChiYWNrZmFjZS12aXNpYmlsaXR5LCAkdmlzaWJpbGl0eSxcbiAgICAtbW96LCAtd2Via2l0LCAtbywgLW1zLCBub3QoLWtodG1sKSwgb2ZmaWNpYWxcbiAgKTtcbn1cblxuLy8gQGRvYyBvZmZcbi8vIFRyYW5zZm9ybSBQYXJ0aWFscyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGhlc2Ugd29yayB3ZWxsIG9uIHRoZWlyIG93biwgYnV0IHRoZXkgZG9uJ3QgYWRkIHRvIGVhY2ggb3RoZXIsIHRoZXkgb3ZlcnJpZGUuXG4vLyBVc2UgYWxvbmcgd2l0aCB0cmFuc2Zvcm0gcGFyYW1ldGVyIG1peGlucyB0byBhZGp1c3Qgb3JpZ2luLCBwZXJzcGVjdGl2ZSBhbmQgc3R5bGVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIFNjYWxlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQGRvYyBvblxuXG4vLyBTY2FsZSBhbiBvYmplY3QgYWxvbmcgdGhlIHggYW5kIHkgYXhpczpcbi8vXG4vLyAgICAgIEBpbmNsdWRlIHNjYWxlKCBbIHNjYWxlLXgsIHNjYWxlLXksIHBlcnNwZWN0aXZlLCAzRC1vbmx5IF0gKVxuLy9cbi8vIHdoZXJlIHRoZSAnc2NhbGUtJyBhcmd1bWVudHMgYXJlIHVuaXRsZXNzIG11bHRpcGxpZXJzIG9mIHRoZSB4IGFuZCB5IGRpbWVuc2lvbnNcbi8vIGFuZCBwZXJzcGVjdGl2ZSwgd2hpY2ggd29ya3MgdGhlIHNhbWUgYXMgdGhlIHN0YW5kLWFsb25lIHBlcnNwZWN0aXZlIHByb3BlcnR5L21peGluXG4vLyBidXQgYXBwbGllcyB0byB0aGUgaW5kaXZpZHVhbCBlbGVtZW50IChtdWx0aXBsaWVkIHdpdGggYW55IHBhcmVudCBwZXJzcGVjdGl2ZSlcbi8vXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXG5AbWl4aW4gc2NhbGUoXG4gICRzY2FsZS14OiAgICAgJGRlZmF1bHQtc2NhbGUteCxcbiAgJHNjYWxlLXk6ICAgICAkc2NhbGUteCxcbiAgJHBlcnNwZWN0aXZlOiBmYWxzZSxcbiAgJG9ubHkzZDogICAgICBmYWxzZVxuKSB7XG4gICR0cmFuczogc2NhbGUoJHNjYWxlLXgsICRzY2FsZS15KTtcbiAgQGlmICRwZXJzcGVjdGl2ZSB7ICR0cmFuczogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSAkdHJhbnM7IH1cbiAgQGluY2x1ZGUgdHJhbnNmb3JtKCR0cmFucywgJG9ubHkzZCk7XG59XG5cbi8vIFNjYWxlIGFuIG9iamVjdCBhbG9uZyB0aGUgeCBheGlzXG4vLyBAaW5jbHVkZSBzY2FsZVgoIFsgc2NhbGUteCwgcGVyc3BlY3RpdmUsIDNELW9ubHkgXSApXG4vL1xuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxuQG1peGluIHNjYWxlWChcbiAgJHNjYWxlOiAgICAgICAkZGVmYXVsdC1zY2FsZS14LFxuICAkcGVyc3BlY3RpdmU6IGZhbHNlLFxuICAkb25seTNkOiAgICAgIGZhbHNlXG4pIHtcbiAgJHRyYW5zOiBzY2FsZVgoJHNjYWxlKTtcbiAgQGlmICRwZXJzcGVjdGl2ZSB7ICR0cmFuczogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSAkdHJhbnM7IH1cbiAgQGluY2x1ZGUgdHJhbnNmb3JtKCR0cmFucywgJG9ubHkzZCk7XG59XG5cbi8vIFNjYWxlIGFuIG9iamVjdCBhbG9uZyB0aGUgeSBheGlzXG4vLyBAaW5jbHVkZSBzY2FsZVkoIFsgc2NhbGUteSwgcGVyc3BlY3RpdmUsIDNELW9ubHkgXSApXG4vL1xuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxuQG1peGluIHNjYWxlWShcbiAgJHNjYWxlOiAgICAgICAkZGVmYXVsdC1zY2FsZS15LFxuICAkcGVyc3BlY3RpdmU6IGZhbHNlLFxuICAkb25seTNkOiAgICAgIGZhbHNlXG4pIHtcbiAgJHRyYW5zOiBzY2FsZVkoJHNjYWxlKTtcbiAgQGlmICRwZXJzcGVjdGl2ZSB7ICR0cmFuczogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSAkdHJhbnM7IH1cbiAgQGluY2x1ZGUgdHJhbnNmb3JtKCR0cmFucywgJG9ubHkzZCk7XG59XG5cbi8vIFNjYWxlIGFuIG9iamVjdCBhbG9uZyB0aGUgeiBheGlzXG4vLyBAaW5jbHVkZSBzY2FsZVooIFsgc2NhbGUteiwgcGVyc3BlY3RpdmUgXSApXG4vL1xuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxuQG1peGluIHNjYWxlWihcbiAgJHNjYWxlOiAkZGVmYXVsdC1zY2FsZS16LFxuICAkcGVyc3BlY3RpdmU6IGZhbHNlXG4pIHtcbiAgJHRyYW5zOiBzY2FsZVooJHNjYWxlKTtcbiAgQGlmICRwZXJzcGVjdGl2ZSB7ICR0cmFuczogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSAkdHJhbnM7IH1cbiAgQGluY2x1ZGUgdHJhbnNmb3JtM2QoJHRyYW5zKTtcbn1cblxuLy8gU2NhbGUgYW5kIG9iamVjdCBhbG9uZyBhbGwgdGhyZWUgYXhpc1xuLy8gQGluY2x1ZGUgc2NhbGUzZCggWyBzY2FsZS14LCBzY2FsZS15LCBzY2FsZS16LCBwZXJzcGVjdGl2ZSBdIClcbi8vXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXG5AbWl4aW4gc2NhbGUzZChcbiAgJHNjYWxlLXg6ICAgICAkZGVmYXVsdC1zY2FsZS14LFxuICAkc2NhbGUteTogICAgICRkZWZhdWx0LXNjYWxlLXksXG4gICRzY2FsZS16OiAgICAgJGRlZmF1bHQtc2NhbGUteixcbiAgJHBlcnNwZWN0aXZlOiBmYWxzZVxuKSB7XG4gICR0cmFuczogc2NhbGUzZCgkc2NhbGUteCwgJHNjYWxlLXksICRzY2FsZS16KTtcbiAgQGlmICRwZXJzcGVjdGl2ZSB7ICR0cmFuczogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSAkdHJhbnM7IH1cbiAgQGluY2x1ZGUgdHJhbnNmb3JtM2QoJHRyYW5zKTtcbn1cblxuLy8gQGRvYyBvZmZcbi8vIFJvdGF0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQGRvYyBvblxuXG4vLyBSb3RhdGUgYW4gb2JqZWN0IGFyb3VuZCB0aGUgeiBheGlzICAoMkQpXG4vLyBAaW5jbHVkZSByb3RhdGUoIFsgcm90YXRpb24sIHBlcnNwZWN0aXZlLCAzRC1vbmx5IF0gKVxuLy8gd2hlcmUgJ3JvdGF0aW9uJyBpcyBhbiBhbmdsZSBzZXQgaW4gZGVncmVlcyAoZGVnKSBvciByYWRpYW4gKHJhZCkgdW5pdHNcbi8vXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXG5AbWl4aW4gcm90YXRlKFxuICAkcm90YXRlOiAgICAgICRkZWZhdWx0LXJvdGF0ZSxcbiAgJHBlcnNwZWN0aXZlOiBmYWxzZSxcbiAgJG9ubHkzZDogICAgICBmYWxzZVxuKSB7XG4gICR0cmFuczogcm90YXRlKCRyb3RhdGUpO1xuICBAaWYgJHBlcnNwZWN0aXZlIHsgJHRyYW5zOiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpICR0cmFuczsgfVxuICBAaW5jbHVkZSB0cmFuc2Zvcm0oJHRyYW5zLCAkb25seTNkKTtcbn1cblxuLy8gQSBsb25nY3V0IGZvciAncm90YXRlJyBpbiBjYXNlIHlvdSBmb3JnZXQgdGhhdCAneicgaXMgaW1wbGllZFxuLy9cbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cbkBtaXhpbiByb3RhdGVaKFxuICAkcm90YXRlOiAgICAgICRkZWZhdWx0LXJvdGF0ZSxcbiAgJHBlcnNwZWN0aXZlOiBmYWxzZSxcbiAgJG9ubHkzZDogICAgICBmYWxzZVxuKSB7XG4gIEBpbmNsdWRlIHJvdGF0ZSgkcm90YXRlLCAkcGVyc3BlY3RpdmUsICRvbmx5M2QpO1xufVxuXG4vLyBSb3RhdGUgYW4gb2JqZWN0IGFyb3VuZCB0aGUgeCBheGlzICgzRClcbi8vIEBpbmNsdWRlIHJvdGF0ZVgoIFsgcm90YXRpb24sIHBlcnNwZWN0aXZlIF0gKVxuLy9cbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cbkBtaXhpbiByb3RhdGVYKFxuICAkcm90YXRlOiAkZGVmYXVsdC1yb3RhdGUsXG4gICRwZXJzcGVjdGl2ZTogZmFsc2Vcbikge1xuICAkdHJhbnM6IHJvdGF0ZVgoJHJvdGF0ZSk7XG4gIEBpZiAkcGVyc3BlY3RpdmUgeyAkdHJhbnM6IHBlcnNwZWN0aXZlKCRwZXJzcGVjdGl2ZSkgJHRyYW5zOyB9XG4gIEBpbmNsdWRlIHRyYW5zZm9ybTNkKCR0cmFucyk7XG59XG5cbi8vIFJvdGF0ZSBhbiBvYmplY3QgYXJvdW5kIHRoZSB5IGF4aXMgKDNEKVxuLy8gQGluY2x1ZGUgcm90YXRlKCBbIHJvdGF0aW9uLCBwZXJzcGVjdGl2ZSBdIClcbi8vXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXG5AbWl4aW4gcm90YXRlWShcbiAgJHJvdGF0ZTogJGRlZmF1bHQtcm90YXRlLFxuICAkcGVyc3BlY3RpdmU6IGZhbHNlXG4pIHtcbiAgJHRyYW5zOiByb3RhdGVZKCRyb3RhdGUpO1xuICBAaWYgJHBlcnNwZWN0aXZlIHsgJHRyYW5zOiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpICR0cmFuczsgfVxuICBAaW5jbHVkZSB0cmFuc2Zvcm0zZCgkdHJhbnMpO1xufVxuXG4vLyBSb3RhdGUgYW4gb2JqZWN0IGFyb3VuZCBhbiBhcmJpdHJhcnkgYXhpcyAoM0QpXG4vLyBAaW5jbHVkZSByb3RhdGUoIFsgdmVjdG9yLXgsIHZlY3Rvci15LCB2ZWN0b3Iteiwgcm90YXRpb24sIHBlcnNwZWN0aXZlIF0gKVxuLy8gd2hlcmUgdGhlICd2ZWN0b3ItJyBhcmd1bWVudHMgYWNjZXB0IHVuaXRsZXNzIG51bWJlcnMuXG4vLyBUaGVzZSBudW1iZXJzIGFyZSBub3QgaW1wb3J0YW50IG9uIHRoZWlyIG93biwgYnV0IGluIHJlbGF0aW9uIHRvIG9uZSBhbm90aGVyXG4vLyBjcmVhdGluZyBhbiBheGlzIGZyb20geW91ciB0cmFuc2Zvcm0tb3JpZ2luLCBhbG9uZyB0aGUgYXhpcyBvZiBYeCA9IFl5ID0gWnouXG4vL1xuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxuQG1peGluIHJvdGF0ZTNkKFxuICAkdmVjdG9yLXg6ICRkZWZhdWx0LXZlY3Rvci14LFxuICAkdmVjdG9yLXk6ICRkZWZhdWx0LXZlY3Rvci15LFxuICAkdmVjdG9yLXo6ICRkZWZhdWx0LXZlY3Rvci16LFxuICAkcm90YXRlOiAkZGVmYXVsdC1yb3RhdGUsXG4gICRwZXJzcGVjdGl2ZTogZmFsc2Vcbikge1xuICAkdHJhbnM6IHJvdGF0ZTNkKCR2ZWN0b3IteCwgJHZlY3Rvci15LCAkdmVjdG9yLXosICRyb3RhdGUpO1xuICBAaWYgJHBlcnNwZWN0aXZlIHsgJHRyYW5zOiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpICR0cmFuczsgfVxuICBAaW5jbHVkZSB0cmFuc2Zvcm0zZCgkdHJhbnMpO1xufVxuXG4vLyBAZG9jIG9mZlxuLy8gVHJhbnNsYXRlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBAZG9jIG9uXG5cbi8vIE1vdmUgYW4gb2JqZWN0IGFsb25nIHRoZSB4IG9yIHkgYXhpcyAoMkQpXG4vLyBAaW5jbHVkZSB0cmFuc2xhdGUoIFsgdHJhbnNsYXRlLXgsIHRyYW5zbGF0ZS15LCBwZXJzcGVjdGl2ZSwgM0Qtb25seSBdIClcbi8vIHdoZXJlIHRoZSAndHJhbnNsYXRlLScgYXJndW1lbnRzIGFjY2VwdCBhbnkgZGlzdGFuY2UgaW4gcGVyY2VudGFnZXMgb3IgYWJzb2x1dGUgKHB4LCBjbSwgaW4sIGVtIGV0Yy4uKSB1bml0cy5cbi8vXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXG5AbWl4aW4gdHJhbnNsYXRlKFxuICAkdHJhbnNsYXRlLXg6ICRkZWZhdWx0LXRyYW5zbGF0ZS14LFxuICAkdHJhbnNsYXRlLXk6ICRkZWZhdWx0LXRyYW5zbGF0ZS15LFxuICAkcGVyc3BlY3RpdmU6IGZhbHNlLFxuICAkb25seTNkOiAgICAgIGZhbHNlXG4pIHtcbiAgJHRyYW5zOiB0cmFuc2xhdGUoJHRyYW5zbGF0ZS14LCAkdHJhbnNsYXRlLXkpO1xuICBAaWYgJHBlcnNwZWN0aXZlIHsgJHRyYW5zOiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpICR0cmFuczsgfVxuICBAaW5jbHVkZSB0cmFuc2Zvcm0oJHRyYW5zLCAkb25seTNkKTtcbn1cblxuLy8gTW92ZSBhbiBvYmplY3QgYWxvbmcgdGhlIHggYXhpcyAoMkQpXG4vLyBAaW5jbHVkZSB0cmFuc2xhdGUoIFsgdHJhbnNsYXRlLXgsIHBlcnNwZWN0aXZlLCAzRC1vbmx5IF0gKVxuLy9cbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cbkBtaXhpbiB0cmFuc2xhdGVYKFxuICAkdHJhbnMteDogICAgICRkZWZhdWx0LXRyYW5zbGF0ZS14LFxuICAkcGVyc3BlY3RpdmU6IGZhbHNlLFxuICAkb25seTNkOiAgICAgIGZhbHNlXG4pIHtcbiAgJHRyYW5zOiB0cmFuc2xhdGVYKCR0cmFucy14KTtcbiAgQGlmICRwZXJzcGVjdGl2ZSB7ICR0cmFuczogcGVyc3BlY3RpdmUoJHBlcnNwZWN0aXZlKSAkdHJhbnM7IH1cbiAgQGluY2x1ZGUgdHJhbnNmb3JtKCR0cmFucywgJG9ubHkzZCk7XG59XG5cbi8vIE1vdmUgYW4gb2JqZWN0IGFsb25nIHRoZSB5IGF4aXMgKDJEKVxuLy8gQGluY2x1ZGUgdHJhbnNsYXRlKCBbIHRyYW5zbGF0ZS15LCBwZXJzcGVjdGl2ZSwgM0Qtb25seSBdIClcbi8vXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXG5AbWl4aW4gdHJhbnNsYXRlWShcbiAgJHRyYW5zLXk6ICAgICAkZGVmYXVsdC10cmFuc2xhdGUteSxcbiAgJHBlcnNwZWN0aXZlOiBmYWxzZSxcbiAgJG9ubHkzZDogICAgICBmYWxzZVxuKSB7XG4gICR0cmFuczogdHJhbnNsYXRlWSgkdHJhbnMteSk7XG4gIEBpZiAkcGVyc3BlY3RpdmUgeyAkdHJhbnM6IHBlcnNwZWN0aXZlKCRwZXJzcGVjdGl2ZSkgJHRyYW5zOyB9XG4gIEBpbmNsdWRlIHRyYW5zZm9ybSgkdHJhbnMsICRvbmx5M2QpO1xufVxuXG4vLyBNb3ZlIGFuIG9iamVjdCBhbG9uZyB0aGUgeiBheGlzICgzRClcbi8vIEBpbmNsdWRlIHRyYW5zbGF0ZSggWyB0cmFuc2xhdGUteiwgcGVyc3BlY3RpdmUgXSApXG4vL1xuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxuQG1peGluIHRyYW5zbGF0ZVooXG4gICR0cmFucy16OiAgICAgJGRlZmF1bHQtdHJhbnNsYXRlLXosXG4gICRwZXJzcGVjdGl2ZTogZmFsc2Vcbikge1xuICAkdHJhbnM6IHRyYW5zbGF0ZVooJHRyYW5zLXopO1xuICBAaWYgJHBlcnNwZWN0aXZlIHsgJHRyYW5zOiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpICR0cmFuczsgfVxuICBAaW5jbHVkZSB0cmFuc2Zvcm0zZCgkdHJhbnMpO1xufVxuXG4vLyBNb3ZlIGFuIG9iamVjdCBhbG9uZyB0aGUgeCwgeSBhbmQgeiBheGlzICgzRClcbi8vIEBpbmNsdWRlIHRyYW5zbGF0ZSggWyB0cmFuc2xhdGUteCwgdHJhbnNsYXRlLXksIHRyYW5zbGF0ZS16LCBwZXJzcGVjdGl2ZSBdIClcbi8vXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXG5AbWl4aW4gdHJhbnNsYXRlM2QoXG4gICR0cmFuc2xhdGUteDogJGRlZmF1bHQtdHJhbnNsYXRlLXgsXG4gICR0cmFuc2xhdGUteTogJGRlZmF1bHQtdHJhbnNsYXRlLXksXG4gICR0cmFuc2xhdGUtejogJGRlZmF1bHQtdHJhbnNsYXRlLXosXG4gICRwZXJzcGVjdGl2ZTogZmFsc2Vcbikge1xuICAkdHJhbnM6IHRyYW5zbGF0ZTNkKCR0cmFuc2xhdGUteCwgJHRyYW5zbGF0ZS15LCAkdHJhbnNsYXRlLXopO1xuICBAaWYgJHBlcnNwZWN0aXZlIHsgJHRyYW5zOiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpICR0cmFuczsgfVxuICBAaW5jbHVkZSB0cmFuc2Zvcm0zZCgkdHJhbnMpO1xufVxuXG4vLyBAZG9jIG9mZlxuLy8gU2tldyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBAZG9jIG9uXG5cbi8vIFNrZXcgYW4gZWxlbWVudDpcbi8vXG4vLyAgICAgQGluY2x1ZGUgc2tldyggWyBza2V3LXgsIHNrZXcteSwgM0Qtb25seSBdIClcbi8vXG4vLyB3aGVyZSB0aGUgJ3NrZXctJyBhcmd1bWVudHMgYWNjZXB0IGNzcyBhbmdsZXMgaW4gZGVncmVlcyAoZGVnKSBvciByYWRpYW4gKHJhZCkgdW5pdHMuXG4vL1xuLy8gKipOb3RlKiogVGhpcyBtaXhpbiBjYW5ub3QgYmUgY29tYmluZWQgd2l0aCBvdGhlciB0cmFuc2Zvcm0gbWl4aW5zLlxuQG1peGluIHNrZXcoXG4gICRza2V3LXg6ICRkZWZhdWx0LXNrZXcteCxcbiAgJHNrZXcteTogJGRlZmF1bHQtc2tldy15LFxuICAkb25seTNkOiBmYWxzZVxuKSB7XG4gICR0cmFuczogc2tldygkc2tldy14LCAkc2tldy15KTtcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKCR0cmFucywgJG9ubHkzZCk7XG59XG5cbi8vIFNrZXcgYW4gZWxlbWVudCBhbG9uZyB0aGUgeCBheGl6XG4vL1xuLy8gICAgIEBpbmNsdWRlIHNrZXcoIFsgc2tldy14LCAzRC1vbmx5IF0gKVxuLy9cbi8vICoqTm90ZSoqIFRoaXMgbWl4aW4gY2Fubm90IGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgdHJhbnNmb3JtIG1peGlucy5cbkBtaXhpbiBza2V3WChcbiAgJHNrZXcteDogJGRlZmF1bHQtc2tldy14LFxuICAkb25seTNkOiBmYWxzZVxuKSB7XG4gICR0cmFuczogc2tld1goJHNrZXcteCk7XG4gIEBpbmNsdWRlIHRyYW5zZm9ybSgkdHJhbnMsICRvbmx5M2QpO1xufVxuXG4vLyBTa2V3IGFuIGVsZW1lbnQgYWxvbmcgdGhlIHkgYXhpc1xuLy9cbi8vICAgICBAaW5jbHVkZSBza2V3KCBbIHNrZXcteSwgM0Qtb25seSBdIClcbi8vXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXG5AbWl4aW4gc2tld1koXG4gICRza2V3LXk6ICRkZWZhdWx0LXNrZXcteSxcbiAgJG9ubHkzZDogZmFsc2Vcbikge1xuICAkdHJhbnM6IHNrZXdZKCRza2V3LXkpO1xuICBAaW5jbHVkZSB0cmFuc2Zvcm0oJHRyYW5zLCAkb25seTNkKTtcbn1cblxuXG4vLyBGdWxsIHRyYW5zZm9ybSBtaXhpbnNcbi8vIEZvciBzZXR0aW5ncyBhbnkgY29tYmluYXRpb24gb2YgdHJhbnNmb3JtcyBhcyBhcmd1bWVudHNcbi8vIFRoZXNlIGFyZSBjb21wbGV4IGFuZCBub3QgaGlnaGx5IHJlY29tbWVuZGVkIGZvciBkYWlseSB1c2UuIFRoZXkgYXJlIG1haW5seVxuLy8gaGVyZSBmb3IgYmFja3dhcmQtY29tcGF0aWJpbGl0eSBwdXJwb3Nlcy5cbi8vXG4vLyAqIHRoZXkgaW5jbHVkZSBvcmlnaW4gYWRqdXN0bWVudHNcbi8vICogc2NhbGUgdGFrZXMgYSBtdWx0aXBsaWVyICh1bml0bGVzcyksIHJvdGF0ZSBhbmQgc2tldyB0YWtlIGRlZ3JlZXMgKGRlZylcbi8vXG4vLyAqKk5vdGUqKiBUaGlzIG1peGluIGNhbm5vdCBiZSBjb21iaW5lZCB3aXRoIG90aGVyIHRyYW5zZm9ybSBtaXhpbnMuXG5AbWl4aW4gY3JlYXRlLXRyYW5zZm9ybShcbiAgJHBlcnNwZWN0aXZlOiBmYWxzZSxcbiAgJHNjYWxlLXg6ICAgICBmYWxzZSxcbiAgJHNjYWxlLXk6ICAgICBmYWxzZSxcbiAgJHNjYWxlLXo6ICAgICBmYWxzZSxcbiAgJHJvdGF0ZS14OiAgICBmYWxzZSxcbiAgJHJvdGF0ZS15OiAgICBmYWxzZSxcbiAgJHJvdGF0ZS16OiAgICBmYWxzZSxcbiAgJHJvdGF0ZTNkOiAgICBmYWxzZSxcbiAgJHRyYW5zLXg6ICAgICBmYWxzZSxcbiAgJHRyYW5zLXk6ICAgICBmYWxzZSxcbiAgJHRyYW5zLXo6ICAgICBmYWxzZSxcbiAgJHNrZXcteDogICAgICBmYWxzZSxcbiAgJHNrZXcteTogICAgICBmYWxzZSxcbiAgJG9yaWdpbi14OiAgICBmYWxzZSxcbiAgJG9yaWdpbi15OiAgICBmYWxzZSxcbiAgJG9yaWdpbi16OiAgICBmYWxzZSxcbiAgJG9ubHkzZDogICAgICBmYWxzZVxuKSB7XG4gICR0cmFuczogdW5xdW90ZShcIlwiKTtcblxuICAvLyBwZXJzcGVjdGl2ZVxuICBAaWYgJHBlcnNwZWN0aXZlIHsgJHRyYW5zOiBwZXJzcGVjdGl2ZSgkcGVyc3BlY3RpdmUpIDsgfVxuXG4gIC8vIHNjYWxlXG4gIEBpZiAkc2NhbGUteCBhbmQgJHNjYWxlLXkge1xuICAgIEBpZiAkc2NhbGUteiB7ICR0cmFuczogJHRyYW5zIHNjYWxlM2QoJHNjYWxlLXgsICRzY2FsZS15LCAkc2NhbGUteik7IH1cbiAgICBAZWxzZSB7ICR0cmFuczogJHRyYW5zIHNjYWxlKCRzY2FsZS14LCAkc2NhbGUteSk7IH1cbiAgfSBAZWxzZSB7XG4gICAgQGlmICRzY2FsZS14IHsgJHRyYW5zOiAkdHJhbnMgc2NhbGVYKCRzY2FsZS14KTsgfVxuICAgIEBpZiAkc2NhbGUteSB7ICR0cmFuczogJHRyYW5zIHNjYWxlWSgkc2NhbGUteSk7IH1cbiAgICBAaWYgJHNjYWxlLXogeyAkdHJhbnM6ICR0cmFucyBzY2FsZVooJHNjYWxlLXopOyB9XG4gIH1cblxuICAvLyByb3RhdGVcbiAgQGlmICRyb3RhdGUteCB7ICR0cmFuczogJHRyYW5zIHJvdGF0ZVgoJHJvdGF0ZS14KTsgfVxuICBAaWYgJHJvdGF0ZS15IHsgJHRyYW5zOiAkdHJhbnMgcm90YXRlWSgkcm90YXRlLXkpOyB9XG4gIEBpZiAkcm90YXRlLXogeyAkdHJhbnM6ICR0cmFucyByb3RhdGVaKCRyb3RhdGUteik7IH1cbiAgQGlmICRyb3RhdGUzZCB7ICR0cmFuczogJHRyYW5zIHJvdGF0ZTNkKCRyb3RhdGUzZCk7IH1cblxuICAvLyB0cmFuc2xhdGVcbiAgQGlmICR0cmFucy14IGFuZCAkdHJhbnMteSB7XG4gICAgQGlmICR0cmFucy16IHsgJHRyYW5zOiAkdHJhbnMgdHJhbnNsYXRlM2QoJHRyYW5zLXgsICR0cmFucy15LCAkdHJhbnMteik7IH1cbiAgICBAZWxzZSB7ICR0cmFuczogJHRyYW5zIHRyYW5zbGF0ZSgkdHJhbnMteCwgJHRyYW5zLXkpOyB9XG4gIH0gQGVsc2Uge1xuICAgIEBpZiAkdHJhbnMteCB7ICR0cmFuczogJHRyYW5zIHRyYW5zbGF0ZVgoJHRyYW5zLXgpOyB9XG4gICAgQGlmICR0cmFucy15IHsgJHRyYW5zOiAkdHJhbnMgdHJhbnNsYXRlWSgkdHJhbnMteSk7IH1cbiAgICBAaWYgJHRyYW5zLXogeyAkdHJhbnM6ICR0cmFucyB0cmFuc2xhdGVaKCR0cmFucy16KTsgfVxuICB9XG5cbiAgLy8gc2tld1xuICBAaWYgJHNrZXcteCBhbmQgJHNrZXcteSB7ICR0cmFuczogJHRyYW5zIHNrZXcoJHNrZXcteCwgJHNrZXcteSk7IH1cbiAgQGVsc2Uge1xuICAgIEBpZiAkc2tldy14IHsgJHRyYW5zOiAkdHJhbnMgc2tld1goJHNrZXcteCk7IH1cbiAgICBAaWYgJHNrZXcteSB7ICR0cmFuczogJHRyYW5zIHNrZXdZKCRza2V3LXkpOyB9XG4gIH1cblxuICAvLyBhcHBseSBpdCFcbiAgQGluY2x1ZGUgdHJhbnNmb3JtKCR0cmFucywgJG9ubHkzZCk7XG4gIEBpbmNsdWRlIHRyYW5zZm9ybS1vcmlnaW4oJG9yaWdpbi14LCAkb3JpZ2luLXksICRvcmlnaW4teiwgJG9ubHkzZCk7XG59XG5cblxuLy8gQSBzaW1wbGlmaWVkIHNldCBvZiBvcHRpb25zXG4vLyBiYWNrd2FyZHMtY29tcGF0aWJsZSB3aXRoIHRoZSBwcmV2aW91cyB2ZXJzaW9uIG9mIHRoZSAndHJhbnNmb3JtJyBtaXhpblxuQG1peGluIHNpbXBsZS10cmFuc2Zvcm0oXG4gICRzY2FsZTogICAgZmFsc2UsXG4gICRyb3RhdGU6ICAgZmFsc2UsXG4gICR0cmFucy14OiAgZmFsc2UsXG4gICR0cmFucy15OiAgZmFsc2UsXG4gICRza2V3LXg6ICAgZmFsc2UsXG4gICRza2V3LXk6ICAgZmFsc2UsXG4gICRvcmlnaW4teDogZmFsc2UsXG4gICRvcmlnaW4teTogZmFsc2Vcbikge1xuICBAaW5jbHVkZSBjcmVhdGUtdHJhbnNmb3JtKFxuICAgIGZhbHNlLFxuICAgICRzY2FsZSwgJHNjYWxlLCBmYWxzZSxcbiAgICBmYWxzZSwgZmFsc2UsICRyb3RhdGUsIGZhbHNlLFxuICAgICR0cmFucy14LCAkdHJhbnMteSwgZmFsc2UsXG4gICAgJHNrZXcteCwgJHNrZXcteSxcbiAgICAkb3JpZ2luLXgsICRvcmlnaW4teSwgZmFsc2UsXG4gICAgZmFsc2VcbiAgKTtcbn1cbiIsIi8vIEBkb2Mgb2ZmXG4vLyBUaGVzZSBkZWZhdWx0cyBtYWtlIHRoZSBhcmd1bWVudHMgb3B0aW9uYWwgZm9yIHRoaXMgbWl4aW5cbi8vIElmIHlvdSBsaWtlLCBzZXQgZGlmZmVyZW50IGRlZmF1bHRzIGJlZm9yZSBpbXBvcnRpbmcuXG4vLyBAZG9jIG9uXG5cbkBpbXBvcnQgXCJzaGFyZWRcIjtcblxuXG4vLyBUaGUgZGVmYXVsdCBjb2xvciBmb3IgYm94IHNoYWRvd3NcbiRkZWZhdWx0LWJveC1zaGFkb3ctY29sb3I6ICMzMzMzMzMgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IGhvcml6b250YWwgb2Zmc2V0LiBQb3NpdGl2ZSBpcyB0byB0aGUgcmlnaHQuXG4kZGVmYXVsdC1ib3gtc2hhZG93LWgtb2Zmc2V0OiAwcHggIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IHZlcnRpY2FsIG9mZnNldC4gUG9zaXRpdmUgaXMgZG93bi5cbiRkZWZhdWx0LWJveC1zaGFkb3ctdi1vZmZzZXQ6IDBweCAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgYmx1ciBsZW5ndGguXG4kZGVmYXVsdC1ib3gtc2hhZG93LWJsdXI6IDVweCAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgc3ByZWFkIGxlbmd0aC5cbiRkZWZhdWx0LWJveC1zaGFkb3ctc3ByZWFkIDogZmFsc2UgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IHNoYWRvdyBpbnNldDogaW5zZXQgb3IgZmFsc2UgKGZvciBzdGFuZGFyZCBzaGFkb3cpLlxuJGRlZmF1bHQtYm94LXNoYWRvdy1pbnNldCA6IGZhbHNlICFkZWZhdWx0O1xuXG4vLyBQcm92aWRlcyBjcm9zcy1icm93c2VyIGZvciBXZWJraXQsIEdlY2tvLCBhbmQgQ1NTMyBib3ggc2hhZG93cyB3aGVuIG9uZSBvciBtb3JlIGJveFxuLy8gc2hhZG93cyBhcmUgbmVlZGVkLlxuLy8gRWFjaCBzaGFkb3cgYXJndW1lbnQgc2hvdWxkIGFkaGVyZSB0byB0aGUgc3RhbmRhcmQgY3NzMyBzeW50YXggZm9yIHRoZVxuLy8gYm94LXNoYWRvdyBwcm9wZXJ0eS5cbkBtaXhpbiBib3gtc2hhZG93KFxuICAkc2hhZG93LTEgOiBkZWZhdWx0LFxuICAkc2hhZG93LTIgOiBmYWxzZSxcbiAgJHNoYWRvdy0zIDogZmFsc2UsXG4gICRzaGFkb3ctNCA6IGZhbHNlLFxuICAkc2hhZG93LTUgOiBmYWxzZSxcbiAgJHNoYWRvdy02IDogZmFsc2UsXG4gICRzaGFkb3ctNyA6IGZhbHNlLFxuICAkc2hhZG93LTggOiBmYWxzZSxcbiAgJHNoYWRvdy05IDogZmFsc2UsXG4gICRzaGFkb3ctMTA6IGZhbHNlXG4pIHtcbiAgQGlmICRzaGFkb3ctMSA9PSBkZWZhdWx0IHtcbiAgICAkc2hhZG93LTEgOiAtY29tcGFzcy1zcGFjZS1saXN0KGNvbXBhY3QoaWYoJGRlZmF1bHQtYm94LXNoYWRvdy1pbnNldCwgaW5zZXQsIGZhbHNlKSwgJGRlZmF1bHQtYm94LXNoYWRvdy1oLW9mZnNldCwgJGRlZmF1bHQtYm94LXNoYWRvdy12LW9mZnNldCwgJGRlZmF1bHQtYm94LXNoYWRvdy1ibHVyLCAkZGVmYXVsdC1ib3gtc2hhZG93LXNwcmVhZCwgJGRlZmF1bHQtYm94LXNoYWRvdy1jb2xvcikpO1xuICB9XG4gICRzaGFkb3cgOiBjb21wYWN0KCRzaGFkb3ctMSwgJHNoYWRvdy0yLCAkc2hhZG93LTMsICRzaGFkb3ctNCwgJHNoYWRvdy01LCAkc2hhZG93LTYsICRzaGFkb3ctNywgJHNoYWRvdy04LCAkc2hhZG93LTksICRzaGFkb3ctMTApO1xuICBAaW5jbHVkZSBleHBlcmltZW50YWwoYm94LXNoYWRvdywgJHNoYWRvdyxcbiAgICAtbW96LCAtd2Via2l0LCBub3QoLW8pLCBub3QoLW1zKSwgbm90KC1raHRtbCksIG9mZmljaWFsXG4gICk7XG59XG5cbi8vIFByb3ZpZGVzIGEgc2luZ2xlIGNyb3NzLWJyb3dzZXIgQ1NTIGJveCBzaGFkb3cgZm9yIFdlYmtpdCwgR2Vja28sIGFuZCBDU1MzLlxuLy8gSW5jbHVkZXMgZGVmYXVsdCBhcmd1bWVudHMgZm9yIGhvcml6b250YWwgb2Zmc2V0LCB2ZXJ0aWNhbCBvZmZzZXQsIGJsdXIgbGVuZ3RoLCBzcHJlYWQgbGVuZ3RoLCBjb2xvciBhbmQgaW5zZXQuXG5AbWl4aW4gc2luZ2xlLWJveC1zaGFkb3coXG4gICRob2ZmICAgOiAkZGVmYXVsdC1ib3gtc2hhZG93LWgtb2Zmc2V0LFxuICAkdm9mZiAgIDogJGRlZmF1bHQtYm94LXNoYWRvdy12LW9mZnNldCxcbiAgJGJsdXIgICA6ICRkZWZhdWx0LWJveC1zaGFkb3ctYmx1cixcbiAgJHNwcmVhZCA6ICRkZWZhdWx0LWJveC1zaGFkb3ctc3ByZWFkLFxuICAkY29sb3IgIDogJGRlZmF1bHQtYm94LXNoYWRvdy1jb2xvcixcbiAgJGluc2V0ICA6ICRkZWZhdWx0LWJveC1zaGFkb3ctaW5zZXRcbikge1xuICBAaWYgbm90ICgkaW5zZXQgPT0gdHJ1ZSBvciAkaW5zZXQgPT0gZmFsc2Ugb3IgJGluc2V0ID09IGluc2V0KSB7XG4gICAgQHdhcm4gXCIkaW5zZXQgZXhwZWN0ZWQgdG8gYmUgdHJ1ZSBvciB0aGUgaW5zZXQga2V5d29yZC4gR290ICN7JGluc2V0fSBpbnN0ZWFkLiBVc2luZzogaW5zZXRcIjtcbiAgfVxuXG4gIEBpZiAkY29sb3IgPT0gbm9uZSB7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdyhub25lKTtcbiAgfSBAZWxzZSB7XG4gICAgJGZ1bGwgICA6ICRob2ZmICR2b2ZmO1xuICAgIEBpZiAkYmx1ciAgIHsgJGZ1bGw6ICRmdWxsICRibHVyOyAgIH1cbiAgICBAaWYgJHNwcmVhZCB7ICRmdWxsOiAkZnVsbCAkc3ByZWFkOyB9XG4gICAgQGlmICRjb2xvciAgeyAkZnVsbDogJGZ1bGwgJGNvbG9yOyAgfVxuICAgIEBpZiAkaW5zZXQgIHsgJGZ1bGw6IGluc2V0ICRmdWxsOyAgIH1cbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KCRmdWxsKTtcbiAgfVxufVxuIiwiQGltcG9ydCBcInNoYXJlZFwiO1xuXG4vLyBDU1MgVHJhbnNpdGlvbnNcbi8vIEN1cnJlbnRseSBvbmx5IHdvcmtzIGluIFdlYmtpdC5cbi8vXG4vLyAqIGV4cGVjdGVkIGluIENTUzMsIEZpcmVGb3ggMy42LzcgYW5kIE9wZXJhIFByZXN0byAyLjNcbi8vICogV2UnbGwgYmUgcHJlcGFyZWQuXG4vL1xuLy8gSW5jbHVkaW5nIHRoaXMgc3VibW9kdWxlIHNldHMgZm9sbG93aW5nIGRlZmF1bHRzIGZvciB0aGUgbWl4aW5zOlxuLy9cbi8vICAgICAkZGVmYXVsdC10cmFuc2l0aW9uLXByb3BlcnR5IDogYWxsXG4vLyAgICAgJGRlZmF1bHQtdHJhbnNpdGlvbi1kdXJhdGlvbiA6IDFzXG4vLyAgICAgJGRlZmF1bHQtdHJhbnNpdGlvbi1mdW5jdGlvbiA6IGZhbHNlXG4vLyAgICAgJGRlZmF1bHQtdHJhbnNpdGlvbi1kZWxheSAgICA6IGZhbHNlXG4vL1xuLy8gT3ZlcnJpZGUgdGhlbSBpZiB5b3UgbGlrZS4gVGltaW5nLWZ1bmN0aW9uIGFuZCBkZWxheSBhcmUgc2V0IHRvIGZhbHNlIGZvciBicm93c2VyIGRlZmF1bHRzIChlYXNlLCAwcykuXG5cbiRkZWZhdWx0LXRyYW5zaXRpb24tcHJvcGVydHk6IGFsbCAhZGVmYXVsdDtcblxuJGRlZmF1bHQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMXMgIWRlZmF1bHQ7XG5cbiRkZWZhdWx0LXRyYW5zaXRpb24tZnVuY3Rpb246IGZhbHNlICFkZWZhdWx0O1xuXG4kZGVmYXVsdC10cmFuc2l0aW9uLWRlbGF5OiBmYWxzZSAhZGVmYXVsdDtcblxuJHRyYW5zaXRpb25hYmxlLXByZWZpeGVkLXZhbHVlczogdHJhbnNmb3JtLCB0cmFuc2Zvcm0tb3JpZ2luICFkZWZhdWx0O1xuXG4vLyBPbmUgb3IgbW9yZSBwcm9wZXJ0aWVzIHRvIHRyYW5zaXRpb25cbi8vXG4vLyAqIGZvciBtdWx0aXBsZSwgdXNlIGEgY29tbWEtZGVsaW1pdGVkIGxpc3Rcbi8vICogYWxzbyBhY2NlcHRzIFwiYWxsXCIgb3IgXCJub25lXCJcblxuQG1peGluIHRyYW5zaXRpb24tcHJvcGVydHkoJHByb3BlcnR5LTE6ICRkZWZhdWx0LXRyYW5zaXRpb24tcHJvcGVydHksXG4gICRwcm9wZXJ0eS0yIDogZmFsc2UsXG4gICRwcm9wZXJ0eS0zIDogZmFsc2UsXG4gICRwcm9wZXJ0eS00IDogZmFsc2UsXG4gICRwcm9wZXJ0eS01IDogZmFsc2UsXG4gICRwcm9wZXJ0eS02IDogZmFsc2UsXG4gICRwcm9wZXJ0eS03IDogZmFsc2UsXG4gICRwcm9wZXJ0eS04IDogZmFsc2UsXG4gICRwcm9wZXJ0eS05IDogZmFsc2UsXG4gICRwcm9wZXJ0eS0xMDogZmFsc2Vcbikge1xuICBAaWYgdHlwZS1vZigkcHJvcGVydHktMSkgPT0gc3RyaW5nIHsgJHByb3BlcnR5LTE6IHVucXVvdGUoJHByb3BlcnR5LTEpOyB9XG4gICRwcm9wZXJ0aWVzOiBjb21wYWN0KCRwcm9wZXJ0eS0xLCAkcHJvcGVydHktMiwgJHByb3BlcnR5LTMsICRwcm9wZXJ0eS00LCAkcHJvcGVydHktNSwgJHByb3BlcnR5LTYsICRwcm9wZXJ0eS03LCAkcHJvcGVydHktOCwgJHByb3BlcnR5LTksICRwcm9wZXJ0eS0xMCk7XG4gIEBpZiAkZXhwZXJpbWVudGFsLXN1cHBvcnQtZm9yLXdlYmtpdCAgICB7ICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eSA6IHByZWZpeGVkLWZvci10cmFuc2l0aW9uKC13ZWJraXQsICRwcm9wZXJ0aWVzKTsgfVxuICBAaWYgJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1tb3ppbGxhICAgeyAgICAgICAgICAtbW96LXRyYW5zaXRpb24tcHJvcGVydHkgOiBwcmVmaXhlZC1mb3ItdHJhbnNpdGlvbigtbW96LCAgICAkcHJvcGVydGllcyk7IH1cbiAgQGlmICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Itb3BlcmEgICAgIHsgICAgICAgICAgICAtby10cmFuc2l0aW9uLXByb3BlcnR5IDogcHJlZml4ZWQtZm9yLXRyYW5zaXRpb24oLW8sICAgICAgJHByb3BlcnRpZXMpOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eSA6ICRwcm9wZXJ0aWVzO1xufVxuXG4vLyBPbmUgb3IgbW9yZSBkdXJhdGlvbnMgaW4gc2Vjb25kc1xuLy9cbi8vICogZm9yIG11bHRpcGxlLCB1c2UgYSBjb21tYS1kZWxpbWl0ZWQgbGlzdFxuLy8gKiB0aGVzZSBkdXJhdGlvbnMgd2lsbCBhZmZlY3QgdGhlIHByb3BlcnRpZXMgaW4gdGhlIHNhbWUgbGlzdCBwb3NpdGlvblxuXG5AbWl4aW4gdHJhbnNpdGlvbi1kdXJhdGlvbigkZHVyYXRpb24tMTogJGRlZmF1bHQtdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgJGR1cmF0aW9uLTIgOiBmYWxzZSxcbiAgJGR1cmF0aW9uLTMgOiBmYWxzZSxcbiAgJGR1cmF0aW9uLTQgOiBmYWxzZSxcbiAgJGR1cmF0aW9uLTUgOiBmYWxzZSxcbiAgJGR1cmF0aW9uLTYgOiBmYWxzZSxcbiAgJGR1cmF0aW9uLTcgOiBmYWxzZSxcbiAgJGR1cmF0aW9uLTggOiBmYWxzZSxcbiAgJGR1cmF0aW9uLTkgOiBmYWxzZSxcbiAgJGR1cmF0aW9uLTEwOiBmYWxzZVxuKSB7XG4gIEBpZiB0eXBlLW9mKCRkdXJhdGlvbi0xKSA9PSBzdHJpbmcgeyAkZHVyYXRpb24tMTogdW5xdW90ZSgkZHVyYXRpb24tMSk7IH1cbiAgJGR1cmF0aW9uczogY29tcGFjdCgkZHVyYXRpb24tMSwgJGR1cmF0aW9uLTIsICRkdXJhdGlvbi0zLCAkZHVyYXRpb24tNCwgJGR1cmF0aW9uLTUsICRkdXJhdGlvbi02LCAkZHVyYXRpb24tNywgJGR1cmF0aW9uLTgsICRkdXJhdGlvbi05LCAkZHVyYXRpb24tMTApO1xuICBAaW5jbHVkZSBleHBlcmltZW50YWwodHJhbnNpdGlvbi1kdXJhdGlvbiwgJGR1cmF0aW9ucyxcbiAgICAtbW96LCAtd2Via2l0LCAtbywgbm90KC1tcyksIG5vdCgta2h0bWwpLCBvZmZpY2lhbFxuICApO1xufVxuXG4vLyBPbmUgb3IgbW9yZSB0aW1pbmcgZnVuY3Rpb25zXG4vL1xuLy8gKiBbIGVhc2UgfCBsaW5lYXIgfCBlYXNlLWluIHwgZWFzZS1vdXQgfCBlYXNlLWluLW91dCB8IGN1YmljLWJlemllcih4MSwgeTEsIHgyLCB5MildXG4vLyAqIEZvciBtdWx0aXBsZSwgdXNlIGEgY29tbWEtZGVsaW1pdGVkIGxpc3Rcbi8vICogVGhlc2UgZnVuY3Rpb25zIHdpbGwgZWZmZWN0IHRoZSBwcm9wZXJ0aWVzIGluIHRoZSBzYW1lIGxpc3QgcG9zaXRpb25cblxuQG1peGluIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKCRmdW5jdGlvbi0xOiAkZGVmYXVsdC10cmFuc2l0aW9uLWZ1bmN0aW9uLFxuICAkZnVuY3Rpb24tMiA6IGZhbHNlLFxuICAkZnVuY3Rpb24tMyA6IGZhbHNlLFxuICAkZnVuY3Rpb24tNCA6IGZhbHNlLFxuICAkZnVuY3Rpb24tNSA6IGZhbHNlLFxuICAkZnVuY3Rpb24tNiA6IGZhbHNlLFxuICAkZnVuY3Rpb24tNyA6IGZhbHNlLFxuICAkZnVuY3Rpb24tOCA6IGZhbHNlLFxuICAkZnVuY3Rpb24tOSA6IGZhbHNlLFxuICAkZnVuY3Rpb24tMTA6IGZhbHNlXG4pIHtcbiAgJGZ1bmN0aW9uLTE6IHVucXVvdGUoJGZ1bmN0aW9uLTEpO1xuICAkZnVuY3Rpb25zOiBjb21wYWN0KCRmdW5jdGlvbi0xLCAkZnVuY3Rpb24tMiwgJGZ1bmN0aW9uLTMsICRmdW5jdGlvbi00LCAkZnVuY3Rpb24tNSwgJGZ1bmN0aW9uLTYsICRmdW5jdGlvbi03LCAkZnVuY3Rpb24tOCwgJGZ1bmN0aW9uLTksICRmdW5jdGlvbi0xMCk7XG4gIEBpbmNsdWRlIGV4cGVyaW1lbnRhbCh0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiwgJGZ1bmN0aW9ucyxcbiAgICAtbW96LCAtd2Via2l0LCAtbywgbm90KC1tcyksIG5vdCgta2h0bWwpLCBvZmZpY2lhbFxuICApO1xufVxuXG4vLyBPbmUgb3IgbW9yZSB0cmFuc2l0aW9uLWRlbGF5cyBpbiBzZWNvbmRzXG4vL1xuLy8gKiBmb3IgbXVsdGlwbGUsIHVzZSBhIGNvbW1hLWRlbGltaXRlZCBsaXN0XG4vLyAqIHRoZXNlIGRlbGF5cyB3aWxsIGVmZmVjdCB0aGUgcHJvcGVydGllcyBpbiB0aGUgc2FtZSBsaXN0IHBvc2l0aW9uXG5cbkBtaXhpbiB0cmFuc2l0aW9uLWRlbGF5KCRkZWxheS0xOiAkZGVmYXVsdC10cmFuc2l0aW9uLWRlbGF5LFxuICAkZGVsYXktMiA6IGZhbHNlLFxuICAkZGVsYXktMyA6IGZhbHNlLFxuICAkZGVsYXktNCA6IGZhbHNlLFxuICAkZGVsYXktNSA6IGZhbHNlLFxuICAkZGVsYXktNiA6IGZhbHNlLFxuICAkZGVsYXktNyA6IGZhbHNlLFxuICAkZGVsYXktOCA6IGZhbHNlLFxuICAkZGVsYXktOSA6IGZhbHNlLFxuICAkZGVsYXktMTA6IGZhbHNlXG4pIHtcbiAgQGlmIHR5cGUtb2YoJGRlbGF5LTEpID09IHN0cmluZyB7ICRkZWxheS0xOiB1bnF1b3RlKCRkZWxheS0xKTsgfVxuICAkZGVsYXlzOiBjb21wYWN0KCRkZWxheS0xLCAkZGVsYXktMiwgJGRlbGF5LTMsICRkZWxheS00LCAkZGVsYXktNSwgJGRlbGF5LTYsICRkZWxheS03LCAkZGVsYXktOCwgJGRlbGF5LTksICRkZWxheS0xMCk7XG4gIEBpbmNsdWRlIGV4cGVyaW1lbnRhbCh0cmFuc2l0aW9uLWRlbGF5LCAkZGVsYXlzLFxuICAgIC1tb3osIC13ZWJraXQsIC1vLCBub3QoLW1zKSwgbm90KC1raHRtbCksIG9mZmljaWFsXG4gICk7XG59XG5cbi8vIFRyYW5zaXRpb24gYWxsLWluLW9uZSBzaG9ydGhhbmRcblxuQG1peGluIHNpbmdsZS10cmFuc2l0aW9uKFxuICAkcHJvcGVydHk6ICRkZWZhdWx0LXRyYW5zaXRpb24tcHJvcGVydHksXG4gICRkdXJhdGlvbjogJGRlZmF1bHQtdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgJGZ1bmN0aW9uOiAkZGVmYXVsdC10cmFuc2l0aW9uLWZ1bmN0aW9uLFxuICAkZGVsYXk6ICRkZWZhdWx0LXRyYW5zaXRpb24tZGVsYXlcbikge1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKGNvbXBhY3QoJHByb3BlcnR5ICRkdXJhdGlvbiAkZnVuY3Rpb24gJGRlbGF5KSk7XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKFxuICAkdHJhbnNpdGlvbi0xIDogZGVmYXVsdCxcbiAgJHRyYW5zaXRpb24tMiA6IGZhbHNlLFxuICAkdHJhbnNpdGlvbi0zIDogZmFsc2UsXG4gICR0cmFuc2l0aW9uLTQgOiBmYWxzZSxcbiAgJHRyYW5zaXRpb24tNSA6IGZhbHNlLFxuICAkdHJhbnNpdGlvbi02IDogZmFsc2UsXG4gICR0cmFuc2l0aW9uLTcgOiBmYWxzZSxcbiAgJHRyYW5zaXRpb24tOCA6IGZhbHNlLFxuICAkdHJhbnNpdGlvbi05IDogZmFsc2UsXG4gICR0cmFuc2l0aW9uLTEwOiBmYWxzZVxuKSB7XG4gIEBpZiAkdHJhbnNpdGlvbi0xID09IGRlZmF1bHQge1xuICAgICR0cmFuc2l0aW9uLTEgOiBjb21wYWN0KCRkZWZhdWx0LXRyYW5zaXRpb24tcHJvcGVydHkgJGRlZmF1bHQtdHJhbnNpdGlvbi1kdXJhdGlvbiAkZGVmYXVsdC10cmFuc2l0aW9uLWZ1bmN0aW9uICRkZWZhdWx0LXRyYW5zaXRpb24tZGVsYXkpO1xuICB9XG4gICR0cmFuc2l0aW9uczogZmFsc2U7XG4gIEBpZiB0eXBlLW9mKCR0cmFuc2l0aW9uLTEpID09IGxpc3QgYW5kIHR5cGUtb2YobnRoKCR0cmFuc2l0aW9uLTEsMSkpID09IGxpc3Qge1xuICAgICR0cmFuc2l0aW9uczogam9pbigkdHJhbnNpdGlvbi0xLCBjb21wYWN0KCR0cmFuc2l0aW9uLTIsICR0cmFuc2l0aW9uLTMsICR0cmFuc2l0aW9uLTQsICR0cmFuc2l0aW9uLTUsICR0cmFuc2l0aW9uLTYsICR0cmFuc2l0aW9uLTcsICR0cmFuc2l0aW9uLTgsICR0cmFuc2l0aW9uLTksICR0cmFuc2l0aW9uLTEwKSwgY29tbWEpO1xuICB9IEBlbHNlIHtcbiAgICAkdHJhbnNpdGlvbnMgOiBjb21wYWN0KCR0cmFuc2l0aW9uLTEsICR0cmFuc2l0aW9uLTIsICR0cmFuc2l0aW9uLTMsICR0cmFuc2l0aW9uLTQsICR0cmFuc2l0aW9uLTUsICR0cmFuc2l0aW9uLTYsICR0cmFuc2l0aW9uLTcsICR0cmFuc2l0aW9uLTgsICR0cmFuc2l0aW9uLTksICR0cmFuc2l0aW9uLTEwKTtcbiAgfVxuICAkZGVsYXlzOiBjb21tYS1saXN0KCk7XG4gICRoYXMtZGVsYXlzOiBmYWxzZTtcbiAgJHdlYmtpdC12YWx1ZTogY29tbWEtbGlzdCgpO1xuICAkbW96LXZhbHVlOiBjb21tYS1saXN0KCk7XG4gICRvLXZhbHVlOiBjb21tYS1saXN0KCk7XG5cbiAgLy8gVGhpcyBibG9jayBjYW4gYmUgbWFkZSBjb25zaWRlcmFibHkgc2ltcGxlciBhdCB0aGUgcG9pbnQgaW4gdGltZSB0aGF0XG4gIC8vIHdlIG5vIGxvbmdlciBuZWVkIHRvIGRlYWwgd2l0aCB0aGUgZGlmZmVyZW5jZXMgaW4gaG93IGRlbGF5cyBhcmUgdHJlYXRlZC5cbiAgQGVhY2ggJHRyYW5zaXRpb24gaW4gJHRyYW5zaXRpb25zIHtcbiAgICAvLyBFeHRyYWN0IHRoZSB2YWx1ZXMgZnJvbSB0aGUgbGlzdFxuICAgIC8vICh0aGlzIHdvdWxkIGJlIGNsZWFuZXIgaWYgbnRoIHRvb2sgYSAzcmQgYXJndW1lbnQgdG8gcHJvdmlkZSBhIGRlZmF1bHQgdmFsdWUpLlxuICAgICRwcm9wZXJ0eTogbnRoKCR0cmFuc2l0aW9uLCAxKTtcbiAgICAkZHVyYXRpb246IGZhbHNlO1xuICAgICR0aW1pbmctZnVuY3Rpb246IGZhbHNlO1xuICAgICRkZWxheTogZmFsc2U7XG4gICAgQGlmIGxlbmd0aCgkdHJhbnNpdGlvbikgPiAxIHsgJGR1cmF0aW9uOiAgICAgICAgbnRoKCR0cmFuc2l0aW9uLCAyKTsgfVxuICAgIEBpZiBsZW5ndGgoJHRyYW5zaXRpb24pID4gMiB7ICR0aW1pbmctZnVuY3Rpb246IG50aCgkdHJhbnNpdGlvbiwgMyk7IH1cbiAgICBAaWYgbGVuZ3RoKCR0cmFuc2l0aW9uKSA+IDMgeyAkZGVsYXk6ICAgICAgICAgICBudGgoJHRyYW5zaXRpb24sIDQpOyAkaGFzLWRlbGF5czogdHJ1ZTsgfVxuXG4gICAgLy8gSWYgYSBkZWxheSBpcyBwcm92aWRlZCB3aXRob3V0IGEgdGltaW5nIGZ1bmN0aW9uXG4gICAgQGlmIGlzLXRpbWUoJHRpbWluZy1mdW5jdGlvbikgYW5kIG5vdCgkZGVsYXkpIHsgJGRlbGF5OiAkdGltaW5nLWZ1bmN0aW9uOyAkdGltaW5nLWZ1bmN0aW9uOiBmYWxzZTsgJGhhcy1kZWxheXM6IHRydWU7IH1cblxuICAgIC8vIEtlZXAgYSBsaXN0IG9mIGRlbGF5cyBpbiBjYXNlIG9uZSBpcyBzcGVjaWZpZWRcbiAgICAkZGVsYXlzOiBhcHBlbmQoJGRlbGF5cywgaWYoJGRlbGF5LCAkZGVsYXksIDBzKSk7XG5cbiAgICAkd2Via2l0LXZhbHVlOiBhcHBlbmQoJHdlYmtpdC12YWx1ZSwgY29tcGFjdCgocHJlZml4ZWQtZm9yLXRyYW5zaXRpb24oLXdlYmtpdCwgJHByb3BlcnR5KSAkZHVyYXRpb24gJHRpbWluZy1mdW5jdGlvbikuLi4pKTtcbiAgICAgICAkbW96LXZhbHVlOiBhcHBlbmQoICAgJG1vei12YWx1ZSwgY29tcGFjdCgocHJlZml4ZWQtZm9yLXRyYW5zaXRpb24oICAgLW1veiwgJHByb3BlcnR5KSAkZHVyYXRpb24gJHRpbWluZy1mdW5jdGlvbiAkZGVsYXkpLi4uKSk7XG4gICAgICAgICAkby12YWx1ZTogYXBwZW5kKCAgICAgJG8tdmFsdWUsIGNvbXBhY3QoKHByZWZpeGVkLWZvci10cmFuc2l0aW9uKCAgICAgLW8sICRwcm9wZXJ0eSkgJGR1cmF0aW9uICR0aW1pbmctZnVuY3Rpb24gJGRlbGF5KS4uLikpO1xuICB9XG5cbiAgQGlmICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3Itd2Via2l0ICAgIHsgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uIDogJHdlYmtpdC12YWx1ZTtcbiAgICAvLyBvbGQgd2Via2l0IGRvZXNuJ3Qgc3VwcG9ydCB0aGUgZGVsYXkgcGFyYW1ldGVyIGluIHRoZSBzaG9ydGhhbmQgc28gd2UgcHJvZ3Jlc3NpdmVseSBlbmhhbmNlIGl0LlxuICAgIEBpZiAkaGFzLWRlbGF5cyAgICAgICAgICAgICAgICAgICAgICAgeyAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXkgOiAkZGVsYXlzOyAgICAgICB9IH1cbiAgQGlmICRleHBlcmltZW50YWwtc3VwcG9ydC1mb3ItbW96aWxsYSAgIHsgICAgICAgICAgLW1vei10cmFuc2l0aW9uIDogJG1vei12YWx1ZTsgICAgfVxuICBAaWYgJGV4cGVyaW1lbnRhbC1zdXBwb3J0LWZvci1vcGVyYSAgICAgeyAgICAgICAgICAgIC1vLXRyYW5zaXRpb24gOiAkby12YWx1ZTsgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbiA6ICR0cmFuc2l0aW9ucztcbn1cblxuLy8gY29lcmNlIGEgbGlzdCB0byBiZSBjb21tYSBkZWxpbWl0ZWQgb3IgbWFrZSBhIG5ldywgZW1wdHkgY29tbWEgZGVsaW1pdGVkIGxpc3QuXG5AZnVuY3Rpb24gY29tbWEtbGlzdCgkbGlzdDogKCkpIHtcbiAgQHJldHVybiBqb2luKCgpLCAkbGlzdCwgY29tbWEpO1xufVxuXG4vLyBSZXR1cm5zIGAkcHJvcGVydHlgIHdpdGggdGhlIGdpdmVuIHByZWZpeCBpZiBpdCBpcyBmb3VuZCBpbiBgJHRyYW5zaXRpb25hYmxlLXByZWZpeGVkLXZhbHVlc2AuXG5AZnVuY3Rpb24gcHJlZml4ZWQtZm9yLXRyYW5zaXRpb24oJHByZWZpeCwgJHByb3BlcnR5KSB7XG4gIEBpZiB0eXBlLW9mKCRwcm9wZXJ0eSkgPT0gbGlzdCB7XG4gICAgJG5ldy1saXN0OiBjb21tYS1saXN0KCk7XG4gICAgQGVhY2ggJHYgaW4gJHByb3BlcnR5IHtcbiAgICAgICRuZXctbGlzdDogYXBwZW5kKCRuZXctbGlzdCwgcHJlZml4ZWQtZm9yLXRyYW5zaXRpb24oJHByZWZpeCwgJHYpKTtcbiAgICB9XG4gICAgQHJldHVybiAkbmV3LWxpc3Q7XG4gIH0gQGVsc2Uge1xuICAgIEBpZiBpbmRleCgkdHJhbnNpdGlvbmFibGUtcHJlZml4ZWQtdmFsdWVzLCAkcHJvcGVydHkpIHtcbiAgICAgIEByZXR1cm4gI3skcHJlZml4fS0jeyRwcm9wZXJ0eX07XG4gICAgfSBAZWxzZSB7XG4gICAgICBAcmV0dXJuICRwcm9wZXJ0eTtcbiAgICB9XG4gIH1cbn1cblxuLy8gQ2hlY2tzIGlmIHRoZSB2YWx1ZSBnaXZlbiBpcyBhIHVuaXQgb2YgdGltZS5cbkBmdW5jdGlvbiBpcy10aW1lKCR2YWx1ZSkge1xuICBAaWYgdHlwZS1vZigkdmFsdWUpID09IG51bWJlciB7XG4gICAgQHJldHVybiBub3Qobm90KGluZGV4KHMgbXMsIHVuaXQoJHZhbHVlKSkpKTtcbiAgfSBAZWxzZSB7XG4gICAgQHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timeline',
                templateUrl: './timeline.component.html',
                styleUrls: ['./timeline.component.scss']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/globals.ts":
/*!************************!*\
  !*** ./src/globals.ts ***!
  \************************/
/*! exports provided: name, job, description, about_description */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "job", function() { return job; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "description", function() { return description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "about_description", function() { return about_description; });
//
// ===== File globals.ts    
//

const name = "Christian Anderser";
const job = "Writer";
const description = "I'm baby semiotics ipsum health goth chia synth listicle sunt freegan +1 portland typewriter kinfolk nmcore iceland nisi. Affogato viral est organic bushwick unicorn aliquip vinyl fashion axe retro squid lumbersexual knausgaard blog. Jianbing flexitarian pariatur truffaut retro succulents woke trust fund shabby chic.";
const about_description = "8-bit next level quinoa hella schlitz. Swag iPhone letterpress, bitters +1 vice pour-over four dollar toast. Brooklyn selvage organic yr reprehenderit. Yuccie butcher post-ironic, tilde sint irony skateboard art party selfies.";


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mariolozanocortes/Universidad Local/LozanoWebPage/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map