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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-page1></app-page1>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page1/page1.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page1/page1.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"myheader\"> </div>\n\n<div class=\"container\">\n  <div class=\"link\"> OBJECTIVE > CREATE OBJECTIVE</div>\n</div>\n<div class=\"container\">\n  <!-- Content here -->\n\n  <div class=\"row\">\n\n    <div class=\"col-sm col-md-3 processBar\">\n      <!-- <div class=\"card myCard processBar\">\n        <div class=\"card-body\"> -->\n          <ul>\n            <li class=\"\" [ngClass]=\"{active:true,cActive:true}\">DEFINE OBJECTIVE</li>\n            <li [ngClass]=\"{active:(cColl2=='2o'||cColl3=='3o'),cActive:(cColl2=='2o'||cColl3=='3o')}\">KRA</li>\n            <li [ngClass]=\"{active:(cColl3=='3o'),cActive:(cColl3=='3o')}\">WEIGHTAGE & PRIVACY.</li>\n            <li class=\"su\">SUBMIT</li>\n          </ul>\n        <!-- </div>\n      </div> -->\n\n\n    </div>\n    <div class=\"col-sm col-md-6\">\n      <form [formGroup]=\"pFrm\" (ngSubmit)=\"pFrm.valid? onSubmit():markFormGroupTouched()\">\n        <div class=\"accordion\" id=\"accordionExample\">\n          <div class=\"card myCard\">\n            <div (click)=\"collapseMe('1')\" class=\"card-header\" id=\"headingOne\" data-toggle=\"collapse\" data-target=\"#collapseOne\"\n              aria-expanded=\"true\" aria-controls=\"collapseOne\">\n              DEFINE OBJECTIVE\n              <i class=\"fa fa-plus\" (click)=\"cColl1='1o'\" *ngIf=\"cColl1=='1c'\"></i>\n              <i class=\"fa fa-minus\" (click)=\"cColl1='1c'\" *ngIf=\"cColl1=='1o'\"></i>\n            </div>\n\n            <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n\n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control input-title\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\n                        placeholder=\"Title \" formControlName=\"title\">\n                      <div *ngIf=\"formErrors.title!=''\" class=\"error\">{{formErrors.title}}</div>\n                    </div>\n\n                  </div>\n                  <div class=\"col-md-12\">\n                    <h4>Description</h4>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum\n                      dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit\n                      amet, consectetur adipiscing elit.</p>\n                  </div>\n                  <div class=\"col-md-12\">\n                    <span class=\"lbl\">Timeline</span></div>\n                  <div class=\"col-md-6\">\n                    <div class=\"input-group\">\n                      <!--  <label for=\"exampleInputPassword1\">TimeLine</label> -->\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\"> <i class=\"fa fa-calendar\"></i></span>\n                      </div>\n                      <input type=\"date\" class=\"form-control\" placeholder=\"Username\" aria-label=\"Username\"\n                        aria-describedby=\"basic-addon1\" formControlName=\"timeLineFrom\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"input-group\">\n                      <!--  <label for=\"exampleInputPassword1\">TimeLine</label> -->\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\" id=\"basic-addon1\"> <i class=\"fa fa-calendar\"></i></span>\n                      </div>\n                      <input type=\"date\" class=\"form-control\" placeholder=\"Username\" aria-label=\"Username\"\n                        aria-describedby=\"basic-addon1\" formControlName=\"timeLineTo\">\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <label class=\" lbl\">Owner</label>\n                      <select class=\"form-control input-sm\" formControlName=\"owner\">\n                        <option selected>Choose...</option>\n                        <option>Individual</option>\n                        <option>Multiple</option>\n                        <option>Shared</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div formArrayName=\"ownerName\">\n                    <div class=\"col-md-12\" *ngFor=\"let project of pFrm.get('ownerName').controls; let i=index\">\n                      <div class=\"form-group \" [formGroupName]=\"i\">\n                        <img src=\"../assets/pic.jpg\" class=\"img-pro\" style=\"width: 10%;float: left\">\n                        <input type=\"email\" class=\"form-control input-title\" placeholder=\"ownerName \" style=\"width: 90%;float: right;\"\n                          formControlName=\"name\" (focus)=\"onFocush(i)\" (focusout)=\"onFocushout(i)\" >\n                          <!-- <input type=\"email\" class=\"form-control input-title\" placeholder=\"ownerName \" style=\"width: 90%;float: right;\"\n                          [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" >{{searchText}} -->\n                          <!-- {{pFrm.controls.ownerName.controls[i].get('name').value }} -->\n                        <div class=\"uList\" *ngIf=\"showUserList==i\">\n                          <div class=\"uListli\" *ngFor=\"let ul of userList|search:pFrm.controls.ownerName.controls[i].get('name').value; let k=index\" (click)=\"setValue(i,ul.name)\">{{ul.name}}</div>\n                        </div>\n                      </div>\n                    </div>\n                    <input *ngIf=\"pFrm.get('owner').value=='Multiple'\" type=\"button\" value=\"+ ADD PEOPLE\" class=\"addPeople btn\"\n                      (click)=\"addNewCompany()\">\n\n                  </div>\n\n                  <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                      <label class=\" lbl\">Alignment</label>\n                      <select  class=\"form-control input-sm\" formControlName=\"alignment\">\n                        <option selected>Choose...</option>\n                        <option>Functional Skill</option>\n                        <option>BSC Category</option>\n                      </select>\n                    </div>\n                  </div>\n                  <div class=\"col-md-12\">\n\n                    <div class=\"form-check\" *ngFor=\"let l of alig\" [hidden]=\"!(pFrm.get('alignment').value=='Functional Skill')\">\n                      <label class=\"form-check-label\">\n                        <input type=\"radio\" [value]=\"l\" class=\"form-check-input\" name=\"Type\" formControlName=\"Type\">{{l}}\n                      </label>\n                    </div>\n                    <div class=\"form-check\" *ngFor=\"let l of alig4\" [hidden]=\"!(pFrm.get('alignment').value=='BSC Category')\">\n                      <label class=\"form-check-label\">\n                        <input type=\"radio\" [value]=\"l\" class=\"form-check-input\" name=\"Type\" formControlName=\"Type\">{{l}}\n                      </label>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"card myCard\">\n            <div (click)=\"collapseMe('2')\" class=\"card-header\" id=\"headingTwo\" data-toggle=\"collapse\" data-target=\"#collapseTwo\"\n              aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n\n              KEY RESULT AREAS\n              <i class=\"fa fa-plus\" *ngIf=\"cColl2=='2c'\"></i>\n              <i class=\"fa fa-minus\" *ngIf=\"cColl2=='2o'\"></i>\n            </div>\n            <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\n              <div class=\"card-body\">\n\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\" lbl\">Key Result 1</label>\n                      <input type=\"text\" class=\"form-control input-title\" placeholder=\"keyResult1 \" formControlName=\"keyResult1\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\" lbl\">Key Result 2</label>\n                      <input type=\"text\" class=\"form-control input-title\" placeholder=\"keyResult2 \" formControlName=\"keyResult2\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card myCard\">\n            <div (click)=\"collapseMe('3')\" class=\"card-header\" id=\"headingThree\" data-toggle=\"collapse\" data-target=\"#collapseThree\"\n              aria-expanded=\"false\" aria-controls=\"collapseThree\">\n              WEIGHTAGE & PRIVACY\n\n              <i class=\"fa fa-plus\" *ngIf=\"cColl3=='3c'\"></i>\n              <i class=\"fa fa-minus\" *ngIf=\"cColl3=='3o'\"></i>\n            </div>\n            <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\" lbl\">Weightage</label>\n                      <input type=\"text\" class=\"form-control input-title\" placeholder=\"weightage \" formControlName=\"weightage\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\" lbl\" >Privacy </label>\n                      <input type=\"text\" class=\"form-control input-title\" placeholder=\"privacy \" formControlName=\"privacy\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"btnUpdate\">\n          <input type=\"button\" value=\"Reset\" class=\"btn btn-secondary full\">\n          <input type=\"submit\" value=\"Save\" class=\"btn btn-success full\" (click)=\"markFormGroupTouched();logValidationErrors()\" >\n        </div>\n      </form>\n    </div>\n    <div class=\"col-sm col-md-3\">\n      <div class=\"card myCard\">\n        <div class=\"card-header\">\n          SUMMARY\n        </div>\n        <div class=\"card-body\" style=\"min-height: 300px\">\n            <blockquote class=\"blockquote mb-0\">\n            <ul class=\"listDetail\">\n              <li *ngFor=\"let l of result\"><b>{{l.title}}</b></li>\n            </ul>\n          </blockquote>\n        </div>\n        <div class=\"card-footer saveprogress\">SAVE PROGRESS\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'AngT';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page1_page1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page1/page1.component */ "./src/app/page1/page1.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.pipe */ "./src/app/search.pipe.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _page1_page1_component__WEBPACK_IMPORTED_MODULE_4__["Page1Component"],
            _search_pipe__WEBPACK_IMPORTED_MODULE_6__["SearchPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/page1/page1.component.css":
/*!*******************************************!*\
  !*** ./src/app/page1/page1.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myheader{height: 25px;width: 100%;background-color: darkblue}\r\n.processBar ul{ \r\n    /* border-right:2px solid #ddd; */\r\n    background: -webkit-gradient(\r\n        linear,\r\n        left top, left bottom,\r\n        color-stop(0, #fff),\r\n        color-stop(8%, #fff),\r\n        color-stop(8%, #b3b5b3),\r\n        color-stop(85%, #b3b5b3),\r\n        color-stop(90%, #fff),\r\n        to(#fff)\r\n    )right no-repeat;\r\n    background: linear-gradient(\r\n        to bottom,\r\n        #fff 0,\r\n        #fff 8%,\r\n        #b3b5b3 8%,\r\n        #b3b5b3 85%,\r\n        #fff 90%,\r\n        #fff\r\n    )right no-repeat;\r\n    background-size: 2px 100%; \r\n    margin:0; padding:0; width:200px;}\r\n.processBar ul>li{ display:block; padding:20px; position:relative;text-align: right;}\r\n.processBar ul>li.active{ border-right:2px solid #0C0;color: #0C0; position:relative; margin-right:-2px;}\r\n.processBar ul>li:before{ content:''; width:10px; height:10px; border-radius:5px; background:#b3b5b3; position:absolute; top:50%; right:-5px; -webkit-transform:translateY(-50%); transform:translateY(-50%)}\r\n/* .processBar ul>li.active:before{ content:''; width:10px; height:10px; border-radius:5px; background:#b3b5b3; position:absolute; top:50%; right:-5px; transform:translateY(-50%)} */\r\n.processBar ul>li.cActive:before{ content:''; width:15px; height:15px; border-radius:8px; background:#0C0; position:absolute; top:50%; right:-8px; -webkit-transform:translateY(-50%); transform:translateY(-50%)}\r\n.btnUpdate input[type='button'],[type=\"submit\"]{width: 49%;margin: 2px;}\r\n.panel-heading .accordion-toggle:after {\r\n    font-family: 'Glyphicons Halflings';  /* essential for enabling glyphicon */\r\n    content: \"\\e114\";    /* adjust as needed, taken from bootstrap.css */\r\n    float: right;        /* adjust as needed */\r\n    color: grey;         /* adjust as needed */\r\n}\r\n/* .panel-heading .accordion-toggle.collapsed:after { content: \"\\e080\";    }\r\n.panel-heading{ background: #000;color: #fff;padding: 1px 10px 1px 10px ;}\r\n .panel-heading i{ float: right; margin-top: 5px;}\r\n.panel-heading:hover{cursor: pointer}\r\n.panel-body{padding: 5px 10px 5px 10px ;} */\r\n.card-header{ background: #000;color: #fff;padding: 1px 10px 1px 10px ; }\r\n.card-header i{ float: right;    margin-top: 5px;}\r\n.card-header:hover{cursor: pointer}\r\n.card-body{padding: 5px 10px 5px 10px ;}\r\n.input-title{border-bottom: 2px solid #007bff}\r\n.img-pro{width: 35px;height: 35px;}\r\n.addPeople{ float: right;}\r\n.error{\r\n    border: 1px solid #000;\r\n    border-bottom: 4px solid #ea0b16;\r\n    float: left;\r\n    padding: 0px 8px 0 8px;\r\n    font-size: 11px;\r\n    color: #f00;\r\n}\r\n.saveprogress{\r\n    text-align: center;\r\n    color: #fff;\r\n    background-color: #007bff;\r\n    font-size: 15px;\r\n    font-weight:bold;\r\n}\r\n.link{margin: 10px 10px 50px 10px;}\r\n.uList{\r\n    width: 100px;\r\n    border: 1px solid #000;\r\n    margin-left: 10%;\r\n    margin-top: 7%;\r\n    position: absolute;\r\n    z-index: 1;\r\n    background-color: darkgrey;\r\n}\r\n.uListli{border-bottom: 1px solid #0c0;}\r\n.uListli:hover{background-color: #000;cursor: pointer;color: #fff;font-weight: bold;}\r\n.ownerList{\r\n    position: absolute\r\n}\r\n.myCard{\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n    /* width: 40% */\r\n    margin-bottom:15px; \r\n}\r\n.lbl{ font-size: 20px;\r\n    font-weight: 500;\r\n    margin: 3px 0 0 0;\r\n    padding: 0 0 0 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZTEvcGFnZTEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFVLFlBQVksQ0FBQyxXQUFXLENBQUMsMEJBQTBCO0FBQzdEO0lBQ0ksaUNBQWlDO0lBQ2pDOzs7Ozs7Ozs7b0JBQXFMO0lBQXJMOzs7Ozs7OztvQkFBcUw7SUFDckwseUJBQXlCO0lBQ3pCLFFBQVEsRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDO0FBQ3JDLG1CQUFtQixhQUFhLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDO0FBQ3BGLDBCQUEwQiwyQkFBMkIsQ0FBQyxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7QUFDeEcsMEJBQTBCLFVBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsa0NBQXlCLEVBQXpCLDBCQUEwQjtBQUN4SyxxTEFBcUw7QUFDckwsa0NBQWtDLFVBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLGtDQUF5QixFQUF6QiwwQkFBMEI7QUFFN0ssZ0RBQWdELFVBQVUsQ0FBQyxXQUFXLENBQUM7QUFDdkU7SUFDSSxtQ0FBbUMsR0FBRyxxQ0FBcUM7SUFDM0UsZ0JBQWdCLEtBQUssK0NBQStDO0lBQ3BFLFlBQVksU0FBUyxxQkFBcUI7SUFDMUMsV0FBVyxVQUFVLHFCQUFxQjtBQUM5QztBQUNBOzs7OzJDQUkyQztBQUUzQyxjQUFjLGdCQUFnQixDQUFDLFdBQVcsQ0FBQywyQkFBMkIsRUFBRTtBQUN2RSxnQkFBZ0IsWUFBWSxLQUFLLGVBQWUsQ0FBQztBQUNsRCxtQkFBbUIsZUFBZTtBQUNsQyxXQUFXLDJCQUEyQixDQUFDO0FBQ3ZDLGFBQWEsZ0NBQWdDO0FBQzdDLFNBQVMsV0FBVyxDQUFDLFlBQVksQ0FBQztBQUNsQyxZQUFZLFlBQVksQ0FBQztBQUV6QjtJQUNJLHNCQUFzQjtJQUN0QixnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsV0FBVztBQUNmO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBRUEsTUFBTSwyQkFBMkIsQ0FBQztBQUNsQztJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLDBCQUEwQjtBQUM5QjtBQUNBLFNBQVMsNkJBQTZCLENBQUM7QUFDdkMsZUFBZSxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDO0FBRXBGO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksdUNBQXVDO0lBQ3ZDLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUVBLE1BQU0sZUFBZTtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UxL3BhZ2UxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXloZWFkZXJ7aGVpZ2h0OiAyNXB4O3dpZHRoOiAxMDAlO2JhY2tncm91bmQtY29sb3I6IGRhcmtibHVlfVxyXG4ucHJvY2Vzc0JhciB1bHsgXHJcbiAgICAvKiBib3JkZXItcmlnaHQ6MnB4IHNvbGlkICNkZGQ7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgdG8gYm90dG9tLFxyXG4gICAgICAgICNmZmYgMCxcclxuICAgICAgICAjZmZmIDglLFxyXG4gICAgICAgICNiM2I1YjMgOCUsXHJcbiAgICAgICAgI2IzYjViMyA4NSUsXHJcbiAgICAgICAgI2ZmZiA5MCUsXHJcbiAgICAgICAgI2ZmZlxyXG4gICAgKXJpZ2h0IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMnB4IDEwMCU7IFxyXG4gICAgbWFyZ2luOjA7IHBhZGRpbmc6MDsgd2lkdGg6MjAwcHg7fVxyXG4ucHJvY2Vzc0JhciB1bD5saXsgZGlzcGxheTpibG9jazsgcGFkZGluZzoyMHB4OyBwb3NpdGlvbjpyZWxhdGl2ZTt0ZXh0LWFsaWduOiByaWdodDt9XHJcbi5wcm9jZXNzQmFyIHVsPmxpLmFjdGl2ZXsgYm9yZGVyLXJpZ2h0OjJweCBzb2xpZCAjMEMwO2NvbG9yOiAjMEMwOyBwb3NpdGlvbjpyZWxhdGl2ZTsgbWFyZ2luLXJpZ2h0Oi0ycHg7fVxyXG4ucHJvY2Vzc0JhciB1bD5saTpiZWZvcmV7IGNvbnRlbnQ6Jyc7IHdpZHRoOjEwcHg7IGhlaWdodDoxMHB4OyBib3JkZXItcmFkaXVzOjVweDsgYmFja2dyb3VuZDojYjNiNWIzOyBwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOjUwJTsgcmlnaHQ6LTVweDsgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9XHJcbi8qIC5wcm9jZXNzQmFyIHVsPmxpLmFjdGl2ZTpiZWZvcmV7IGNvbnRlbnQ6Jyc7IHdpZHRoOjEwcHg7IGhlaWdodDoxMHB4OyBib3JkZXItcmFkaXVzOjVweDsgYmFja2dyb3VuZDojYjNiNWIzOyBwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOjUwJTsgcmlnaHQ6LTVweDsgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9ICovXHJcbi5wcm9jZXNzQmFyIHVsPmxpLmNBY3RpdmU6YmVmb3JleyBjb250ZW50OicnOyB3aWR0aDoxNXB4OyBoZWlnaHQ6MTVweDsgYm9yZGVyLXJhZGl1czo4cHg7IGJhY2tncm91bmQ6IzBDMDsgcG9zaXRpb246YWJzb2x1dGU7IHRvcDo1MCU7IHJpZ2h0Oi04cHg7IHRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpfVxyXG5cclxuLmJ0blVwZGF0ZSBpbnB1dFt0eXBlPSdidXR0b24nXSxbdHlwZT1cInN1Ym1pdFwiXXt3aWR0aDogNDklO21hcmdpbjogMnB4O31cclxuLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGU6YWZ0ZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHbHlwaGljb25zIEhhbGZsaW5ncyc7ICAvKiBlc3NlbnRpYWwgZm9yIGVuYWJsaW5nIGdseXBoaWNvbiAqL1xyXG4gICAgY29udGVudDogXCJcXGUxMTRcIjsgICAgLyogYWRqdXN0IGFzIG5lZWRlZCwgdGFrZW4gZnJvbSBib290c3RyYXAuY3NzICovXHJcbiAgICBmbG9hdDogcmlnaHQ7ICAgICAgICAvKiBhZGp1c3QgYXMgbmVlZGVkICovXHJcbiAgICBjb2xvcjogZ3JleTsgICAgICAgICAvKiBhZGp1c3QgYXMgbmVlZGVkICovXHJcbn1cclxuLyogLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGUuY29sbGFwc2VkOmFmdGVyIHsgY29udGVudDogXCJcXGUwODBcIjsgICAgfVxyXG4ucGFuZWwtaGVhZGluZ3sgYmFja2dyb3VuZDogIzAwMDtjb2xvcjogI2ZmZjtwYWRkaW5nOiAxcHggMTBweCAxcHggMTBweCA7fVxyXG4gLnBhbmVsLWhlYWRpbmcgaXsgZmxvYXQ6IHJpZ2h0OyBtYXJnaW4tdG9wOiA1cHg7fVxyXG4ucGFuZWwtaGVhZGluZzpob3ZlcntjdXJzb3I6IHBvaW50ZXJ9XHJcbi5wYW5lbC1ib2R5e3BhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4IDt9ICovXHJcblxyXG4uY2FyZC1oZWFkZXJ7IGJhY2tncm91bmQ6ICMwMDA7Y29sb3I6ICNmZmY7cGFkZGluZzogMXB4IDEwcHggMXB4IDEwcHggOyB9XHJcbiAuY2FyZC1oZWFkZXIgaXsgZmxvYXQ6IHJpZ2h0OyAgICBtYXJnaW4tdG9wOiA1cHg7fVxyXG4uY2FyZC1oZWFkZXI6aG92ZXJ7Y3Vyc29yOiBwb2ludGVyfVxyXG4uY2FyZC1ib2R5e3BhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4IDt9XHJcbi5pbnB1dC10aXRsZXtib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwN2JmZn1cclxuLmltZy1wcm97d2lkdGg6IDM1cHg7aGVpZ2h0OiAzNXB4O31cclxuLmFkZFBlb3BsZXsgZmxvYXQ6IHJpZ2h0O31cclxuXHJcbi5lcnJvcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2VhMGIxNjtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMHB4IDhweCAwIDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiAjZjAwO1xyXG59XHJcblxyXG4uc2F2ZXByb2dyZXNze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxufVxyXG5cclxuLmxpbmt7bWFyZ2luOiAxMHB4IDEwcHggNTBweCAxMHB4O31cclxuLnVMaXN0e1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA3JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcclxufVxyXG4udUxpc3RsaXtib3JkZXItYm90dG9tOiAxcHggc29saWQgIzBjMDt9XHJcbi51TGlzdGxpOmhvdmVye2JhY2tncm91bmQtY29sb3I6ICMwMDA7Y3Vyc29yOiBwb2ludGVyO2NvbG9yOiAjZmZmO2ZvbnQtd2VpZ2h0OiBib2xkO31cclxuXHJcbi5vd25lckxpc3R7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxufVxyXG4ubXlDYXJke1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIC8qIHdpZHRoOiA0MCUgKi9cclxuICAgIG1hcmdpbi1ib3R0b206MTVweDsgXHJcbn1cclxuXHJcbi5sYmx7IGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW46IDNweCAwIDAgMDtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page1/page1.component.ts":
/*!******************************************!*\
  !*** ./src/app/page1/page1.component.ts ***!
  \******************************************/
/*! exports provided: Page1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page1Component", function() { return Page1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let Page1Component = class Page1Component {
    constructor(fb) {
        this.fb = fb;
        this.result = [];
        this.cColl1 = '1o';
        this.cColl2 = '2c';
        this.cColl3 = '3c';
        this.alig = ['Engineering', 'Design', 'Sales'];
        this.alig4 = ['Business', 'People', 'Process', 'Customer'];
        this.userList = [{ name: 'Mayank' }, { name: "Rahmat" }, { name: 'Swati' }, { name: 'Rajni' }, { name: 'Mayank' }];
        this.showUserList = -1;
        this.formErrors = {
            'title': '',
            'timeLineFrom': '',
            'timeLineTo': '',
            'owner': '',
            'ownerName': '',
            "name": '',
            'alignment': ''
        };
        this.validationMessages = {
            'title': {
                'required': 'Tile is required.'
            },
            'owner': {
                'required': 'Email is required.'
            },
            'ownerName': {
                'required': 'Skill Name is required.',
            },
            'alignment': {
                'required': 'Experience is required.',
            }
        };
        console.log("localStorage.get('result')", localStorage.getItem('result'));
        if (localStorage.getItem('result') != null) {
            this.result = JSON.parse(localStorage.getItem('result'));
        }
    }
    onFocush(i) {
        setTimeout(() => {
            this.showUserList = i;
        }, 100);
        this.showUserList = i;
    }
    onFocushout(i) {
        setTimeout(() => {
            this.showUserList = -1;
        }, 200);
    }
    collapseMe(c) {
        if (c == '1') {
            this.cColl2 = '2c';
            this.cColl3 = '3c';
            if (this.cColl1 == '1o') {
                this.cColl1 = '1c';
            }
            else {
                this.cColl1 = '1o';
            }
        }
        else if (c == '2') {
            this.cColl1 = '1c';
            this.cColl3 = '3c';
            if (this.cColl2 == '2o') {
                this.cColl2 = '2c';
            }
            else {
                this.cColl2 = '2o';
            }
        }
        else if (c == '3') {
            this.cColl1 = '1c';
            this.cColl2 = '2c';
            if (this.cColl3 == '3o') {
                this.cColl3 = '3c';
            }
            else {
                this.cColl3 = '3o';
            }
        }
    }
    bingFrnLogin() {
        this.pFrm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            timeLineFrom: [''],
            timeLineTo: [''],
            owner: ['Individual'],
            ownerName: this.fb.array([this.fb.group({
                    name: ['']
                })]),
            alignment: ['Functional Skill'],
            Type: ['2'],
            keyResult1: [''],
            keyResult2: [''],
            weightage: [''],
            privacy: ['']
        });
        this.pFrm.valueChanges.subscribe((data) => {
            this.logValidationErrors(this.pFrm);
        });
    }
    addNewCompany() {
        let control = this.pFrm.controls.ownerName;
        control.push(this.fb.group({
            name: ['']
        }));
    }
    deleteCompany(index) {
        let control = this.pFrm.controls.ownerName;
        if (control.length > 1) {
            control.removeAt(index);
        }
    }
    setValue(index, value) {
        let control = this.pFrm.controls.ownerName;
        control.controls[index].get('name').setValue(value);
    }
    onSubmit() {
        this.markFormGroupTouched(this.pFrm);
        this.result.push(this.pFrm.value);
        console.log(">>>>>this.result>>>", this.result);
        localStorage.setItem("result", JSON.stringify(this.result));
        this.logValidationErrors();
        this.bingFrnLogin();
    }
    ngOnInit() {
        this.bingFrnLogin();
    }
    markFormGroupTouched(formGroup = this.pFrm) {
        Object.values(formGroup.controls).forEach(control => {
            control.markAsTouched();
            if (control.controls) {
                this.markFormGroupTouched(control);
            }
        });
    }
    logValidationErrors(group = this.pFrm) {
        Object.keys(group.controls).forEach((key) => {
            const abstractControl = group.get(key);
            if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                this.logValidationErrors(abstractControl);
            }
            else {
                console.log("formErrorsLogin", this.pFrm);
                this.formErrors[key] = '';
                if (abstractControl && !abstractControl.valid
                    && (abstractControl.touched || abstractControl.dirty)) {
                    const messages = this.validationMessages[key];
                    console.log("abstractControl.errors", abstractControl.errors);
                    for (const errorKey in abstractControl.errors) {
                        if (errorKey) {
                            this.formErrors[key] += messages[errorKey] + ' ';
                        }
                    }
                }
            }
        });
    }
};
Page1Component.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
Page1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page1',
        template: __webpack_require__(/*! raw-loader!./page1.component.html */ "./node_modules/raw-loader/index.js!./src/app/page1/page1.component.html"),
        styles: [__webpack_require__(/*! ./page1.component.css */ "./src/app/page1/page1.component.css")]
    })
], Page1Component);



/***/ }),

/***/ "./src/app/search.pipe.ts":
/*!********************************!*\
  !*** ./src/app/search.pipe.ts ***!
  \********************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchPipe = class SearchPipe {
    // <table *ngFor="let emp of customerData | search: {column1: searchText, column2:searchText,  colum: searchText}; let i=index;">
    transform(value, args) {
        if (!value)
            return null;
        if (!args)
            return value;
        args = args.toLowerCase();
        return value.filter(function (item) {
            return JSON.stringify(item).toLowerCase().includes(args);
        });
    }
};
SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'search'
    })
], SearchPipe);



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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\2019Ajay\test\AngT\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map