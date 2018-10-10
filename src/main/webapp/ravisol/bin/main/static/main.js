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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url('https://fonts.googleapis.com/css?family=Raleway');\n/*Google fonts*/\nbody{\n padding: 0;\n margin: 0;\n}\nform{\n max-width: 30em;\n margin: 4em auto;\n position: relative;\n background: #f4f4f4;\n padding: 2em 3em;\n}\nform h1{\n    font-family: \"Raleway\";\n    color:#F97300; \n}\nform input[type=text]::-webkit-input-placeholder{\n   font-family: \"Raleway\";\n   color:#666; \n}\nform input[type=text]::-ms-input-placeholder{\n   font-family: \"Raleway\";\n   color:#666; \n}\nform input[type=text]::placeholder{\n   font-family: \"Raleway\";\n   color:#666; \n}\nform .data{\n    margin-top: 1em;\n}\nform .data li{\n background: #fff;\n border-left: 4px solid #F97300;\n padding: 1em;\n margin: 1em auto;\n color: #666;\n font-family: \"Raleway\";\n}\nform .data li i{\n    float: right;\n    color: #888;\n    cursor: pointer;\n}\nform .input-group-text{\n    background: #F97300;\n    border-radius: 50%;\n    width: 5em;\n    height: 5em;\n    padding: 1em 23px;\n    color: #fff;\n    position: absolute;\n    right: 13px;\n    top: 68px;\n    cursor: pointer;\n}\nform .input-group-text i{\n    font-size: 2em;\n}\nform .form-control{\n height: 3em;\n    font-family: \"Raleway\";\n}\nform .form-control:focus{\n box-shadow: 0;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n <form #todoForm= \"ngForm\" (ngSubmit)=\"todoSubmit(todoForm.value);todoForm.resetForm()\">\n  <div class=\"form-group\">\n  <h1 class=\"text-center text-primary\">Todo App</h1>\n   <div class=\"input-group-prepend\">\n       <input type=\"text\" #todo class=\"form-control\" placeholder=\"Add Todo\" name=\"todo\" [(ngModel)]=\"textVal\" autocomplete=\"off\" autofocus=\"true\">\n    <span class=\"input-group-text\" (click)=\"todoSubmit(todoForm.value);todoForm.resetForm()\"><i class=\"material-icons\">add</i></span>\n   </div>\n   <div class=\"data\">\n  <ul class=\"list-instyled\">\n   <li *ngFor=\"let todo of todoArray\">{{todo.listValue}} \n   <i (click)=\"updateItem(todo)\" class=\"material-icons\">edit</i>\n   <i (click)=\"deleteItem(todo.Id)\" class=\"material-icons\">delete</i>\n   </li>\n  </ul>\n  </div>\n  </div>\n </form>\n</div>\n<button (click)=\"loginbtn();\">Hi</button>"

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


var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'app works!';
        this.result = '';
        this.finalResult = '';
    }
    AppComponent.prototype.sendtoDB = function (value) {
        var _this = this;
        var input = value.todo;
        console.log(input);
        this.http.post("/api/saveToDos", input).subscribe(function (response) { console.log('database result saved', response); _this.getTodos(); });
        this.getTodos();
    };
    AppComponent.prototype.deleteItem = function (todo) {
        var _this = this;
        console.log(todo);
        this.http.post("/api/deleteToDos", todo).subscribe(function (response) { console.log('item removed from database', response); _this.getTodos(); });
        /*for(let i=0 ;i<= this.todoArray.length ;i++){
         if(todo== this.todoArray[i]){
          this.todoArray.splice(i,1)
         }
        }*/
    };
    AppComponent.prototype.updateItem = function (todo) {
        this.deleteItem(todo.Id);
        this.textVal = todo.listValue;
        this.nameField.nativeElement.focus();
    };
    AppComponent.prototype.todoSubmit = function (value) {
        if (value !== "") {
            /*this.todoArray.push(value.todo)*/
            this.sendtoDB(value);
        }
        else {
            alert('Field required **');
        }
    };
    AppComponent.prototype.getTodos = function () {
        var _this = this;
        this.http.get("/api/getAll").subscribe(function (response) { return _this.todoArray = response; });
        console.log('gettodos called');
    };
    AppComponent.prototype.ngOnInit = function () {
        console.log("on page init");
        this.getTodos();
    };
    AppComponent.prototype.loginbtn = function () {
        var _this = this;
        this.http.get("/api/login").subscribe(function (response) { return _this.todoArray = response; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("todo"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "nameField", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = __webpack_require__(/*! /home/ravisol/Downloads/demopoc/src/main/webapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map