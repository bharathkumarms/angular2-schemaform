webpackJsonp(["main"],{

/***/ "../../../../../src/demo/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/demo/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/demo/app/ace-editor.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AceEditorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_brace__ = __webpack_require__("../../../../brace/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_brace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_brace__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_brace_theme_sqlserver__ = __webpack_require__("../../../../brace/theme/sqlserver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_brace_theme_sqlserver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_brace_theme_sqlserver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brace_mode_json__ = __webpack_require__("../../../../brace/mode/json.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brace_mode_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_brace_mode_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AceEditorDirective = (function () {
    function AceEditorDirective(elementRef) {
        this._options = {};
        this._highlightActiveLine = false;
        this._showGutter = false;
        this._readOnly = false;
        this._theme = 'sqlserver';
        this._mode = 'json';
        this._autoUpdateContent = true;
        this.textChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        var el = elementRef.nativeElement;
        ace.config.set('basePath', '/node_modules/brace');
        this.editor = ace['edit'](el);
        this.init();
        this.initEvents();
    }
    AceEditorDirective.prototype.init = function () {
        this.editor.getSession().setUseWorker(false);
        this.editor.setOptions(this._options);
        this.editor.setTheme("ace/theme/" + this._theme);
        this.editor.getSession().setMode("ace/mode/" + this._mode);
        this.editor.setHighlightActiveLine(this._highlightActiveLine);
        this.editor.renderer.setShowGutter(this._showGutter);
        this.editor.setReadOnly(this._readOnly);
        this.editor.$blockScrolling = Infinity;
    };
    AceEditorDirective.prototype.initEvents = function () {
        var _this = this;
        this.editor.on('change', function () {
            var newVal = _this.editor.getValue();
            if (newVal === _this.oldText) {
                return;
            }
            if (typeof _this.oldText !== 'undefined') {
                _this.textChanged.emit(newVal);
            }
            _this.oldText = newVal;
        });
    };
    Object.defineProperty(AceEditorDirective.prototype, "options", {
        set: function (options) {
            this._options = options;
            this.editor.setOptions(options || {});
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AceEditorDirective.prototype, "readOnly", {
        set: function (readOnly) {
            this._readOnly = readOnly;
            this.editor.setReadOnly(readOnly);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AceEditorDirective.prototype, "theme", {
        set: function (theme) {
            this._theme = theme;
            this.editor.setTheme("ace/theme/" + theme);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AceEditorDirective.prototype, "mode", {
        set: function (mode) {
            this._mode = mode;
            this.editor.getSession().setMode("ace/mode/" + mode);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AceEditorDirective.prototype, "text", {
        set: function (text) {
            if (!text) {
                text = '';
            }
            if (this._autoUpdateContent === true) {
                this.editor.setValue(text);
                this.editor.clearSelection();
                this.editor.focus();
                this.editor.moveCursorTo(0, 0);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AceEditorDirective.prototype, "autoUpdateContent", {
        set: function (status) {
            this._autoUpdateContent = status;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])('textChanged'),
        __metadata("design:type", Object)
    ], AceEditorDirective.prototype, "textChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], AceEditorDirective.prototype, "options", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], AceEditorDirective.prototype, "readOnly", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], AceEditorDirective.prototype, "theme", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], AceEditorDirective.prototype, "mode", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], AceEditorDirective.prototype, "text", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], AceEditorDirective.prototype, "autoUpdateContent", null);
    AceEditorDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[ace-editor]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], AceEditorDirective);
    return AceEditorDirective;
}());



/***/ }),

/***/ "../../../../../src/demo/app/demo-root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoRootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DemoRootComponent = (function () {
    function DemoRootComponent() {
    }
    DemoRootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'demo-root',
            template: "<router-outlet></router-outlet>"
        })
    ], DemoRootComponent);
    return DemoRootComponent;
}());



/***/ }),

/***/ "../../../../../src/demo/app/demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-page-header\">\n  <mat-toolbar class=\"mat-elevation-z4 mat-medium\" color=\"secondary\">\n    Angular JSON Schema Form — Modified for ADP <br/>\n    Suggested Material Design by PO is incorporated.\n  </mat-toolbar>\n  <div class=\"header-content\">\n    <span class=\"avoidwrap\">\n      \n    </span><br>\n    More detail examples given in repo,<br/><br/>\n    <span class=\"menu-label\">Current example:</span>\n    <button mat-raised-button\n      color=\"secondary\"\n      [matMenuTriggerFor]=\"exampleMenu\">\n      <mat-icon>menu</mat-icon> {{selectedSetName}} {{selectedExampleName}}\n    </button>\n    <mat-menu #exampleMenu=\"matMenu\" class=\"example-menu\">\n      <button mat-menu-item class=\"mat-medium\"\n        *ngFor=\"let example of examples['ng-jsf'].schemas\"\n        (click)=\"loadSelectedExample('ng-jsf', '', example.file, example.name)\">\n        {{example.name}}\n      </button>\n      <button mat-menu-item class=\"mat-medium\" [matMenuTriggerFor]=\"asfMenu\">\n        <span>Angular Schema Form (AngularJS) examples</span>\n      </button>\n      <mat-menu #asfMenu=\"matMenu\" class=\"example-menu\">\n        <button mat-menu-item class=\"mat-medium\"\n          *ngFor=\"let example of examples.asf.schemas\"\n          (click)=\"loadSelectedExample('asf', 'Angular Schema Form:', example.file, example.name)\">\n          {{example.name}}\n        </button>\n      </mat-menu>\n      <button mat-menu-item class=\"mat-medium\" [matMenuTriggerFor]=\"rjsfMenu\">\n        <span>React JSON Schema Form examples</span>\n      </button>\n      <mat-menu #rjsfMenu=\"matMenu\" class=\"example-menu\">\n        <button mat-menu-item class=\"mat-medium\"\n          *ngFor=\"let example of examples.rjsf.schemas\"\n          (click)=\"loadSelectedExample('rjsf', 'React JSON Schema Form:', example.file, example.name)\">\n          {{example.name}}\n        </button>\n      </mat-menu>\n      <button mat-menu-item class=\"mat-medium\" [matMenuTriggerFor]=\"jsfMenu\">\n        <span>JSONForm (jQuery) examples</span>\n      </button>\n      <mat-menu #jsfMenu=\"matMenu\" class=\"example-menu\">\n        <button mat-menu-item class=\"mat-medium\"\n          *ngFor=\"let example of examples.jsf.schemas\"\n          (click)=\"loadSelectedExample('jsf', 'JSONForm:', example.file, example.name)\">\n          {{example.name}}\n        </button>\n      </mat-menu>\n    </mat-menu>\n  </div>\n</div>\n<div fxLayout=\"row\" fxLayoutAlign=\"space-around start\"\n  fxLayout.lt-sm=\"column\" fxLayoutAlign.lt-sm=\"flex-start center\">\n\n  <mat-card fxFlex=\"0 0 calc(50% - 12px)\">\n    <h4 class=\"default-cursor\" (click)=\"toggleVisible('options')\">\n      {{visible.options ? '▼' : '▶'}} Selected Framework and Options\n    </h4>\n    <div *ngIf=\"visible.options\" fxLayout=\"column\" [@expandSection]=\"true\">\n      <mat-form-field>\n        <mat-select\n          [(ngModel)]=\"selectedFramework\"\n          name=\"framework\"\n          placeholder=\"Framework\">\n          <mat-option\n            *ngFor=\"let framework of frameworkList\"\n            [value]=\"framework\">\n            {{frameworks[framework]}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field>\n        <mat-select\n          [(ngModel)]=\"selectedLanguage\"\n          (change)=\"loadSelectedLanguage()\"\n          name=\"language\"\n          placeholder=\"Language\">\n          <mat-option\n            *ngFor=\"let language of languageList\"\n            [value]=\"language\">\n            {{languages[language]}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <div class=\"check-row\">\n        <mat-checkbox color=\"primary\" [(ngModel)]=\"jsonFormOptions.returnEmptyFields\">\n          Return empty fields?\n        </mat-checkbox>\n        (default = true)\n      </div>\n      <div class=\"check-row\">\n        <mat-checkbox color=\"primary\" [(ngModel)]=\"jsonFormOptions.addSubmit\">\n          Add submit button?\n        </mat-checkbox>\n        (default = only add if no layout is defined)\n      </div>\n      <div class=\"check-row\">\n        <mat-checkbox color=\"primary\" [(ngModel)]=\"jsonFormOptions.defautWidgetOptions.feedback\">\n          Show inline fedback?\n        </mat-checkbox>\n        (default = false)\n      </div>\n      <div class=\"check-row\">\n        <mat-checkbox color=\"primary\" [(ngModel)]=\"jsonFormOptions.debug\">\n          Show debuging information?\n        </mat-checkbox>\n        (default = false)\n      </div>\n    </div>\n    <hr>\n    <h4 class=\"default-cursor\" (click)=\"toggleVisible('schema')\">\n      {{visible.schema ? '▼' : '▶'}} Input JSON Schema and Form Layout\n    </h4>\n    <div *ngIf=\"visible.schema\" [@expandSection]=\"true\"\n      ace-editor\n      [text]=\"jsonFormSchema\"\n      [options]=\"aceEditorOptions\"\n      [readOnly]=\"false\"\n      [autoUpdateContent]=\"true\"\n      (textChanged)=\"generateForm($event)\"\n      style=\"width:100%; overflow: auto; border: 1px solid black;\">\n      (loading form specification...)\n    </div>\n  </mat-card>\n\n  <mat-card fxFlex=\"0 0 calc(50% - 12px)\">\n    <h4 class=\"default-cursor\" (click)=\"toggleVisible('form')\">\n      {{visible.form ? '▼' : '▶'}} Generated Form\n    </h4>\n    <div *ngIf=\"visible.form\" class=\"json-schema-form\" [@expandSection]=\"true\">\n      <div *ngIf=\"!formActive\">{{jsonFormStatusMessage}}</div>\n\n      <!-- This is the form! -->\n      <json-schema-form\n        *ngIf=\"formActive\"\n        loadExternalAssets=\"true\"\n        [form]=\"jsonFormObject\"\n        [options]=\"jsonFormOptions\"\n        [framework]=\"selectedFramework\"\n        [language]=\"selectedLanguage\"\n        (onChanges)=\"onChanges($event)\"\n        (onSubmit)=\"onSubmit($event)\"\n        (isValid)=\"isValid($event)\"\n        (validationErrors)=\"validationErrors($event)\">\n      </json-schema-form>\n\n    </div>\n    <hr>\n    <h4 class=\"default-cursor\" (click)=\"toggleVisible('output')\">\n      {{visible.output ? '▼' : '▶'}} Form Output\n    </h4>\n    <div *ngIf=\"visible.output\" fxLayout=\"column\" [@expandSection]=\"true\">\n      <div>\n        Valid?:\n        <strong *ngIf=\"formIsValid || prettyValidationErrors\"\n          [class.text-success]=\"formIsValid\"\n          [class.text-danger]=\"!formIsValid\">\n          {{formIsValid ? 'Yes' : 'No'}}\n        </strong>\n        <span *ngIf=\"!formIsValid && !prettyValidationErrors\">n/a</span>\n        <span *ngIf=\"prettyValidationErrors\">— errors from validationErrors():</span>\n        <div *ngIf=\"prettyValidationErrors\"\n          class=\"data-bad\"\n          [innerHTML]=\"prettyValidationErrors\"></div>\n      </div><br>\n      <div>\n        Live data — from onChanges():\n        <pre\n          [class.data-good]=\"!prettyValidationErrors && prettyLiveFormData !== '{}'\"\n          [class.data-bad]=\"prettyValidationErrors\">{{prettyLiveFormData}}</pre>\n      </div><br>\n      <div>\n        Submitted data — from onSubmit():\n        <pre [class.data-good]=\"prettySubmittedFormData !== 'null'\">{{prettySubmittedFormData}}</pre>\n      </div>\n    </div>\n  </mat-card>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/demo/app/demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__example_schemas_model__ = __webpack_require__("../../../../../src/demo/app/example-schemas.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_src_shared__ = __webpack_require__("../../../../../src/lib/src/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DemoComponent = (function () {
    function DemoComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.examples = __WEBPACK_IMPORTED_MODULE_6__example_schemas_model__["a" /* Examples */];
        this.languageList = ['en', 'fr'];
        this.languages = {
            'en': 'English',
            'fr': 'French',
        };
        this.frameworkList = ['material-design', 'bootstrap-3', 'bootstrap-4', 'no-framework'];
        this.frameworks = {
            'material-design': 'Material Design',
            'bootstrap-3': 'Bootstrap 3',
            'bootstrap-4': 'Bootstrap 4',
            'no-framework': 'None (plain HTML)',
        };
        this.selectedSet = 'ng-jsf';
        this.selectedSetName = '';
        this.selectedExample = 'ng-jsf-flex-layout';
        this.selectedExampleName = 'Flexbox layout';
        this.selectedFramework = 'material-design';
        this.selectedLanguage = 'en';
        this.visible = {
            options: true,
            schema: true,
            form: true,
            output: true
        };
        this.formActive = false;
        this.jsonFormValid = false;
        this.jsonFormStatusMessage = 'Loading form...';
        this.jsonFormOptions = {
            addSubmit: true,
            debug: false,
            loadExternalAssets: true,
            returnEmptyFields: false,
            setSchemaDefaults: true,
            defautWidgetOptions: { feedback: true },
        };
        this.liveFormData = {};
        this.formIsValid = null;
        this.submittedFormData = null;
        this.aceEditorOptions = {
            highlightActiveLine: true,
            maxLines: 1000,
            printMargin: false,
            autoScrollEditorIntoView: true,
        };
    }
    DemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (params['set']) {
                _this.selectedSet = params['set'];
                _this.selectedSetName = ({
                    'ng-jsf': '',
                    'asf': 'Angular Schema Form:',
                    'rsf': 'React Schema Form:',
                    'jsf': 'JSONForm:'
                })[_this.selectedSet];
            }
            if (params['example']) {
                _this.selectedExample = params['example'];
                _this.selectedExampleName = _this.examples[_this.selectedSet].schemas
                    .find(function (schema) { return schema.file === _this.selectedExample; }).name;
            }
            if (params['framework']) {
                _this.selectedFramework = params['framework'];
            }
            if (params['language']) {
                _this.selectedLanguage = params['language'];
            }
            _this.loadSelectedExample();
        });
    };
    DemoComponent.prototype.onSubmit = function (data) {
        this.submittedFormData = data;
    };
    Object.defineProperty(DemoComponent.prototype, "prettySubmittedFormData", {
        get: function () {
            return JSON.stringify(this.submittedFormData, null, 2);
        },
        enumerable: true,
        configurable: true
    });
    DemoComponent.prototype.onChanges = function (data) {
        this.liveFormData = data;
    };
    Object.defineProperty(DemoComponent.prototype, "prettyLiveFormData", {
        get: function () {
            return JSON.stringify(this.liveFormData, null, 2);
        },
        enumerable: true,
        configurable: true
    });
    DemoComponent.prototype.isValid = function (isValid) {
        this.formIsValid = isValid;
    };
    DemoComponent.prototype.validationErrors = function (data) {
        this.formValidationErrors = data;
    };
    Object.defineProperty(DemoComponent.prototype, "prettyValidationErrors", {
        get: function () {
            if (!this.formValidationErrors) {
                return null;
            }
            var errorArray = [];
            for (var _i = 0, _a = this.formValidationErrors; _i < _a.length; _i++) {
                var error = _a[_i];
                var message = error.message;
                var dataPathArray = __WEBPACK_IMPORTED_MODULE_7__lib_src_shared__["a" /* JsonPointer */].parse(error.dataPath);
                if (dataPathArray.length) {
                    var field = dataPathArray[0];
                    for (var i = 1; i < dataPathArray.length; i++) {
                        var key = dataPathArray[i];
                        field += /^\d+$/.test(key) ? "[" + key + "]" : "." + key;
                    }
                    errorArray.push(field + ": " + message);
                }
                else {
                    errorArray.push(message);
                }
            }
            return errorArray.join('<br>');
        },
        enumerable: true,
        configurable: true
    });
    DemoComponent.prototype.loadSelectedExample = function (selectedSet, selectedSetName, selectedExample, selectedExampleName) {
        var _this = this;
        if (selectedSet === void 0) { selectedSet = this.selectedSet; }
        if (selectedSetName === void 0) { selectedSetName = this.selectedSetName; }
        if (selectedExample === void 0) { selectedExample = this.selectedExample; }
        if (selectedExampleName === void 0) { selectedExampleName = this.selectedExampleName; }
        if (this.menuTrigger.menuOpen) {
            this.menuTrigger.closeMenu();
        }
        if (selectedExample !== this.selectedExample) {
            this.formActive = false;
            this.selectedSet = selectedSet;
            this.selectedSetName = selectedSetName;
            this.selectedExample = selectedExample;
            this.selectedExampleName = selectedExampleName;
            this.router.navigateByUrl('/?set=' + selectedSet +
                '&example=' + selectedExample +
                '&framework=' + this.selectedFramework +
                '&language=' + this.selectedLanguage);
            this.liveFormData = {};
            this.submittedFormData = null;
            this.formIsValid = null;
            this.formValidationErrors = null;
        }
        var exampleURL = "assets/example-schemas/" + this.selectedExample + ".json";
        this.http
            .get(exampleURL, { responseType: 'text' })
            .subscribe(function (schema) {
            _this.jsonFormSchema = schema;
            _this.generateForm(_this.jsonFormSchema);
        });
    };
    DemoComponent.prototype.loadSelectedLanguage = function () {
        window.location.href =
            '/?set=' + this.selectedSet +
                '&example=' + this.selectedExample +
                '&framework=' + this.selectedFramework +
                '&language=' + this.selectedLanguage;
    };
    DemoComponent.prototype.generateForm = function (newFormString) {
        if (!newFormString) {
            return;
        }
        this.jsonFormStatusMessage = 'Loading form...';
        this.formActive = false;
        this.liveFormData = {};
        this.submittedFormData = null;
        try {
            this.jsonFormObject = JSON.parse(newFormString);
            this.jsonFormValid = true;
        }
        catch (jsonError) {
            try {
                var newFormObject = null;
                eval('newFormObject = ' + newFormString);
                this.jsonFormObject = newFormObject;
                this.jsonFormValid = true;
            }
            catch (javascriptError) {
                this.jsonFormValid = false;
                this.jsonFormStatusMessage =
                    'Entered content is not currently a valid JSON Form object.\n' +
                        'As soon as it is, you will see your form here. So keep typing. :-)\n\n' +
                        'JavaScript parser returned:\n\n' + jsonError;
                return;
            }
        }
        this.formActive = true;
    };
    DemoComponent.prototype.toggleVisible = function (item) {
        this.visible[item] = !this.visible[item];
    };
    DemoComponent.prototype.toggleFormOption = function (option) {
        if (option === 'feedback') {
            this.jsonFormOptions.defautWidgetOptions.feedback =
                !this.jsonFormOptions.defautWidgetOptions.feedback;
        }
        else {
            this.jsonFormOptions[option] = !this.jsonFormOptions[option];
        }
        this.generateForm(this.jsonFormSchema);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatMenuTrigger */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatMenuTrigger */])
    ], DemoComponent.prototype, "menuTrigger", void 0);
    DemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'demo',
            template: __webpack_require__("../../../../../src/demo/app/demo.component.html"),
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* trigger */])('expandSection', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ height: '*' })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ height: 0 }), Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(100),
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ height: '*' }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(100, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ height: 0 })),
                    ]),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "../../../../../src/demo/app/demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib__ = __webpack_require__("../../../../../src/lib/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ace_editor_directive__ = __webpack_require__("../../../../../src/demo/app/ace-editor.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__demo_component__ = __webpack_require__("../../../../../src/demo/app/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__demo_root_component__ = __webpack_require__("../../../../../src/demo/app/demo-root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__demo_routes__ = __webpack_require__("../../../../../src/demo/app/demo.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var DemoModule = (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_9__ace_editor_directive__["a" /* AceEditorDirective */], __WEBPACK_IMPORTED_MODULE_10__demo_component__["a" /* DemoComponent */], __WEBPACK_IMPORTED_MODULE_11__demo_root_component__["a" /* DemoRootComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["l" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["u" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__demo_routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_8__lib__["e" /* NoFrameworkModule */], __WEBPACK_IMPORTED_MODULE_8__lib__["d" /* MaterialDesignFrameworkModule */],
                __WEBPACK_IMPORTED_MODULE_8__lib__["a" /* Bootstrap3FrameworkModule */], __WEBPACK_IMPORTED_MODULE_8__lib__["b" /* Bootstrap4FrameworkModule */],
                __WEBPACK_IMPORTED_MODULE_8__lib__["c" /* JsonSchemaFormModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__lib__["e" /* NoFrameworkModule */], __WEBPACK_IMPORTED_MODULE_8__lib__["d" /* MaterialDesignFrameworkModule */], __WEBPACK_IMPORTED_MODULE_8__lib__["a" /* Bootstrap3FrameworkModule */], __WEBPACK_IMPORTED_MODULE_8__lib__["b" /* Bootstrap4FrameworkModule */])
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__demo_root_component__["a" /* DemoRootComponent */]]
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "../../../../../src/demo/app/demo.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__demo_component__ = __webpack_require__("../../../../../src/demo/app/demo.component.ts");

var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__demo_component__["a" /* DemoComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_0__demo_component__["a" /* DemoComponent */] }
];


/***/ }),

/***/ "../../../../../src/demo/app/example-schemas.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Examples; });
var Examples = {
    'ng-jsf': {
        name: 'Angular JSON Schema Form examples',
        schemas: [
            { name: 'Flexbox layout', file: 'ng-jsf-flex-layout', },
            { name: 'Nested Arrays', file: 'ng-jsf-nested-arrays', },
            { name: 'Deep Recursive References', file: 'ng-jsf-deep-ref', },
            { name: 'Select Control Lists', file: 'ng-jsf-select-list-examples', },
            { name: 'Data Only (no Schema or Layout)', file: 'ng-jsf-data-only', },
        ]
    },
    'asf': {
        name: 'Angular Schema Form (AngularJS) examples',
        url: 'http://schemaform.io/examples/bootstrap-example.html',
        schemas: [
            { name: 'Simple', file: 'asf-simple', },
            { name: 'Basic JSON Schema Type', file: 'asf-basic-json-schema-type', },
            { name: 'Bootstrap Grid', file: 'asf-bootstrap-grid', },
            { name: 'Complex Key Support', file: 'asf-complex-key-support', },
            { name: 'Array', file: 'asf-array', },
            { name: 'Tab Array', file: 'asf-tab-array', },
            { name: 'TitleMap Examples', file: 'asf-titlemap-examples', },
            { name: 'Kitchen Sink', file: 'asf-kitchen-sink', },
            { name: 'Hack: Conditional Required', file: 'asf-hack-conditional-required', },
        ]
    },
    'rjsf': {
        name: 'React JSON Schema Form examples',
        url: 'https://mozilla-services.github.io/react-jsonschema-form/',
        schemas: [
            { name: 'Simple', file: 'rjsf-simple', },
            { name: 'Nested', file: 'rjsf-nested', },
            { name: 'Arrays', file: 'rjsf-arrays', },
            { name: 'Numbers', file: 'rjsf-numbers', },
            { name: 'Widgets', file: 'rjsf-widgets', },
            { name: 'Ordering', file: 'rjsf-ordering', },
            { name: 'References', file: 'rjsf-references', },
            { name: 'Custom', file: 'rjsf-custom', },
            { name: 'Errors', file: 'rjsf-errors', },
            { name: 'Large', file: 'rjsf-large', },
            { name: 'Date & Time', file: 'rjsf-date-and-time', },
            { name: 'Validation', file: 'rjsf-validation', },
            { name: 'Files', file: 'rjsf-files', },
            { name: 'Single', file: 'rjsf-single', },
            { name: 'Alternatives', file: 'rjsf-alternatives', },
        ]
    },
    'jsf': {
        name: 'JSONForm (jQuery) examples',
        url: 'http://ulion.github.io/jsonform/playground/',
        schemas: [
            { name: 'Getting started',
                file: 'jsf-gettingstarted', urlParameters: '?example=gettingstarted' },
            { name: 'JSON Schema - A basic example',
                file: 'jsf-schema-basic', urlParameters: '?example=schema-basic', },
            { name: 'JSON Schema - Slightly more complex example',
                file: 'jsf-schema-morecomplex', urlParameters: '?example=schema-morecomplex', },
            { name: 'JSON Schema - Arrays',
                file: 'jsf-schema-array', urlParameters: '?example=schema-array', },
            { name: 'JSON Schema - Required field',
                file: 'jsf-schema-required', urlParameters: '?example=schema-required', },
            { name: 'JSON Schema - Default values',
                file: 'jsf-schema-default', urlParameters: '?example=schema-default', },
            { name: 'JSON Schema - Inline $ref to definitions',
                file: 'jsf-schema-inlineref', urlParameters: '?example=schema-inlineref', },
            { name: 'Fields - Common properties',
                file: 'jsf-fields-common', urlParameters: '?example=fields-common', },
            { name: 'Fields - Gathering secrets: the password type',
                file: 'jsf-fields-password', urlParameters: '?example=fields-password', },
            { name: 'Fields - Large text: the textarea type',
                file: 'jsf-fields-textarea', urlParameters: '?example=fields-textarea', },
            { name: 'Fields - text field with jquery-ui autocomplete',
                file: 'jsf-fields-autocomplete', urlParameters: '?example=fields-autocomplete', },
            { name: 'Fields - Code (JavaScript, JSON...): the ace type',
                file: 'jsf-fields-ace', urlParameters: '?example=fields-ace', },
            { name: 'Fields - Color picker: the color type',
                file: 'jsf-fields-color', urlParameters: '?example=fields-color', },
            { name: 'Fields - Boolean flag: the checkbox type',
                file: 'jsf-fields-checkbox', urlParameters: '?example=fields-checkbox', },
            { name: 'Fields - Multiple options: the checkboxes type',
                file: 'jsf-fields-checkboxes', urlParameters: '?example=fields-checkboxes', },
            { name: 'Fields - Selection list: the select type',
                file: 'jsf-fields-select', urlParameters: '?example=fields-select', },
            { name: 'Fields - A list of radio buttons: the radios type',
                file: 'jsf-fields-radios', urlParameters: '?example=fields-radios', },
            { name: 'Fields - Radio buttons as real buttons: the radio buttons type',
                file: 'jsf-fields-radiobuttons', urlParameters: '?example=fields-radiobuttons', },
            { name: 'Fields - Checkbox buttons: the checkbox buttons type',
                file: 'jsf-fields-checkboxbuttons', urlParameters: '?example=fields-checkboxbuttons', },
            { name: 'Fields - Number: the range type',
                file: 'jsf-fields-range', urlParameters: '?example=fields-range', },
            { name: 'Fields - Image selector: the imageselect type',
                file: 'jsf-fields-imageselect', urlParameters: '?example=fields-imageselect', },
            { name: 'Fields - Icon selector: the iconselect type',
                file: 'jsf-fields-iconselect', urlParameters: '?example=fields-iconselect', },
            { name: 'Fields - Grouping: the fieldset type',
                file: 'jsf-fields-fieldset', urlParameters: '?example=fields-fieldset', },
            { name: 'Fields - Advanced options section: the advancedfieldset type',
                file: 'jsf-fields-advancedfieldset', urlParameters: '?example=fields-advancedfieldset', },
            { name: 'Fields - Authentication settings section: the authfieldset type',
                file: 'jsf-fields-authfieldset', urlParameters: '?example=fields-authfieldset', },
            { name: 'Fields - Generic group: the section type',
                file: 'jsf-fields-section', urlParameters: '?example=fields-section', },
            { name: 'Fields - Group of buttons: the actions type',
                file: 'jsf-fields-actions', urlParameters: '?example=fields-actions', },
            { name: 'Fields - Generic array: the array type (complex)',
                file: 'jsf-fields-array', urlParameters: '?example=fields-array', },
            { name: 'Fields - Generic array: the array type (simple)',
                file: 'jsf-fields-array-simple', urlParameters: '?example=fields-array-simple', },
            { name: 'Fields - Arrays with tabs: the tabarray type',
                file: 'jsf-fields-tabarray', urlParameters: '?example=fields-tabarray', },
            { name: 'Fields - Arrays with tabs: the tabarray type w/ maxItems',
                file: 'jsf-fields-tabarray-maxitems', urlParameters: '?example=fields-tabarray-maxitems', },
            { name: 'Fields - Arrays with tabs: the tabarray type w/ default & legend',
                file: 'jsf-fields-tabarray-value', urlParameters: '?example=fields-tabarray-value', },
            { name: 'Fields - Alternative: the selectfieldset type',
                file: 'jsf-fields-selectfieldset', urlParameters: '?example=fields-selectfieldset', },
            { name: 'Fields - Alternative with schema key',
                file: 'jsf-fields-selectfieldset-key', urlParameters: '?example=fields-selectfieldset-key', },
            { name: 'Fields - Submit the form: the submit type',
                file: 'jsf-fields-submit', urlParameters: '?example=fields-submit', },
            { name: 'Fields - Guide users: the help type',
                file: 'jsf-fields-help', urlParameters: '?example=fields-help', },
            { name: 'Fields - Hidden form values: the hidden type',
                file: 'jsf-fields-hidden', urlParameters: '?example=fields-hidden', },
            { name: 'Fields - Series of questions: the questions type',
                file: 'jsf-fields-questions', urlParameters: '?example=fields-questions', },
            { name: 'Templating - item index with idx',
                file: 'jsf-templating-idx', urlParameters: '?example=templating-idx', },
            { name: 'Templating - tab legend with value and valueInLegend',
                file: 'jsf-templating-value', urlParameters: '?example=templating-value', },
            { name: 'Templating - values.xxx to reference another field',
                file: 'jsf-templating-values', urlParameters: '?example=templating-values', },
            { name: 'Templating - Using the tpldata property',
                file: 'jsf-templating-tpldata', urlParameters: '?example=templating-tpldata', },
            { name: 'Using event handlers',
                file: 'jsf-events', urlParameters: '?example=events', },
            { name: 'Using previously submitted values',
                file: 'jsf-previousvalues', urlParameters: '?example=previousvalues', },
            { name: 'Using previously submitted values - Multidimensional arrays',
                file: 'jsf-previousvalues-multidimensional', urlParameters: '?example=previousvalues-multidimensional', },
        ]
    }
};


/***/ }),

/***/ "../../../../../src/demo/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = { production: true };


/***/ }),

/***/ "../../../../../src/demo/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_demo_module__ = __webpack_require__("../../../../../src/demo/app/demo.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/demo/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_demo_module__["a" /* DemoModule */]);


/***/ }),

/***/ "../../../../../src/lib/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_shared_validator_functions__ = __webpack_require__("../../../../../src/lib/src/shared/validator.functions.ts");
/* unused harmony reexport _executeValidators */
/* unused harmony reexport _executeAsyncValidators */
/* unused harmony reexport _mergeObjects */
/* unused harmony reexport _mergeErrors */
/* unused harmony reexport isDefined */
/* unused harmony reexport hasValue */
/* unused harmony reexport isEmpty */
/* unused harmony reexport isString */
/* unused harmony reexport isNumber */
/* unused harmony reexport isInteger */
/* unused harmony reexport isBoolean */
/* unused harmony reexport isFunction */
/* unused harmony reexport isObject */
/* unused harmony reexport isArray */
/* unused harmony reexport isDate */
/* unused harmony reexport isMap */
/* unused harmony reexport isSet */
/* unused harmony reexport isPromise */
/* unused harmony reexport isObservable */
/* unused harmony reexport getType */
/* unused harmony reexport isType */
/* unused harmony reexport isPrimitive */
/* unused harmony reexport toJavaScriptType */
/* unused harmony reexport toSchemaType */
/* unused harmony reexport _toPromise */
/* unused harmony reexport toObservable */
/* unused harmony reexport inArray */
/* unused harmony reexport xor */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_shared_utility_functions__ = __webpack_require__("../../../../../src/lib/src/shared/utility.functions.ts");
/* unused harmony reexport addClasses */
/* unused harmony reexport copy */
/* unused harmony reexport forEach */
/* unused harmony reexport forEachCopy */
/* unused harmony reexport hasOwn */
/* unused harmony reexport mergeFilteredObject */
/* unused harmony reexport uniqueItems */
/* unused harmony reexport commonItems */
/* unused harmony reexport fixTitle */
/* unused harmony reexport toTitleCase */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_shared_jsonpointer_functions__ = __webpack_require__("../../../../../src/lib/src/shared/jsonpointer.functions.ts");
/* unused harmony reexport JsonPointer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_shared_json_validators__ = __webpack_require__("../../../../../src/lib/src/shared/json.validators.ts");
/* unused harmony reexport JsonValidators */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_shared_json_schema_functions__ = __webpack_require__("../../../../../src/lib/src/shared/json-schema.functions.ts");
/* unused harmony reexport buildSchemaFromLayout */
/* unused harmony reexport buildSchemaFromData */
/* unused harmony reexport getFromSchema */
/* unused harmony reexport removeRecursiveReferences */
/* unused harmony reexport getInputType */
/* unused harmony reexport checkInlineType */
/* unused harmony reexport isInputRequired */
/* unused harmony reexport updateInputOptions */
/* unused harmony reexport getTitleMapFromOneOf */
/* unused harmony reexport getControlValidators */
/* unused harmony reexport resolveSchemaReferences */
/* unused harmony reexport getSubSchema */
/* unused harmony reexport combineAllOf */
/* unused harmony reexport fixRequiredArrayProperties */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_shared_convert_schema_to_draft6_function__ = __webpack_require__("../../../../../src/lib/src/shared/convert-schema-to-draft6.function.ts");
/* unused harmony reexport convertSchemaToDraft6 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_shared_merge_schemas_function__ = __webpack_require__("../../../../../src/lib/src/shared/merge-schemas.function.ts");
/* unused harmony reexport mergeSchemas */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_shared_form_group_functions__ = __webpack_require__("../../../../../src/lib/src/shared/form-group.functions.ts");
/* unused harmony reexport buildFormGroupTemplate */
/* unused harmony reexport buildFormGroup */
/* unused harmony reexport formatFormData */
/* unused harmony reexport getControl */
/* unused harmony reexport setRequiredFields */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_shared_layout_functions__ = __webpack_require__("../../../../../src/lib/src/shared/layout.functions.ts");
/* unused harmony reexport buildLayout */
/* unused harmony reexport buildLayoutFromSchema */
/* unused harmony reexport mapLayout */
/* unused harmony reexport getLayoutNode */
/* unused harmony reexport buildTitleMap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_shared_date_functions__ = __webpack_require__("../../../../../src/lib/src/shared/date.functions.ts");
/* unused harmony reexport dateToString */
/* unused harmony reexport stringToDate */
/* unused harmony reexport findDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_shared_orderable_directive__ = __webpack_require__("../../../../../src/lib/src/shared/orderable.directive.ts");
/* unused harmony reexport OrderableDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_json_schema_form_component__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.component.ts");
/* unused harmony reexport JsonSchemaFormComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
/* unused harmony reexport JsonSchemaFormService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_json_schema_form_module__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_13__src_json_schema_form_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_widget_library_widget_library_service__ = __webpack_require__("../../../../../src/lib/src/widget-library/widget-library.service.ts");
/* unused harmony reexport WidgetLibraryService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_widget_library_widget_library_module__ = __webpack_require__("../../../../../src/lib/src/widget-library/widget-library.module.ts");
/* unused harmony reexport WidgetLibraryModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_widget_library_add_reference_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/add-reference.component.ts");
/* unused harmony reexport AddReferenceComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_widget_library_one_of_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/one-of.component.ts");
/* unused harmony reexport OneOfComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_widget_library_button_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/button.component.ts");
/* unused harmony reexport ButtonComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_widget_library_checkbox_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/checkbox.component.ts");
/* unused harmony reexport CheckboxComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_widget_library_checkboxes_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/checkboxes.component.ts");
/* unused harmony reexport CheckboxesComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_widget_library_file_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/file.component.ts");
/* unused harmony reexport FileComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_widget_library_hidden_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/hidden.component.ts");
/* unused harmony reexport HiddenComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_widget_library_input_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/input.component.ts");
/* unused harmony reexport InputComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_widget_library_message_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/message.component.ts");
/* unused harmony reexport MessageComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_widget_library_none_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/none.component.ts");
/* unused harmony reexport NoneComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_widget_library_number_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/number.component.ts");
/* unused harmony reexport NumberComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__src_widget_library_radios_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/radios.component.ts");
/* unused harmony reexport RadiosComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__src_widget_library_root_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/root.component.ts");
/* unused harmony reexport RootComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__src_widget_library_section_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/section.component.ts");
/* unused harmony reexport SectionComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__src_widget_library_select_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/select.component.ts");
/* unused harmony reexport SelectComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__src_widget_library_select_framework_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/select-framework.component.ts");
/* unused harmony reexport SelectFrameworkComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__src_widget_library_select_widget_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/select-widget.component.ts");
/* unused harmony reexport SelectWidgetComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__src_widget_library_submit_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/submit.component.ts");
/* unused harmony reexport SubmitComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__src_widget_library_tab_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/tab.component.ts");
/* unused harmony reexport TabComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__src_widget_library_tabs_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/tabs.component.ts");
/* unused harmony reexport TabsComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__src_widget_library_template_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/template.component.ts");
/* unused harmony reexport TemplateComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__src_widget_library_textarea_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/textarea.component.ts");
/* unused harmony reexport TextareaComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__src_framework_library_framework_library_service__ = __webpack_require__("../../../../../src/lib/src/framework-library/framework-library.service.ts");
/* unused harmony reexport FrameworkLibraryService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__src_framework_library_framework__ = __webpack_require__("../../../../../src/lib/src/framework-library/framework.ts");
/* unused harmony reexport Framework */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__src_framework_library_no_framework_no_framework__ = __webpack_require__("../../../../../src/lib/src/framework-library/no-framework/no.framework.ts");
/* unused harmony reexport NoFramework */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__src_framework_library_no_framework_no_framework_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/no-framework/no-framework.component.ts");
/* unused harmony reexport NoFrameworkComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__src_framework_library_no_framework_no_framework_module__ = __webpack_require__("../../../../../src/lib/src/framework-library/no-framework/no-framework.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_42__src_framework_library_no_framework_no_framework_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__src_framework_library_material_design_framework_material_design_framework__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-design.framework.ts");
/* unused harmony reexport MaterialDesignFramework */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__src_framework_library_material_design_framework_flex_layout_root_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/flex-layout-root.component.ts");
/* unused harmony reexport FlexLayoutRootComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__src_framework_library_material_design_framework_flex_layout_section_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/flex-layout-section.component.ts");
/* unused harmony reexport FlexLayoutSectionComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__src_framework_library_material_design_framework_material_add_reference_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-add-reference.component.ts");
/* unused harmony reexport MaterialAddReferenceComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__src_framework_library_material_design_framework_material_one_of_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-one-of.component.ts");
/* unused harmony reexport MaterialOneOfComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__src_framework_library_material_design_framework_material_button_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-button.component.ts");
/* unused harmony reexport MaterialButtonComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__src_framework_library_material_design_framework_material_button_group_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-button-group.component.ts");
/* unused harmony reexport MaterialButtonGroupComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__src_framework_library_material_design_framework_material_checkbox_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-checkbox.component.ts");
/* unused harmony reexport MaterialCheckboxComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__src_framework_library_material_design_framework_material_checkboxes_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-checkboxes.component.ts");
/* unused harmony reexport MaterialCheckboxesComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__src_framework_library_material_design_framework_material_chip_list_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-chip-list.component.ts");
/* unused harmony reexport MaterialChipListComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__src_framework_library_material_design_framework_material_datepicker_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-datepicker.component.ts");
/* unused harmony reexport MaterialDatepickerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__src_framework_library_material_design_framework_material_file_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-file.component.ts");
/* unused harmony reexport MaterialFileComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__src_framework_library_material_design_framework_material_input_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-input.component.ts");
/* unused harmony reexport MaterialInputComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__src_framework_library_material_design_framework_material_number_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-number.component.ts");
/* unused harmony reexport MaterialNumberComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__src_framework_library_material_design_framework_material_radios_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-radios.component.ts");
/* unused harmony reexport MaterialRadiosComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__src_framework_library_material_design_framework_material_select_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-select.component.ts");
/* unused harmony reexport MaterialSelectComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__src_framework_library_material_design_framework_material_slider_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-slider.component.ts");
/* unused harmony reexport MaterialSliderComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__src_framework_library_material_design_framework_material_stepper_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-stepper.component.ts");
/* unused harmony reexport MaterialStepperComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__src_framework_library_material_design_framework_material_tabs_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-tabs.component.ts");
/* unused harmony reexport MaterialTabsComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__src_framework_library_material_design_framework_material_textarea_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-textarea.component.ts");
/* unused harmony reexport MaterialTextareaComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__src_framework_library_material_design_framework_material_design_framework_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-design-framework.component.ts");
/* unused harmony reexport MaterialDesignFrameworkComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__src_framework_library_material_design_framework_material_design_framework_module__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-design-framework.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_64__src_framework_library_material_design_framework_material_design_framework_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__src_framework_library_bootstrap_3_framework_bootstrap_3_framework__ = __webpack_require__("../../../../../src/lib/src/framework-library/bootstrap-3-framework/bootstrap-3.framework.ts");
/* unused harmony reexport Bootstrap3Framework */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__src_framework_library_bootstrap_3_framework_bootstrap_3_framework_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/bootstrap-3-framework/bootstrap-3-framework.component.ts");
/* unused harmony reexport Bootstrap3FrameworkComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__src_framework_library_bootstrap_3_framework_bootstrap_3_framework_module__ = __webpack_require__("../../../../../src/lib/src/framework-library/bootstrap-3-framework/bootstrap-3-framework.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_67__src_framework_library_bootstrap_3_framework_bootstrap_3_framework_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__src_framework_library_bootstrap_4_framework_bootstrap_4_framework__ = __webpack_require__("../../../../../src/lib/src/framework-library/bootstrap-4-framework/bootstrap-4.framework.ts");
/* unused harmony reexport Bootstrap4Framework */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__src_framework_library_bootstrap_4_framework_bootstrap_4_framework_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/bootstrap-4-framework/bootstrap-4-framework.component.ts");
/* unused harmony reexport Bootstrap4FrameworkComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__src_framework_library_bootstrap_4_framework_bootstrap_4_framework_module__ = __webpack_require__("../../../../../src/lib/src/framework-library/bootstrap-4-framework/bootstrap-4-framework.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_70__src_framework_library_bootstrap_4_framework_bootstrap_4_framework_module__["a"]; });









































































/***/ }),

/***/ "../../../../../src/lib/src/framework-library/bootstrap-3-framework/bootstrap-3-framework.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bootstrap3FrameworkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/lib/src/shared/index.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Bootstrap3FrameworkComponent = (function () {
    function Bootstrap3FrameworkComponent(changeDetector, jsf) {
        this.changeDetector = changeDetector;
        this.jsf = jsf;
        this.frameworkInitialized = false;
        this.formControl = null;
        this.debugOutput = '';
        this.debug = '';
        this.parentArray = null;
        this.isOrderable = false;
    }
    Object.defineProperty(Bootstrap3FrameworkComponent.prototype, "showRemoveButton", {
        get: function () {
            if (!this.options.removable || this.options.readonly ||
                this.layoutNode.type === '$ref') {
                return false;
            }
            if (this.layoutNode.recursiveReference) {
                return true;
            }
            if (!this.layoutNode.arrayItem || !this.parentArray) {
                return false;
            }
            return this.parentArray.items.length - 1 <= this.parentArray.options.minItems ? false :
                this.layoutNode.arrayItemType === 'list' ? true :
                    this.layoutIndex[this.layoutIndex.length - 1] === this.parentArray.items.length - 2;
        },
        enumerable: true,
        configurable: true
    });
    Bootstrap3FrameworkComponent.prototype.ngOnInit = function () {
        this.initializeFramework();
        if (this.layoutNode.arrayItem && this.layoutNode.type !== '$ref') {
            this.parentArray = this.jsf.getParentNode(this);
            if (this.parentArray) {
                this.isOrderable = this.layoutNode.arrayItemType === 'list' &&
                    !this.options.readonly && this.parentArray.options.orderable;
            }
        }
    };
    Bootstrap3FrameworkComponent.prototype.ngOnChanges = function () {
        if (!this.frameworkInitialized) {
            this.initializeFramework();
        }
    };
    Bootstrap3FrameworkComponent.prototype.initializeFramework = function () {
        var _this = this;
        if (this.layoutNode) {
            this.options = __WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"](this.layoutNode.options);
            this.widgetLayoutNode = __assign({}, this.layoutNode, { options: __WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"](this.layoutNode.options) });
            this.widgetOptions = this.widgetLayoutNode.options;
            this.formControl = this.jsf.getFormControl(this);
            this.options.isInputWidget = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["e" /* inArray */])(this.layoutNode.type, [
                'button', 'checkbox', 'checkboxes-inline', 'checkboxes', 'color',
                'date', 'datetime-local', 'datetime', 'email', 'file', 'hidden',
                'image', 'integer', 'month', 'number', 'password', 'radio',
                'radiobuttons', 'radios-inline', 'radios', 'range', 'reset', 'search',
                'select', 'submit', 'tel', 'text', 'textarea', 'time', 'url', 'week'
            ]);
            this.options.title = this.setTitle();
            this.options.htmlClass =
                Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.options.htmlClass, 'schema-form-' + this.layoutNode.type);
            if (this.layoutNode.type !== 'flex') {
                this.options.htmlClass =
                    this.layoutNode.type === 'array' ?
                        Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.options.htmlClass, 'list-group') :
                        this.layoutNode.arrayItem && this.layoutNode.type !== '$ref' ?
                            Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.options.htmlClass, 'list-group-item') :
                            Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.options.htmlClass, 'form-group');
            }
            this.widgetOptions.htmlClass = '';
            this.options.labelHtmlClass =
                Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.options.labelHtmlClass, 'control-label');
            this.widgetOptions.activeClass =
                Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.activeClass, 'active');
            this.options.fieldAddonLeft =
                this.options.fieldAddonLeft || this.options.prepend;
            this.options.fieldAddonRight =
                this.options.fieldAddonRight || this.options.append;
            if (this.options.title && this.layoutNode.type !== 'tab' &&
                !this.options.notitle && this.options.required &&
                !this.options.title.includes('*')) {
                this.options.title += ' <strong class="text-danger">*</strong>';
            }
            switch (this.layoutNode.type) {
                case 'checkbox':
                case 'checkboxes':
                    this.widgetOptions.htmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.htmlClass, 'checkbox');
                    break;
                case 'checkboxes-inline':
                    this.widgetOptions.htmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.htmlClass, 'checkbox');
                    this.widgetOptions.itemLabelHtmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.itemLabelHtmlClass, 'checkbox-inline');
                    break;
                case 'radio':
                case 'radios':
                    this.widgetOptions.htmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.htmlClass, 'radio');
                    break;
                case 'radios-inline':
                    this.widgetOptions.htmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.htmlClass, 'radio');
                    this.widgetOptions.itemLabelHtmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.itemLabelHtmlClass, 'radio-inline');
                    break;
                case 'checkboxbuttons':
                case 'radiobuttons':
                    this.widgetOptions.htmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.htmlClass, 'btn-group');
                    this.widgetOptions.itemLabelHtmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.itemLabelHtmlClass, 'btn');
                    this.widgetOptions.itemLabelHtmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.itemLabelHtmlClass, this.options.style || 'btn-default');
                    this.widgetOptions.fieldHtmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.fieldHtmlClass, 'sr-only');
                    break;
                case 'button':
                case 'submit':
                    this.widgetOptions.fieldHtmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.fieldHtmlClass, 'btn');
                    this.widgetOptions.fieldHtmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.fieldHtmlClass, this.options.style || 'btn-info');
                    break;
                case 'array':
                case 'fieldset':
                case 'section':
                case 'conditional':
                case 'advancedfieldset':
                case 'authfieldset':
                case 'selectfieldset':
                case 'optionfieldset':
                    this.options.messageLocation = 'top';
                    break;
                case 'tabarray':
                case 'tabs':
                    this.widgetOptions.htmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.htmlClass, 'tab-content');
                    this.widgetOptions.fieldHtmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.fieldHtmlClass, 'tab-pane');
                    this.widgetOptions.labelHtmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.labelHtmlClass, 'nav nav-tabs');
                    break;
                case '$ref':
                    this.widgetOptions.fieldHtmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.fieldHtmlClass, 'btn pull-right');
                    this.widgetOptions.fieldHtmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.fieldHtmlClass, this.options.style || 'btn-default');
                    this.options.icon = 'glyphicon glyphicon-plus';
                    break;
                default:
                    this.widgetOptions.fieldHtmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.fieldHtmlClass, 'form-control');
            }
            if (this.formControl) {
                this.updateHelpBlock(this.formControl.status);
                this.formControl.statusChanges.subscribe(function (status) { return _this.updateHelpBlock(status); });
                if (this.options.debug) {
                    var vars = [];
                    this.debugOutput = __WEBPACK_IMPORTED_MODULE_1_lodash__["map"](vars, function (thisVar) { return JSON.stringify(thisVar, null, 2); }).join('\n');
                }
            }
            this.frameworkInitialized = true;
        }
    };
    Bootstrap3FrameworkComponent.prototype.updateHelpBlock = function (status) {
        this.options.helpBlock = status === 'INVALID' &&
            this.options.enableErrorState && this.formControl.errors &&
            (this.formControl.dirty || this.options.feedbackOnRender) ?
            this.jsf.formatErrors(this.formControl.errors, this.options.validationMessages) :
            this.options.description || this.options.help || null;
    };
    Bootstrap3FrameworkComponent.prototype.setTitle = function () {
        switch (this.layoutNode.type) {
            case 'button':
            case 'checkbox':
            case 'section':
            case 'help':
            case 'msg':
            case 'submit':
            case 'message':
            case 'tabarray':
            case 'tabs':
            case '$ref':
                return null;
            case 'advancedfieldset':
                this.widgetOptions.expandable = true;
                this.widgetOptions.title = 'Advanced options';
                return null;
            case 'authfieldset':
                this.widgetOptions.expandable = true;
                this.widgetOptions.title = 'Authentication settings';
                return null;
            case 'fieldset':
                this.widgetOptions.title = this.options.title;
                return null;
            default:
                this.widgetOptions.title = null;
                return this.jsf.setItemTitle(this);
        }
    };
    Bootstrap3FrameworkComponent.prototype.removeItem = function () {
        this.jsf.removeItem(this);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], Bootstrap3FrameworkComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], Bootstrap3FrameworkComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], Bootstrap3FrameworkComponent.prototype, "dataIndex", void 0);
    Bootstrap3FrameworkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'bootstrap-3-framework',
            template: "\n    <div\n      [class]=\"options?.htmlClass || ''\"\n      [class.has-feedback]=\"options?.feedback && options?.isInputWidget &&\n        (formControl?.dirty || options?.feedbackOnRender)\"\n      [class.has-error]=\"options?.enableErrorState && formControl?.errors &&\n        (formControl?.dirty || options?.feedbackOnRender)\"\n      [class.has-success]=\"options?.enableSuccessState && !formControl?.errors &&\n        (formControl?.dirty || options?.feedbackOnRender)\">\n\n      <button *ngIf=\"showRemoveButton\"\n        class=\"close pull-right\"\n        type=\"button\"\n        (click)=\"removeItem()\">\n        <span aria-hidden=\"true\">&times;</span>\n        <span class=\"sr-only\">Close</span>\n      </button>\n      <div *ngIf=\"options?.messageLocation === 'top'\">\n          <p *ngIf=\"options?.helpBlock\"\n          class=\"help-block\"\n          [innerHTML]=\"options?.helpBlock\"></p>\n      </div>\n\n      <label *ngIf=\"options?.title && layoutNode?.type !== 'tab'\"\n        [attr.for]=\"'control' + layoutNode?._id\"\n        [class]=\"options?.labelHtmlClass || ''\"\n        [class.sr-only]=\"options?.notitle\"\n        [innerHTML]=\"options?.title\"></label>\n      <p *ngIf=\"layoutNode?.type === 'submit' && jsf?.formOptions?.fieldsRequired\">\n        <strong class=\"text-danger\">*</strong> = required fields\n      </p>\n      <div [class.input-group]=\"options?.fieldAddonLeft || options?.fieldAddonRight\">\n        <span *ngIf=\"options?.fieldAddonLeft\"\n          class=\"input-group-addon\"\n          [innerHTML]=\"options?.fieldAddonLeft\"></span>\n\n        <select-widget-widget\n          [layoutNode]=\"widgetLayoutNode\"\n          [dataIndex]=\"dataIndex\"\n          [layoutIndex]=\"layoutIndex\"></select-widget-widget>\n\n        <span *ngIf=\"options?.fieldAddonRight\"\n          class=\"input-group-addon\"\n          [innerHTML]=\"options?.fieldAddonRight\"></span>\n      </div>\n\n      <span *ngIf=\"options?.feedback && options?.isInputWidget &&\n          !options?.fieldAddonRight && !layoutNode.arrayItem &&\n          (formControl?.dirty || options?.feedbackOnRender)\"\n        [class.glyphicon-ok]=\"options?.enableSuccessState && !formControl?.errors\"\n        [class.glyphicon-remove]=\"options?.enableErrorState && formControl?.errors\"\n        aria-hidden=\"true\"\n        class=\"form-control-feedback glyphicon\"></span>\n      <div *ngIf=\"options?.messageLocation !== 'top'\">\n        <p *ngIf=\"options?.helpBlock\"\n          class=\"help-block\"\n          [innerHTML]=\"options?.helpBlock\"></p>\n      </div>\n    </div>\n\n    <div *ngIf=\"debug && debugOutput\">debug: <pre>{{debugOutput}}</pre></div>\n  ",
            styles: ["\n    :host /deep/ .list-group-item .form-control-feedback { top: 40; }\n    :host /deep/ .checkbox,\n    :host /deep/ .radio { margin-top: 0; margin-bottom: 0; }\n    :host /deep/ .checkbox-inline,\n    :host /deep/ .checkbox-inline + .checkbox-inline,\n    :host /deep/ .checkbox-inline + .radio-inline,\n    :host /deep/ .radio-inline,\n    :host /deep/ .radio-inline + .radio-inline,\n    :host /deep/ .radio-inline + .checkbox-inline { margin-left: 0; margin-right: 10px; }\n    :host /deep/ .checkbox-inline:last-child,\n    :host /deep/ .radio-inline:last-child { margin-right: 0; }\n    :host /deep/ .ng-invalid.ng-touched { border: 1px solid #f44336; }\n  "],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_2__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], Bootstrap3FrameworkComponent);
    return Bootstrap3FrameworkComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/bootstrap-3-framework/bootstrap-3-framework.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bootstrap3FrameworkModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widget_library_widget_library_module__ = __webpack_require__("../../../../../src/lib/src/widget-library/widget-library.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework__ = __webpack_require__("../../../../../src/lib/src/framework-library/framework.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bootstrap_3_framework_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/bootstrap-3-framework/bootstrap-3-framework.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bootstrap_3_framework__ = __webpack_require__("../../../../../src/lib/src/framework-library/bootstrap-3-framework/bootstrap-3.framework.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Bootstrap3FrameworkModule = (function () {
    function Bootstrap3FrameworkModule() {
    }
    Bootstrap3FrameworkModule_1 = Bootstrap3FrameworkModule;
    Bootstrap3FrameworkModule.forRoot = function () {
        return {
            ngModule: Bootstrap3FrameworkModule_1,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_3__framework__["a" /* Framework */], useClass: __WEBPACK_IMPORTED_MODULE_5__bootstrap_3_framework__["a" /* Bootstrap3Framework */], multi: true }
            ]
        };
    };
    Bootstrap3FrameworkModule = Bootstrap3FrameworkModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__widget_library_widget_library_module__["a" /* WidgetLibraryModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__bootstrap_3_framework_component__["a" /* Bootstrap3FrameworkComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__bootstrap_3_framework_component__["a" /* Bootstrap3FrameworkComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__bootstrap_3_framework_component__["a" /* Bootstrap3FrameworkComponent */]]
        })
    ], Bootstrap3FrameworkModule);
    return Bootstrap3FrameworkModule;
    var Bootstrap3FrameworkModule_1;
}());



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/bootstrap-3-framework/bootstrap-3.framework.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bootstrap3Framework; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework__ = __webpack_require__("../../../../../src/lib/src/framework-library/framework.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bootstrap_3_framework_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/bootstrap-3-framework/bootstrap-3-framework.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Bootstrap3Framework = (function (_super) {
    __extends(Bootstrap3Framework, _super);
    function Bootstrap3Framework() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'bootstrap-3';
        _this.framework = __WEBPACK_IMPORTED_MODULE_2__bootstrap_3_framework_component__["a" /* Bootstrap3FrameworkComponent */];
        _this.stylesheets = [
            '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
            '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css',
        ];
        _this.scripts = [
            '//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js',
            '//ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js',
            '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js',
        ];
        return _this;
    }
    Bootstrap3Framework = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], Bootstrap3Framework);
    return Bootstrap3Framework;
}(__WEBPACK_IMPORTED_MODULE_1__framework__["a" /* Framework */]));



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/bootstrap-4-framework/bootstrap-4-framework.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bootstrap4FrameworkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/lib/src/shared/index.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Bootstrap4FrameworkComponent = (function () {
    function Bootstrap4FrameworkComponent(changeDetector, jsf) {
        this.changeDetector = changeDetector;
        this.jsf = jsf;
        this.frameworkInitialized = false;
        this.formControl = null;
        this.debugOutput = '';
        this.debug = '';
        this.parentArray = null;
        this.isOrderable = false;
    }
    Object.defineProperty(Bootstrap4FrameworkComponent.prototype, "showRemoveButton", {
        get: function () {
            if (!this.options.removable || this.options.readonly ||
                this.layoutNode.type === '$ref') {
                return false;
            }
            if (this.layoutNode.recursiveReference) {
                return true;
            }
            if (!this.layoutNode.arrayItem || !this.parentArray) {
                return false;
            }
            return this.parentArray.items.length - 1 <= this.parentArray.options.minItems ? false :
                this.layoutNode.arrayItemType === 'list' ? true :
                    this.layoutIndex[this.layoutIndex.length - 1] === this.parentArray.items.length - 2;
        },
        enumerable: true,
        configurable: true
    });
    Bootstrap4FrameworkComponent.prototype.ngOnInit = function () {
        this.initializeFramework();
        if (this.layoutNode.arrayItem && this.layoutNode.type !== '$ref') {
            this.parentArray = this.jsf.getParentNode(this);
            if (this.parentArray) {
                this.isOrderable = this.layoutNode.arrayItemType === 'list' &&
                    !this.options.readonly && this.parentArray.options.orderable;
            }
        }
    };
    Bootstrap4FrameworkComponent.prototype.ngOnChanges = function () {
        if (!this.frameworkInitialized) {
            this.initializeFramework();
        }
    };
    Bootstrap4FrameworkComponent.prototype.initializeFramework = function () {
        var _this = this;
        if (this.layoutNode) {
            this.options = __WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"](this.layoutNode.options);
            this.widgetLayoutNode = __assign({}, this.layoutNode, { options: __WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"](this.layoutNode.options) });
            this.widgetOptions = this.widgetLayoutNode.options;
            this.formControl = this.jsf.getFormControl(this);
            this.options.isInputWidget = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["e" /* inArray */])(this.layoutNode.type, [
                'button', 'checkbox', 'checkboxes-inline', 'checkboxes', 'color',
                'date', 'datetime-local', 'datetime', 'email', 'file', 'hidden',
                'image', 'integer', 'month', 'number', 'password', 'radio',
                'radiobuttons', 'radios-inline', 'radios', 'range', 'reset', 'search',
                'select', 'submit', 'tel', 'text', 'textarea', 'time', 'url', 'week'
            ]);
            this.options.title = this.setTitle();
            this.options.htmlClass =
                Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.options.htmlClass, 'schema-form-' + this.layoutNode.type);
            this.options.htmlClass =
                this.layoutNode.type === 'array' ?
                    Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.options.htmlClass, 'list-group') :
                    this.layoutNode.arrayItem && this.layoutNode.type !== '$ref' ?
                        Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.options.htmlClass, 'list-group-item') :
                        Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.options.htmlClass, 'form-group');
            this.widgetOptions.htmlClass = '';
            this.options.labelHtmlClass =
                Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.options.labelHtmlClass, 'control-label');
            this.widgetOptions.activeClass =
                Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.activeClass, 'active');
            this.options.fieldAddonLeft =
                this.options.fieldAddonLeft || this.options.prepend;
            this.options.fieldAddonRight =
                this.options.fieldAddonRight || this.options.append;
            if (this.options.title && this.layoutNode.type !== 'tab' &&
                !this.options.notitle && this.options.required &&
                !this.options.title.includes('*')) {
                this.options.title += ' <strong class="text-danger">*</strong>';
            }
            switch (this.layoutNode.type) {
                case 'checkbox':
                case 'checkboxes':
                    this.widgetOptions.htmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.htmlClass, 'checkbox');
                    break;
                case 'checkboxes-inline':
                    this.widgetOptions.htmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.htmlClass, 'checkbox');
                    this.widgetOptions.itemLabelHtmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.itemLabelHtmlClass, 'checkbox-inline');
                    break;
                case 'radio':
                case 'radios':
                    this.widgetOptions.htmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.htmlClass, 'radio');
                    break;
                case 'radios-inline':
                    this.widgetOptions.htmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.htmlClass, 'radio');
                    this.widgetOptions.itemLabelHtmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.itemLabelHtmlClass, 'radio-inline');
                    break;
                case 'checkboxbuttons':
                case 'radiobuttons':
                    this.widgetOptions.htmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.htmlClass, 'btn-group');
                    this.widgetOptions.itemLabelHtmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.itemLabelHtmlClass, 'btn');
                    this.widgetOptions.itemLabelHtmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.itemLabelHtmlClass, this.options.style || 'btn-default');
                    this.widgetOptions.fieldHtmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.fieldHtmlClass, 'sr-only');
                    break;
                case 'button':
                case 'submit':
                    this.widgetOptions.fieldHtmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.fieldHtmlClass, 'btn');
                    this.widgetOptions.fieldHtmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.fieldHtmlClass, this.options.style || 'btn-info');
                    break;
                case 'array':
                case 'fieldset':
                case 'section':
                case 'conditional':
                case 'advancedfieldset':
                case 'authfieldset':
                case 'selectfieldset':
                case 'optionfieldset':
                    this.options.messageLocation = 'top';
                    break;
                case 'tabarray':
                case 'tabs':
                    this.widgetOptions.htmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.htmlClass, 'tab-content');
                    this.widgetOptions.fieldHtmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.fieldHtmlClass, 'tab-pane');
                    this.widgetOptions.labelHtmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.labelHtmlClass, 'nav nav-tabs');
                    break;
                case '$ref':
                    this.widgetOptions.fieldHtmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.fieldHtmlClass, 'btn pull-right');
                    this.widgetOptions.fieldHtmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.fieldHtmlClass, this.options.style || 'btn-default');
                    this.options.icon = 'glyphicon glyphicon-plus';
                    break;
                default:
                    this.widgetOptions.fieldHtmlClass = Object(__WEBPACK_IMPORTED_MODULE_3__shared__["b" /* addClasses */])(this.widgetOptions.fieldHtmlClass, 'form-control');
            }
            if (this.formControl) {
                this.updateHelpBlock(this.formControl.status);
                this.formControl.statusChanges.subscribe(function (status) { return _this.updateHelpBlock(status); });
                if (this.options.debug) {
                    var vars = [];
                    this.debugOutput = __WEBPACK_IMPORTED_MODULE_1_lodash__["map"](vars, function (thisVar) { return JSON.stringify(thisVar, null, 2); }).join('\n');
                }
            }
            this.frameworkInitialized = true;
        }
    };
    Bootstrap4FrameworkComponent.prototype.updateHelpBlock = function (status) {
        this.options.helpBlock = status === 'INVALID' &&
            this.options.enableErrorState && this.formControl.errors &&
            (this.formControl.dirty || this.options.feedbackOnRender) ?
            this.jsf.formatErrors(this.formControl.errors, this.options.validationMessages) :
            this.options.description || this.options.help || null;
    };
    Bootstrap4FrameworkComponent.prototype.setTitle = function () {
        switch (this.layoutNode.type) {
            case 'button':
            case 'checkbox':
            case 'section':
            case 'help':
            case 'msg':
            case 'submit':
            case 'message':
            case 'tabarray':
            case 'tabs':
            case '$ref':
                return null;
            case 'advancedfieldset':
                this.widgetOptions.expandable = true;
                this.widgetOptions.title = 'Advanced options';
                return null;
            case 'authfieldset':
                this.widgetOptions.expandable = true;
                this.widgetOptions.title = 'Authentication settings';
                return null;
            case 'fieldset':
                this.widgetOptions.title = this.options.title;
                return null;
            default:
                this.widgetOptions.title = null;
                return this.jsf.setItemTitle(this);
        }
    };
    Bootstrap4FrameworkComponent.prototype.removeItem = function () {
        this.jsf.removeItem(this);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], Bootstrap4FrameworkComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], Bootstrap4FrameworkComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], Bootstrap4FrameworkComponent.prototype, "dataIndex", void 0);
    Bootstrap4FrameworkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'bootstrap-4-framework',
            template: "\n    <div\n      [class]=\"options?.htmlClass || ''\"\n      [class.has-feedback]=\"options?.feedback && options?.isInputWidget &&\n        (formControl?.dirty || options?.feedbackOnRender)\"\n      [class.has-error]=\"options?.enableErrorState && formControl?.errors &&\n        (formControl?.dirty || options?.feedbackOnRender)\"\n      [class.has-success]=\"options?.enableSuccessState && !formControl?.errors &&\n        (formControl?.dirty || options?.feedbackOnRender)\">\n\n      <button *ngIf=\"showRemoveButton\"\n        class=\"close pull-right\"\n        type=\"button\"\n        (click)=\"removeItem()\">\n        <span aria-hidden=\"true\">&times;</span>\n        <span class=\"sr-only\">Close</span>\n      </button>\n      <div *ngIf=\"options?.messageLocation === 'top'\">\n        <p *ngIf=\"options?.helpBlock\"\n          class=\"help-block\"\n          [innerHTML]=\"options?.helpBlock\"></p>\n      </div>\n\n      <label *ngIf=\"options?.title && layoutNode?.type !== 'tab'\"\n        [attr.for]=\"'control' + layoutNode?._id\"\n        [class]=\"options?.labelHtmlClass || ''\"\n        [class.sr-only]=\"options?.notitle\"\n        [innerHTML]=\"options?.title\"></label>\n      <p *ngIf=\"layoutNode?.type === 'submit' && jsf?.formOptions?.fieldsRequired\">\n        <strong class=\"text-danger\">*</strong> = required fields\n      </p>\n      <div [class.input-group]=\"options?.fieldAddonLeft || options?.fieldAddonRight\">\n        <span *ngIf=\"options?.fieldAddonLeft\"\n          class=\"input-group-addon\"\n          [innerHTML]=\"options?.fieldAddonLeft\"></span>\n\n        <select-widget-widget\n          [layoutNode]=\"widgetLayoutNode\"\n          [dataIndex]=\"dataIndex\"\n          [layoutIndex]=\"layoutIndex\"></select-widget-widget>\n\n        <span *ngIf=\"options?.fieldAddonRight\"\n          class=\"input-group-addon\"\n          [innerHTML]=\"options?.fieldAddonRight\"></span>\n      </div>\n\n      <span *ngIf=\"options?.feedback && options?.isInputWidget &&\n          !options?.fieldAddonRight && !layoutNode.arrayItem &&\n          (formControl?.dirty || options?.feedbackOnRender)\"\n        [class.glyphicon-ok]=\"options?.enableSuccessState && !formControl?.errors\"\n        [class.glyphicon-remove]=\"options?.enableErrorState && formControl?.errors\"\n        aria-hidden=\"true\"\n        class=\"form-control-feedback glyphicon\"></span>\n      <div *ngIf=\"options?.messageLocation !== 'top'\">\n        <p *ngIf=\"options?.helpBlock\"\n          class=\"help-block\"\n          [innerHTML]=\"options?.helpBlock\"></p>\n      </div>\n    </div>\n\n    <div *ngIf=\"debug && debugOutput\">debug: <pre>{{debugOutput}}</pre></div>\n  ",
            styles: ["\n    :host /deep/ .list-group-item .form-control-feedback { top: 40px; }\n    :host /deep/ .checkbox,\n    :host /deep/ .radio { margin-top: 0; margin-bottom: 0; }\n    :host /deep/ .checkbox-inline,\n    :host /deep/ .checkbox-inline + .checkbox-inline,\n    :host /deep/ .checkbox-inline + .radio-inline,\n    :host /deep/ .radio-inline,\n    :host /deep/ .radio-inline + .radio-inline,\n    :host /deep/ .radio-inline + .checkbox-inline { margin-left: 0; margin-right: 10px; }\n    :host /deep/ .checkbox-inline:last-child,\n    :host /deep/ .radio-inline:last-child { margin-right: 0; }\n    :host /deep/ .ng-invalid.ng-touched { border: 1px solid #f44336; }\n  "],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_2__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], Bootstrap4FrameworkComponent);
    return Bootstrap4FrameworkComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/bootstrap-4-framework/bootstrap-4-framework.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bootstrap4FrameworkModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widget_library_widget_library_module__ = __webpack_require__("../../../../../src/lib/src/widget-library/widget-library.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework__ = __webpack_require__("../../../../../src/lib/src/framework-library/framework.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bootstrap_4_framework_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/bootstrap-4-framework/bootstrap-4-framework.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bootstrap_4_framework__ = __webpack_require__("../../../../../src/lib/src/framework-library/bootstrap-4-framework/bootstrap-4.framework.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Bootstrap4FrameworkModule = (function () {
    function Bootstrap4FrameworkModule() {
    }
    Bootstrap4FrameworkModule_1 = Bootstrap4FrameworkModule;
    Bootstrap4FrameworkModule.forRoot = function () {
        return {
            ngModule: Bootstrap4FrameworkModule_1,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_3__framework__["a" /* Framework */], useClass: __WEBPACK_IMPORTED_MODULE_5__bootstrap_4_framework__["a" /* Bootstrap4Framework */], multi: true }
            ]
        };
    };
    Bootstrap4FrameworkModule = Bootstrap4FrameworkModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__widget_library_widget_library_module__["a" /* WidgetLibraryModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__bootstrap_4_framework_component__["a" /* Bootstrap4FrameworkComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__bootstrap_4_framework_component__["a" /* Bootstrap4FrameworkComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__bootstrap_4_framework_component__["a" /* Bootstrap4FrameworkComponent */]]
        })
    ], Bootstrap4FrameworkModule);
    return Bootstrap4FrameworkModule;
    var Bootstrap4FrameworkModule_1;
}());



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/bootstrap-4-framework/bootstrap-4.framework.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bootstrap4Framework; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework__ = __webpack_require__("../../../../../src/lib/src/framework-library/framework.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bootstrap_4_framework_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/bootstrap-4-framework/bootstrap-4-framework.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Bootstrap4Framework = (function (_super) {
    __extends(Bootstrap4Framework, _super);
    function Bootstrap4Framework() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'bootstrap-4';
        _this.framework = __WEBPACK_IMPORTED_MODULE_2__bootstrap_4_framework_component__["a" /* Bootstrap4FrameworkComponent */];
        _this.stylesheets = [
            '//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css'
        ];
        _this.scripts = [
            '//code.jquery.com/jquery-3.2.1.slim.min.js',
            '//cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js',
            '//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js',
        ];
        return _this;
    }
    Bootstrap4Framework = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], Bootstrap4Framework);
    return Bootstrap4Framework;
}(__WEBPACK_IMPORTED_MODULE_1__framework__["a" /* Framework */]));



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/framework-library.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrameworkLibraryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget_library_widget_library_service__ = __webpack_require__("../../../../../src/lib/src/widget-library/widget-library.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_utility_functions__ = __webpack_require__("../../../../../src/lib/src/shared/utility.functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework__ = __webpack_require__("../../../../../src/lib/src/framework-library/framework.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var FrameworkLibraryService = (function () {
    function FrameworkLibraryService(frameworks, widgetLibrary) {
        var _this = this;
        this.frameworks = frameworks;
        this.widgetLibrary = widgetLibrary;
        this.activeFramework = null;
        this.loadExternalAssets = false;
        this.frameworkLibrary = {};
        this.frameworks.forEach(function (framework) {
            return _this.frameworkLibrary[framework.name] = framework;
        });
        this.defaultFramework = this.frameworks[0].name;
        this.setFramework(this.defaultFramework);
    }
    FrameworkLibraryService.prototype.setLoadExternalAssets = function (loadExternalAssets) {
        if (loadExternalAssets === void 0) { loadExternalAssets = true; }
        this.loadExternalAssets = !!loadExternalAssets;
    };
    FrameworkLibraryService.prototype.setFramework = function (framework, loadExternalAssets) {
        if (framework === void 0) { framework = this.defaultFramework; }
        if (loadExternalAssets === void 0) { loadExternalAssets = this.loadExternalAssets; }
        this.activeFramework =
            typeof framework === 'string' && this.hasFramework(framework) ?
                this.frameworkLibrary[framework] :
                typeof framework === 'object' && Object(__WEBPACK_IMPORTED_MODULE_2__shared_utility_functions__["g" /* hasOwn */])(framework, 'framework') ?
                    framework :
                    this.frameworkLibrary[this.defaultFramework];
        return this.registerFrameworkWidgets(this.activeFramework);
    };
    FrameworkLibraryService.prototype.registerFrameworkWidgets = function (framework) {
        return Object(__WEBPACK_IMPORTED_MODULE_2__shared_utility_functions__["g" /* hasOwn */])(framework, 'widgets') ?
            this.widgetLibrary.registerFrameworkWidgets(framework.widgets) :
            this.widgetLibrary.unRegisterFrameworkWidgets();
    };
    FrameworkLibraryService.prototype.hasFramework = function (type) {
        return Object(__WEBPACK_IMPORTED_MODULE_2__shared_utility_functions__["g" /* hasOwn */])(this.frameworkLibrary, type);
    };
    FrameworkLibraryService.prototype.getFramework = function () {
        if (!this.activeFramework) {
            this.setFramework('default', true);
        }
        return this.activeFramework.framework;
    };
    FrameworkLibraryService.prototype.getFrameworkWidgets = function () {
        return this.activeFramework.widgets || {};
    };
    FrameworkLibraryService.prototype.getFrameworkStylesheets = function (load) {
        if (load === void 0) { load = this.loadExternalAssets; }
        return (load && this.activeFramework.stylesheets) || [];
    };
    FrameworkLibraryService.prototype.getFrameworkScripts = function (load) {
        if (load === void 0) { load = this.loadExternalAssets; }
        return (load && this.activeFramework.scripts) || [];
    };
    FrameworkLibraryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__framework__["a" /* Framework */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__widget_library_widget_library_service__["a" /* WidgetLibraryService */])),
        __metadata("design:paramtypes", [Array, __WEBPACK_IMPORTED_MODULE_1__widget_library_widget_library_service__["a" /* WidgetLibraryService */]])
    ], FrameworkLibraryService);
    return FrameworkLibraryService;
}());



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/framework.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Framework; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Framework = (function () {
    function Framework() {
        this.widgets = {};
        this.stylesheets = [];
        this.scripts = [];
    }
    Framework = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], Framework);
    return Framework;
}());

;


/***/ }),

/***/ "../../../../../src/lib/src/framework-library/material-design-framework/flex-layout-root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexLayoutRootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlexLayoutRootComponent = (function () {
    function FlexLayoutRootComponent(jsf) {
        this.jsf = jsf;
        this.isFlexItem = false;
    }
    FlexLayoutRootComponent.prototype.removeItem = function (item) {
        this.jsf.removeItem(item);
    };
    FlexLayoutRootComponent.prototype.getFlexAttribute = function (node, attribute) {
        var index = ['flex-grow', 'flex-shrink', 'flex-basis'].indexOf(attribute);
        return ((node.options || {}).flex || '').split(/\s+/)[index] ||
            (node.options || {})[attribute] || ['1', '1', 'auto'][index];
    };
    FlexLayoutRootComponent.prototype.showWidget = function (layoutNode) {
        return this.jsf.evaluateCondition(layoutNode, this.dataIndex);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], FlexLayoutRootComponent.prototype, "dataIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], FlexLayoutRootComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], FlexLayoutRootComponent.prototype, "layout", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], FlexLayoutRootComponent.prototype, "isFlexItem", void 0);
    FlexLayoutRootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'flex-layout-root-widget',
            template: "\n    <div *ngFor=\"let layoutNode of layout; let i = index\"\n      [class.form-flex-item]=\"isFlexItem\"\n      [style.flex-grow]=\"getFlexAttribute(layoutNode, 'flex-grow')\"\n      [style.flex-shrink]=\"getFlexAttribute(layoutNode, 'flex-shrink')\"\n      [style.flex-basis]=\"getFlexAttribute(layoutNode, 'flex-basis')\"\n      [style.align-self]=\"(layoutNode?.options || {})['align-self']\"\n      [style.order]=\"layoutNode?.options?.order\"\n      [fxFlex]=\"layoutNode?.options?.fxFlex\"\n      [fxFlexOrder]=\"layoutNode?.options?.fxFlexOrder\"\n      [fxFlexOffset]=\"layoutNode?.options?.fxFlexOffset\"\n      [fxFlexAlign]=\"layoutNode?.options?.fxFlexAlign\">\n      <select-framework-widget *ngIf=\"showWidget(layoutNode)\"\n        [dataIndex]=\"layoutNode?.arrayItem ? (dataIndex || []).concat(i) : (dataIndex || [])\"\n        [layoutIndex]=\"(layoutIndex || []).concat(i)\"\n        [layoutNode]=\"layoutNode\"></select-framework-widget>\n    <div>",
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].Default,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], FlexLayoutRootComponent);
    return FlexLayoutRootComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/material-design-framework/flex-layout-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexLayoutSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlexLayoutSectionComponent = (function () {
    function FlexLayoutSectionComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.expanded = true;
        this.containerType = 'div';
    }
    Object.defineProperty(FlexLayoutSectionComponent.prototype, "sectionTitle", {
        get: function () {
            return this.options.notitle ? null : this.jsf.setItemTitle(this);
        },
        enumerable: true,
        configurable: true
    });
    FlexLayoutSectionComponent.prototype.ngOnInit = function () {
        this.jsf.initializeControl(this);
        this.options = this.layoutNode.options || {};
        this.expanded = typeof this.options.expanded === 'boolean' ?
            this.options.expanded : !this.options.expandable;
        switch (this.layoutNode.type) {
            case 'section':
            case 'array':
            case 'fieldset':
            case 'advancedfieldset':
            case 'authfieldset':
            case 'optionfieldset':
            case 'selectfieldset':
                this.containerType = 'fieldset';
                break;
            case 'card':
                this.containerType = 'card';
                break;
            case 'expansion-panel':
                this.containerType = 'expansion-panel';
                break;
            default:
                this.containerType = 'div';
        }
    };
    FlexLayoutSectionComponent.prototype.toggleExpanded = function () {
        if (this.options.expandable) {
            this.expanded = !this.expanded;
        }
    };
    FlexLayoutSectionComponent.prototype.getFlexAttribute = function (attribute) {
        var flexActive = this.layoutNode.type === 'flex' ||
            !!this.options.displayFlex ||
            this.options.display === 'flex';
        switch (attribute) {
            case 'is-flex':
                return flexActive;
            case 'display':
                return flexActive ? 'flex' : 'initial';
            case 'flex-direction':
            case 'flex-wrap':
                var index = ['flex-direction', 'flex-wrap'].indexOf(attribute);
                return (this.options['flex-flow'] || '').split(/\s+/)[index] ||
                    this.options[attribute] || ['column', 'nowrap'][index];
            case 'justify-content':
            case 'align-items':
            case 'align-content':
                return this.options[attribute];
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], FlexLayoutSectionComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], FlexLayoutSectionComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], FlexLayoutSectionComponent.prototype, "dataIndex", void 0);
    FlexLayoutSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'flex-layout-section-widget',
            template: "\n    <div *ngIf=\"containerType === 'div'\"\n      [class]=\"options?.htmlClass || ''\"\n      [class.expandable]=\"options?.expandable && !expanded\"\n      [class.expanded]=\"options?.expandable && expanded\">\n      <label *ngIf=\"sectionTitle\"\n        [class]=\"'legend ' + (options?.labelHtmlClass || '')\"\n        [innerHTML]=\"sectionTitle\"\n        (click)=\"toggleExpanded()\"></label>\n      <flex-layout-root-widget *ngIf=\"expanded\"\n        [layout]=\"layoutNode.items\"\n        [dataIndex]=\"dataIndex\"\n        [layoutIndex]=\"layoutIndex\"\n        [isFlexItem]=\"getFlexAttribute('is-flex')\"\n        [class.form-flex-column]=\"getFlexAttribute('flex-direction') === 'column'\"\n        [class.form-flex-row]=\"getFlexAttribute('flex-direction') === 'row'\"\n        [style.display]=\"getFlexAttribute('display')\"\n        [style.flex-direction]=\"getFlexAttribute('flex-direction')\"\n        [style.flex-wrap]=\"getFlexAttribute('flex-wrap')\"\n        [style.justify-content]=\"getFlexAttribute('justify-content')\"\n        [style.align-items]=\"getFlexAttribute('align-items')\"\n        [style.align-content]=\"getFlexAttribute('align-content')\"\n        [fxLayout]=\"options?.fxLayout\"\n        [fxLayoutWrap]=\"options?.fxLayoutWrap\"\n        [fxLayoutGap]=\"options?.fxLayoutGap\"\n        [fxLayoutAlign]=\"options?.fxLayoutAlign\"\n        [attr.fxFlexFill]=\"options?.fxLayoutAlign\"></flex-layout-root-widget>\n      <mat-error *ngIf=\"options?.showErrors && options?.errorMessage\"\n        [innerHTML]=\"options?.errorMessage\"></mat-error>\n    </div>\n\n    <fieldset *ngIf=\"containerType === 'fieldset'\"\n      [class]=\"options?.htmlClass || ''\"\n      [class.expandable]=\"options?.expandable && !expanded\"\n      [class.expanded]=\"options?.expandable && expanded\"\n      [disabled]=\"options?.readonly\">\n      <legend *ngIf=\"sectionTitle\"\n        [class]=\"'legend ' + (options?.labelHtmlClass || '')\"\n        [innerHTML]=\"sectionTitle\"\n        (click)=\"toggleExpanded()\"></legend>\n      <flex-layout-root-widget *ngIf=\"expanded\"\n        [layout]=\"layoutNode.items\"\n        [dataIndex]=\"dataIndex\"\n        [layoutIndex]=\"layoutIndex\"\n        [isFlexItem]=\"getFlexAttribute('is-flex')\"\n        [class.form-flex-column]=\"getFlexAttribute('flex-direction') === 'column'\"\n        [class.form-flex-row]=\"getFlexAttribute('flex-direction') === 'row'\"\n        [style.display]=\"getFlexAttribute('display')\"\n        [style.flex-direction]=\"getFlexAttribute('flex-direction')\"\n        [style.flex-wrap]=\"getFlexAttribute('flex-wrap')\"\n        [style.justify-content]=\"getFlexAttribute('justify-content')\"\n        [style.align-items]=\"getFlexAttribute('align-items')\"\n        [style.align-content]=\"getFlexAttribute('align-content')\"\n        [fxLayout]=\"options?.fxLayout\"\n        [fxLayoutWrap]=\"options?.fxLayoutWrap\"\n        [fxLayoutGap]=\"options?.fxLayoutGap\"\n        [fxLayoutAlign]=\"options?.fxLayoutAlign\"\n        [attr.fxFlexFill]=\"options?.fxLayoutAlign\"></flex-layout-root-widget>\n      <mat-error *ngIf=\"options?.showErrors && options?.errorMessage\"\n        [innerHTML]=\"options?.errorMessage\"></mat-error>\n    </fieldset>\n\n    <mat-card *ngIf=\"containerType === 'card'\"\n      [class]=\"options?.htmlClass || ''\"\n      [class.expandable]=\"options?.expandable && !expanded\"\n      [class.expanded]=\"options?.expandable && expanded\">\n      <mat-card-header *ngIf=\"sectionTitle\">\n        <legend\n          [class]=\"'legend ' + (options?.labelHtmlClass || '')\"\n          [innerHTML]=\"sectionTitle\"\n          (click)=\"toggleExpanded()\"></legend>\n      </mat-card-header>\n      <mat-card-content *ngIf=\"expanded\">\n        <fieldset [disabled]=\"options?.readonly\">\n          <flex-layout-root-widget *ngIf=\"expanded\"\n            [layout]=\"layoutNode.items\"\n            [dataIndex]=\"dataIndex\"\n            [layoutIndex]=\"layoutIndex\"\n            [isFlexItem]=\"getFlexAttribute('is-flex')\"\n            [class.form-flex-column]=\"getFlexAttribute('flex-direction') === 'column'\"\n            [class.form-flex-row]=\"getFlexAttribute('flex-direction') === 'row'\"\n            [style.display]=\"getFlexAttribute('display')\"\n            [style.flex-direction]=\"getFlexAttribute('flex-direction')\"\n            [style.flex-wrap]=\"getFlexAttribute('flex-wrap')\"\n            [style.justify-content]=\"getFlexAttribute('justify-content')\"\n            [style.align-items]=\"getFlexAttribute('align-items')\"\n            [style.align-content]=\"getFlexAttribute('align-content')\"\n            [fxLayout]=\"options?.fxLayout\"\n            [fxLayoutWrap]=\"options?.fxLayoutWrap\"\n            [fxLayoutGap]=\"options?.fxLayoutGap\"\n            [fxLayoutAlign]=\"options?.fxLayoutAlign\"\n            [attr.fxFlexFill]=\"options?.fxLayoutAlign\"></flex-layout-root-widget>\n          </fieldset>\n      </mat-card-content>\n      <mat-card-footer>\n        <mat-error *ngIf=\"options?.showErrors && options?.errorMessage\"\n          [innerHTML]=\"options?.errorMessage\"></mat-error>\n      </mat-card-footer>\n    </mat-card>\n\n    <mat-expansion-panel *ngIf=\"containerType === 'expansion-panel'\"\n      [expanded]=\"expanded\"\n      [hideToggle]=\"!options?.expandable\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <legend *ngIf=\"sectionTitle\"\n            [class]=\"options?.labelHtmlClass\"\n            [innerHTML]=\"sectionTitle\"\n            (click)=\"toggleExpanded()\"></legend>\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <fieldset [disabled]=\"options?.readonly\">\n        <flex-layout-root-widget *ngIf=\"expanded\"\n          [layout]=\"layoutNode.items\"\n          [dataIndex]=\"dataIndex\"\n          [layoutIndex]=\"layoutIndex\"\n          [isFlexItem]=\"getFlexAttribute('is-flex')\"\n          [class.form-flex-column]=\"getFlexAttribute('flex-direction') === 'column'\"\n          [class.form-flex-row]=\"getFlexAttribute('flex-direction') === 'row'\"\n          [style.display]=\"getFlexAttribute('display')\"\n          [style.flex-direction]=\"getFlexAttribute('flex-direction')\"\n          [style.flex-wrap]=\"getFlexAttribute('flex-wrap')\"\n          [style.justify-content]=\"getFlexAttribute('justify-content')\"\n          [style.align-items]=\"getFlexAttribute('align-items')\"\n          [style.align-content]=\"getFlexAttribute('align-content')\"\n          [fxLayout]=\"options?.fxLayout\"\n          [fxLayoutWrap]=\"options?.fxLayoutWrap\"\n          [fxLayoutGap]=\"options?.fxLayoutGap\"\n          [fxLayoutAlign]=\"options?.fxLayoutAlign\"\n          [attr.fxFlexFill]=\"options?.fxLayoutAlign\"></flex-layout-root-widget>\n      </fieldset>\n      <mat-error *ngIf=\"options?.showErrors && options?.errorMessage\"\n        [innerHTML]=\"options?.errorMessage\"></mat-error>\n    </mat-expansion-panel>",
            styles: ["\n    fieldset { border: 0; margin: 0; padding: 0; }\n    .legend { font-weight: bold; }\n    .expandable > .legend:before { content: '\u25B6'; padding-right: .3em; }\n    .expanded > .legend:before { content: '\u25BC'; padding-right: .2em; }\n  "],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], FlexLayoutSectionComponent);
    return FlexLayoutSectionComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/material-design-framework/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MATERIAL_FRAMEWORK_COMPONENTS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flex_layout_root_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/flex-layout-root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flex_layout_section_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/flex-layout-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_add_reference_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-add-reference.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_one_of_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-one-of.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_button_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_button_group_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-button-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_checkbox_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-checkbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_checkboxes_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-checkboxes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_chip_list_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-chip-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_datepicker_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-datepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_file_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_input_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_number_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-number.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_radios_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-radios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_select_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_slider_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_stepper_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-stepper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_tabs_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__material_textarea_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-textarea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__material_design_framework_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-design-framework.component.ts");
/* unused harmony reexport FlexLayoutRootComponent */
/* unused harmony reexport FlexLayoutSectionComponent */
/* unused harmony reexport MaterialAddReferenceComponent */
/* unused harmony reexport MaterialOneOfComponent */
/* unused harmony reexport MaterialButtonComponent */
/* unused harmony reexport MaterialButtonGroupComponent */
/* unused harmony reexport MaterialCheckboxComponent */
/* unused harmony reexport MaterialCheckboxesComponent */
/* unused harmony reexport MaterialChipListComponent */
/* unused harmony reexport MaterialDatepickerComponent */
/* unused harmony reexport MaterialFileComponent */
/* unused harmony reexport MaterialInputComponent */
/* unused harmony reexport MaterialNumberComponent */
/* unused harmony reexport MaterialRadiosComponent */
/* unused harmony reexport MaterialSelectComponent */
/* unused harmony reexport MaterialSliderComponent */
/* unused harmony reexport MaterialStepperComponent */
/* unused harmony reexport MaterialTabsComponent */
/* unused harmony reexport MaterialTextareaComponent */
/* unused harmony reexport MaterialDesignFrameworkComponent */




















var MATERIAL_FRAMEWORK_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_0__flex_layout_root_component__["a" /* FlexLayoutRootComponent */], __WEBPACK_IMPORTED_MODULE_1__flex_layout_section_component__["a" /* FlexLayoutSectionComponent */],
    __WEBPACK_IMPORTED_MODULE_2__material_add_reference_component__["a" /* MaterialAddReferenceComponent */], __WEBPACK_IMPORTED_MODULE_3__material_one_of_component__["a" /* MaterialOneOfComponent */],
    __WEBPACK_IMPORTED_MODULE_4__material_button_component__["a" /* MaterialButtonComponent */], __WEBPACK_IMPORTED_MODULE_5__material_button_group_component__["a" /* MaterialButtonGroupComponent */],
    __WEBPACK_IMPORTED_MODULE_6__material_checkbox_component__["a" /* MaterialCheckboxComponent */], __WEBPACK_IMPORTED_MODULE_7__material_checkboxes_component__["a" /* MaterialCheckboxesComponent */],
    __WEBPACK_IMPORTED_MODULE_8__material_chip_list_component__["a" /* MaterialChipListComponent */], __WEBPACK_IMPORTED_MODULE_9__material_datepicker_component__["a" /* MaterialDatepickerComponent */],
    __WEBPACK_IMPORTED_MODULE_10__material_file_component__["a" /* MaterialFileComponent */], __WEBPACK_IMPORTED_MODULE_11__material_input_component__["a" /* MaterialInputComponent */], __WEBPACK_IMPORTED_MODULE_12__material_number_component__["a" /* MaterialNumberComponent */],
    __WEBPACK_IMPORTED_MODULE_13__material_radios_component__["a" /* MaterialRadiosComponent */], __WEBPACK_IMPORTED_MODULE_14__material_select_component__["a" /* MaterialSelectComponent */], __WEBPACK_IMPORTED_MODULE_15__material_slider_component__["a" /* MaterialSliderComponent */],
    __WEBPACK_IMPORTED_MODULE_16__material_stepper_component__["a" /* MaterialStepperComponent */], __WEBPACK_IMPORTED_MODULE_17__material_tabs_component__["a" /* MaterialTabsComponent */], __WEBPACK_IMPORTED_MODULE_18__material_textarea_component__["a" /* MaterialTextareaComponent */],
    __WEBPACK_IMPORTED_MODULE_19__material_design_framework_component__["a" /* MaterialDesignFrameworkComponent */]
];






















/***/ }),

/***/ "../../../../../src/lib/src/framework-library/material-design-framework/material-add-reference.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialAddReferenceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialAddReferenceComponent = (function () {
    function MaterialAddReferenceComponent(jsf) {
        this.jsf = jsf;
    }
    MaterialAddReferenceComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
    };
    Object.defineProperty(MaterialAddReferenceComponent.prototype, "showAddButton", {
        get: function () {
            return !this.layoutNode.arrayItem ||
                this.layoutIndex[this.layoutIndex.length - 1] < this.options.maxItems;
        },
        enumerable: true,
        configurable: true
    });
    MaterialAddReferenceComponent.prototype.addItem = function (event) {
        event.preventDefault();
        this.jsf.addItem(this);
    };
    Object.defineProperty(MaterialAddReferenceComponent.prototype, "buttonText", {
        get: function () {
            var parent = {
                dataIndex: this.dataIndex.slice(0, -1),
                layoutIndex: this.layoutIndex.slice(0, -1),
                layoutNode: this.jsf.getParentNode(this),
            };
            return parent.layoutNode.add ||
                this.jsf.setArrayItemTitle(parent, this.layoutNode, this.itemCount);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MaterialAddReferenceComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialAddReferenceComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialAddReferenceComponent.prototype, "dataIndex", void 0);
    MaterialAddReferenceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'material-add-reference-widget',
            template: "\n    <section [class]=\"options?.htmlClass || ''\" align=\"end\">\n      <button mat-raised-button *ngIf=\"showAddButton\"\n        [color]=\"options?.color || 'accent'\"\n        [disabled]=\"options?.readonly\"\n        (click)=\"addItem($event)\">\n        <span *ngIf=\"options?.icon\" [class]=\"options?.icon\"></span>\n        <span *ngIf=\"options?.title\" [innerHTML]=\"buttonText\"></span>\n      </button>\n    </section>",
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].Default,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], MaterialAddReferenceComponent);
    return MaterialAddReferenceComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/material-design-framework/material-button-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialButtonGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/lib/src/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MaterialButtonGroupComponent = (function () {
    function MaterialButtonGroupComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.radiosList = [];
        this.vertical = false;
    }
    MaterialButtonGroupComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.radiosList = Object(__WEBPACK_IMPORTED_MODULE_2__shared__["c" /* buildTitleMap */])(this.options.titleMap || this.options.enumNames, this.options.enum, true);
        this.jsf.initializeControl(this);
    };
    MaterialButtonGroupComponent.prototype.updateValue = function (value) {
        this.options.showErrors = true;
        this.jsf.updateValue(this, value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MaterialButtonGroupComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialButtonGroupComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialButtonGroupComponent.prototype, "dataIndex", void 0);
    MaterialButtonGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'material-button-group-widget',
            template: "\n    <div>\n      <div *ngIf=\"options?.title\">\n        <label\n          [attr.for]=\"'control' + layoutNode?._id\"\n          [class]=\"options?.labelHtmlClass || ''\"\n          [style.display]=\"options?.notitle ? 'none' : ''\"\n          [innerHTML]=\"options?.title\"></label>\n      </div>\n      <mat-button-toggle-group\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n        [attr.required]=\"options?.required\"\n        [disabled]=\"controlDisabled || options?.readonly\"\n        [name]=\"controlName\"\n        [value]=\"controlValue\"\n        [vertical]=\"!!options.vertical\">\n        <mat-button-toggle *ngFor=\"let radioItem of radiosList\"\n          [id]=\"'control' + layoutNode?._id + '/' + radioItem?.name\"\n          [value]=\"radioItem?.value\"\n          (click)=\"updateValue(radioItem?.value)\">\n          <span [innerHTML]=\"radioItem?.name\"></span>\n        </mat-button-toggle>\n      </mat-button-toggle-group>\n      <mat-error *ngIf=\"options?.showErrors && options?.errorMessage\"\n        [innerHTML]=\"options?.errorMessage\"></mat-error>\n    </div>",
            styles: [" mat-error { font-size: 75%; } "],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], MaterialButtonGroupComponent);
    return MaterialButtonGroupComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/material-design-framework/material-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_utility_functions__ = __webpack_require__("../../../../../src/lib/src/shared/utility.functions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MaterialButtonComponent = (function () {
    function MaterialButtonComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
    }
    MaterialButtonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
        if (Object(__WEBPACK_IMPORTED_MODULE_2__shared_utility_functions__["g" /* hasOwn */])(this.options, 'disabled')) {
            this.controlDisabled = this.options.disabled;
        }
        else if (this.jsf.formOptions.disableInvalidSubmit) {
            this.controlDisabled = !this.jsf.isValid;
            this.jsf.isValidChanges.subscribe(function (isValid) { return _this.controlDisabled = !isValid; });
        }
    };
    MaterialButtonComponent.prototype.updateValue = function (event) {
        if (typeof this.options.onClick === 'function') {
            this.options.onClick(event);
        }
        else {
            this.jsf.updateValue(this, event.target.value);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MaterialButtonComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialButtonComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialButtonComponent.prototype, "dataIndex", void 0);
    MaterialButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'material-button-widget',
            template: "\n    <div class=\"button-row\" [class]=\"options?.htmlClass || ''\">\n      <button mat-raised-button\n        [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [color]=\"options?.color || 'primary'\"\n        [disabled]=\"controlDisabled || options?.readonly\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [type]=\"layoutNode?.type\"\n        [value]=\"controlValue\"\n        (click)=\"updateValue($event)\">\n        <mat-icon *ngIf=\"options?.icon\" class=\"mat-24\">{{options?.icon}}</mat-icon>\n        <span *ngIf=\"options?.title\" [innerHTML]=\"options?.title\"></span>\n      </button>\n    </div>",
            styles: [" button { margin-top: 10px; } "],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], MaterialButtonComponent);
    return MaterialButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/material-design-framework/material-checkbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialCheckboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialCheckboxComponent = (function () {
    function MaterialCheckboxComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.trueValue = true;
        this.falseValue = false;
        this.showSlideToggle = false;
    }
    MaterialCheckboxComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this, !this.options.readonly);
        if (this.controlValue === null || this.controlValue === undefined) {
            this.controlValue = false;
            this.jsf.updateValue(this, this.falseValue);
        }
        if (this.layoutNode.type === 'slide-toggle' ||
            this.layoutNode.format === 'slide-toggle') {
            this.showSlideToggle = true;
        }
    };
    MaterialCheckboxComponent.prototype.updateValue = function (event) {
        this.options.showErrors = true;
        this.jsf.updateValue(this, event.checked ? this.trueValue : this.falseValue);
    };
    Object.defineProperty(MaterialCheckboxComponent.prototype, "isChecked", {
        get: function () {
            return this.jsf.getFormControlValue(this) === this.trueValue;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MaterialCheckboxComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialCheckboxComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialCheckboxComponent.prototype, "dataIndex", void 0);
    MaterialCheckboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'material-checkbox-widget',
            template: "\n    <mat-checkbox *ngIf=\"boundControl && !showSlideToggle\"\n      [formControl]=\"formControl\"\n      align=\"left\"\n      [color]=\"options?.color || 'primary'\"\n      [id]=\"'control' + layoutNode?._id\"\n      labelPosition=\"after\"\n      [name]=\"controlName\"\n      (blur)=\"options.showErrors = true\">\n      <span *ngIf=\"options?.title\"\n        class=\"checkbox-name\"\n        [style.display]=\"options?.notitle ? 'none' : ''\"\n        [innerHTML]=\"options?.title\"></span>\n    </mat-checkbox>\n    <mat-checkbox *ngIf=\"!boundControl && !showSlideToggle\"\n      align=\"left\"\n      [color]=\"options?.color || 'primary'\"\n      [disabled]=\"controlDisabled || options?.readonly\"\n      [id]=\"'control' + layoutNode?._id\"\n      labelPosition=\"after\"\n      [name]=\"controlName\"\n      [checked]=\"isChecked\"\n      (blur)=\"options.showErrors = true\"\n      (change)=\"updateValue($event)\">\n      <span *ngIf=\"options?.title\"\n        class=\"checkbox-name\"\n        [style.display]=\"options?.notitle ? 'none' : ''\"\n        [innerHTML]=\"options?.title\"></span>\n    </mat-checkbox>\n    <mat-slide-toggle *ngIf=\"boundControl && showSlideToggle\"\n      [formControl]=\"formControl\"\n      align=\"left\"\n      [color]=\"options?.color || 'primary'\"\n      [id]=\"'control' + layoutNode?._id\"\n      labelPosition=\"after\"\n      [name]=\"controlName\"\n      (blur)=\"options.showErrors = true\">\n      <span *ngIf=\"options?.title\"\n        class=\"checkbox-name\"\n        [style.display]=\"options?.notitle ? 'none' : ''\"\n        [innerHTML]=\"options?.title\"></span>\n    </mat-slide-toggle>\n    <mat-slide-toggle *ngIf=\"!boundControl && showSlideToggle\"\n      align=\"left\"\n      [color]=\"options?.color || 'primary'\"\n      [disabled]=\"controlDisabled || options?.readonly\"\n      [id]=\"'control' + layoutNode?._id\"\n      labelPosition=\"after\"\n      [name]=\"controlName\"\n      [checked]=\"isChecked\"\n      (blur)=\"options.showErrors = true\"\n      (change)=\"updateValue($event)\">\n      <span *ngIf=\"options?.title\"\n        class=\"checkbox-name\"\n        [style.display]=\"options?.notitle ? 'none' : ''\"\n        [innerHTML]=\"options?.title\"></span>\n    </mat-slide-toggle>\n    <mat-error *ngIf=\"options?.showErrors && options?.errorMessage\"\n      [innerHTML]=\"options?.errorMessage\"></mat-error>",
            styles: ["\n    .checkbox-name { white-space: nowrap; }\n    mat-error { font-size: 75%; }\n  "],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], MaterialCheckboxComponent);
    return MaterialCheckboxComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/material-design-framework/material-checkboxes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialCheckboxesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/lib/src/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MaterialCheckboxesComponent = (function () {
    function MaterialCheckboxesComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.horizontalList = false;
        this.checkboxList = [];
    }
    MaterialCheckboxesComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.horizontalList = this.layoutNode.type === 'checkboxes-inline' ||
            this.layoutNode.type === 'checkboxbuttons';
        this.jsf.initializeControl(this);
        this.checkboxList = Object(__WEBPACK_IMPORTED_MODULE_2__shared__["c" /* buildTitleMap */])(this.options.titleMap || this.options.enumNames, this.options.enum, true);
        if (this.boundControl) {
            var formArray = this.jsf.getFormControl(this);
            for (var _i = 0, _a = this.checkboxList; _i < _a.length; _i++) {
                var checkboxItem = _a[_i];
                checkboxItem.checked = formArray.value.includes(checkboxItem.value);
            }
        }
    };
    Object.defineProperty(MaterialCheckboxesComponent.prototype, "allChecked", {
        get: function () {
            return this.checkboxList.filter(function (t) { return t.checked; }).length === this.checkboxList.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaterialCheckboxesComponent.prototype, "someChecked", {
        get: function () {
            var checkedItems = this.checkboxList.filter(function (t) { return t.checked; }).length;
            return checkedItems > 0 && checkedItems < this.checkboxList.length;
        },
        enumerable: true,
        configurable: true
    });
    MaterialCheckboxesComponent.prototype.updateValue = function () {
        this.options.showErrors = true;
        if (this.boundControl) {
            this.jsf.updateArrayCheckboxList(this, this.checkboxList);
        }
    };
    MaterialCheckboxesComponent.prototype.updateAllValues = function (event) {
        this.options.showErrors = true;
        this.checkboxList.forEach(function (t) { return t.checked = event.checked; });
        this.updateValue();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MaterialCheckboxesComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialCheckboxesComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialCheckboxesComponent.prototype, "dataIndex", void 0);
    MaterialCheckboxesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'material-checkboxes-widget',
            template: "\n    <div>\n      <mat-checkbox type=\"checkbox\"\n        [checked]=\"allChecked\"\n        [color]=\"options?.color || 'primary'\"\n        [disabled]=\"controlDisabled || options?.readonly\"\n        [indeterminate]=\"someChecked\"\n        [name]=\"options?.name\"\n        (blur)=\"options.showErrors = true\"\n        (change)=\"updateAllValues($event)\">\n        <span class=\"checkbox-name\" [innerHTML]=\"options?.name\"></span>\n      </mat-checkbox>\n      <label *ngIf=\"options?.title\"\n        class=\"title\"\n        [class]=\"options?.labelHtmlClass || ''\"\n        [style.display]=\"options?.notitle ? 'none' : ''\"\n        [innerHTML]=\"options?.title\"></label>\n      <ul class=\"checkbox-list\" [class.horizontal-list]=\"horizontalList\">\n        <li *ngFor=\"let checkboxItem of checkboxList\"\n          [class]=\"options?.htmlClass || ''\">\n          <mat-checkbox type=\"checkbox\"\n            [(ngModel)]=\"checkboxItem.checked\"\n            [color]=\"options?.color || 'primary'\"\n            [disabled]=\"controlDisabled || options?.readonly\"\n            [name]=\"checkboxItem?.name\"\n            (blur)=\"options.showErrors = true\"\n            (change)=\"updateValue()\">\n            <span class=\"checkbox-name\" [innerHTML]=\"checkboxItem?.name\"></span>\n          </mat-checkbox>\n        </li>\n      </ul>\n      <mat-error *ngIf=\"options?.showErrors && options?.errorMessage\"\n        [innerHTML]=\"options?.errorMessage\"></mat-error>\n    </div>",
            styles: ["\n    .title { font-weight: bold; }\n    .checkbox-list { list-style-type: none; }\n    .horizontal-list > li { display: inline-block; margin-right: 10px; zoom: 1; }\n    .checkbox-name { white-space: nowrap; }\n    mat-error { font-size: 75%; }\n  "],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], MaterialCheckboxesComponent);
    return MaterialCheckboxesComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/material-design-framework/material-chip-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialChipListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialChipListComponent = (function () {
    function MaterialChipListComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
    }
    MaterialChipListComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
    };
    MaterialChipListComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MaterialChipListComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialChipListComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialChipListComponent.prototype, "dataIndex", void 0);
    MaterialChipListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'material-chip-list-widget',
            template: "",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], MaterialChipListComponent);
    return MaterialChipListComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/material-design-framework/material-datepicker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialDatepickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/lib/src/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MaterialDatepickerComponent = (function () {
    function MaterialDatepickerComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.autoCompleteList = [];
    }
    MaterialDatepickerComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this, !this.options.readonly);
        this.setControlDate(this.controlValue);
        if (!this.options.notitle && !this.options.description && this.options.placeholder) {
            this.options.description = this.options.placeholder;
        }
    };
    MaterialDatepickerComponent.prototype.ngOnChanges = function () {
        this.setControlDate(this.controlValue);
    };
    MaterialDatepickerComponent.prototype.setControlDate = function (dateString) {
        this.dateValue = Object(__WEBPACK_IMPORTED_MODULE_2__shared__["h" /* stringToDate */])(dateString);
    };
    MaterialDatepickerComponent.prototype.updateValue = function (event) {
        this.options.showErrors = true;
        this.jsf.updateValue(this, Object(__WEBPACK_IMPORTED_MODULE_2__shared__["d" /* dateToString */])(event, this.options));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MaterialDatepickerComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialDatepickerComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialDatepickerComponent.prototype, "dataIndex", void 0);
    MaterialDatepickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'material-datepicker-widget',
            template: "\n    <mat-form-field [style.width]=\"'100%'\">\n      <span matPrefix *ngIf=\"options?.prefix || options?.fieldAddonLeft\"\n        [innerHTML]=\"options?.prefix || options?.fieldAddonLeft\"></span>\n      <input matInput *ngIf=\"boundControl\"\n        [formControl]=\"formControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.list]=\"'control' + layoutNode?._id + 'Autocomplete'\"\n        [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n        [id]=\"'control' + layoutNode?._id\"\n        [max]=\"options?.maximum\"\n        [matDatepicker]=\"picker\"\n        [min]=\"options?.minimum\"\n        [name]=\"controlName\"\n        [placeholder]=\"options?.title\"\n        [required]=\"options?.required\"\n        [style.width]=\"'100%'\"\n        (blur)=\"options.showErrors = true\">\n      <input matInput *ngIf=\"!boundControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.list]=\"'control' + layoutNode?._id + 'Autocomplete'\"\n        [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n        [disabled]=\"controlDisabled || options?.readonly\"\n        [id]=\"'control' + layoutNode?._id\"\n        [max]=\"options?.maximum\"\n        [matDatepicker]=\"picker\"\n        [min]=\"options?.minimum\"\n        [name]=\"controlName\"\n        [placeholder]=\"options?.title\"\n        [required]=\"options?.required\"\n        [style.width]=\"'100%'\"\n        [value]=\"dateValue\"\n        (blur)=\"options.showErrors = true\"\n        (change)=\"updateValue($event)\"\n        (input)=\"updateValue($event)\">\n      <span matSuffix *ngIf=\"options?.suffix || options?.fieldAddonRight\"\n        [innerHTML]=\"options?.suffix || options?.fieldAddonRight\"></span>\n      <mat-hint *ngIf=\"options?.description && (!options?.showErrors || !options?.errorMessage)\"\n        align=\"end\" [innerHTML]=\"options?.description\"></mat-hint>\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    </mat-form-field>\n    <mat-datepicker #picker\n      (selectedChanged)=\"updateValue($event)\"></mat-datepicker>\n    <mat-error *ngIf=\"options?.showErrors && options?.errorMessage\"\n      [innerHTML]=\"options?.errorMessage\"></mat-error>",
            styles: ["\n    mat-error { font-size: 75%; margin-top: -1rem; margin-bottom: 0.5rem; }\n    ::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex\n      .mat-form-field-infix { width: initial; }\n  "],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], MaterialDatepickerComponent);
    return MaterialDatepickerComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/material-design-framework/material-design-framework.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialDesignFrameworkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("../../../../../src/lib/src/shared/index.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MaterialDesignFrameworkComponent = (function () {
    function MaterialDesignFrameworkComponent(changeDetector, jsf) {
        this.changeDetector = changeDetector;
        this.jsf = jsf;
        this.frameworkInitialized = false;
        this.formControl = null;
        this.parentArray = null;
        this.isOrderable = false;
        this.dynamicTitle = null;
    }
    Object.defineProperty(MaterialDesignFrameworkComponent.prototype, "showRemoveButton", {
        get: function () {
            if (!this.layoutNode || !this.widgetOptions.removable ||
                this.widgetOptions.readonly || this.layoutNode.type === '$ref') {
                return false;
            }
            if (this.layoutNode.recursiveReference) {
                return true;
            }
            if (!this.layoutNode.arrayItem || !this.parentArray) {
                return false;
            }
            return this.parentArray.items.length - 1 <= this.parentArray.options.minItems ? false :
                this.layoutNode.arrayItemType === 'list' ? true :
                    this.layoutIndex[this.layoutIndex.length - 1] === this.parentArray.items.length - 2;
        },
        enumerable: true,
        configurable: true
    });
    MaterialDesignFrameworkComponent.prototype.ngOnInit = function () {
        this.initializeFramework();
    };
    MaterialDesignFrameworkComponent.prototype.ngOnChanges = function () {
        if (!this.frameworkInitialized) {
            this.initializeFramework();
        }
        if (this.dynamicTitle) {
            this.updateTitle();
        }
    };
    MaterialDesignFrameworkComponent.prototype.initializeFramework = function () {
        if (this.layoutNode) {
            this.options = __WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"](this.layoutNode.options || {});
            this.widgetLayoutNode = __assign({}, this.layoutNode, { options: __WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"](this.layoutNode.options || {}) });
            this.widgetOptions = this.widgetLayoutNode.options;
            this.formControl = this.jsf.getFormControl(this);
            if (Object(__WEBPACK_IMPORTED_MODULE_3__shared__["g" /* isDefined */])(this.widgetOptions.minimum) &&
                Object(__WEBPACK_IMPORTED_MODULE_3__shared__["g" /* isDefined */])(this.widgetOptions.maximum) &&
                this.widgetOptions.multipleOf >= 1) {
                this.layoutNode.type = 'range';
            }
            if (!['$ref', 'advancedfieldset', 'authfieldset', 'button', 'card',
                'checkbox', 'expansion-panel', 'help', 'message', 'msg', 'section',
                'submit', 'tabarray', 'tabs'].includes(this.layoutNode.type) &&
                /{{.+?}}/.test(this.widgetOptions.title || '')) {
                this.dynamicTitle = this.widgetOptions.title;
                this.updateTitle();
            }
            if (this.layoutNode.arrayItem && this.layoutNode.type !== '$ref') {
                this.parentArray = this.jsf.getParentNode(this);
                if (this.parentArray) {
                    this.isOrderable =
                        this.parentArray.type.slice(0, 3) !== 'tab' &&
                            this.layoutNode.arrayItemType === 'list' &&
                            !this.widgetOptions.readonly &&
                            this.parentArray.options.orderable;
                }
            }
            this.frameworkInitialized = true;
        }
        else {
            this.options = {};
        }
    };
    MaterialDesignFrameworkComponent.prototype.updateTitle = function () {
        this.widgetLayoutNode.options.title = this.jsf.parseText(this.dynamicTitle, this.jsf.getFormControlValue(this), this.jsf.getFormControlGroup(this).value, this.dataIndex[this.dataIndex.length - 1]);
    };
    MaterialDesignFrameworkComponent.prototype.removeItem = function () {
        this.jsf.removeItem(this);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MaterialDesignFrameworkComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialDesignFrameworkComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialDesignFrameworkComponent.prototype, "dataIndex", void 0);
    MaterialDesignFrameworkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'material-design-framework',
            template: "\n    <div\n      [class.array-item]=\"widgetLayoutNode?.arrayItem && widgetLayoutNode?.type !== '$ref'\"\n      [orderable]=\"isOrderable\"\n      [dataIndex]=\"dataIndex\"\n      [layoutIndex]=\"layoutIndex\"\n      [layoutNode]=\"widgetLayoutNode\">\n      <svg *ngIf=\"showRemoveButton\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        height=\"18\" width=\"18\" viewBox=\"0 0 24 24\"\n        class=\"close-button\"\n        (click)=\"removeItem()\">\n        <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z\"/>\n      </svg>\n      <select-widget-widget\n        [dataIndex]=\"dataIndex\"\n        [layoutIndex]=\"layoutIndex\"\n        [layoutNode]=\"widgetLayoutNode\"></select-widget-widget>\n    </div>\n    <div class=\"spacer\" *ngIf=\"widgetLayoutNode?.arrayItem && widgetLayoutNode?.type !== '$ref'\"></div>",
            styles: ["\n    .array-item {\n      border-radius: 2px;\n      box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),\n                  0 2px 2px  0   rgba(0,0,0,.14),\n                  0 1px 5px  0   rgba(0,0,0,.12);\n      padding: 6px;\n      position: relative;\n      transition: all 280ms cubic-bezier(.4, 0, .2, 1);\n    }\n    .close-button {\n      cursor: pointer;\n      position: absolute;\n      top: 6px;\n      right: 6px;\n      fill: rgba(0,0,0,.4);\n      visibility: hidden;\n      z-index: 500;\n    }\n    .close-button:hover { fill: rgba(0,0,0,.8); }\n    .array-item:hover > .close-button { visibility: visible; }\n    .spacer { margin: 6px 0; }\n    [draggable=true]:hover {\n      box-shadow: 0 5px 5px -3px rgba(0,0,0,.2),\n                  0 8px 10px 1px rgba(0,0,0,.14),\n                  0 3px 14px 2px rgba(0,0,0,.12);\n      cursor: move;\n      z-index: 10;\n    }\n    [draggable=true].drag-target-top {\n      box-shadow: 0 -2px 0 #000;\n      position: relative; z-index: 20;\n    }\n    [draggable=true].drag-target-bottom {\n      box-shadow: 0 2px 0 #000;\n      position: relative; z-index: 20;\n    }\n  "],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_2__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], MaterialDesignFrameworkComponent);
    return MaterialDesignFrameworkComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/material-design-framework/material-design-framework.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ANGULAR_MATERIAL_MODULES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialDesignFrameworkModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__widget_library_widget_library_module__ = __webpack_require__("../../../../../src/lib/src/widget-library/widget-library.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework__ = __webpack_require__("../../../../../src/lib/src/framework-library/framework.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_design_framework__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-design.framework.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ANGULAR_MATERIAL_MODULES = [
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatButtonToggleModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatCardModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatChipsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatExpansionModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatNativeDateModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatSliderModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatSlideToggleModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatStepperModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MatTooltipModule */],
];




var MaterialDesignFrameworkModule = (function () {
    function MaterialDesignFrameworkModule() {
    }
    MaterialDesignFrameworkModule_1 = MaterialDesignFrameworkModule;
    MaterialDesignFrameworkModule.forRoot = function () {
        return {
            ngModule: MaterialDesignFrameworkModule_1,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_6__framework__["a" /* Framework */], useClass: __WEBPACK_IMPORTED_MODULE_8__material_design_framework__["a" /* MaterialDesignFramework */], multi: true }
            ]
        };
    };
    MaterialDesignFrameworkModule = MaterialDesignFrameworkModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */]
            ].concat(ANGULAR_MATERIAL_MODULES, [
                __WEBPACK_IMPORTED_MODULE_5__widget_library_widget_library_module__["a" /* WidgetLibraryModule */]
            ]),
            declarations: __WEBPACK_IMPORTED_MODULE_7__index__["a" /* MATERIAL_FRAMEWORK_COMPONENTS */].slice(),
            exports: __WEBPACK_IMPORTED_MODULE_7__index__["a" /* MATERIAL_FRAMEWORK_COMPONENTS */].slice(),
            entryComponents: __WEBPACK_IMPORTED_MODULE_7__index__["a" /* MATERIAL_FRAMEWORK_COMPONENTS */].slice()
        })
    ], MaterialDesignFrameworkModule);
    return MaterialDesignFrameworkModule;
    var MaterialDesignFrameworkModule_1;
}());



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/material-design-framework/material-design.framework.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialDesignFramework; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework__ = __webpack_require__("../../../../../src/lib/src/framework-library/framework.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flex_layout_root_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/flex-layout-root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flex_layout_section_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/flex-layout-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_add_reference_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-add-reference.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_one_of_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-one-of.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_button_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_button_group_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-button-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_checkbox_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-checkbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_checkboxes_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-checkboxes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_chip_list_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-chip-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__material_datepicker_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-datepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_file_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__material_input_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__material_number_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-number.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_radios_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-radios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__material_select_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__material_slider_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__material_stepper_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-stepper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__material_tabs_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__material_textarea_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-textarea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__material_design_framework_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/material-design-framework/material-design-framework.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var MaterialDesignFramework = (function (_super) {
    __extends(MaterialDesignFramework, _super);
    function MaterialDesignFramework() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'material-design';
        _this.framework = __WEBPACK_IMPORTED_MODULE_21__material_design_framework_component__["a" /* MaterialDesignFrameworkComponent */];
        _this.stylesheets = [
            '//fonts.googleapis.com/icon?family=Material+Icons',
            '//fonts.googleapis.com/css?family=Roboto:300,400,500,700',
        ];
        _this.widgets = {
            'root': __WEBPACK_IMPORTED_MODULE_2__flex_layout_root_component__["a" /* FlexLayoutRootComponent */],
            'section': __WEBPACK_IMPORTED_MODULE_3__flex_layout_section_component__["a" /* FlexLayoutSectionComponent */],
            '$ref': __WEBPACK_IMPORTED_MODULE_4__material_add_reference_component__["a" /* MaterialAddReferenceComponent */],
            'button': __WEBPACK_IMPORTED_MODULE_6__material_button_component__["a" /* MaterialButtonComponent */],
            'button-group': __WEBPACK_IMPORTED_MODULE_7__material_button_group_component__["a" /* MaterialButtonGroupComponent */],
            'checkbox': __WEBPACK_IMPORTED_MODULE_8__material_checkbox_component__["a" /* MaterialCheckboxComponent */],
            'checkboxes': __WEBPACK_IMPORTED_MODULE_9__material_checkboxes_component__["a" /* MaterialCheckboxesComponent */],
            'chip-list': __WEBPACK_IMPORTED_MODULE_10__material_chip_list_component__["a" /* MaterialChipListComponent */],
            'date': __WEBPACK_IMPORTED_MODULE_11__material_datepicker_component__["a" /* MaterialDatepickerComponent */],
            'file': __WEBPACK_IMPORTED_MODULE_12__material_file_component__["a" /* MaterialFileComponent */],
            'number': __WEBPACK_IMPORTED_MODULE_14__material_number_component__["a" /* MaterialNumberComponent */],
            'one-of': __WEBPACK_IMPORTED_MODULE_5__material_one_of_component__["a" /* MaterialOneOfComponent */],
            'radios': __WEBPACK_IMPORTED_MODULE_15__material_radios_component__["a" /* MaterialRadiosComponent */],
            'select': __WEBPACK_IMPORTED_MODULE_16__material_select_component__["a" /* MaterialSelectComponent */],
            'slider': __WEBPACK_IMPORTED_MODULE_17__material_slider_component__["a" /* MaterialSliderComponent */],
            'stepper': __WEBPACK_IMPORTED_MODULE_18__material_stepper_component__["a" /* MaterialStepperComponent */],
            'tabs': __WEBPACK_IMPORTED_MODULE_19__material_tabs_component__["a" /* MaterialTabsComponent */],
            'text': __WEBPACK_IMPORTED_MODULE_13__material_input_component__["a" /* MaterialInputComponent */],
            'textarea': __WEBPACK_IMPORTED_MODULE_20__material_textarea_component__["a" /* MaterialTextareaComponent */],
            'alt-date': 'date',
            'any-of': 'one-of',
            'card': 'section',
            'color': 'text',
            'expansion-panel': 'section',
            'hidden': 'none',
            'image': 'none',
            'integer': 'number',
            'radiobuttons': 'button-group',
            'range': 'slider',
            'submit': 'button',
            'tagsinput': 'chip-list',
            'wizard': 'stepper',
        };
        return _this;
    }
    MaterialDesignFramework = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], MaterialDesignFramework);
    return MaterialDesignFramework;
}(__WEBPACK_IMPORTED_MODULE_1__framework__["a" /* Framework */]));



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/material-design-framework/material-file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialFileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialFileComponent = (function () {
    function MaterialFileComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
    }
    MaterialFileComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
    };
    MaterialFileComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MaterialFileComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialFileComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialFileComponent.prototype, "dataIndex", void 0);
    MaterialFileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'material-file-widget',
            template: "",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], MaterialFileComponent);
    return MaterialFileComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/material-design-framework/material-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialInputComponent = (function () {
    function MaterialInputComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.autoCompleteList = [];
    }
    MaterialInputComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
        if (!this.options.notitle && !this.options.description && this.options.placeholder) {
            this.options.description = this.options.placeholder;
        }
    };
    MaterialInputComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MaterialInputComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialInputComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialInputComponent.prototype, "dataIndex", void 0);
    MaterialInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'material-input-widget',
            template: "\n    <mat-form-field\n      [class]=\"options?.htmlClass || ''\"\n      [floatPlaceholder]=\"options?.floatPlaceholder || (options?.notitle ? 'never' : 'auto')\"\n      [style.width]=\"'100%'\">\n      <span matPrefix *ngIf=\"options?.prefix || options?.fieldAddonLeft\"\n        [innerHTML]=\"options?.prefix || options?.fieldAddonLeft\"></span>\n      <input matInput *ngIf=\"boundControl\"\n        [formControl]=\"formControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.list]=\"'control' + layoutNode?._id + 'Autocomplete'\"\n        [attr.maxlength]=\"options?.maxLength\"\n        [attr.minlength]=\"options?.minLength\"\n        [attr.pattern]=\"options?.pattern\"\n        [readonly]=\"options?.readonly ? 'readonly' : null\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [placeholder]=\"options?.notitle ? options?.placeholder : options?.title\"\n        [required]=\"options?.required\"\n        [style.width]=\"'100%'\"\n        [type]=\"layoutNode?.type\"\n        (blur)=\"options.showErrors = true\">\n      <input matInput *ngIf=\"!boundControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.list]=\"'control' + layoutNode?._id + 'Autocomplete'\"\n        [attr.maxlength]=\"options?.maxLength\"\n        [attr.minlength]=\"options?.minLength\"\n        [attr.pattern]=\"options?.pattern\"\n        [disabled]=\"controlDisabled\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [placeholder]=\"options?.notitle ? options?.placeholder : options?.title\"\n        [readonly]=\"options?.readonly ? 'readonly' : null\"\n        [required]=\"options?.required\"\n        [style.width]=\"'100%'\"\n        [type]=\"layoutNode?.type\"\n        [value]=\"controlValue\"\n        (input)=\"updateValue($event)\"\n        (blur)=\"options.showErrors = true\">\n      <span matSuffix *ngIf=\"options?.suffix || options?.fieldAddonRight\"\n        [innerHTML]=\"options?.suffix || options?.fieldAddonRight\"></span>\n      <mat-hint *ngIf=\"options?.description && (!options?.showErrors || !options?.errorMessage)\"\n        align=\"end\" [innerHTML]=\"options?.description\"></mat-hint>\n      <mat-autocomplete *ngIf=\"options?.typeahead?.source\">\n        <mat-option *ngFor=\"let word of options?.typeahead?.source\"\n          [value]=\"word\">{{word}}</mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n    <mat-error *ngIf=\"options?.showErrors && options?.errorMessage\"\n      [innerHTML]=\"options?.errorMessage\"></mat-error>",
            styles: ["\n    mat-error { font-size: 75%; margin-top: -1rem; margin-bottom: 0.5rem; }\n    ::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex\n      .mat-form-field-infix { width: initial; }\n  "],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], MaterialInputComponent);
    return MaterialInputComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/material-design-framework/material-number.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialNumberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialNumberComponent = (function () {
    function MaterialNumberComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.allowNegative = true;
        this.allowDecimal = true;
        this.allowExponents = false;
        this.lastValidNumber = '';
    }
    MaterialNumberComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
        if (this.layoutNode.dataType === 'integer') {
            this.allowDecimal = false;
        }
        if (!this.options.notitle && !this.options.description && this.options.placeholder) {
            this.options.description = this.options.placeholder;
        }
    };
    MaterialNumberComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MaterialNumberComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialNumberComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialNumberComponent.prototype, "dataIndex", void 0);
    MaterialNumberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'material-number-widget',
            template: "\n    <mat-form-field\n      [class]=\"options?.htmlClass || ''\"\n      [floatPlaceholder]=\"options?.floatPlaceholder || (options?.notitle ? 'never' : 'auto')\"\n      [style.width]=\"'100%'\">\n      <span matPrefix *ngIf=\"options?.prefix || options?.fieldAddonLeft\"\n        [innerHTML]=\"options?.prefix || options?.fieldAddonLeft\"></span>\n      <input matInput *ngIf=\"boundControl\"\n        [formControl]=\"formControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.max]=\"options?.maximum\"\n        [attr.min]=\"options?.minimum\"\n        [attr.step]=\"options?.multipleOf || options?.step || 'any'\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [placeholder]=\"options?.notitle ? options?.placeholder : options?.title\"\n        [readonly]=\"options?.readonly ? 'readonly' : null\"\n        [required]=\"options?.required\"\n        [style.width]=\"'100%'\"\n        [type]=\"'number'\"\n        (blur)=\"options.showErrors = true\">\n      <input matInput *ngIf=\"!boundControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.max]=\"options?.maximum\"\n        [attr.min]=\"options?.minimum\"\n        [attr.step]=\"options?.multipleOf || options?.step || 'any'\"\n        [disabled]=\"controlDisabled\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [placeholder]=\"options?.notitle ? options?.placeholder : options?.title\"\n        [readonly]=\"options?.readonly ? 'readonly' : null\"\n        [required]=\"options?.required\"\n        [style.width]=\"'100%'\"\n        [type]=\"'number'\"\n        [value]=\"controlValue\"\n        (input)=\"updateValue($event)\"\n        (blur)=\"options.showErrors = true\">\n      <span matSuffix *ngIf=\"options?.suffix || options?.fieldAddonRight\"\n        [innerHTML]=\"options?.suffix || options?.fieldAddonRight\"></span>\n      <mat-hint *ngIf=\"layoutNode?.type === 'range'\" align=\"start\"\n        [innerHTML]=\"controlValue\"></mat-hint>\n      <mat-hint *ngIf=\"options?.description && (!options?.showErrors || !options?.errorMessage)\"\n        align=\"end\" [innerHTML]=\"options?.description\"></mat-hint>\n    </mat-form-field>\n    <mat-error *ngIf=\"options?.showErrors && options?.errorMessage\"\n      [innerHTML]=\"options?.errorMessage\"></mat-error>",
            styles: ["\n    mat-error { font-size: 75%; margin-top: -1rem; margin-bottom: 0.5rem; }\n    ::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex\n      .mat-form-field-infix { width: initial; }\n  "],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], MaterialNumberComponent);
    return MaterialNumberComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/material-design-framework/material-one-of.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialOneOfComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialOneOfComponent = (function () {
    function MaterialOneOfComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
    }
    MaterialOneOfComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
    };
    MaterialOneOfComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MaterialOneOfComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialOneOfComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialOneOfComponent.prototype, "dataIndex", void 0);
    MaterialOneOfComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'material-one-of-widget',
            template: "",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], MaterialOneOfComponent);
    return MaterialOneOfComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/material-design-framework/material-radios.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialRadiosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/lib/src/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MaterialRadiosComponent = (function () {
    function MaterialRadiosComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.flexDirection = 'column';
        this.radiosList = [];
    }
    MaterialRadiosComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        if (this.layoutNode.type === 'radios-inline') {
            this.flexDirection = 'row';
        }
        this.radiosList = Object(__WEBPACK_IMPORTED_MODULE_2__shared__["c" /* buildTitleMap */])(this.options.titleMap || this.options.enumNames, this.options.enum, true);
        this.jsf.initializeControl(this, !this.options.readonly);
    };
    MaterialRadiosComponent.prototype.updateValue = function (value) {
        this.options.showErrors = true;
        this.jsf.updateValue(this, value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MaterialRadiosComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialRadiosComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialRadiosComponent.prototype, "dataIndex", void 0);
    MaterialRadiosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'material-radios-widget',
            template: "\n    <div>\n      <div *ngIf=\"options?.title\">\n        <label\n          [attr.for]=\"'control' + layoutNode?._id\"\n          [class]=\"options?.labelHtmlClass || ''\"\n          [style.display]=\"options?.notitle ? 'none' : ''\"\n          [innerHTML]=\"options?.title\"></label>\n      </div>\n      <mat-radio-group *ngIf=\"boundControl\"\n        [formControl]=\"formControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n        [attr.required]=\"options?.required\"\n        [style.flex-direction]=\"flexDirection\"\n        [name]=\"controlName\"\n        (blur)=\"options.showErrors = true\">\n        <mat-radio-button *ngFor=\"let radioItem of radiosList\"\n          [id]=\"'control' + layoutNode?._id + '/' + radioItem?.name\"\n          [value]=\"radioItem?.value\">\n          <span [innerHTML]=\"radioItem?.name\"></span>\n        </mat-radio-button>\n      </mat-radio-group>\n      <mat-radio-group *ngIf=\"!boundControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n        [attr.required]=\"options?.required\"\n        [style.flex-direction]=\"flexDirection\"\n        [disabled]=\"controlDisabled || options?.readonly\"\n        [name]=\"controlName\"\n        [value]=\"controlValue\">\n        <mat-radio-button *ngFor=\"let radioItem of radiosList\"\n          [id]=\"'control' + layoutNode?._id + '/' + radioItem?.name\"\n          [value]=\"radioItem?.value\"\n          (click)=\"updateValue(radioItem?.value)\">\n          <span [innerHTML]=\"radioItem?.name\"></span>\n        </mat-radio-button>\n      </mat-radio-group>\n      <mat-error *ngIf=\"options?.showErrors && options?.errorMessage\"\n        [innerHTML]=\"options?.errorMessage\"></mat-error>\n    </div>",
            styles: ["\n    mat-radio-group { display: inline-flex; }\n    mat-radio-button { margin: 2px; }\n    mat-error { font-size: 75%; }\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], MaterialRadiosComponent);
    return MaterialRadiosComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/material-design-framework/material-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/lib/src/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MaterialSelectComponent = (function () {
    function MaterialSelectComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.selectList = [];
        this.isArray = __WEBPACK_IMPORTED_MODULE_2__shared__["f" /* isArray */];
    }
    MaterialSelectComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.selectList = Object(__WEBPACK_IMPORTED_MODULE_2__shared__["c" /* buildTitleMap */])(this.options.titleMap || this.options.enumNames, this.options.enum, !!this.options.required, !!this.options.flatList);
        this.jsf.initializeControl(this, !this.options.readonly);
        if (!this.options.notitle && !this.options.description && this.options.placeholder) {
            this.options.description = this.options.placeholder;
        }
    };
    MaterialSelectComponent.prototype.updateValue = function (event) {
        this.options.showErrors = true;
        this.jsf.updateValue(this, event.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MaterialSelectComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialSelectComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialSelectComponent.prototype, "dataIndex", void 0);
    MaterialSelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'material-select-widget',
            template: "\n    <mat-form-field\n      [class]=\"options?.htmlClass || ''\"\n      [floatPlaceholder]=\"options?.floatPlaceholder || (options?.notitle ? 'never' : 'auto')\"\n      [style.width]=\"'100%'\">\n      <span matPrefix *ngIf=\"options?.prefix || options?.fieldAddonLeft\"\n        [innerHTML]=\"options?.prefix || options?.fieldAddonLeft\"></span>\n      <mat-select *ngIf=\"boundControl\"\n        [formControl]=\"formControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.name]=\"controlName\"\n        [id]=\"'control' + layoutNode?._id\"\n        [multiple]=\"options?.multiple\"\n        [placeholder]=\"options?.notitle ? options?.placeholder : options?.title\"\n        [required]=\"options?.required\"\n        [style.width]=\"'100%'\"\n        (blur)=\"options.showErrors = true\">\n        <ng-template ngFor let-selectItem [ngForOf]=\"selectList\">\n          <mat-option *ngIf=\"!isArray(selectItem?.items)\"\n            [value]=\"selectItem?.value\">\n            <span [innerHTML]=\"selectItem?.name\"></span>\n          </mat-option>\n          <mat-optgroup *ngIf=\"isArray(selectItem?.items)\"\n            [label]=\"selectItem?.group\">\n            <mat-option *ngFor=\"let subItem of selectItem.items\"\n              [value]=\"subItem?.value\">\n              <span [innerHTML]=\"subItem?.name\"></span>\n            </mat-option>\n          </mat-optgroup>\n        </ng-template>\n      </mat-select>\n      <mat-select *ngIf=\"!boundControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.name]=\"controlName\"\n        [disabled]=\"controlDisabled || options?.readonly\"\n        [id]=\"'control' + layoutNode?._id\"\n        [multiple]=\"options?.multiple\"\n        [placeholder]=\"options?.notitle ? options?.placeholder : options?.title\"\n        [required]=\"options?.required\"\n        [style.width]=\"'100%'\"\n        [value]=\"controlValue\"\n        (blur)=\"options.showErrors = true\"\n        (change)=\"updateValue($event)\">\n        <ng-template ngFor let-selectItem [ngForOf]=\"selectList\">\n          <mat-option *ngIf=\"!isArray(selectItem?.items)\"\n            [attr.selected]=\"selectItem?.value === controlValue\"\n            [value]=\"selectItem?.value\">\n            <span [innerHTML]=\"selectItem?.name\"></span>\n          </mat-option>\n          <mat-optgroup *ngIf=\"isArray(selectItem?.items)\"\n            [label]=\"selectItem?.group\">\n            <mat-option *ngFor=\"let subItem of selectItem.items\"\n              [attr.selected]=\"subItem?.value === controlValue\"\n              [value]=\"subItem?.value\">\n              <span [innerHTML]=\"subItem?.name\"></span>\n            </mat-option>\n          </mat-optgroup>\n        </ng-template>\n      </mat-select>\n      <span matSuffix *ngIf=\"options?.suffix || options?.fieldAddonRight\"\n        [innerHTML]=\"options?.suffix || options?.fieldAddonRight\"></span>\n      <mat-hint *ngIf=\"options?.description && (!options?.showErrors || !options?.errorMessage)\"\n        align=\"end\" [innerHTML]=\"options?.description\"></mat-hint>\n    </mat-form-field>\n    <mat-error *ngIf=\"options?.showErrors && options?.errorMessage\"\n      [innerHTML]=\"options?.errorMessage\"></mat-error>",
            styles: ["\n    mat-error { font-size: 75%; margin-top: -1rem; margin-bottom: 0.5rem; }\n    ::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex\n      .mat-form-field-infix { width: initial; }\n  "],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], MaterialSelectComponent);
    return MaterialSelectComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/material-design-framework/material-slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialSliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialSliderComponent = (function () {
    function MaterialSliderComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.allowNegative = true;
        this.allowDecimal = true;
        this.allowExponents = false;
        this.lastValidNumber = '';
    }
    MaterialSliderComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this, !this.options.readonly);
    };
    MaterialSliderComponent.prototype.updateValue = function (event) {
        this.options.showErrors = true;
        this.jsf.updateValue(this, event.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MaterialSliderComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialSliderComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialSliderComponent.prototype, "dataIndex", void 0);
    MaterialSliderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'material-slider-widget',
            template: "\n    <mat-slider thumbLabel *ngIf=\"boundControl\"\n      [formControl]=\"formControl\"\n      [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n      [id]=\"'control' + layoutNode?._id\"\n      [max]=\"options?.maximum\"\n      [min]=\"options?.minimum\"\n      [step]=\"options?.multipleOf || options?.step || 'any'\"\n      [style.width]=\"'100%'\"\n      (blur)=\"options.showErrors = true\"></mat-slider>\n    <mat-slider thumbLabel *ngIf=\"!boundControl\"\n      [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n      [disabled]=\"controlDisabled || options?.readonly\"\n      [id]=\"'control' + layoutNode?._id\"\n      [max]=\"options?.maximum\"\n      [min]=\"options?.minimum\"\n      [step]=\"options?.multipleOf || options?.step || 'any'\"\n      [style.width]=\"'100%'\"\n      [value]=\"controlValue\"\n      (blur)=\"options.showErrors = true\"\n      (change)=\"updateValue($event)\"></mat-slider>\n    <mat-error *ngIf=\"options?.showErrors && options?.errorMessage\"\n      [innerHTML]=\"options?.errorMessage\"></mat-error>",
            styles: [" mat-error { font-size: 75%; } "],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], MaterialSliderComponent);
    return MaterialSliderComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/material-design-framework/material-stepper.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialStepperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialStepperComponent = (function () {
    function MaterialStepperComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
    }
    MaterialStepperComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
    };
    MaterialStepperComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MaterialStepperComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialStepperComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialStepperComponent.prototype, "dataIndex", void 0);
    MaterialStepperComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'material-stepper-widget',
            template: "",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], MaterialStepperComponent);
    return MaterialStepperComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/material-design-framework/material-tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialTabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialTabsComponent = (function () {
    function MaterialTabsComponent(jsf) {
        this.jsf = jsf;
        this.selectedItem = 0;
        this.showAddTab = true;
    }
    MaterialTabsComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.itemCount = this.layoutNode.items.length - 1;
        this.updateControl();
    };
    MaterialTabsComponent.prototype.select = function (index) {
        if (this.layoutNode.items[index].type === '$ref') {
            this.jsf.addItem({
                layoutNode: this.layoutNode.items[index],
                layoutIndex: this.layoutIndex.concat(index),
                dataIndex: this.dataIndex.concat(index)
            });
            this.updateControl();
        }
        ;
        this.selectedItem = index;
    };
    MaterialTabsComponent.prototype.updateControl = function () {
        this.itemCount = this.layoutNode.items.length - 1;
        var lastItem = this.layoutNode.items[this.layoutNode.items.length - 1];
        this.showAddTab = lastItem.type === '$ref' &&
            this.itemCount < (lastItem.options.maxItems || 1000);
    };
    MaterialTabsComponent.prototype.setTabTitle = function (item, index) {
        return this.jsf.setArrayItemTitle(this, item, index);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MaterialTabsComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialTabsComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialTabsComponent.prototype, "dataIndex", void 0);
    MaterialTabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'material-tabs-widget',
            template: "\n    <nav mat-tab-nav-bar\n      [attr.aria-label]=\"options?.label || options?.title || ''\"\n      [style.width]=\"'100%'\">\n        <a mat-tab-link *ngFor=\"let item of layoutNode?.items; let i = index\"\n          [active]=\"selectedItem === i\"\n          (click)=\"select(i)\">\n          <span *ngIf=\"showAddTab || item.type !== '$ref'\"\n            [innerHTML]=\"setTabTitle(item, i)\"></span>\n        </a>\n    </nav>\n    <div *ngFor=\"let layoutItem of layoutNode?.items; let i = index\"\n      [class]=\"options?.htmlClass || ''\">\n      <select-framework-widget *ngIf=\"selectedItem === i\"\n        [class]=\"(options?.fieldHtmlClass || '') + ' ' + (options?.activeClass || '') + ' ' + (options?.style?.selected || '')\"\n        [dataIndex]=\"layoutNode?.dataType === 'array' ? (dataIndex || []).concat(i) : dataIndex\"\n        [layoutIndex]=\"(layoutIndex || []).concat(i)\"\n        [layoutNode]=\"layoutItem\"></select-framework-widget>\n    </div>",
            styles: [" a { cursor: pointer; } "],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], MaterialTabsComponent);
    return MaterialTabsComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/material-design-framework/material-textarea.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialTextareaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialTextareaComponent = (function () {
    function MaterialTextareaComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
    }
    MaterialTextareaComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
        if (!this.options.notitle && !this.options.description && this.options.placeholder) {
            this.options.description = this.options.placeholder;
        }
    };
    MaterialTextareaComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MaterialTextareaComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialTextareaComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MaterialTextareaComponent.prototype, "dataIndex", void 0);
    MaterialTextareaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'material-textarea-widget',
            template: "\n    <mat-form-field\n      [class]=\"options?.htmlClass || ''\"\n      [floatPlaceholder]=\"options?.floatPlaceholder || (options?.notitle ? 'never' : 'auto')\"\n      [style.width]=\"'100%'\">\n      <span matPrefix *ngIf=\"options?.prefix || options?.fieldAddonLeft\"\n        [innerHTML]=\"options?.prefix || options?.fieldAddonLeft\"></span>\n      <textarea matInput *ngIf=\"boundControl\"\n        [formControl]=\"formControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.list]=\"'control' + layoutNode?._id + 'Autocomplete'\"\n        [attr.maxlength]=\"options?.maxLength\"\n        [attr.minlength]=\"options?.minLength\"\n        [attr.pattern]=\"options?.pattern\"\n        [required]=\"options?.required\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [placeholder]=\"options?.notitle ? options?.placeholder : options?.title\"\n        [readonly]=\"options?.readonly ? 'readonly' : null\"\n        [style.width]=\"'100%'\"\n        (blur)=\"options.showErrors = true\"></textarea>\n      <textarea matInput *ngIf=\"!boundControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.list]=\"'control' + layoutNode?._id + 'Autocomplete'\"\n        [attr.maxlength]=\"options?.maxLength\"\n        [attr.minlength]=\"options?.minLength\"\n        [attr.pattern]=\"options?.pattern\"\n        [required]=\"options?.required\"\n        [disabled]=\"controlDisabled\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [placeholder]=\"options?.notitle ? options?.placeholder : options?.title\"\n        [readonly]=\"options?.readonly ? 'readonly' : null\"\n        [style.width]=\"'100%'\"\n        [value]=\"controlValue\"\n        (input)=\"updateValue($event)\"\n        (blur)=\"options.showErrors = true\"></textarea>\n      <span matSuffix *ngIf=\"options?.suffix || options?.fieldAddonRight\"\n        [innerHTML]=\"options?.suffix || options?.fieldAddonRight\"></span>\n      <mat-hint *ngIf=\"options?.description && (!options?.showErrors || !options?.errorMessage)\"\n        align=\"end\" [innerHTML]=\"options?.description\"></mat-hint>\n    </mat-form-field>\n    <mat-error *ngIf=\"options?.showErrors && options?.errorMessage\"\n      [innerHTML]=\"options?.errorMessage\"></mat-error>",
            styles: ["\n    mat-error { font-size: 75%; margin-top: -1rem; margin-bottom: 0.5rem; }\n    ::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex\n      .mat-form-field-infix { width: initial; }\n  "],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], MaterialTextareaComponent);
    return MaterialTextareaComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/no-framework/no-framework.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoFrameworkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoFrameworkComponent = (function () {
    function NoFrameworkComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NoFrameworkComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], NoFrameworkComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], NoFrameworkComponent.prototype, "dataIndex", void 0);
    NoFrameworkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'no-framework',
            template: "\n    <select-widget-widget\n      [dataIndex]=\"dataIndex\"\n      [layoutIndex]=\"layoutIndex\"\n      [layoutNode]=\"layoutNode\"></select-widget-widget>",
        })
    ], NoFrameworkComponent);
    return NoFrameworkComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/no-framework/no-framework.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoFrameworkModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widget_library_widget_library_module__ = __webpack_require__("../../../../../src/lib/src/widget-library/widget-library.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework__ = __webpack_require__("../../../../../src/lib/src/framework-library/framework.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__no_framework_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/no-framework/no-framework.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__no_framework__ = __webpack_require__("../../../../../src/lib/src/framework-library/no-framework/no.framework.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NoFrameworkModule = (function () {
    function NoFrameworkModule() {
    }
    NoFrameworkModule_1 = NoFrameworkModule;
    NoFrameworkModule.forRoot = function () {
        return {
            ngModule: NoFrameworkModule_1,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_3__framework__["a" /* Framework */], useClass: __WEBPACK_IMPORTED_MODULE_5__no_framework__["a" /* NoFramework */], multi: true }
            ]
        };
    };
    NoFrameworkModule = NoFrameworkModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__widget_library_widget_library_module__["a" /* WidgetLibraryModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__no_framework_component__["a" /* NoFrameworkComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__no_framework_component__["a" /* NoFrameworkComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__no_framework_component__["a" /* NoFrameworkComponent */]]
        })
    ], NoFrameworkModule);
    return NoFrameworkModule;
    var NoFrameworkModule_1;
}());



/***/ }),

/***/ "../../../../../src/lib/src/framework-library/no-framework/no.framework.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoFramework; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework__ = __webpack_require__("../../../../../src/lib/src/framework-library/framework.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__no_framework_component__ = __webpack_require__("../../../../../src/lib/src/framework-library/no-framework/no-framework.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NoFramework = (function (_super) {
    __extends(NoFramework, _super);
    function NoFramework() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'no-framework';
        _this.framework = __WEBPACK_IMPORTED_MODULE_2__no_framework_component__["a" /* NoFrameworkComponent */];
        return _this;
    }
    NoFramework = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], NoFramework);
    return NoFramework;
}(__WEBPACK_IMPORTED_MODULE_1__framework__["a" /* Framework */]));



/***/ }),

/***/ "../../../../../src/lib/src/json-schema-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export JSON_SCHEMA_FORM_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonSchemaFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__framework_library_framework_library_service__ = __webpack_require__("../../../../../src/lib/src/framework-library/framework-library.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__widget_library_widget_library_service__ = __webpack_require__("../../../../../src/lib/src/widget-library/widget-library.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_convert_schema_to_draft6_function__ = __webpack_require__("../../../../../src/lib/src/shared/convert-schema-to-draft6.function.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_json_schema_functions__ = __webpack_require__("../../../../../src/lib/src/shared/json-schema.functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__ = __webpack_require__("../../../../../src/lib/src/shared/validator.functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_utility_functions__ = __webpack_require__("../../../../../src/lib/src/shared/utility.functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_jsonpointer_functions__ = __webpack_require__("../../../../../src/lib/src/shared/jsonpointer.functions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var JSON_SCHEMA_FORM_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* forwardRef */])(function () { return JsonSchemaFormComponent; }),
    multi: true,
};
var JsonSchemaFormComponent = (function () {
    function JsonSchemaFormComponent(changeDetector, frameworkLibrary, widgetLibrary, jsf, sanitizer) {
        this.changeDetector = changeDetector;
        this.frameworkLibrary = frameworkLibrary;
        this.widgetLibrary = widgetLibrary;
        this.jsf = jsf;
        this.sanitizer = sanitizer;
        this.formValueSubscription = null;
        this.formInitialized = false;
        this.objectWrap = false;
        this.previousInputs = {
            schema: null, layout: null, data: null, options: null, framework: null,
            widgets: null, form: null, model: null, JSONSchema: null, UISchema: null,
            formData: null, loadExternalAssets: null, debug: null,
        };
        this.onChanges = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.isValid = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.validationErrors = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.formSchema = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.formLayout = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.modelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.formDataChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.ngModelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    Object.defineProperty(JsonSchemaFormComponent.prototype, "value", {
        get: function () {
            return this.objectWrap ? this.jsf.data['1'] : this.jsf.data;
        },
        set: function (value) {
            this.setFormValues(value, false);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(JsonSchemaFormComponent.prototype, "stylesheets", {
        get: function () {
            var stylesheets = this.frameworkLibrary.getFrameworkStylesheets();
            var load = this.sanitizer.bypassSecurityTrustResourceUrl;
            return stylesheets.map(function (stylesheet) { return load(stylesheet); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JsonSchemaFormComponent.prototype, "scripts", {
        get: function () {
            var scripts = this.frameworkLibrary.getFrameworkScripts();
            var load = this.sanitizer.bypassSecurityTrustResourceUrl;
            return scripts.map(function (script) { return load(script); });
        },
        enumerable: true,
        configurable: true
    });
    JsonSchemaFormComponent.prototype.ngOnInit = function () {
        this.updateForm();
    };
    JsonSchemaFormComponent.prototype.ngOnChanges = function () {
        this.updateForm();
    };
    JsonSchemaFormComponent.prototype.writeValue = function (value) {
        this.setFormValues(value, false);
        if (!this.formValuesInput) {
            this.formValuesInput = 'ngModel';
        }
    };
    JsonSchemaFormComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    JsonSchemaFormComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    JsonSchemaFormComponent.prototype.setDisabledState = function (isDisabled) {
        if (this.jsf.formOptions.formDisabled !== !!isDisabled) {
            this.jsf.formOptions.formDisabled = !!isDisabled;
            this.initializeForm();
        }
    };
    JsonSchemaFormComponent.prototype.updateForm = function () {
        var _this = this;
        if (!this.formInitialized || !this.formValuesInput ||
            (this.language && this.language !== this.jsf.language)) {
            this.initializeForm();
        }
        else {
            if (this.language && this.language !== this.jsf.language) {
                this.jsf.setLanguage(this.language);
            }
            var changedInput = Object.keys(this.previousInputs)
                .filter(function (input) { return _this.previousInputs[input] !== _this[input]; });
            var resetFirst = true;
            if (changedInput.length === 1 && changedInput[0] === 'form' &&
                this.formValuesInput.startsWith('form.')) {
                changedInput = Object.keys(this.previousInputs.form || {})
                    .filter(function (key) { return !__WEBPACK_IMPORTED_MODULE_3_lodash__["isEqual"](_this.previousInputs.form[key], _this.form[key]); })
                    .map(function (key) { return "form." + key; });
                resetFirst = false;
            }
            if (changedInput.length === 1 && changedInput[0] === this.formValuesInput) {
                if (this.formValuesInput.indexOf('.') === -1) {
                    this.setFormValues(this[this.formValuesInput], resetFirst);
                }
                else {
                    var _a = this.formValuesInput.split('.'), input = _a[0], key = _a[1];
                    this.setFormValues(this[input][key], resetFirst);
                }
            }
            else if (changedInput.length) {
                this.initializeForm();
                if (this.onChange) {
                    this.onChange(this.jsf.formValues);
                }
                if (this.onTouched) {
                    this.onTouched(this.jsf.formValues);
                }
            }
            Object.keys(this.previousInputs)
                .filter(function (input) { return _this.previousInputs[input] !== _this[input]; })
                .forEach(function (input) { return _this.previousInputs[input] = _this[input]; });
        }
    };
    JsonSchemaFormComponent.prototype.setFormValues = function (formValues, resetFirst) {
        if (resetFirst === void 0) { resetFirst = true; }
        if (formValues) {
            var newFormValues = this.objectWrap ? formValues['1'] : formValues;
            if (!this.jsf.formGroup) {
                this.jsf.formValues = formValues;
                this.activateForm();
            }
            else if (resetFirst) {
                this.jsf.formGroup.reset();
            }
            if (this.jsf.formGroup) {
                this.jsf.formGroup.patchValue(newFormValues);
            }
            if (this.onChange) {
                this.onChange(newFormValues);
            }
            if (this.onTouched) {
                this.onTouched(newFormValues);
            }
        }
        else {
            this.jsf.formGroup.reset();
        }
    };
    JsonSchemaFormComponent.prototype.submitForm = function () {
        var validData = this.jsf.validData;
        this.onSubmit.emit(this.objectWrap ? validData['1'] : validData);
    };
    JsonSchemaFormComponent.prototype.initializeForm = function () {
        if (this.schema || this.layout || this.data || this.form || this.model ||
            this.JSONSchema || this.UISchema || this.formData || this.ngModel ||
            this.jsf.data) {
            this.jsf.resetAllValues();
            this.initializeOptions();
            this.initializeSchema();
            this.initializeLayout();
            this.initializeData();
            this.activateForm();
            if (this.debug || this.jsf.formOptions.debug) {
                var vars = [];
                this.debugOutput = vars.map(function (v) { return JSON.stringify(v, null, 2); }).join('\n');
            }
            this.formInitialized = true;
        }
    };
    JsonSchemaFormComponent.prototype.initializeOptions = function () {
        if (this.language && this.language !== this.jsf.language) {
            this.jsf.setLanguage(this.language);
        }
        this.jsf.setOptions({ debug: !!this.debug });
        var loadExternalAssets = this.loadExternalAssets || false;
        var framework = this.framework || 'default';
        if (Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["o" /* isObject */])(this.options)) {
            this.jsf.setOptions(this.options);
            loadExternalAssets = this.options.loadExternalAssets || loadExternalAssets;
            framework = this.options.framework || framework;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["o" /* isObject */])(this.form) && Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["o" /* isObject */])(this.form.options)) {
            this.jsf.setOptions(this.form.options);
            loadExternalAssets = this.form.options.loadExternalAssets || loadExternalAssets;
            framework = this.form.options.framework || framework;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["o" /* isObject */])(this.widgets)) {
            this.jsf.setOptions({ widgets: this.widgets });
        }
        this.frameworkLibrary.setLoadExternalAssets(loadExternalAssets);
        this.frameworkLibrary.setFramework(framework);
        this.jsf.framework = this.frameworkLibrary.getFramework();
        if (Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["o" /* isObject */])(this.jsf.formOptions.widgets)) {
            for (var _i = 0, _a = Object.keys(this.jsf.formOptions.widgets); _i < _a.length; _i++) {
                var widget = _a[_i];
                this.widgetLibrary.registerWidget(widget, this.jsf.formOptions.widgets[widget]);
            }
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["o" /* isObject */])(this.form) && Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["o" /* isObject */])(this.form.tpldata)) {
            this.jsf.setTpldata(this.form.tpldata);
        }
    };
    JsonSchemaFormComponent.prototype.initializeSchema = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["o" /* isObject */])(this.schema)) {
            this.jsf.AngularSchemaFormCompatibility = true;
            this.jsf.schema = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](this.schema);
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_10__shared_utility_functions__["g" /* hasOwn */])(this.form, 'schema') && Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["o" /* isObject */])(this.form.schema)) {
            this.jsf.schema = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](this.form.schema);
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["o" /* isObject */])(this.JSONSchema)) {
            this.jsf.ReactJsonSchemaFormCompatibility = true;
            this.jsf.schema = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](this.JSONSchema);
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_10__shared_utility_functions__["g" /* hasOwn */])(this.form, 'JSONSchema') && Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["o" /* isObject */])(this.form.JSONSchema)) {
            this.jsf.ReactJsonSchemaFormCompatibility = true;
            this.jsf.schema = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](this.form.JSONSchema);
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_10__shared_utility_functions__["g" /* hasOwn */])(this.form, 'properties') && Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["o" /* isObject */])(this.form.properties)) {
            this.jsf.schema = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](this.form);
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["o" /* isObject */])(this.form)) {
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["l" /* isEmpty */])(this.jsf.schema)) {
            if (Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["g" /* inArray */])('object', this.jsf.schema.type)) {
                this.jsf.schema.type = 'object';
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_10__shared_utility_functions__["g" /* hasOwn */])(this.jsf.schema, 'type') && this.jsf.schema.type !== 'object') {
                this.jsf.schema = {
                    'type': 'object',
                    'properties': { 1: this.jsf.schema }
                };
                this.objectWrap = true;
            }
            else if (!Object(__WEBPACK_IMPORTED_MODULE_10__shared_utility_functions__["g" /* hasOwn */])(this.jsf.schema, 'type')) {
                if (Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["o" /* isObject */])(this.jsf.schema.properties) ||
                    Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["o" /* isObject */])(this.jsf.schema.patternProperties) ||
                    Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["o" /* isObject */])(this.jsf.schema.additionalProperties)) {
                    this.jsf.schema.type = 'object';
                }
                else {
                    this.jsf.JsonFormCompatibility = true;
                    this.jsf.schema = {
                        'type': 'object',
                        'properties': this.jsf.schema
                    };
                }
            }
            this.jsf.schema = Object(__WEBPACK_IMPORTED_MODULE_7__shared_convert_schema_to_draft6_function__["a" /* convertSchemaToDraft6 */])(this.jsf.schema);
            this.jsf.compileAjvSchema();
            this.jsf.schema = Object(__WEBPACK_IMPORTED_MODULE_8__shared_json_schema_functions__["i" /* resolveSchemaReferences */])(this.jsf.schema, this.jsf.schemaRefLibrary, this.jsf.schemaRecursiveRefMap, this.jsf.dataRecursiveRefMap, this.jsf.arrayMap);
            if (Object(__WEBPACK_IMPORTED_MODULE_10__shared_utility_functions__["g" /* hasOwn */])(this.jsf.schemaRefLibrary, '')) {
                this.jsf.hasRootReference = true;
            }
        }
    };
    JsonSchemaFormComponent.prototype.initializeData = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["f" /* hasValue */])(this.data)) {
            this.jsf.formValues = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](this.data);
            this.formValuesInput = 'data';
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["f" /* hasValue */])(this.model)) {
            this.jsf.AngularSchemaFormCompatibility = true;
            this.jsf.formValues = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](this.model);
            this.formValuesInput = 'model';
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["f" /* hasValue */])(this.ngModel)) {
            this.jsf.AngularSchemaFormCompatibility = true;
            this.jsf.formValues = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](this.ngModel);
            this.formValuesInput = 'ngModel';
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["o" /* isObject */])(this.form) && Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["f" /* hasValue */])(this.form.value)) {
            this.jsf.JsonFormCompatibility = true;
            this.jsf.formValues = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](this.form.value);
            this.formValuesInput = 'form.value';
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["o" /* isObject */])(this.form) && Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["f" /* hasValue */])(this.form.data)) {
            this.jsf.formValues = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](this.form.data);
            this.formValuesInput = 'form.data';
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["f" /* hasValue */])(this.formData)) {
            this.jsf.ReactJsonSchemaFormCompatibility = true;
            this.formValuesInput = 'formData';
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_10__shared_utility_functions__["g" /* hasOwn */])(this.form, 'formData') && Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["f" /* hasValue */])(this.form.formData)) {
            this.jsf.ReactJsonSchemaFormCompatibility = true;
            this.jsf.formValues = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](this.form.formData);
            this.formValuesInput = 'form.formData';
        }
        else {
            this.formValuesInput = null;
        }
    };
    JsonSchemaFormComponent.prototype.initializeLayout = function () {
        var _this = this;
        var fixJsonFormOptions = function (layout) {
            if (Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["o" /* isObject */])(layout) || Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["h" /* isArray */])(layout)) {
                Object(__WEBPACK_IMPORTED_MODULE_10__shared_utility_functions__["e" /* forEach */])(layout, function (value, key) {
                    if (Object(__WEBPACK_IMPORTED_MODULE_10__shared_utility_functions__["g" /* hasOwn */])(value, 'options') && Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["o" /* isObject */])(value.options)) {
                        value.titleMap = value.options;
                        delete value.options;
                    }
                }, 'top-down');
            }
            return layout;
        };
        if (Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["h" /* isArray */])(this.layout)) {
            this.jsf.layout = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](this.layout);
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["h" /* isArray */])(this.form)) {
            this.jsf.AngularSchemaFormCompatibility = true;
            this.jsf.layout = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](this.form);
        }
        else if (this.form && Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["h" /* isArray */])(this.form.form)) {
            this.jsf.JsonFormCompatibility = true;
            this.jsf.layout = fixJsonFormOptions(__WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](this.form.form));
        }
        else if (this.form && Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["h" /* isArray */])(this.form.layout)) {
            this.jsf.layout = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](this.form.layout);
        }
        else {
            this.jsf.layout = ['*'];
        }
        var alternateLayout = null;
        if (Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["o" /* isObject */])(this.UISchema)) {
            this.jsf.ReactJsonSchemaFormCompatibility = true;
            alternateLayout = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](this.UISchema);
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_10__shared_utility_functions__["g" /* hasOwn */])(this.form, 'UISchema')) {
            this.jsf.ReactJsonSchemaFormCompatibility = true;
            alternateLayout = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](this.form.UISchema);
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_10__shared_utility_functions__["g" /* hasOwn */])(this.form, 'uiSchema')) {
            this.jsf.ReactJsonSchemaFormCompatibility = true;
            alternateLayout = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](this.form.uiSchema);
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_10__shared_utility_functions__["g" /* hasOwn */])(this.form, 'customFormItems')) {
            this.jsf.JsonFormCompatibility = true;
            alternateLayout = fixJsonFormOptions(__WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](this.form.customFormItems));
        }
        if (alternateLayout) {
            __WEBPACK_IMPORTED_MODULE_11__shared_jsonpointer_functions__["a" /* JsonPointer */].forEachDeep(alternateLayout, function (value, pointer) {
                var schemaPointer = pointer
                    .replace(/\//g, '/properties/')
                    .replace(/\/properties\/items\/properties\//g, '/items/properties/')
                    .replace(/\/properties\/titleMap\/properties\//g, '/titleMap/properties/');
                if (Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["f" /* hasValue */])(value) && Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["f" /* hasValue */])(pointer)) {
                    var key = __WEBPACK_IMPORTED_MODULE_11__shared_jsonpointer_functions__["a" /* JsonPointer */].toKey(pointer);
                    var groupPointer = (__WEBPACK_IMPORTED_MODULE_11__shared_jsonpointer_functions__["a" /* JsonPointer */].parse(schemaPointer) || []).slice(0, -2);
                    var itemPointer = void 0;
                    if (key.toLowerCase() === 'ui:order') {
                        itemPointer = groupPointer.concat(['ui:order']);
                    }
                    else {
                        if (key.slice(0, 3).toLowerCase() === 'ui:') {
                            key = key.slice(3);
                        }
                        itemPointer = groupPointer.concat(['x-schema-form', key]);
                    }
                    if (__WEBPACK_IMPORTED_MODULE_11__shared_jsonpointer_functions__["a" /* JsonPointer */].has(_this.jsf.schema, groupPointer) &&
                        !__WEBPACK_IMPORTED_MODULE_11__shared_jsonpointer_functions__["a" /* JsonPointer */].has(_this.jsf.schema, itemPointer)) {
                        __WEBPACK_IMPORTED_MODULE_11__shared_jsonpointer_functions__["a" /* JsonPointer */].set(_this.jsf.schema, itemPointer, value);
                    }
                }
            });
        }
    };
    JsonSchemaFormComponent.prototype.activateForm = function () {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["l" /* isEmpty */])(this.jsf.schema)) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["l" /* isEmpty */])(this.jsf.formValues)) {
                this.jsf.buildSchemaFromData();
            }
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["l" /* isEmpty */])(this.jsf.schema)) {
            this.jsf.compileAjvSchema();
            this.jsf.buildLayout(this.widgetLibrary);
            this.jsf.buildFormGroupTemplate(this.jsf.formValues);
            this.jsf.buildFormGroup();
        }
        if (this.jsf.formGroup) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["l" /* isEmpty */])(this.jsf.formValues) &&
                this.jsf.formOptions.setSchemaDefaults !== true &&
                this.jsf.formOptions.setLayoutDefaults !== true) {
                this.setFormValues(this.jsf.formValues);
            }
            this.jsf.dataChanges.subscribe(function (data) {
                _this.onChanges.emit(_this.objectWrap ? data['1'] : data);
                if (_this.formValuesInput && _this.formValuesInput.indexOf('.') === -1) {
                    _this[_this.formValuesInput + "Change"].emit(_this.objectWrap ? data['1'] : data);
                }
            });
            this.jsf.formGroup.statusChanges.subscribe(function () { return _this.changeDetector.markForCheck(); });
            this.jsf.isValidChanges.subscribe(function (isValid) { return _this.isValid.emit(isValid); });
            this.jsf.validationErrorChanges.subscribe(function (err) { return _this.validationErrors.emit(err); });
            this.formSchema.emit(this.jsf.schema);
            this.formLayout.emit(this.jsf.layout);
            this.onChanges.emit(this.objectWrap ? this.jsf.data['1'] : this.jsf.data);
            var validateOnRender_1 = __WEBPACK_IMPORTED_MODULE_11__shared_jsonpointer_functions__["a" /* JsonPointer */].get(this.jsf, '/formOptions/validateOnRender');
            if (validateOnRender_1) {
                var touchAll_1 = function (control) {
                    if (validateOnRender_1 === true || Object(__WEBPACK_IMPORTED_MODULE_9__shared_validator_functions__["f" /* hasValue */])(control.value)) {
                        control.markAsTouched();
                    }
                    Object.keys(control.controls || {})
                        .forEach(function (key) { return touchAll_1(control.controls[key]); });
                };
                touchAll_1(this.jsf.formGroup);
                this.isValid.emit(this.jsf.isValid);
                this.validationErrors.emit(this.jsf.ajvErrors);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "schema", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], JsonSchemaFormComponent.prototype, "layout", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "framework", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "widgets", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "form", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "model", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "JSONSchema", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "UISchema", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "formData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "ngModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], JsonSchemaFormComponent.prototype, "language", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], JsonSchemaFormComponent.prototype, "loadExternalAssets", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], JsonSchemaFormComponent.prototype, "debug", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], JsonSchemaFormComponent.prototype, "value", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "onChanges", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "onSubmit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "isValid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "validationErrors", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "formSchema", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "formLayout", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "dataChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "modelChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "formDataChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "ngModelChange", void 0);
    JsonSchemaFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'json-schema-form',
            template: "\n    <div *ngFor=\"let stylesheet of stylesheets\">\n      <link rel=\"stylesheet\" [href]=\"stylesheet\">\n    </div>\n    <div *ngFor=\"let script of scripts\">\n      <script type=\"text/javascript\" [src]=\"script\"></script>\n    </div>\n    <form class=\"json-schema-form\" (ngSubmit)=\"submitForm()\">\n      <root-widget [layout]=\"jsf?.layout\"></root-widget>\n    </form>\n    <div *ngIf=\"debug || jsf?.formOptions?.debug\">\n      Debug output: <pre>{{debugOutput}}</pre>\n    </div>",
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            providers: [__WEBPACK_IMPORTED_MODULE_6__json_schema_form_service__["a" /* JsonSchemaFormService */], JSON_SCHEMA_FORM_VALUE_ACCESSOR],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_4__framework_library_framework_library_service__["a" /* FrameworkLibraryService */],
            __WEBPACK_IMPORTED_MODULE_5__widget_library_widget_library_service__["a" /* WidgetLibraryService */],
            __WEBPACK_IMPORTED_MODULE_6__json_schema_form_service__["a" /* JsonSchemaFormService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], JsonSchemaFormComponent);
    return JsonSchemaFormComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/json-schema-form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonSchemaFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_library_framework_library_service__ = __webpack_require__("../../../../../src/lib/src/framework-library/framework-library.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__widget_library_widget_library_module__ = __webpack_require__("../../../../../src/lib/src/widget-library/widget-library.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__widget_library_widget_library_service__ = __webpack_require__("../../../../../src/lib/src/widget-library/widget-library.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__json_schema_form_component__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__framework_library_framework__ = __webpack_require__("../../../../../src/lib/src/framework-library/framework.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__framework_library_no_framework_no_framework__ = __webpack_require__("../../../../../src/lib/src/framework-library/no-framework/no.framework.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__framework_library_no_framework_no_framework_module__ = __webpack_require__("../../../../../src/lib/src/framework-library/no-framework/no-framework.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var JsonSchemaFormModule = (function () {
    function JsonSchemaFormModule() {
    }
    JsonSchemaFormModule_1 = JsonSchemaFormModule;
    JsonSchemaFormModule.forRoot = function () {
        var frameworks = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            frameworks[_i] = arguments[_i];
        }
        var loadFrameworks = frameworks.length ?
            frameworks.map(function (framework) { return framework.forRoot().providers[0]; }) :
            [{ provide: __WEBPACK_IMPORTED_MODULE_8__framework_library_framework__["a" /* Framework */], useClass: __WEBPACK_IMPORTED_MODULE_9__framework_library_no_framework_no_framework__["a" /* NoFramework */], multi: true }];
        return {
            ngModule: JsonSchemaFormModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__json_schema_form_service__["a" /* JsonSchemaFormService */], __WEBPACK_IMPORTED_MODULE_3__framework_library_framework_library_service__["a" /* FrameworkLibraryService */], __WEBPACK_IMPORTED_MODULE_5__widget_library_widget_library_service__["a" /* WidgetLibraryService */]
            ].concat(loadFrameworks)
        };
    };
    JsonSchemaFormModule = JsonSchemaFormModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__widget_library_widget_library_module__["a" /* WidgetLibraryModule */], __WEBPACK_IMPORTED_MODULE_10__framework_library_no_framework_no_framework_module__["a" /* NoFrameworkModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__json_schema_form_component__["a" /* JsonSchemaFormComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_6__json_schema_form_component__["a" /* JsonSchemaFormComponent */], __WEBPACK_IMPORTED_MODULE_4__widget_library_widget_library_module__["a" /* WidgetLibraryModule */]]
        })
    ], JsonSchemaFormModule);
    return JsonSchemaFormModule;
    var JsonSchemaFormModule_1;
}());



/***/ }),

/***/ "../../../../../src/lib/src/json-schema-form.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonSchemaFormService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ajv__ = __webpack_require__("../../../../ajv/lib/ajv.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ajv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ajv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__ = __webpack_require__("../../../../../src/lib/src/shared/validator.functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_utility_functions__ = __webpack_require__("../../../../../src/lib/src/shared/utility.functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_jsonpointer_functions__ = __webpack_require__("../../../../../src/lib/src/shared/jsonpointer.functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_json_schema_functions__ = __webpack_require__("../../../../../src/lib/src/shared/json-schema.functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_form_group_functions__ = __webpack_require__("../../../../../src/lib/src/shared/form-group.functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_layout_functions__ = __webpack_require__("../../../../../src/lib/src/shared/layout.functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__locale_en_validation_messages__ = __webpack_require__("../../../../../src/lib/src/locale/en-validation-messages.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__locale_fr_validation_messages__ = __webpack_require__("../../../../../src/lib/src/locale/fr-validation-messages.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












;
;
var JsonSchemaFormService = (function () {
    function JsonSchemaFormService() {
        this.JsonFormCompatibility = false;
        this.ReactJsonSchemaFormCompatibility = false;
        this.AngularSchemaFormCompatibility = false;
        this.tpldata = {};
        this.ajvOptions = { allErrors: true, jsonPointers: true, unknownFormats: 'ignore' };
        this.ajv = new __WEBPACK_IMPORTED_MODULE_2_ajv__(this.ajvOptions);
        this.validateFormData = null;
        this.formValues = {};
        this.data = {};
        this.schema = {};
        this.layout = [];
        this.formGroupTemplate = {};
        this.formGroup = null;
        this.framework = null;
        this.validData = null;
        this.isValid = null;
        this.ajvErrors = null;
        this.validationErrors = null;
        this.dataErrors = new Map();
        this.formValueSubscription = null;
        this.dataChanges = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.isValidChanges = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.validationErrorChanges = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.arrayMap = new Map();
        this.dataMap = new Map();
        this.dataRecursiveRefMap = new Map();
        this.schemaRecursiveRefMap = new Map();
        this.schemaRefLibrary = {};
        this.layoutRefLibrary = { '': null };
        this.templateRefLibrary = {};
        this.hasRootReference = false;
        this.language = 'en-US';
        this.defaultFormOptions = {
            addSubmit: 'auto',
            debug: false,
            disableInvalidSubmit: true,
            formDisabled: false,
            formReadonly: false,
            fieldsRequired: false,
            framework: 'no-framework',
            loadExternalAssets: false,
            pristine: { errors: true, success: true },
            supressPropertyTitles: false,
            setSchemaDefaults: 'auto',
            setLayoutDefaults: 'auto',
            validateOnRender: 'auto',
            widgets: {},
            defautWidgetOptions: {
                listItems: 1,
                addable: true,
                orderable: true,
                removable: true,
                enableErrorState: true,
                enableSuccessState: true,
                feedback: false,
                feedbackOnRender: false,
                notitle: false,
                disabled: false,
                readonly: false,
                returnEmptyFields: true,
                validationMessages: {}
            },
        };
        this.setLanguage(this.language);
    }
    JsonSchemaFormService.prototype.setLanguage = function (language) {
        if (language === void 0) { language = 'en-US'; }
        this.language = language;
        var validationMessages = language.slice(0, 2) === 'fr' ?
            __WEBPACK_IMPORTED_MODULE_11__locale_fr_validation_messages__["a" /* frValidationMessages */] : __WEBPACK_IMPORTED_MODULE_10__locale_en_validation_messages__["a" /* enValidationMessages */];
        this.defaultFormOptions.defautWidgetOptions.validationMessages =
            __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](validationMessages);
    };
    JsonSchemaFormService.prototype.getData = function () { return this.data; };
    JsonSchemaFormService.prototype.getSchema = function () { return this.schema; };
    JsonSchemaFormService.prototype.getLayout = function () { return this.layout; };
    JsonSchemaFormService.prototype.resetAllValues = function () {
        this.JsonFormCompatibility = false;
        this.ReactJsonSchemaFormCompatibility = false;
        this.AngularSchemaFormCompatibility = false;
        this.tpldata = {};
        this.validateFormData = null;
        this.formValues = {};
        this.schema = {};
        this.layout = [];
        this.formGroupTemplate = {};
        this.formGroup = null;
        this.framework = null;
        this.data = {};
        this.validData = null;
        this.isValid = null;
        this.validationErrors = null;
        this.arrayMap = new Map();
        this.dataMap = new Map();
        this.dataRecursiveRefMap = new Map();
        this.schemaRecursiveRefMap = new Map();
        this.layoutRefLibrary = {};
        this.schemaRefLibrary = {};
        this.templateRefLibrary = {};
        this.formOptions = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](this.defaultFormOptions);
    };
    JsonSchemaFormService.prototype.buildRemoteError = function (errors) {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_5__shared_utility_functions__["e" /* forEach */])(errors, function (value, key) {
            if (key in _this.formGroup.controls) {
                for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                    var error = value_1[_i];
                    var err = {};
                    err[error['code']] = error['message'];
                    _this.formGroup.get(key).setErrors(err, { emitEvent: true });
                }
            }
        });
    };
    JsonSchemaFormService.prototype.validateData = function (newValue, updateSubscriptions) {
        if (updateSubscriptions === void 0) { updateSubscriptions = true; }
        this.data = Object(__WEBPACK_IMPORTED_MODULE_8__shared_form_group_functions__["c" /* formatFormData */])(newValue, this.dataMap, this.dataRecursiveRefMap, this.arrayMap, this.formOptions.returnEmptyFields);
        this.isValid = this.validateFormData(this.data);
        this.validData = this.isValid ? this.data : null;
        var compileErrors = function (errors) {
            var compiledErrors = {};
            (errors || []).forEach(function (error) {
                if (!compiledErrors[error.dataPath]) {
                    compiledErrors[error.dataPath] = [];
                }
                compiledErrors[error.dataPath].push(error.message);
            });
            return compiledErrors;
        };
        this.ajvErrors = this.validateFormData.errors;
        this.validationErrors = compileErrors(this.validateFormData.errors);
        if (updateSubscriptions) {
            this.dataChanges.next(this.data);
            this.isValidChanges.next(this.isValid);
            this.validationErrorChanges.next(this.ajvErrors);
        }
    };
    JsonSchemaFormService.prototype.buildFormGroupTemplate = function (formValues, setValues) {
        if (formValues === void 0) { formValues = null; }
        if (setValues === void 0) { setValues = true; }
        this.formGroupTemplate = Object(__WEBPACK_IMPORTED_MODULE_8__shared_form_group_functions__["b" /* buildFormGroupTemplate */])(this, formValues, setValues);
    };
    JsonSchemaFormService.prototype.buildFormGroup = function () {
        var _this = this;
        this.formGroup = Object(__WEBPACK_IMPORTED_MODULE_8__shared_form_group_functions__["a" /* buildFormGroup */])(this.formGroupTemplate);
        if (this.formGroup) {
            this.compileAjvSchema();
            this.validateData(this.formGroup.value);
            if (this.formValueSubscription) {
                this.formValueSubscription.unsubscribe();
            }
            this.formValueSubscription = this.formGroup.valueChanges
                .subscribe(function (formValue) { return _this.validateData(formValue); });
        }
    };
    JsonSchemaFormService.prototype.buildLayout = function (widgetLibrary) {
        this.layout = Object(__WEBPACK_IMPORTED_MODULE_9__shared_layout_functions__["a" /* buildLayout */])(this, widgetLibrary);
    };
    JsonSchemaFormService.prototype.setOptions = function (newOptions) {
        if (Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["o" /* isObject */])(newOptions)) {
            var addOptions = __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](newOptions);
            if (Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["o" /* isObject */])(addOptions.defaultOptions)) {
                Object.assign(this.formOptions.defautWidgetOptions, addOptions.defaultOptions);
                delete addOptions.defaultOptions;
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["o" /* isObject */])(addOptions.defautWidgetOptions)) {
                Object.assign(this.formOptions.defautWidgetOptions, addOptions.defautWidgetOptions);
                delete addOptions.defautWidgetOptions;
            }
            Object.assign(this.formOptions, addOptions);
            var globalDefaults_1 = this.formOptions.defautWidgetOptions;
            ['ErrorState', 'SuccessState']
                .filter(function (suffix) { return Object(__WEBPACK_IMPORTED_MODULE_5__shared_utility_functions__["g" /* hasOwn */])(globalDefaults_1, 'disable' + suffix); })
                .forEach(function (suffix) {
                globalDefaults_1['enable' + suffix] = !globalDefaults_1['disable' + suffix];
                delete globalDefaults_1['disable' + suffix];
            });
        }
    };
    JsonSchemaFormService.prototype.compileAjvSchema = function () {
        if (!this.validateFormData) {
            if (Array.isArray(this.schema.properties['ui:order'])) {
                this.schema['ui:order'] = this.schema.properties['ui:order'];
                delete this.schema.properties['ui:order'];
            }
            this.ajv.removeSchema(this.schema);
            this.validateFormData = this.ajv.compile(this.schema);
        }
    };
    JsonSchemaFormService.prototype.buildSchemaFromData = function (data, requireAllFields) {
        if (requireAllFields === void 0) { requireAllFields = false; }
        if (data) {
            return Object(__WEBPACK_IMPORTED_MODULE_7__shared_json_schema_functions__["a" /* buildSchemaFromData */])(data, requireAllFields);
        }
        this.schema = Object(__WEBPACK_IMPORTED_MODULE_7__shared_json_schema_functions__["a" /* buildSchemaFromData */])(this.formValues, requireAllFields);
    };
    JsonSchemaFormService.prototype.buildSchemaFromLayout = function (layout) {
        if (layout) {
            return Object(__WEBPACK_IMPORTED_MODULE_7__shared_json_schema_functions__["b" /* buildSchemaFromLayout */])(layout);
        }
        this.schema = Object(__WEBPACK_IMPORTED_MODULE_7__shared_json_schema_functions__["b" /* buildSchemaFromLayout */])(this.layout);
    };
    JsonSchemaFormService.prototype.setTpldata = function (newTpldata) {
        if (newTpldata === void 0) { newTpldata = {}; }
        this.tpldata = newTpldata;
    };
    JsonSchemaFormService.prototype.parseText = function (text, value, values, key) {
        var _this = this;
        if (text === void 0) { text = ''; }
        if (value === void 0) { value = {}; }
        if (values === void 0) { values = {}; }
        if (key === void 0) { key = null; }
        if (!text || !/{{.+?}}/.test(text)) {
            return text;
        }
        return text.replace(/{{(.+?)}}/g, function () {
            var a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                a[_i] = arguments[_i];
            }
            return _this.parseExpression(a[1], value, values, key, _this.tpldata);
        });
    };
    JsonSchemaFormService.prototype.parseExpression = function (expression, value, values, key, tpldata) {
        var _this = this;
        if (expression === void 0) { expression = ''; }
        if (value === void 0) { value = {}; }
        if (values === void 0) { values = {}; }
        if (key === void 0) { key = null; }
        if (tpldata === void 0) { tpldata = null; }
        if (typeof expression !== 'string') {
            return '';
        }
        var index = typeof key === 'number' ? (key + 1) + '' : (key || '');
        expression = expression.trim();
        if ((expression[0] === "'" || expression[0] === '"') &&
            expression[0] === expression[expression.length - 1] &&
            expression.slice(1, expression.length - 1).indexOf(expression[0]) === -1) {
            return expression.slice(1, expression.length - 1);
        }
        if (expression === 'idx' || expression === '$index') {
            return index;
        }
        if (expression === 'value' && !Object(__WEBPACK_IMPORTED_MODULE_5__shared_utility_functions__["g" /* hasOwn */])(values, 'value')) {
            return value;
        }
        if (['"', "'", ' ', '||', '&&', '+'].every(function (delim) { return expression.indexOf(delim) === -1; })) {
            var pointer = __WEBPACK_IMPORTED_MODULE_6__shared_jsonpointer_functions__["a" /* JsonPointer */].parseObjectPath(expression);
            return pointer[0] === 'value' && __WEBPACK_IMPORTED_MODULE_6__shared_jsonpointer_functions__["a" /* JsonPointer */].has(value, pointer.slice(1)) ?
                __WEBPACK_IMPORTED_MODULE_6__shared_jsonpointer_functions__["a" /* JsonPointer */].get(value, pointer.slice(1)) :
                pointer[0] === 'values' && __WEBPACK_IMPORTED_MODULE_6__shared_jsonpointer_functions__["a" /* JsonPointer */].has(values, pointer.slice(1)) ?
                    __WEBPACK_IMPORTED_MODULE_6__shared_jsonpointer_functions__["a" /* JsonPointer */].get(values, pointer.slice(1)) :
                    pointer[0] === 'tpldata' && __WEBPACK_IMPORTED_MODULE_6__shared_jsonpointer_functions__["a" /* JsonPointer */].has(tpldata, pointer.slice(1)) ?
                        __WEBPACK_IMPORTED_MODULE_6__shared_jsonpointer_functions__["a" /* JsonPointer */].get(tpldata, pointer.slice(1)) :
                        __WEBPACK_IMPORTED_MODULE_6__shared_jsonpointer_functions__["a" /* JsonPointer */].has(values, pointer) ? __WEBPACK_IMPORTED_MODULE_6__shared_jsonpointer_functions__["a" /* JsonPointer */].get(values, pointer) : '';
        }
        if (expression.indexOf('[idx]') > -1) {
            expression = expression.replace(/\[idx\]/g, index);
        }
        if (expression.indexOf('[$index]') > -1) {
            expression = expression.replace(/\[$index\]/g, index);
        }
        if (expression.indexOf('||') > -1) {
            return expression.split('||').reduce(function (all, term) {
                return all || _this.parseExpression(term, value, values, key, tpldata);
            }, '');
        }
        if (expression.indexOf('&&') > -1) {
            return expression.split('&&').reduce(function (all, term) {
                return all && _this.parseExpression(term, value, values, key, tpldata);
            }, ' ').trim();
        }
        if (expression.indexOf('+') > -1) {
            return expression.split('+')
                .map(function (term) { return _this.parseExpression(term, value, values, key, tpldata); })
                .join('');
        }
        return '';
    };
    JsonSchemaFormService.prototype.setArrayItemTitle = function (parentCtx, childNode, index) {
        if (parentCtx === void 0) { parentCtx = {}; }
        if (childNode === void 0) { childNode = null; }
        if (index === void 0) { index = null; }
        var parentNode = parentCtx.layoutNode;
        var parentValues = this.getFormControlValue(parentCtx);
        var isArrayItem = (parentNode.type || '').slice(-5) === 'array' && Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["h" /* isArray */])(parentValues);
        var text = __WEBPACK_IMPORTED_MODULE_6__shared_jsonpointer_functions__["a" /* JsonPointer */].getFirst(isArrayItem && childNode.type !== '$ref' ? [
            [childNode, '/options/legend'],
            [childNode, '/options/title'],
            [parentNode, '/options/title'],
            [parentNode, '/options/legend'],
        ] : [
            [childNode, '/options/title'],
            [childNode, '/options/legend'],
            [parentNode, '/options/title'],
            [parentNode, '/options/legend']
        ]);
        if (!text) {
            return text;
        }
        var childValue = Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["h" /* isArray */])(parentValues) && index < parentValues.length ?
            parentValues[index] : parentValues;
        return this.parseText(text, childValue, parentValues, index);
    };
    JsonSchemaFormService.prototype.setItemTitle = function (ctx) {
        return !ctx.options.title && /^(\d+|-)$/.test(ctx.layoutNode.name) ?
            null :
            this.parseText(ctx.options.title || Object(__WEBPACK_IMPORTED_MODULE_5__shared_utility_functions__["i" /* toTitleCase */])(ctx.layoutNode.name), this.getFormControlValue(this), (this.getFormControlGroup(this) || {}).value, ctx.dataIndex[ctx.dataIndex.length - 1]);
    };
    JsonSchemaFormService.prototype.evaluateCondition = function (layoutNode, dataIndex) {
        var arrayIndex = dataIndex && dataIndex[dataIndex.length - 1];
        var result = true;
        if (Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["f" /* hasValue */])((layoutNode.options || {}).condition)) {
            if (typeof layoutNode.options.condition === 'string') {
                var pointer = layoutNode.options.condition;
                if (Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["f" /* hasValue */])(arrayIndex)) {
                    pointer = pointer.replace('[arrayIndex]', "[" + arrayIndex + "]");
                }
                pointer = __WEBPACK_IMPORTED_MODULE_6__shared_jsonpointer_functions__["a" /* JsonPointer */].parseObjectPath(pointer);
                result = !!__WEBPACK_IMPORTED_MODULE_6__shared_jsonpointer_functions__["a" /* JsonPointer */].get(this.data, pointer);
                if (!result && pointer[0] === 'model') {
                    result = !!__WEBPACK_IMPORTED_MODULE_6__shared_jsonpointer_functions__["a" /* JsonPointer */].get({ model: this.data }, pointer);
                }
            }
            else if (typeof layoutNode.options.condition === 'function') {
                result = layoutNode.options.condition(this.data);
            }
            else if (typeof layoutNode.options.condition.functionBody === 'string') {
                try {
                    var dynFn = new Function('model', 'arrayIndices', layoutNode.options.condition.functionBody);
                    result = dynFn(this.data, dataIndex);
                }
                catch (e) {
                    result = true;
                    console.error("condition functionBody errored out on evaluation: " + layoutNode.options.condition.functionBody);
                }
            }
        }
        return result;
    };
    JsonSchemaFormService.prototype.initializeControl = function (ctx, bind) {
        var _this = this;
        if (bind === void 0) { bind = true; }
        if (!Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["o" /* isObject */])(ctx)) {
            return false;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["l" /* isEmpty */])(ctx.options)) {
            ctx.options = !Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["l" /* isEmpty */])((ctx.layoutNode || {}).options) ?
                ctx.layoutNode.options : __WEBPACK_IMPORTED_MODULE_3_lodash__["cloneDeep"](this.formOptions);
        }
        ctx.formControl = this.getFormControl(ctx);
        ctx.boundControl = bind && !!ctx.formControl;
        if (ctx.formControl) {
            ctx.controlName = this.getFormControlName(ctx);
            ctx.controlValue = ctx.formControl.value;
            ctx.controlDisabled = ctx.formControl.disabled;
            ctx.options.errorMessage = ctx.formControl.status === 'VALID' ? null :
                this.formatErrors(ctx.formControl.errors, ctx.options.validationMessages);
            ctx.options.showErrors = this.formOptions.validateOnRender === true ||
                (this.formOptions.validateOnRender === 'auto' && Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["f" /* hasValue */])(ctx.controlValue));
            ctx.formControl.statusChanges.subscribe(function (status) {
                return ctx.options.errorMessage = status === 'VALID' ? null :
                    _this.formatErrors(ctx.formControl.errors, ctx.options.validationMessages);
            });
            ctx.formControl.valueChanges.subscribe(function (value) {
                if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEqual"](ctx.controlValue, value)) {
                    ctx.controlValue = value;
                }
            });
        }
        else {
            ctx.controlName = ctx.layoutNode.name;
            ctx.controlValue = ctx.layoutNode.value || null;
            var dataPointer = this.getDataPointer(ctx);
            if (bind && dataPointer) {
                console.error("warning: control \"" + dataPointer + "\" is not bound to the Angular FormGroup.");
            }
        }
        return ctx.boundControl;
    };
    JsonSchemaFormService.prototype.formatErrors = function (errors, validationMessages) {
        if (validationMessages === void 0) { validationMessages = {}; }
        if (Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["l" /* isEmpty */])(errors)) {
            return null;
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["o" /* isObject */])(validationMessages)) {
            validationMessages = {};
        }
        var addSpaces = function (string) { return string[0].toUpperCase() + (string.slice(1) || '')
            .replace(/([a-z])([A-Z])/g, '$1 $2').replace(/_/g, ' '); };
        var formatError = function (error) { return typeof error === 'object' ?
            Object.keys(error).map(function (key) {
                return error[key] === true ? addSpaces(key) :
                    error[key] === false ? 'Not ' + addSpaces(key) :
                        addSpaces(key) + ': ' + formatError(error[key]);
            }).join(', ') :
            addSpaces(error.toString()); };
        var messages = [];
        return Object.keys(errors)
            .filter(function (errorKey) { return errorKey !== 'required' || Object.keys(errors).length === 1; })
            .map(function (errorKey) {
            return typeof validationMessages === 'string' ? validationMessages :
                typeof validationMessages[errorKey] === 'function' ?
                    validationMessages[errorKey](errors[errorKey]) :
                    typeof validationMessages[errorKey] === 'string' ?
                        !/{{.+?}}/.test(validationMessages[errorKey]) ?
                            validationMessages[errorKey] :
                            Object.keys(errors[errorKey])
                                .reduce(function (errorMessage, errorProperty) { return errorMessage.replace(new RegExp('{{' + errorProperty + '}}', 'g'), errors[errorKey][errorProperty]); }, validationMessages[errorKey]) :
                        addSpaces(errorKey) + ' Error: ' + formatError(errors[errorKey]);
        }).join('<br>');
    };
    JsonSchemaFormService.prototype.updateValue = function (ctx, value) {
        ctx.controlValue = value;
        if (ctx.boundControl) {
            ctx.formControl.setValue(value);
            ctx.formControl.markAsDirty();
        }
        ctx.layoutNode.value = value;
        if (Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["h" /* isArray */])(ctx.options.copyValueTo)) {
            for (var _i = 0, _a = ctx.options.copyValueTo; _i < _a.length; _i++) {
                var item = _a[_i];
                var targetControl = Object(__WEBPACK_IMPORTED_MODULE_8__shared_form_group_functions__["d" /* getControl */])(this.formGroup, item);
                if (Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["o" /* isObject */])(targetControl) && typeof targetControl.setValue === 'function') {
                    targetControl.setValue(value);
                    targetControl.markAsDirty();
                }
            }
        }
    };
    JsonSchemaFormService.prototype.updateArrayCheckboxList = function (ctx, checkboxList) {
        var formArray = this.getFormControl(ctx);
        while (formArray.value.length) {
            formArray.removeAt(0);
        }
        var refPointer = Object(__WEBPACK_IMPORTED_MODULE_7__shared_json_schema_functions__["h" /* removeRecursiveReferences */])(ctx.layoutNode.dataPointer + '/-', this.dataRecursiveRefMap, this.arrayMap);
        for (var _i = 0, checkboxList_1 = checkboxList; _i < checkboxList_1.length; _i++) {
            var checkboxItem = checkboxList_1[_i];
            if (checkboxItem.checked) {
                var newFormControl = Object(__WEBPACK_IMPORTED_MODULE_8__shared_form_group_functions__["a" /* buildFormGroup */])(this.templateRefLibrary[refPointer]);
                newFormControl.setValue(checkboxItem.value);
                formArray.push(newFormControl);
            }
        }
        formArray.markAsDirty();
    };
    JsonSchemaFormService.prototype.getFormControl = function (ctx) {
        if (!ctx.layoutNode || !Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["k" /* isDefined */])(ctx.layoutNode.dataPointer) ||
            ctx.layoutNode.type === '$ref') {
            return null;
        }
        return Object(__WEBPACK_IMPORTED_MODULE_8__shared_form_group_functions__["d" /* getControl */])(this.formGroup, this.getDataPointer(ctx));
    };
    JsonSchemaFormService.prototype.getFormControlValue = function (ctx) {
        if (!ctx.layoutNode || !Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["k" /* isDefined */])(ctx.layoutNode.dataPointer) ||
            ctx.layoutNode.type === '$ref') {
            return null;
        }
        var control = Object(__WEBPACK_IMPORTED_MODULE_8__shared_form_group_functions__["d" /* getControl */])(this.formGroup, this.getDataPointer(ctx));
        return control ? control.value : null;
    };
    JsonSchemaFormService.prototype.getFormControlGroup = function (ctx) {
        if (!ctx.layoutNode || !Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["k" /* isDefined */])(ctx.layoutNode.dataPointer)) {
            return null;
        }
        return Object(__WEBPACK_IMPORTED_MODULE_8__shared_form_group_functions__["d" /* getControl */])(this.formGroup, this.getDataPointer(ctx), true);
    };
    JsonSchemaFormService.prototype.getFormControlName = function (ctx) {
        if (!ctx.layoutNode || !Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["k" /* isDefined */])(ctx.layoutNode.dataPointer) || !Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["f" /* hasValue */])(ctx.dataIndex)) {
            return null;
        }
        return __WEBPACK_IMPORTED_MODULE_6__shared_jsonpointer_functions__["a" /* JsonPointer */].toKey(this.getDataPointer(ctx));
    };
    JsonSchemaFormService.prototype.getLayoutArray = function (ctx) {
        return __WEBPACK_IMPORTED_MODULE_6__shared_jsonpointer_functions__["a" /* JsonPointer */].get(this.layout, this.getLayoutPointer(ctx), 0, -1);
    };
    JsonSchemaFormService.prototype.getParentNode = function (ctx) {
        return __WEBPACK_IMPORTED_MODULE_6__shared_jsonpointer_functions__["a" /* JsonPointer */].get(this.layout, this.getLayoutPointer(ctx), 0, -2);
    };
    JsonSchemaFormService.prototype.getDataPointer = function (ctx) {
        if (!ctx.layoutNode || !Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["k" /* isDefined */])(ctx.layoutNode.dataPointer) || !Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["f" /* hasValue */])(ctx.dataIndex)) {
            return null;
        }
        return __WEBPACK_IMPORTED_MODULE_6__shared_jsonpointer_functions__["a" /* JsonPointer */].toIndexedPointer(ctx.layoutNode.dataPointer, ctx.dataIndex, this.arrayMap);
    };
    JsonSchemaFormService.prototype.getLayoutPointer = function (ctx) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["f" /* hasValue */])(ctx.layoutIndex)) {
            return null;
        }
        return '/' + ctx.layoutIndex.join('/items/');
    };
    JsonSchemaFormService.prototype.isControlBound = function (ctx) {
        if (!ctx.layoutNode || !Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["k" /* isDefined */])(ctx.layoutNode.dataPointer) || !Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["f" /* hasValue */])(ctx.dataIndex)) {
            return false;
        }
        var controlGroup = this.getFormControlGroup(ctx);
        var name = this.getFormControlName(ctx);
        return controlGroup ? Object(__WEBPACK_IMPORTED_MODULE_5__shared_utility_functions__["g" /* hasOwn */])(controlGroup.controls, name) : false;
    };
    JsonSchemaFormService.prototype.addItem = function (ctx, name) {
        if (!ctx.layoutNode || !Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["k" /* isDefined */])(ctx.layoutNode.$ref) ||
            !Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["f" /* hasValue */])(ctx.dataIndex) || !Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["f" /* hasValue */])(ctx.layoutIndex)) {
            return false;
        }
        var newFormGroup = Object(__WEBPACK_IMPORTED_MODULE_8__shared_form_group_functions__["a" /* buildFormGroup */])(this.templateRefLibrary[ctx.layoutNode.$ref]);
        if (ctx.layoutNode.arrayItem) {
            this.getFormControlGroup(ctx).push(newFormGroup);
        }
        else {
            this.getFormControlGroup(ctx)
                .addControl(name || this.getFormControlName(ctx), newFormGroup);
        }
        var newLayoutNode = Object(__WEBPACK_IMPORTED_MODULE_9__shared_layout_functions__["c" /* getLayoutNode */])(ctx.layoutNode, this);
        newLayoutNode.arrayItem = ctx.layoutNode.arrayItem;
        if (ctx.layoutNode.arrayItemType) {
            newLayoutNode.arrayItemType = ctx.layoutNode.arrayItemType;
        }
        else {
            delete newLayoutNode.arrayItemType;
        }
        if (name) {
            newLayoutNode.name = name;
            newLayoutNode.dataPointer += '/' + __WEBPACK_IMPORTED_MODULE_6__shared_jsonpointer_functions__["a" /* JsonPointer */].escape(name);
            newLayoutNode.options.title = Object(__WEBPACK_IMPORTED_MODULE_5__shared_utility_functions__["d" /* fixTitle */])(name);
        }
        __WEBPACK_IMPORTED_MODULE_6__shared_jsonpointer_functions__["a" /* JsonPointer */].insert(this.layout, this.getLayoutPointer(ctx), newLayoutNode);
        return true;
    };
    JsonSchemaFormService.prototype.moveArrayItem = function (ctx, oldIndex, newIndex) {
        if (!ctx.layoutNode || !Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["k" /* isDefined */])(ctx.layoutNode.dataPointer) ||
            !Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["f" /* hasValue */])(ctx.dataIndex) || !Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["f" /* hasValue */])(ctx.layoutIndex) ||
            !Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["k" /* isDefined */])(oldIndex) || !Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["k" /* isDefined */])(newIndex) || oldIndex === newIndex) {
            return false;
        }
        var formArray = this.getFormControlGroup(ctx);
        var arrayItem = formArray.at(oldIndex);
        formArray.removeAt(oldIndex);
        formArray.insert(newIndex, arrayItem);
        formArray.updateValueAndValidity();
        var layoutArray = this.getLayoutArray(ctx);
        layoutArray.splice(newIndex, 0, layoutArray.splice(oldIndex, 1)[0]);
        return true;
    };
    JsonSchemaFormService.prototype.removeItem = function (ctx) {
        if (!ctx.layoutNode || !Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["k" /* isDefined */])(ctx.layoutNode.dataPointer) ||
            !Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["f" /* hasValue */])(ctx.dataIndex) || !Object(__WEBPACK_IMPORTED_MODULE_4__shared_validator_functions__["f" /* hasValue */])(ctx.layoutIndex)) {
            return false;
        }
        if (ctx.layoutNode.arrayItem) {
            this.getFormControlGroup(ctx)
                .removeAt(ctx.dataIndex[ctx.dataIndex.length - 1]);
        }
        else {
            this.getFormControlGroup(ctx)
                .removeControl(this.getFormControlName(ctx));
        }
        __WEBPACK_IMPORTED_MODULE_6__shared_jsonpointer_functions__["a" /* JsonPointer */].remove(this.layout, this.getLayoutPointer(ctx));
        return true;
    };
    JsonSchemaFormService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], JsonSchemaFormService);
    return JsonSchemaFormService;
}());



/***/ }),

/***/ "../../../../../src/lib/src/locale/en-validation-messages.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return enValidationMessages; });
var enValidationMessages = {
    required: 'This field is required.',
    minLength: 'Must be {{minimumLength}} characters or longer (current length: {{currentLength}})',
    maxLength: 'Must be {{maximumLength}} characters or shorter (current length: {{currentLength}})',
    pattern: 'Must match pattern: {{requiredPattern}}',
    format: function (error) {
        switch (error.requiredFormat) {
            case 'date':
                return 'Must be a date, like "2000-12-31"';
            case 'time':
                return 'Must be a time, like "16:20" or "03:14:15.9265"';
            case 'date-time':
                return 'Must be a date-time, like "2000-03-14T01:59" or "2000-03-14T01:59:26.535Z"';
            case 'email':
                return 'Must be an email address, like "name@example.com"';
            case 'hostname':
                return 'Must be a hostname, like "example.com"';
            case 'ipv4':
                return 'Must be an IPv4 address, like "127.0.0.1"';
            case 'ipv6':
                return 'Must be an IPv6 address, like "1234:5678:9ABC:DEF0:1234:5678:9ABC:DEF0"';
            case 'url':
                return 'Must be a url, like "http://www.example.com/page.html"';
            case 'uuid':
                return 'Must be a uuid, like "12345678-9ABC-DEF0-1234-56789ABCDEF0"';
            case 'color':
                return 'Must be a color, like "#FFFFFF" or "rgb(255, 255, 255)"';
            case 'json-pointer':
                return 'Must be a JSON Pointer, like "/pointer/to/something"';
            case 'relative-json-pointer':
                return 'Must be a relative JSON Pointer, like "2/pointer/to/something"';
            case 'regex':
                return 'Must be a regular expression, like "(1-)?\\d{3}-\\d{3}-\\d{4}"';
            default:
                return 'Must be a correctly formatted ' + error.requiredFormat;
        }
    },
    minimum: 'Must be {{minimumValue}} or more',
    exclusiveMinimum: 'Must be more than {{exclusiveMinimumValue}}',
    maximum: 'Must be {{maximumValue}} or less',
    exclusiveMaximum: 'Must be less than {{exclusiveMaximumValue}}',
    multipleOf: function (error) {
        if ((1 / error.multipleOfValue) % 10 === 0) {
            var decimals = Math.log10(1 / error.multipleOfValue);
            return "Must have " + decimals + " or fewer decimal places.";
        }
        else {
            return "Must be a multiple of " + error.multipleOfValue + ".";
        }
    },
    minProperties: 'Must have {{minimumProperties}} or more items (current items: {{currentProperties}})',
    maxProperties: 'Must have {{maximumProperties}} or fewer items (current items: {{currentProperties}})',
    minItems: 'Must have {{minimumItems}} or more items (current items: {{currentItems}})',
    maxItems: 'Must have {{maximumItems}} or fewer items (current items: {{currentItems}})',
    uniqueItems: 'All items must be unique',
};


/***/ }),

/***/ "../../../../../src/lib/src/locale/fr-validation-messages.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return frValidationMessages; });
var frValidationMessages = {
    required: 'Est obligatoire.',
    minLength: 'Doit avoir minimum {{minimumLength}} caractères (actuellement: {{currentLength}})',
    maxLength: 'Doit avoir maximum {{maximumLength}} caractères (actuellement: {{currentLength}})',
    pattern: 'Doit respecter: {{requiredPattern}}',
    format: function (error) {
        switch (error.requiredFormat) {
            case 'date':
                return 'Doit être une date, tel que "2000-12-31"';
            case 'time':
                return 'Doit être une heure, tel que "16:20" ou "03:14:15.9265"';
            case 'date-time':
                return 'Doit être une date et une heure, tel que "2000-03-14T01:59" ou "2000-03-14T01:59:26.535Z"';
            case 'email':
                return 'Doit être une adresse e-mail, tel que "name@example.com"';
            case 'hostname':
                return 'Doit être un nom de domaine, tel que "example.com"';
            case 'ipv4':
                return 'Doit être une adresse IPv4, tel que "127.0.0.1"';
            case 'ipv6':
                return 'Doit être une adresse IPv6, tel que "1234:5678:9ABC:DEF0:1234:5678:9ABC:DEF0"';
            case 'url':
                return 'Doit être une URL, tel que "http://www.example.com/page.html"';
            case 'uuid':
                return 'Doit être un UUID, tel que "12345678-9ABC-DEF0-1234-56789ABCDEF0"';
            case 'color':
                return 'Doit être une couleur, tel que "#FFFFFF" or "rgb(255, 255, 255)"';
            case 'json-pointer':
                return 'Doit être un JSON Pointer, tel que "/pointer/to/something"';
            case 'relative-json-pointer':
                return 'Doit être un relative JSON Pointer, tel que "2/pointer/to/something"';
            case 'regex':
                return 'Doit être une expression régulière, tel que "(1-)?\\d{3}-\\d{3}-\\d{4}"';
            default:
                return 'Doit être avoir le format correct: ' + error.requiredFormat;
        }
    },
    minimum: 'Doit être supérieur à {{minimumValue}}',
    exclusiveMinimum: 'Doit avoir minimum {{exclusiveMinimumValue}} charactères',
    maximum: 'Doit être inférieur à {{maximumValue}}',
    exclusiveMaximum: 'Doit avoir maximum {{exclusiveMaximumValue}} charactères',
    multipleOf: function (error) {
        if ((1 / error.multipleOfValue) % 10 === 0) {
            var decimals = Math.log10(1 / error.multipleOfValue);
            return "Doit comporter " + decimals + " ou moins de decimales.";
        }
        else {
            return "Doit \u00EAtre un multiple de " + error.multipleOfValue + ".";
        }
    },
    minProperties: 'Doit comporter au minimum {{minimumProperties}} éléments',
    maxProperties: 'Doit comporter au maximum {{maximumProperties}} éléments',
    minItems: 'Doit comporter au minimum {{minimumItems}} éléments',
    maxItems: 'Doit comporter au maximum {{minimumItems}} éléments',
    uniqueItems: 'Tous les éléments doivent être uniques',
};


/***/ }),

/***/ "../../../../../src/lib/src/shared/convert-schema-to-draft6.function.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = convertSchemaToDraft6;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
;
function convertSchemaToDraft6(schema, options) {
    if (options === void 0) { options = {}; }
    var draft = options.draft || null;
    var changed = options.changed || false;
    if (typeof schema !== 'object') {
        return schema;
    }
    if (typeof schema.map === 'function') {
        return schema.map(function (subSchema) { return convertSchemaToDraft6(subSchema, { changed: changed, draft: draft }); }).slice();
    }
    var newSchema = __assign({}, schema);
    var simpleTypes = ['array', 'boolean', 'integer', 'null', 'number', 'object', 'string'];
    if (typeof newSchema.$schema === 'string' &&
        /http\:\/\/json\-schema\.org\/draft\-0\d\/schema\#/.test(newSchema.$schema)) {
        draft = newSchema.$schema[30];
    }
    if (newSchema.contentEncoding) {
        newSchema.media = { binaryEncoding: newSchema.contentEncoding };
        delete newSchema.contentEncoding;
        changed = true;
    }
    if (typeof newSchema.extends === 'object') {
        newSchema.allOf = typeof newSchema.extends.map === 'function' ?
            newSchema.extends.map(function (subSchema) { return convertSchemaToDraft6(subSchema, { changed: changed, draft: draft }); }) :
            [convertSchemaToDraft6(newSchema.extends, { changed: changed, draft: draft })];
        delete newSchema.extends;
        changed = true;
    }
    if (newSchema.disallow) {
        if (typeof newSchema.disallow === 'string') {
            newSchema.not = { type: newSchema.disallow };
        }
        else if (typeof newSchema.disallow.map === 'function') {
            newSchema.not = {
                anyOf: newSchema.disallow
                    .map(function (type) { return typeof type === 'object' ? type : { type: type }; })
            };
        }
        delete newSchema.disallow;
        changed = true;
    }
    if (typeof newSchema.dependencies === 'object' &&
        Object.keys(newSchema.dependencies)
            .some(function (key) { return typeof newSchema.dependencies[key] === 'string'; })) {
        newSchema.dependencies = __assign({}, newSchema.dependencies);
        Object.keys(newSchema.dependencies)
            .filter(function (key) { return typeof newSchema.dependencies[key] === 'string'; })
            .forEach(function (key) { return newSchema.dependencies[key] = [newSchema.dependencies[key]]; });
        changed = true;
    }
    if (typeof newSchema.maxDecimal === 'number') {
        newSchema.multipleOf = 1 / Math.pow(10, newSchema.maxDecimal);
        delete newSchema.divisibleBy;
        changed = true;
        if (!draft || draft === 2) {
            draft = 1;
        }
    }
    if (typeof newSchema.divisibleBy === 'number') {
        newSchema.multipleOf = newSchema.divisibleBy;
        delete newSchema.divisibleBy;
        changed = true;
    }
    if (typeof newSchema.minimum === 'number' && newSchema.minimumCanEqual === false) {
        newSchema.exclusiveMinimum = newSchema.minimum;
        delete newSchema.minimum;
        changed = true;
        if (!draft) {
            draft = 2;
        }
    }
    else if (typeof newSchema.minimumCanEqual === 'boolean') {
        delete newSchema.minimumCanEqual;
        changed = true;
        if (!draft) {
            draft = 2;
        }
    }
    if (typeof newSchema.minimum === 'number' && newSchema.exclusiveMinimum === true) {
        newSchema.exclusiveMinimum = newSchema.minimum;
        delete newSchema.minimum;
        changed = true;
    }
    else if (typeof newSchema.exclusiveMinimum === 'boolean') {
        delete newSchema.exclusiveMinimum;
        changed = true;
    }
    if (typeof newSchema.maximum === 'number' && newSchema.maximumCanEqual === false) {
        newSchema.exclusiveMaximum = newSchema.maximum;
        delete newSchema.maximum;
        changed = true;
        if (!draft) {
            draft = 2;
        }
    }
    else if (typeof newSchema.maximumCanEqual === 'boolean') {
        delete newSchema.maximumCanEqual;
        changed = true;
        if (!draft) {
            draft = 2;
        }
    }
    if (typeof newSchema.maximum === 'number' && newSchema.exclusiveMaximum === true) {
        newSchema.exclusiveMaximum = newSchema.maximum;
        delete newSchema.maximum;
        changed = true;
    }
    else if (typeof newSchema.exclusiveMaximum === 'boolean') {
        delete newSchema.exclusiveMaximum;
        changed = true;
    }
    if (typeof newSchema.properties === 'object') {
        var properties_1 = __assign({}, newSchema.properties);
        var requiredKeys_1 = Array.isArray(newSchema.required) ?
            new Set(newSchema.required) : new Set();
        if (draft === 1 || draft === 2 ||
            Object.keys(properties_1).some(function (key) { return properties_1[key].optional === true; })) {
            Object.keys(properties_1)
                .filter(function (key) { return properties_1[key].optional !== true; })
                .forEach(function (key) { return requiredKeys_1.add(key); });
            changed = true;
            if (!draft) {
                draft = 2;
            }
        }
        if (Object.keys(properties_1).some(function (key) { return properties_1[key].required === true; })) {
            Object.keys(properties_1)
                .filter(function (key) { return properties_1[key].required === true; })
                .forEach(function (key) { return requiredKeys_1.add(key); });
            changed = true;
        }
        if (requiredKeys_1.size) {
            newSchema.required = Array.from(requiredKeys_1);
        }
        if (Object.keys(properties_1).some(function (key) { return properties_1[key].requires; })) {
            var dependencies_1 = typeof newSchema.dependencies === 'object' ? __assign({}, newSchema.dependencies) : {};
            Object.keys(properties_1)
                .filter(function (key) { return properties_1[key].requires; })
                .forEach(function (key) { return dependencies_1[key] =
                typeof properties_1[key].requires === 'string' ?
                    [properties_1[key].requires] : properties_1[key].requires; });
            newSchema.dependencies = dependencies_1;
            changed = true;
            if (!draft) {
                draft = 2;
            }
        }
        newSchema.properties = properties_1;
    }
    if (typeof newSchema.optional === 'boolean') {
        delete newSchema.optional;
        changed = true;
        if (!draft) {
            draft = 2;
        }
    }
    if (newSchema.requires) {
        delete newSchema.requires;
    }
    if (typeof newSchema.required === 'boolean') {
        delete newSchema.required;
    }
    if (typeof newSchema.id === 'string' && !newSchema.$id) {
        if (newSchema.id.slice(-1) === '#') {
            newSchema.id = newSchema.id.slice(0, -1);
        }
        newSchema.$id = newSchema.id + '-CONVERTED-TO-DRAFT-06#';
        delete newSchema.id;
        changed = true;
    }
    if (newSchema.type && (typeof newSchema.type.every === 'function' ?
        !newSchema.type.every(function (type) { return simpleTypes.includes(type); }) :
        !simpleTypes.includes(newSchema.type))) {
        changed = true;
    }
    if (typeof newSchema.$schema === 'string' &&
        /http\:\/\/json\-schema\.org\/draft\-0[1-4]\/schema\#/.test(newSchema.$schema)) {
        newSchema.$schema = 'http://json-schema.org/draft-06/schema#';
        changed = true;
    }
    else if (changed && typeof newSchema.$schema === 'string') {
        var addToDescription = 'Converted to draft 6 from ' + newSchema.$schema;
        if (typeof newSchema.description === 'string' && newSchema.description.length) {
            newSchema.description += '\n' + addToDescription;
        }
        else {
            newSchema.description = addToDescription;
        }
        delete newSchema.$schema;
    }
    if (newSchema.type && (typeof newSchema.type.every === 'function' ?
        !newSchema.type.every(function (type) { return simpleTypes.includes(type); }) :
        !simpleTypes.includes(newSchema.type))) {
        if (newSchema.type.length === 1) {
            newSchema.type = newSchema.type[0];
        }
        if (typeof newSchema.type === 'string') {
            if (newSchema.type === 'any') {
                newSchema.type = simpleTypes;
            }
            else {
                delete newSchema.type;
            }
        }
        else if (typeof newSchema.type === 'object') {
            if (typeof newSchema.type.every === 'function') {
                if (newSchema.type.every(function (type) { return typeof type === 'string'; })) {
                    newSchema.type = newSchema.type.some(function (type) { return type === 'any'; }) ?
                        newSchema.type = simpleTypes :
                        newSchema.type.filter(function (type) { return simpleTypes.includes(type); });
                }
                else if (newSchema.type.length > 1) {
                    var arrayKeys = ['additionalItems', 'items', 'maxItems', 'minItems', 'uniqueItems', 'contains'];
                    var numberKeys = ['multipleOf', 'maximum', 'exclusiveMaximum', 'minimum', 'exclusiveMinimum'];
                    var objectKeys = ['maxProperties', 'minProperties', 'required', 'additionalProperties',
                        'properties', 'patternProperties', 'dependencies', 'propertyNames'];
                    var stringKeys = ['maxLength', 'minLength', 'pattern', 'format'];
                    var filterKeys_1 = {
                        'array': numberKeys.concat(objectKeys, stringKeys),
                        'integer': arrayKeys.concat(objectKeys, stringKeys),
                        'number': arrayKeys.concat(objectKeys, stringKeys),
                        'object': arrayKeys.concat(numberKeys, stringKeys),
                        'string': arrayKeys.concat(numberKeys, objectKeys),
                        'all': arrayKeys.concat(numberKeys, objectKeys, stringKeys),
                    };
                    var anyOf = [];
                    var _loop_1 = function (type) {
                        var newType = typeof type === 'string' ? { type: type } : __assign({}, type);
                        Object.keys(newSchema)
                            .filter(function (key) { return !newType.hasOwnProperty(key) &&
                            !(filterKeys_1[newType.type] || filterKeys_1.all).concat(['type', 'default']).includes(key); })
                            .forEach(function (key) { return newType[key] = newSchema[key]; });
                        anyOf.push(newType);
                    };
                    for (var _i = 0, _a = newSchema.type; _i < _a.length; _i++) {
                        var type = _a[_i];
                        _loop_1(type);
                    }
                    newSchema = newSchema.hasOwnProperty('default') ?
                        { anyOf: anyOf, default: newSchema.default } : { anyOf: anyOf };
                }
                else {
                    var typeSchema = newSchema.type;
                    delete newSchema.type;
                    Object.assign(newSchema, typeSchema);
                }
            }
        }
        else {
            delete newSchema.type;
        }
    }
    Object.keys(newSchema)
        .filter(function (key) { return typeof newSchema[key] === 'object'; })
        .forEach(function (key) {
        if (['definitions', 'dependencies', 'properties', 'patternProperties']
            .includes(key) && typeof newSchema[key].map !== 'function') {
            var newKey_1 = {};
            Object.keys(newSchema[key]).forEach(function (subKey) { return newKey_1[subKey] =
                convertSchemaToDraft6(newSchema[key][subKey], { changed: changed, draft: draft }); });
            newSchema[key] = newKey_1;
        }
        else if (['items', 'additionalItems', 'additionalProperties',
            'allOf', 'anyOf', 'oneOf', 'not'].includes(key)) {
            newSchema[key] = convertSchemaToDraft6(newSchema[key], { changed: changed, draft: draft });
        }
        else {
            var clone_1 = function (object) { return typeof clone_1 !== 'object' ? object :
                typeof object.map === 'function' ? object.map(function (item) { return clone_1(item); }).slice() :
                    Object.keys(object).reduce(function (objClone, objKey) {
                        return Object.assign(objClone, (_a = {}, _a[objKey] = clone_1(object[objKey]), _a));
                        var _a;
                    }, {}); };
            newSchema[key] = clone_1(newSchema[key]);
        }
    });
    return newSchema;
}


/***/ }),

/***/ "../../../../../src/lib/src/shared/date.functions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dateToString;
/* unused harmony export ordinal */
/* harmony export (immutable) */ __webpack_exports__["b"] = stringToDate;
/* unused harmony export findDate */
function dateToString(date, options) {
    if (options === void 0) { options = {}; }
    var dateFormat = options.dateFormat || 'YYYY-MM-DD';
    if (typeof date === 'string') {
        date = stringToDate(date);
    }
    if (Object.prototype.toString.call(date) !== '[object Date]') {
        return null;
    }
    var longMonths = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    var shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var longDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return dateFormat
        .replace(/YYYY/ig, date.getFullYear() + '')
        .replace(/YY/ig, (date.getFullYear() + '').slice(-2))
        .replace(/MMMM/ig, longMonths[date.getMonth()])
        .replace(/MMM/ig, shortMonths[date.getMonth()])
        .replace(/MM/ig, ('0' + (date.getMonth() + 1)).slice(-2))
        .replace(/M/ig, (date.getMonth() + 1) + '')
        .replace(/DDDD/ig, longDays[date.getDay()])
        .replace(/DDD/ig, shortDays[date.getDay()])
        .replace(/DD/ig, ('0' + date.getDate()).slice(-2))
        .replace(/D/ig, date.getDate() + '')
        .replace(/S/ig, ordinal(date.getDate()));
}
function ordinal(number) {
    if (typeof number === 'number') {
        number = number + '';
    }
    var last = number.slice(-1);
    var nextToLast = number.slice(-2, 1);
    return (nextToLast !== '1' && { '1': 'st', '2': 'nd', '3': 'rd' }[last]) || 'th';
}
function stringToDate(dateString) {
    var getDate = findDate(dateString);
    if (!getDate) {
        return null;
    }
    var dateParts = [];
    if (/^\d+[^\d]\d+[^\d]\d+$/.test(getDate)) {
        dateParts = getDate.split(/[^\d]/).map(function (part) { return +part; });
    }
    else if (/^\d{8}$/.test(getDate)) {
        dateParts = [+getDate.slice(0, 4), +getDate.slice(4, 6), +getDate.slice(6)];
    }
    var thisYear = +(new Date().getFullYear() + '').slice(-2);
    if (dateParts[0] > 1000 && dateParts[0] < 2100 && dateParts[1] <= 12 && dateParts[2] <= 31) {
        return new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    }
    else if (dateParts[0] <= 12 && dateParts[1] <= 31 && dateParts[2] > 1000 && dateParts[2] < 2100) {
        return new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);
    }
    else if (dateParts[0] <= 12 && dateParts[1] <= 31 && dateParts[2] < 100) {
        var year = (dateParts[2] <= thisYear ? 2000 : 1900) + dateParts[2];
        return new Date(year, dateParts[0] - 1, dateParts[1]);
    }
    else if (dateParts[0] < 100 && dateParts[1] <= 12 && dateParts[2] <= 31) {
        var year = (dateParts[0] <= thisYear ? 2000 : 1900) + dateParts[0];
        return new Date(year, dateParts[1] - 1, dateParts[2]);
    }
    return null;
}
function findDate(text) {
    if (!text) {
        return null;
    }
    var foundDate;
    foundDate = text.match(/(?:19|20)\d\d[-_\\\/\. ](?:0?\d|1[012])[-_\\\/\. ](?:[012]?\d|3[01])(?!\d)/);
    if (foundDate) {
        return foundDate[0];
    }
    foundDate = text.match(/(?:[012]?\d|3[01])[-_\\\/\. ](?:0?\d|1[012])[-_\\\/\. ](?:19|20)\d\d(?!\d)/);
    if (foundDate) {
        return foundDate[0];
    }
    foundDate = text.match(/^(?:[012]?\d|3[01])[-_\\\/\. ](?:0?\d|1[012])[-_\\\/\. ]\d\d(?!\d)/);
    if (foundDate) {
        return foundDate[0];
    }
    foundDate = text.match(/^\d\d[-_\\\/\. ](?:[012]?\d|3[01])[-_\\\/\. ](?:0?\d|1[012])(?!\d)/);
    if (foundDate) {
        return foundDate[0];
    }
    foundDate = text.match(/^(?:19|20)\d\d(?:0\d|1[012])(?:[012]\d|3[01])/);
    if (foundDate) {
        return foundDate[0];
    }
}


/***/ }),

/***/ "../../../../../src/lib/src/shared/form-group.functions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = buildFormGroupTemplate;
/* harmony export (immutable) */ __webpack_exports__["a"] = buildFormGroup;
/* unused harmony export mergeValues */
/* unused harmony export setRequiredFields */
/* harmony export (immutable) */ __webpack_exports__["c"] = formatFormData;
/* harmony export (immutable) */ __webpack_exports__["d"] = getControl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validator_functions__ = __webpack_require__("../../../../../src/lib/src/shared/validator.functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utility_functions__ = __webpack_require__("../../../../../src/lib/src/shared/utility.functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__ = __webpack_require__("../../../../../src/lib/src/shared/jsonpointer.functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__json_validators__ = __webpack_require__("../../../../../src/lib/src/shared/json.validators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__json_schema_functions__ = __webpack_require__("../../../../../src/lib/src/shared/json-schema.functions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};







function buildFormGroupTemplate(jsf, nodeValue, setValues, schemaPointer, dataPointer, templatePointer) {
    if (nodeValue === void 0) { nodeValue = null; }
    if (setValues === void 0) { setValues = true; }
    if (schemaPointer === void 0) { schemaPointer = ''; }
    if (dataPointer === void 0) { dataPointer = ''; }
    if (templatePointer === void 0) { templatePointer = ''; }
    var schema = __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].get(jsf.schema, schemaPointer);
    if (setValues) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["k" /* isDefined */])(nodeValue) && (jsf.formOptions.setSchemaDefaults === true ||
            (jsf.formOptions.setSchemaDefaults === 'auto' && Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["l" /* isEmpty */])(jsf.formValues)))) {
            nodeValue = __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].get(jsf.schema, schemaPointer + '/default');
        }
    }
    else {
        nodeValue = null;
    }
    var schemaType = __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].get(schema, '/type');
    var controlType = (Object(__WEBPACK_IMPORTED_MODULE_3__utility_functions__["g" /* hasOwn */])(schema, 'properties') || Object(__WEBPACK_IMPORTED_MODULE_3__utility_functions__["g" /* hasOwn */])(schema, 'additionalProperties')) &&
        schemaType === 'object' ? 'FormGroup' :
        (Object(__WEBPACK_IMPORTED_MODULE_3__utility_functions__["g" /* hasOwn */])(schema, 'items') || Object(__WEBPACK_IMPORTED_MODULE_3__utility_functions__["g" /* hasOwn */])(schema, 'additionalItems')) &&
            schemaType === 'array' ? 'FormArray' :
            !schemaType && Object(__WEBPACK_IMPORTED_MODULE_3__utility_functions__["g" /* hasOwn */])(schema, '$ref') ? '$ref' : 'FormControl';
    var shortDataPointer = Object(__WEBPACK_IMPORTED_MODULE_6__json_schema_functions__["h" /* removeRecursiveReferences */])(dataPointer, jsf.dataRecursiveRefMap, jsf.arrayMap);
    if (!jsf.dataMap.has(shortDataPointer)) {
        jsf.dataMap.set(shortDataPointer, new Map());
    }
    var nodeOptions = jsf.dataMap.get(shortDataPointer);
    if (!nodeOptions.has('schemaType')) {
        nodeOptions.set('schemaPointer', schemaPointer);
        nodeOptions.set('schemaType', schema.type);
        if (schema.format) {
            nodeOptions.set('schemaFormat', schema.format);
            if (!schema.type) {
                nodeOptions.set('schemaType', 'string');
            }
        }
        if (controlType) {
            nodeOptions.set('templatePointer', templatePointer);
            nodeOptions.set('templateType', controlType);
        }
    }
    var controls;
    var validators = Object(__WEBPACK_IMPORTED_MODULE_6__json_schema_functions__["d" /* getControlValidators */])(schema);
    switch (controlType) {
        case 'FormGroup':
            controls = {};
            if (Object(__WEBPACK_IMPORTED_MODULE_3__utility_functions__["g" /* hasOwn */])(schema, 'ui:order') || Object(__WEBPACK_IMPORTED_MODULE_3__utility_functions__["g" /* hasOwn */])(schema, 'properties')) {
                var propertyKeys_1 = schema['ui:order'] || Object.keys(schema.properties);
                if (propertyKeys_1.includes('*') && !Object(__WEBPACK_IMPORTED_MODULE_3__utility_functions__["g" /* hasOwn */])(schema.properties, '*')) {
                    var unnamedKeys = Object.keys(schema.properties)
                        .filter(function (key) { return !propertyKeys_1.includes(key); });
                    for (var i = propertyKeys_1.length - 1; i >= 0; i--) {
                        if (propertyKeys_1[i] === '*') {
                            propertyKeys_1.splice.apply(propertyKeys_1, [i, 1].concat(unnamedKeys));
                        }
                    }
                }
                propertyKeys_1
                    .filter(function (key) { return Object(__WEBPACK_IMPORTED_MODULE_3__utility_functions__["g" /* hasOwn */])(schema.properties, key) ||
                    Object(__WEBPACK_IMPORTED_MODULE_3__utility_functions__["g" /* hasOwn */])(schema, 'additionalProperties'); })
                    .forEach(function (key) { return controls[key] = buildFormGroupTemplate(jsf, __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].get(nodeValue, [key]), setValues, schemaPointer + (Object(__WEBPACK_IMPORTED_MODULE_3__utility_functions__["g" /* hasOwn */])(schema.properties, key) ?
                    '/properties/' + key : '/additionalProperties'), dataPointer + '/' + key, templatePointer + '/controls/' + key); });
                jsf.formOptions.fieldsRequired = setRequiredFields(schema, controls);
            }
            return { controlType: controlType, controls: controls, validators: validators };
        case 'FormArray':
            controls = [];
            var minItems = Math.max(schema.minItems || 0, nodeOptions.get('minItems') || 0);
            var maxItems = Math.min(schema.maxItems || 1000, nodeOptions.get('maxItems') || 1000);
            var additionalItemsPointer = null;
            if (Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["h" /* isArray */])(schema.items)) {
                var tupleItems = nodeOptions.get('tupleItems') ||
                    (Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["h" /* isArray */])(schema.items) ? Math.min(schema.items.length, maxItems) : 0);
                for (var i = 0; i < tupleItems; i++) {
                    if (i < minItems) {
                        controls.push(buildFormGroupTemplate(jsf, Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["h" /* isArray */])(nodeValue) ? nodeValue[i] : nodeValue, setValues, schemaPointer + '/items/' + i, dataPointer + '/' + i, templatePointer + '/controls/' + i));
                    }
                    else {
                        var schemaRefPointer = Object(__WEBPACK_IMPORTED_MODULE_6__json_schema_functions__["h" /* removeRecursiveReferences */])(schemaPointer + '/items/' + i, jsf.schemaRecursiveRefMap);
                        var itemRefPointer = Object(__WEBPACK_IMPORTED_MODULE_6__json_schema_functions__["h" /* removeRecursiveReferences */])(shortDataPointer + '/' + i, jsf.dataRecursiveRefMap, jsf.arrayMap);
                        var itemRecursive = itemRefPointer !== shortDataPointer + '/' + i;
                        if (!Object(__WEBPACK_IMPORTED_MODULE_3__utility_functions__["g" /* hasOwn */])(jsf.templateRefLibrary, itemRefPointer)) {
                            jsf.templateRefLibrary[itemRefPointer] = null;
                            jsf.templateRefLibrary[itemRefPointer] = buildFormGroupTemplate(jsf, null, setValues, schemaRefPointer, itemRefPointer, templatePointer + '/controls/' + i);
                        }
                        controls.push(Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["h" /* isArray */])(nodeValue) ?
                            buildFormGroupTemplate(jsf, nodeValue[i], setValues, schemaPointer + '/items/' + i, dataPointer + '/' + i, templatePointer + '/controls/' + i) :
                            itemRecursive ?
                                null : __WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"](jsf.templateRefLibrary[itemRefPointer]));
                    }
                }
                if (schema.items.length < maxItems && Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["o" /* isObject */])(schema.additionalItems)) {
                    additionalItemsPointer = schemaPointer + '/additionalItems';
                }
            }
            else {
                additionalItemsPointer = schemaPointer + '/items';
            }
            if (additionalItemsPointer) {
                var schemaRefPointer = Object(__WEBPACK_IMPORTED_MODULE_6__json_schema_functions__["h" /* removeRecursiveReferences */])(additionalItemsPointer, jsf.schemaRecursiveRefMap);
                var itemRefPointer = Object(__WEBPACK_IMPORTED_MODULE_6__json_schema_functions__["h" /* removeRecursiveReferences */])(shortDataPointer + '/-', jsf.dataRecursiveRefMap, jsf.arrayMap);
                var itemRecursive = itemRefPointer !== shortDataPointer + '/-';
                if (!Object(__WEBPACK_IMPORTED_MODULE_3__utility_functions__["g" /* hasOwn */])(jsf.templateRefLibrary, itemRefPointer)) {
                    jsf.templateRefLibrary[itemRefPointer] = null;
                    jsf.templateRefLibrary[itemRefPointer] = buildFormGroupTemplate(jsf, null, setValues, schemaRefPointer, itemRefPointer, templatePointer + '/controls/-');
                }
                var itemOptions = nodeOptions;
                if (!itemRecursive || Object(__WEBPACK_IMPORTED_MODULE_3__utility_functions__["g" /* hasOwn */])(validators, 'required')) {
                    var arrayLength = Math.min(Math.max(itemRecursive ? 0 :
                        (itemOptions.get('tupleItems') + itemOptions.get('listItems')) || 0, Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["h" /* isArray */])(nodeValue) ? nodeValue.length : 0), maxItems);
                    for (var i = controls.length; i < arrayLength; i++) {
                        controls.push(Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["h" /* isArray */])(nodeValue) ?
                            buildFormGroupTemplate(jsf, nodeValue[i], setValues, schemaRefPointer, dataPointer + '/-', templatePointer + '/controls/-') :
                            itemRecursive ?
                                null : __WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"](jsf.templateRefLibrary[itemRefPointer]));
                    }
                }
            }
            return { controlType: controlType, controls: controls, validators: validators };
        case '$ref':
            var schemaRef = __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].compile(schema.$ref);
            var dataRef = __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].toDataPointer(schemaRef, schema);
            var refPointer = Object(__WEBPACK_IMPORTED_MODULE_6__json_schema_functions__["h" /* removeRecursiveReferences */])(dataRef, jsf.dataRecursiveRefMap, jsf.arrayMap);
            if (refPointer && !Object(__WEBPACK_IMPORTED_MODULE_3__utility_functions__["g" /* hasOwn */])(jsf.templateRefLibrary, refPointer)) {
                jsf.templateRefLibrary[refPointer] = null;
                var newTemplate = buildFormGroupTemplate(jsf, setValues, setValues, schemaRef);
                if (newTemplate) {
                    jsf.templateRefLibrary[refPointer] = newTemplate;
                }
                else {
                    delete jsf.templateRefLibrary[refPointer];
                }
            }
            return null;
        case 'FormControl':
            var value = {
                value: setValues && Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["p" /* isPrimitive */])(nodeValue) ? nodeValue : null,
                disabled: nodeOptions.get('disabled') || false
            };
            return { controlType: controlType, value: value, validators: validators };
        default:
            return null;
    }
}
function buildFormGroup(template) {
    var validatorFns = [];
    var validatorFn = null;
    if (Object(__WEBPACK_IMPORTED_MODULE_3__utility_functions__["g" /* hasOwn */])(template, 'validators')) {
        Object(__WEBPACK_IMPORTED_MODULE_3__utility_functions__["e" /* forEach */])(template.validators, function (parameters, validator) {
            if (typeof __WEBPACK_IMPORTED_MODULE_5__json_validators__["a" /* JsonValidators */][validator] === 'function') {
                validatorFns.push(__WEBPACK_IMPORTED_MODULE_5__json_validators__["a" /* JsonValidators */][validator].apply(null, parameters));
            }
        });
        if (validatorFns.length &&
            Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["g" /* inArray */])(template.controlType, ['FormGroup', 'FormArray'])) {
            validatorFn = validatorFns.length > 1 ?
                __WEBPACK_IMPORTED_MODULE_5__json_validators__["a" /* JsonValidators */].compose(validatorFns) : validatorFns[0];
        }
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_3__utility_functions__["g" /* hasOwn */])(template, 'controlType')) {
        switch (template.controlType) {
            case 'FormGroup':
                var groupControls_1 = {};
                Object(__WEBPACK_IMPORTED_MODULE_3__utility_functions__["e" /* forEach */])(template.controls, function (controls, key) {
                    var newControl = buildFormGroup(controls);
                    if (newControl) {
                        groupControls_1[key] = newControl;
                    }
                });
                return new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormGroup */](groupControls_1, validatorFn);
            case 'FormArray':
                return new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormArray */](__WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](__WEBPACK_IMPORTED_MODULE_1_lodash__["map"](template.controls, function (controls) { return buildFormGroup(controls); })), validatorFn);
            case 'FormControl':
                return new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */](template.value, validatorFns);
        }
    }
    return null;
}
function mergeValues() {
    var valuesToMerge = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        valuesToMerge[_i] = arguments[_i];
    }
    var mergedValues = null;
    for (var _a = 0, valuesToMerge_1 = valuesToMerge; _a < valuesToMerge_1.length; _a++) {
        var currentValue = valuesToMerge_1[_a];
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["l" /* isEmpty */])(currentValue)) {
            if (typeof currentValue === 'object' &&
                (Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["l" /* isEmpty */])(mergedValues) || typeof mergedValues !== 'object')) {
                if (Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["h" /* isArray */])(currentValue)) {
                    mergedValues = currentValue.slice();
                }
                else if (Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["o" /* isObject */])(currentValue)) {
                    mergedValues = __assign({}, currentValue);
                }
            }
            else if (typeof currentValue !== 'object') {
                mergedValues = currentValue;
            }
            else if (Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["o" /* isObject */])(mergedValues) && Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["o" /* isObject */])(currentValue)) {
                Object.assign(mergedValues, currentValue);
            }
            else if (Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["o" /* isObject */])(mergedValues) && Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["h" /* isArray */])(currentValue)) {
                var newValues = [];
                for (var _b = 0, currentValue_1 = currentValue; _b < currentValue_1.length; _b++) {
                    var value = currentValue_1[_b];
                    newValues.push(mergeValues(mergedValues, value));
                }
                mergedValues = newValues;
            }
            else if (Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["h" /* isArray */])(mergedValues) && Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["o" /* isObject */])(currentValue)) {
                var newValues = [];
                for (var _c = 0, mergedValues_1 = mergedValues; _c < mergedValues_1.length; _c++) {
                    var value = mergedValues_1[_c];
                    newValues.push(mergeValues(value, currentValue));
                }
                mergedValues = newValues;
            }
            else if (Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["h" /* isArray */])(mergedValues) && Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["h" /* isArray */])(currentValue)) {
                var newValues = [];
                for (var i = 0; i < Math.max(mergedValues.length, currentValue.length); i++) {
                    if (i < mergedValues.length && i < currentValue.length) {
                        newValues.push(mergeValues(mergedValues[i], currentValue[i]));
                    }
                    else if (i < mergedValues.length) {
                        newValues.push(mergedValues[i]);
                    }
                    else if (i < currentValue.length) {
                        newValues.push(currentValue[i]);
                    }
                }
                mergedValues = newValues;
            }
        }
    }
    return mergedValues;
}
function setRequiredFields(schema, formControlTemplate) {
    var fieldsRequired = false;
    if (Object(__WEBPACK_IMPORTED_MODULE_3__utility_functions__["g" /* hasOwn */])(schema, 'required') && !Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["l" /* isEmpty */])(schema.required)) {
        fieldsRequired = true;
        var requiredArray = Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["h" /* isArray */])(schema.required) ? schema.required : [schema.required];
        requiredArray = Object(__WEBPACK_IMPORTED_MODULE_3__utility_functions__["e" /* forEach */])(requiredArray, function (key) { return __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].set(formControlTemplate, '/' + key + '/validators/required', []); });
    }
    return fieldsRequired;
}
function formatFormData(formData, dataMap, recursiveRefMap, arrayMap, returnEmptyFields, fixErrors) {
    if (returnEmptyFields === void 0) { returnEmptyFields = false; }
    if (fixErrors === void 0) { fixErrors = false; }
    if (formData === null || typeof formData !== 'object') {
        return formData;
    }
    var formattedData = Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["h" /* isArray */])(formData) ? [] : {};
    __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].forEachDeep(formData, function (value, dataPointer) {
        if (returnEmptyFields && Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["h" /* isArray */])(value)) {
            __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].set(formattedData, dataPointer, []);
        }
        else if (returnEmptyFields && Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["o" /* isObject */])(value) && !Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["j" /* isDate */])(value)) {
            __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].set(formattedData, dataPointer, {});
        }
        else {
            var genericPointer_1 = __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].has(dataMap, [dataPointer, 'schemaType']) ? dataPointer :
                Object(__WEBPACK_IMPORTED_MODULE_6__json_schema_functions__["h" /* removeRecursiveReferences */])(dataPointer, recursiveRefMap, arrayMap);
            if (__WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].has(dataMap, [genericPointer_1, 'schemaType'])) {
                var schemaType = dataMap.get(genericPointer_1).get('schemaType');
                if (schemaType === 'null') {
                    __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].set(formattedData, dataPointer, null);
                }
                else if ((Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["f" /* hasValue */])(value) || returnEmptyFields) &&
                    Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["g" /* inArray */])(schemaType, ['string', 'integer', 'number', 'boolean'])) {
                    var newValue = (fixErrors || (value === null && returnEmptyFields)) ?
                        Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["v" /* toSchemaType */])(value, schemaType) : Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["t" /* toJavaScriptType */])(value, schemaType);
                    if (Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["k" /* isDefined */])(newValue) || returnEmptyFields) {
                        __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].set(formattedData, dataPointer, newValue);
                    }
                }
                else if (schemaType === 'object' && !returnEmptyFields) {
                    (dataMap.get(genericPointer_1).get('required') || []).forEach(function (key) {
                        var keySchemaType = dataMap.get(genericPointer_1 + "/" + key).get('schemaType');
                        if (keySchemaType === 'array') {
                            __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].set(formattedData, dataPointer + "/" + key, []);
                        }
                        else if (keySchemaType === 'object') {
                            __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].set(formattedData, dataPointer + "/" + key, {});
                        }
                    });
                }
                if (dataMap.get(genericPointer_1).get('schemaFormat') === 'date-time') {
                    if (/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s][0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?$/i.test(value)) {
                        __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].set(formattedData, dataPointer, value + "Z");
                    }
                    else if (/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s][0-2]\d:[0-5]\d$/i.test(value)) {
                        __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].set(formattedData, dataPointer, value + ":00Z");
                    }
                    else if (fixErrors && /^\d\d\d\d-[0-1]\d-[0-3]\d$/i.test(value)) {
                        __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].set(formattedData, dataPointer, value + ":00:00:00Z");
                    }
                }
            }
            else if (typeof value !== 'object' || Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["j" /* isDate */])(value) ||
                (value === null && returnEmptyFields)) {
                console.error('formatFormData error: ' +
                    ("Schema type not found for form value at " + genericPointer_1));
                console.error('dataMap', dataMap);
                console.error('recursiveRefMap', recursiveRefMap);
                console.error('genericPointer', genericPointer_1);
            }
        }
    });
    return formattedData;
}
function getControl(formGroup, dataPointer, returnGroup) {
    if (returnGroup === void 0) { returnGroup = false; }
    if (!Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["o" /* isObject */])(formGroup) || !__WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].isJsonPointer(dataPointer)) {
        if (!__WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].isJsonPointer(dataPointer)) {
            if (typeof dataPointer === 'string') {
                var formControl = formGroup.get(dataPointer);
                if (formControl) {
                    return formControl;
                }
            }
            console.error("getControl error: Invalid JSON Pointer: " + dataPointer);
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["o" /* isObject */])(formGroup)) {
            console.error("getControl error: Invalid formGroup: " + formGroup);
        }
        return null;
    }
    var dataPointerArray = __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].parse(dataPointer);
    if (returnGroup) {
        dataPointerArray = dataPointerArray.slice(0, -1);
    }
    if (typeof formGroup.get === 'function' &&
        dataPointerArray.every(function (key) { return key.indexOf('.') === -1; })) {
        var formControl = formGroup.get(dataPointerArray.join('.'));
        if (formControl) {
            return formControl;
        }
    }
    var subGroup = formGroup;
    for (var _i = 0, dataPointerArray_1 = dataPointerArray; _i < dataPointerArray_1.length; _i++) {
        var key = dataPointerArray_1[_i];
        if (Object(__WEBPACK_IMPORTED_MODULE_3__utility_functions__["g" /* hasOwn */])(subGroup, 'controls')) {
            subGroup = subGroup.controls;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_2__validator_functions__["h" /* isArray */])(subGroup) && (key === '-')) {
            subGroup = subGroup[subGroup.length - 1];
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_3__utility_functions__["g" /* hasOwn */])(subGroup, key)) {
            subGroup = subGroup[key];
        }
        else {
            console.error("getControl error: Unable to find \"" + key + "\" item in FormGroup.");
            console.error(dataPointer);
            console.error(formGroup);
            return;
        }
    }
    return subGroup;
}


/***/ }),

/***/ "../../../../../src/lib/src/shared/format-regex.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return jsonSchemaFormatTests; });
var jsonSchemaFormatTests = {
    'date': /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
    'time': /^[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i,
    'date-time': /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s][0-2]\d:[0-5]\d(?::[0-5]\d)?(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i,
    'email': /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    'hostname': /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*$/i,
    'ipv4': /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
    'ipv6': /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
    'uri': /^(?:[a-z][a-z0-9+-.]*)(?::|\/)\/?[^\s]*$/i,
    'uri-reference': /^(?:(?:[a-z][a-z0-9+-.]*:)?\/\/)?[^\s]*$/i,
    'uri-template': /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
    'url': /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i,
    'uuid': /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
    'color': /^\s*(#(?:[\da-f]{3}){1,2}|rgb\((?:\d{1,3},\s*){2}\d{1,3}\)|rgba\((?:\d{1,3},\s*){3}\d*\.?\d+\)|hsl\(\d{1,3}(?:,\s*\d{1,3}%){2}\)|hsla\(\d{1,3}(?:,\s*\d{1,3}%){2},\s*\d*\.?\d+\))\s*$/gi,
    'json-pointer': /^(?:\/(?:[^~/]|~0|~1)*)*$|^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
    'relative-json-pointer': /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
    'regex': function (str) {
        if (/[^\\]\\Z/.test(str)) {
            return false;
        }
        try {
            new RegExp(str);
            return true;
        }
        catch (e) {
            return false;
        }
    }
};


/***/ }),

/***/ "../../../../../src/lib/src/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validator_functions__ = __webpack_require__("../../../../../src/lib/src/shared/validator.functions.ts");
/* unused harmony reexport _executeValidators */
/* unused harmony reexport _executeAsyncValidators */
/* unused harmony reexport _mergeObjects */
/* unused harmony reexport _mergeErrors */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__validator_functions__["k"]; });
/* unused harmony reexport hasValue */
/* unused harmony reexport isEmpty */
/* unused harmony reexport isString */
/* unused harmony reexport isNumber */
/* unused harmony reexport isInteger */
/* unused harmony reexport isBoolean */
/* unused harmony reexport isFunction */
/* unused harmony reexport isObject */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__validator_functions__["h"]; });
/* unused harmony reexport isDate */
/* unused harmony reexport isMap */
/* unused harmony reexport isSet */
/* unused harmony reexport isPromise */
/* unused harmony reexport isObservable */
/* unused harmony reexport getType */
/* unused harmony reexport isType */
/* unused harmony reexport isPrimitive */
/* unused harmony reexport toJavaScriptType */
/* unused harmony reexport toSchemaType */
/* unused harmony reexport _toPromise */
/* unused harmony reexport toObservable */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__validator_functions__["g"]; });
/* unused harmony reexport xor */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility_functions__ = __webpack_require__("../../../../../src/lib/src/shared/utility.functions.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__utility_functions__["a"]; });
/* unused harmony reexport copy */
/* unused harmony reexport forEach */
/* unused harmony reexport forEachCopy */
/* unused harmony reexport hasOwn */
/* unused harmony reexport mergeFilteredObject */
/* unused harmony reexport uniqueItems */
/* unused harmony reexport commonItems */
/* unused harmony reexport fixTitle */
/* unused harmony reexport toTitleCase */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonpointer_functions__ = __webpack_require__("../../../../../src/lib/src/shared/jsonpointer.functions.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__jsonpointer_functions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__json_validators__ = __webpack_require__("../../../../../src/lib/src/shared/json.validators.ts");
/* unused harmony reexport JsonValidators */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__json_schema_functions__ = __webpack_require__("../../../../../src/lib/src/shared/json-schema.functions.ts");
/* unused harmony reexport buildSchemaFromLayout */
/* unused harmony reexport buildSchemaFromData */
/* unused harmony reexport getFromSchema */
/* unused harmony reexport removeRecursiveReferences */
/* unused harmony reexport getInputType */
/* unused harmony reexport checkInlineType */
/* unused harmony reexport isInputRequired */
/* unused harmony reexport updateInputOptions */
/* unused harmony reexport getTitleMapFromOneOf */
/* unused harmony reexport getControlValidators */
/* unused harmony reexport resolveSchemaReferences */
/* unused harmony reexport getSubSchema */
/* unused harmony reexport combineAllOf */
/* unused harmony reexport fixRequiredArrayProperties */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__convert_schema_to_draft6_function__ = __webpack_require__("../../../../../src/lib/src/shared/convert-schema-to-draft6.function.ts");
/* unused harmony reexport convertSchemaToDraft6 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__merge_schemas_function__ = __webpack_require__("../../../../../src/lib/src/shared/merge-schemas.function.ts");
/* unused harmony reexport mergeSchemas */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__form_group_functions__ = __webpack_require__("../../../../../src/lib/src/shared/form-group.functions.ts");
/* unused harmony reexport buildFormGroupTemplate */
/* unused harmony reexport buildFormGroup */
/* unused harmony reexport formatFormData */
/* unused harmony reexport getControl */
/* unused harmony reexport setRequiredFields */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layout_functions__ = __webpack_require__("../../../../../src/lib/src/shared/layout.functions.ts");
/* unused harmony reexport buildLayout */
/* unused harmony reexport buildLayoutFromSchema */
/* unused harmony reexport mapLayout */
/* unused harmony reexport getLayoutNode */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__layout_functions__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__date_functions__ = __webpack_require__("../../../../../src/lib/src/shared/date.functions.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_9__date_functions__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_9__date_functions__["b"]; });
/* unused harmony reexport findDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__orderable_directive__ = __webpack_require__("../../../../../src/lib/src/shared/orderable.directive.ts");
/* unused harmony reexport OrderableDirective */













/***/ }),

/***/ "../../../../../src/lib/src/shared/json-schema.functions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = buildSchemaFromLayout;
/* harmony export (immutable) */ __webpack_exports__["a"] = buildSchemaFromData;
/* harmony export (immutable) */ __webpack_exports__["e"] = getFromSchema;
/* harmony export (immutable) */ __webpack_exports__["h"] = removeRecursiveReferences;
/* harmony export (immutable) */ __webpack_exports__["f"] = getInputType;
/* harmony export (immutable) */ __webpack_exports__["c"] = checkInlineType;
/* harmony export (immutable) */ __webpack_exports__["g"] = isInputRequired;
/* harmony export (immutable) */ __webpack_exports__["j"] = updateInputOptions;
/* unused harmony export getTitleMapFromOneOf */
/* harmony export (immutable) */ __webpack_exports__["d"] = getControlValidators;
/* harmony export (immutable) */ __webpack_exports__["i"] = resolveSchemaReferences;
/* unused harmony export getSubSchema */
/* unused harmony export combineAllOf */
/* unused harmony export fixRequiredArrayProperties */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validator_functions__ = __webpack_require__("../../../../../src/lib/src/shared/validator.functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility_functions__ = __webpack_require__("../../../../../src/lib/src/shared/utility.functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__merge_schemas_function__ = __webpack_require__("../../../../../src/lib/src/shared/merge-schemas.function.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__ = __webpack_require__("../../../../../src/lib/src/shared/jsonpointer.functions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};





function buildSchemaFromLayout(layout) {
    return;
}
function buildSchemaFromData(data, requireAllFields, isRoot) {
    if (requireAllFields === void 0) { requireAllFields = false; }
    if (isRoot === void 0) { isRoot = true; }
    var newSchema = {};
    var getFieldType = function (value) {
        var fieldType = Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["e" /* getType */])(value, 'strict');
        return { integer: 'number', null: 'string' }[fieldType] || fieldType;
    };
    var buildSubSchema = function (value) {
        return buildSchemaFromData(value, requireAllFields, false);
    };
    if (isRoot) {
        newSchema.$schema = 'http://json-schema.org/draft-06/schema#';
    }
    newSchema.type = getFieldType(data);
    if (newSchema.type === 'object') {
        newSchema.properties = {};
        if (requireAllFields) {
            newSchema.required = [];
        }
        for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
            var key = _a[_i];
            newSchema.properties[key] = buildSubSchema(data[key]);
            if (requireAllFields) {
                newSchema.required.push(key);
            }
        }
    }
    else if (newSchema.type === 'array') {
        newSchema.items = data.map(buildSubSchema);
        if ((new Set(data.map(getFieldType))).size === 1) {
            newSchema.items = newSchema.items.reduce(function (a, b) { return (__assign({}, a, b)); }, {});
        }
        if (requireAllFields) {
            newSchema.minItems = 1;
        }
    }
    return newSchema;
}
function getFromSchema(schema, dataPointer, returnType) {
    if (returnType === void 0) { returnType = 'schema'; }
    var dataPointerArray = __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].parse(dataPointer);
    if (dataPointerArray === null) {
        console.error("getFromSchema error: Invalid JSON Pointer: " + dataPointer);
        return null;
    }
    var subSchema = schema;
    var schemaPointer = [];
    var length = dataPointerArray.length;
    if (returnType.slice(0, 6) === 'parent') {
        dataPointerArray.length--;
    }
    for (var i = 0; i < length; ++i) {
        var parentSchema = subSchema;
        var key = dataPointerArray[i];
        var subSchemaFound = false;
        if (typeof subSchema !== 'object') {
            console.error("getFromSchema error: Unable to find \"" + key + "\" key in schema.");
            console.error(schema);
            console.error(dataPointer);
            return null;
        }
        if (subSchema.type === 'array' && (!isNaN(key) || key === '-')) {
            if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(subSchema, 'items')) {
                if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(subSchema.items)) {
                    subSchemaFound = true;
                    subSchema = subSchema.items;
                    schemaPointer.push('items');
                }
                else if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(subSchema.items)) {
                    if (!isNaN(key) && subSchema.items.length >= +key) {
                        subSchemaFound = true;
                        subSchema = subSchema.items[+key];
                        schemaPointer.push('items', key);
                    }
                }
            }
            if (!subSchemaFound && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(subSchema.additionalItems)) {
                subSchemaFound = true;
                subSchema = subSchema.additionalItems;
                schemaPointer.push('additionalItems');
            }
            else if (subSchema.additionalItems !== false) {
                subSchemaFound = true;
                subSchema = {};
                schemaPointer.push('additionalItems');
            }
        }
        else if (subSchema.type === 'object') {
            if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(subSchema.properties) && Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(subSchema.properties, key)) {
                subSchemaFound = true;
                subSchema = subSchema.properties[key];
                schemaPointer.push('properties', key);
            }
            else if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(subSchema.additionalProperties)) {
                subSchemaFound = true;
                subSchema = subSchema.additionalProperties;
                schemaPointer.push('additionalProperties');
            }
            else if (subSchema.additionalProperties !== false) {
                subSchemaFound = true;
                subSchema = {};
                schemaPointer.push('additionalProperties');
            }
        }
        if (!subSchemaFound) {
            console.error("getFromSchema error: Unable to find \"" + key + "\" item in schema.");
            console.error(schema);
            console.error(dataPointer);
            return;
        }
    }
    return returnType.slice(-7) === 'Pointer' ? schemaPointer : subSchema;
}
function removeRecursiveReferences(pointer, recursiveRefMap, arrayMap) {
    if (arrayMap === void 0) { arrayMap = new Map(); }
    if (!pointer) {
        return '';
    }
    var genericPointer = __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].toGenericPointer(__WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].compile(pointer), arrayMap);
    if (genericPointer.indexOf('/') === -1) {
        return genericPointer;
    }
    var possibleReferences = true;
    while (possibleReferences) {
        possibleReferences = false;
        recursiveRefMap.forEach(function (toPointer, fromPointer) {
            if (__WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].isSubPointer(toPointer, fromPointer)) {
                while (__WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].isSubPointer(fromPointer, genericPointer, true)) {
                    genericPointer = __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].toGenericPointer(toPointer + genericPointer.slice(fromPointer.length), arrayMap);
                    possibleReferences = true;
                }
            }
        });
    }
    return genericPointer;
}
function getInputType(schema, layoutNode) {
    if (layoutNode === void 0) { layoutNode = null; }
    var controlType = __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].getFirst([
        [schema, '/x-schema-form/type'],
        [schema, '/x-schema-form/widget/component'],
        [schema, '/x-schema-form/widget'],
        [schema, '/widget/component'],
        [schema, '/widget']
    ]);
    if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["r" /* isString */])(controlType)) {
        return checkInlineType(controlType, schema, layoutNode);
    }
    var schemaType = schema.type;
    if (schemaType) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(schemaType)) {
            schemaType =
                Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["g" /* inArray */])('object', schemaType) && Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema, 'properties') ? 'object' :
                    Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["g" /* inArray */])('array', schemaType) && Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema, 'items') ? 'array' :
                        Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["g" /* inArray */])('array', schemaType) && Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema, 'additionalItems') ? 'array' :
                            Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["g" /* inArray */])('string', schemaType) ? 'string' :
                                Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["g" /* inArray */])('number', schemaType) ? 'number' :
                                    Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["g" /* inArray */])('integer', schemaType) ? 'integer' :
                                        Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["g" /* inArray */])('boolean', schemaType) ? 'boolean' : 'unknown';
        }
        if (schemaType === 'boolean') {
            return 'checkbox';
        }
        if (schemaType === 'object') {
            if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema, 'properties') || Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema, 'additionalProperties')) {
                return 'section';
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema, '$ref')) {
                return '$ref';
            }
        }
        if (schemaType === 'array') {
            var itemsObject = __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].getFirst([
                [schema, '/items'],
                [schema, '/additionalItems']
            ]) || {};
            return Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(itemsObject, 'enum') && schema.maxItems !== 1 ?
                checkInlineType('checkboxes', schema, layoutNode) : 'array';
        }
        if (schemaType === 'null') {
            return 'none';
        }
        if (__WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].has(layoutNode, '/options/titleMap') ||
            Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema, 'enum') || getTitleMapFromOneOf(schema, null, true)) {
            return 'select';
        }
        if (schemaType === 'number' || schemaType === 'integer') {
            return (schemaType === 'integer' || Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema, 'multipleOf')) &&
                Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema, 'maximum') && Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema, 'minimum') ? 'range' : schemaType;
        }
        if (schemaType === 'string') {
            return {
                'color': 'color',
                'date': 'date',
                'date-time': 'datetime-local',
                'email': 'email',
                'uri': 'url',
            }[schema.format] || 'text';
        }
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema, '$ref')) {
        return '$ref';
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(schema.oneOf) || Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(schema.anyOf)) {
        return 'one-of';
    }
    console.error("getInputType error: Unable to determine input type for " + schemaType);
    console.error('schema', schema);
    if (layoutNode) {
        console.error('layoutNode', layoutNode);
    }
    return 'none';
}
function checkInlineType(controlType, schema, layoutNode) {
    if (layoutNode === void 0) { layoutNode = null; }
    if (!Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["r" /* isString */])(controlType) || (controlType.slice(0, 8) !== 'checkbox' && controlType.slice(0, 5) !== 'radio')) {
        return controlType;
    }
    if (__WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].getFirst([
        [layoutNode, '/inline'],
        [layoutNode, '/options/inline'],
        [schema, '/inline'],
        [schema, '/x-schema-form/inline'],
        [schema, '/x-schema-form/options/inline'],
        [schema, '/x-schema-form/widget/inline'],
        [schema, '/x-schema-form/widget/component/inline'],
        [schema, '/x-schema-form/widget/component/options/inline'],
        [schema, '/widget/inline'],
        [schema, '/widget/component/inline'],
        [schema, '/widget/component/options/inline'],
    ]) === true) {
        return controlType.slice(0, 5) === 'radio' ?
            'radios-inline' : 'checkboxes-inline';
    }
    else {
        return controlType;
    }
}
function isInputRequired(schema, schemaPointer) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(schema)) {
        console.error('isInputRequired error: Input schema must be an object.');
        return false;
    }
    var listPointerArray = __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].parse(schemaPointer);
    if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(listPointerArray)) {
        if (!listPointerArray.length) {
            return schema.required === true;
        }
        var keyName = listPointerArray.pop();
        var nextToLastKey = listPointerArray[listPointerArray.length - 1];
        if (['properties', 'additionalProperties', 'patternProperties', 'items', 'additionalItems']
            .includes(nextToLastKey)) {
            listPointerArray.pop();
        }
        var parentSchema = __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].get(schema, listPointerArray) || {};
        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(parentSchema.required)) {
            return parentSchema.required.includes(keyName);
        }
        if (parentSchema.type === 'array') {
            return Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(parentSchema, 'minItems') &&
                Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["n" /* isNumber */])(keyName) &&
                +parentSchema.minItems > +keyName;
        }
    }
    return false;
}
;
function updateInputOptions(layoutNode, schema, jsf) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(layoutNode) || !Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(layoutNode.options)) {
        return;
    }
    var newOptions = {};
    var fixUiKeys = function (key) { return key.slice(0, 3).toLowerCase() === 'ui:' ? key.slice(3) : key; };
    Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["h" /* mergeFilteredObject */])(newOptions, jsf.formOptions.defautWidgetOptions, [], fixUiKeys);
    [[__WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].get(schema, '/ui:widget/options'), []],
        [__WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].get(schema, '/ui:widget'), []],
        [schema, [
                'additionalProperties', 'additionalItems', 'properties', 'items',
                'required', 'type', 'x-schema-form', '$ref'
            ]],
        [__WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].get(schema, '/x-schema-form/options'), []],
        [__WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].get(schema, '/x-schema-form'), ['items', 'options']],
        [layoutNode, [
                '_id', '$ref', 'arrayItem', 'arrayItemType', 'dataPointer', 'dataType',
                'items', 'key', 'name', 'options', 'recursiveReference', 'type', 'widget'
            ]],
        [layoutNode.options, []],
    ].forEach(function (_a) {
        var object = _a[0], excludeKeys = _a[1];
        return Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["h" /* mergeFilteredObject */])(newOptions, object, excludeKeys, fixUiKeys);
    });
    if (!Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(newOptions, 'titleMap')) {
        var newTitleMap = null;
        newTitleMap = getTitleMapFromOneOf(schema, newOptions.flatList);
        if (newTitleMap) {
            newOptions.titleMap = newTitleMap;
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(newOptions, 'titleMap') && !Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(newOptions, 'enum') && Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema, 'items')) {
            if (__WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].has(schema, '/items/titleMap')) {
                newOptions.titleMap = schema.items.titleMap;
            }
            else if (__WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].has(schema, '/items/enum')) {
                newOptions.enum = schema.items.enum;
                if (!Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(newOptions, 'enumNames') && __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].has(schema, '/items/enumNames')) {
                    newOptions.enumNames = schema.items.enumNames;
                }
            }
            else if (__WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].has(schema, '/items/oneOf')) {
                newTitleMap = getTitleMapFromOneOf(schema.items, newOptions.flatList);
                if (newTitleMap) {
                    newOptions.titleMap = newTitleMap;
                }
            }
        }
    }
    if (schema.type === 'integer' && !Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["f" /* hasValue */])(newOptions.multipleOf)) {
        newOptions.multipleOf = 1;
    }
    if (__WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].has(newOptions, '/autocomplete/source')) {
        newOptions.typeahead = newOptions.autocomplete;
    }
    else if (__WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].has(newOptions, '/tagsinput/source')) {
        newOptions.typeahead = newOptions.tagsinput;
    }
    else if (__WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].has(newOptions, '/tagsinput/typeahead/source')) {
        newOptions.typeahead = newOptions.tagsinput.typeahead;
    }
    layoutNode.options = newOptions;
}
function getTitleMapFromOneOf(schema, flatList, validateOnly) {
    if (schema === void 0) { schema = {}; }
    if (flatList === void 0) { flatList = null; }
    if (validateOnly === void 0) { validateOnly = false; }
    var titleMap = null;
    var oneOf = schema.oneOf || schema.anyOf || null;
    if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(oneOf) && oneOf.every(function (item) { return item.title; })) {
        if (oneOf.every(function (item) { return Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(item.enum) && item.enum.length === 1; })) {
            if (validateOnly) {
                return true;
            }
            titleMap = oneOf.map(function (item) { return ({ name: item.title, value: item.enum[0] }); });
        }
        else if (oneOf.every(function (item) { return item.const; })) {
            if (validateOnly) {
                return true;
            }
            titleMap = oneOf.map(function (item) { return ({ name: item.title, value: item.const }); });
        }
        if (flatList !== false && (titleMap || [])
            .filter(function (title) { return ((title || {}).name || '').indexOf(': '); }).length > 1) {
            var newTitleMap_1 = titleMap.map(function (title) {
                var _a = title.name.split(/: (.+)/), group = _a[0], name = _a[1];
                return group && name ? __assign({}, title, { group: group, name: name }) : title;
            });
            if (flatList === true || newTitleMap_1.some(function (title, index) { return index &&
                Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(title, 'group') && title.group === newTitleMap_1[index - 1].group; })) {
                titleMap = newTitleMap_1;
            }
        }
    }
    return validateOnly ? false : titleMap;
}
function getControlValidators(schema) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(schema)) {
        return null;
    }
    var validators = {};
    if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema, 'type')) {
        switch (schema.type) {
            case 'string':
                Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["e" /* forEach */])(['pattern', 'format', 'minLength', 'maxLength'], function (prop) {
                    if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema, prop)) {
                        validators[prop] = [schema[prop]];
                    }
                });
                break;
            case 'number':
            case 'integer':
                Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["e" /* forEach */])(['Minimum', 'Maximum'], function (ucLimit) {
                    var eLimit = 'exclusive' + ucLimit;
                    var limit = ucLimit.toLowerCase();
                    if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema, limit)) {
                        var exclusive = Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema, eLimit) && schema[eLimit] === true;
                        validators[limit] = [schema[limit], exclusive];
                    }
                });
                Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["e" /* forEach */])(['multipleOf', 'type'], function (prop) {
                    if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema, prop)) {
                        validators[prop] = [schema[prop]];
                    }
                });
                break;
            case 'object':
                Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["e" /* forEach */])(['minProperties', 'maxProperties', 'dependencies'], function (prop) {
                    if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema, prop)) {
                        validators[prop] = [schema[prop]];
                    }
                });
                break;
            case 'array':
                Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["e" /* forEach */])(['minItems', 'maxItems', 'uniqueItems'], function (prop) {
                    if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema, prop)) {
                        validators[prop] = [schema[prop]];
                    }
                });
                break;
        }
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema, 'enum')) {
        validators.enum = [schema.enum];
    }
    return validators;
}
function resolveSchemaReferences(schema, schemaRefLibrary, schemaRecursiveRefMap, dataRecursiveRefMap, arrayMap) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(schema)) {
        console.error('resolveSchemaReferences error: schema must be an object.');
        return;
    }
    var refLinks = new Set();
    var refMapSet = new Set();
    var refMap = new Map();
    var recursiveRefMap = new Map();
    var refLibrary = {};
    __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].forEachDeep(schema, function (subSchema, subSchemaPointer) {
        if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(subSchema, '$ref') && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["r" /* isString */])(subSchema['$ref'])) {
            var refPointer = __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].compile(subSchema['$ref']);
            refLinks.add(refPointer);
            refMapSet.add(subSchemaPointer + '~~' + refPointer);
            refMap.set(subSchemaPointer, refPointer);
        }
    });
    refLinks.forEach(function (ref) { return refLibrary[ref] = getSubSchema(schema, ref); });
    var checkRefLinks = true;
    while (checkRefLinks) {
        checkRefLinks = false;
        Array.from(refMap).forEach(function (_a) {
            var fromRef1 = _a[0], toRef1 = _a[1];
            return Array.from(refMap)
                .filter(function (_a) {
                var fromRef2 = _a[0], toRef2 = _a[1];
                return __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].isSubPointer(toRef1, fromRef2, true) &&
                    !__WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].isSubPointer(toRef2, toRef1, true) &&
                    !refMapSet.has(fromRef1 + fromRef2.slice(toRef1.length) + '~~' + toRef2);
            })
                .forEach(function (_a) {
                var fromRef2 = _a[0], toRef2 = _a[1];
                refMapSet.add(fromRef1 + fromRef2.slice(toRef1.length) + '~~' + toRef2);
                checkRefLinks = true;
            });
        });
    }
    Array.from(refMapSet)
        .map(function (refLink) { return refLink.split('~~'); })
        .filter(function (_a) {
        var fromRef = _a[0], toRef = _a[1];
        return __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].isSubPointer(toRef, fromRef);
    })
        .forEach(function (_a) {
        var fromRef = _a[0], toRef = _a[1];
        return recursiveRefMap.set(fromRef, toRef);
    });
    Array.from(refMap)
        .filter(function (_a) {
        var fromRef1 = _a[0], toRef1 = _a[1];
        return Array.from(recursiveRefMap.keys())
            .every(function (fromRef2) { return !__WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].isSubPointer(fromRef1, fromRef2, true); });
    })
        .forEach(function (_a) {
        var fromRef1 = _a[0], toRef1 = _a[1];
        return Array.from(recursiveRefMap)
            .filter(function (_a) {
            var fromRef2 = _a[0], toRef2 = _a[1];
            return !recursiveRefMap.has(fromRef1 + fromRef2.slice(toRef1.length)) &&
                __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].isSubPointer(toRef1, fromRef2, true) &&
                !__WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].isSubPointer(toRef1, fromRef1, true);
        })
            .forEach(function (_a) {
            var fromRef2 = _a[0], toRef2 = _a[1];
            return recursiveRefMap.set(fromRef1 + fromRef2.slice(toRef1.length), fromRef1 + toRef2.slice(toRef1.length));
        });
    });
    var compiledSchema = __assign({}, schema);
    delete compiledSchema.definitions;
    compiledSchema =
        getSubSchema(compiledSchema, '', refLibrary, recursiveRefMap);
    __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].forEachDeep(compiledSchema, function (subSchema, subSchemaPointer) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["r" /* isString */])(subSchema['$ref'])) {
            var refPointer = __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].compile(subSchema['$ref']);
            if (!__WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].isSubPointer(refPointer, subSchemaPointer, true)) {
                refPointer = removeRecursiveReferences(subSchemaPointer, recursiveRefMap);
                __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].set(compiledSchema, subSchemaPointer, { $ref: "#" + refPointer });
            }
            if (!Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schemaRefLibrary, 'refPointer')) {
                schemaRefLibrary[refPointer] = !refPointer.length ? compiledSchema :
                    getSubSchema(compiledSchema, refPointer, schemaRefLibrary, recursiveRefMap);
            }
            if (!schemaRecursiveRefMap.has(subSchemaPointer)) {
                schemaRecursiveRefMap.set(subSchemaPointer, refPointer);
            }
            var fromDataRef = __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].toDataPointer(subSchemaPointer, compiledSchema);
            if (!dataRecursiveRefMap.has(fromDataRef)) {
                var toDataRef = __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].toDataPointer(refPointer, compiledSchema);
                dataRecursiveRefMap.set(fromDataRef, toDataRef);
            }
        }
        if (subSchema.type === 'array' &&
            (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(subSchema, 'items') || Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(subSchema, 'additionalItems'))) {
            var dataPointer = __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].toDataPointer(subSchemaPointer, compiledSchema);
            if (!arrayMap.has(dataPointer)) {
                var tupleItems = Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(subSchema.items) ? subSchema.items.length : 0;
                arrayMap.set(dataPointer, tupleItems);
            }
        }
    }, true);
    return compiledSchema;
}
function getSubSchema(schema, pointer, schemaRefLibrary, schemaRecursiveRefMap, usedPointers) {
    if (schemaRefLibrary === void 0) { schemaRefLibrary = null; }
    if (schemaRecursiveRefMap === void 0) { schemaRecursiveRefMap = null; }
    if (usedPointers === void 0) { usedPointers = []; }
    if (!schemaRefLibrary || !schemaRecursiveRefMap) {
        return __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].getCopy(schema, pointer);
    }
    if (typeof pointer !== 'string') {
        pointer = __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].compile(pointer);
    }
    usedPointers = usedPointers.concat([pointer]);
    var newSchema = null;
    if (pointer === '') {
        newSchema = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](schema);
    }
    else {
        var shortPointer = removeRecursiveReferences(pointer, schemaRecursiveRefMap);
        if (shortPointer !== pointer) {
            usedPointers = usedPointers.concat([shortPointer]);
        }
        newSchema = __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].getFirstCopy([
            [schemaRefLibrary, [shortPointer]],
            [schema, pointer],
            [schema, shortPointer]
        ]);
    }
    return __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].forEachDeepCopy(newSchema, function (subSchema, subPointer) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(subSchema)) {
            if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["r" /* isString */])(subSchema.$ref)) {
                var refPointer_1 = __WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].compile(subSchema.$ref);
                if (refPointer_1.length && usedPointers.every(function (ptr) {
                    return !__WEBPACK_IMPORTED_MODULE_4__jsonpointer_functions__["a" /* JsonPointer */].isSubPointer(refPointer_1, ptr, true);
                })) {
                    var refSchema = getSubSchema(schema, refPointer_1, schemaRefLibrary, schemaRecursiveRefMap, usedPointers);
                    if (Object.keys(subSchema).length === 1) {
                        return refSchema;
                    }
                    else {
                        var extraKeys = __assign({}, subSchema);
                        delete extraKeys.$ref;
                        return Object(__WEBPACK_IMPORTED_MODULE_3__merge_schemas_function__["a" /* mergeSchemas */])(refSchema, extraKeys);
                    }
                }
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(subSchema.allOf)) {
                return combineAllOf(subSchema);
            }
            if (subSchema.type === 'array' && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(subSchema.required)) {
                return fixRequiredArrayProperties(subSchema);
            }
        }
        return subSchema;
    }, true, pointer);
}
function combineAllOf(schema) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(schema) || !Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(schema.allOf)) {
        return schema;
    }
    var mergedSchema = __WEBPACK_IMPORTED_MODULE_3__merge_schemas_function__["a" /* mergeSchemas */].apply(void 0, schema.allOf);
    if (Object.keys(schema).length > 1) {
        var extraKeys = __assign({}, schema);
        delete extraKeys.allOf;
        mergedSchema = Object(__WEBPACK_IMPORTED_MODULE_3__merge_schemas_function__["a" /* mergeSchemas */])(mergedSchema, extraKeys);
    }
    return mergedSchema;
}
function fixRequiredArrayProperties(schema) {
    if (schema.type === 'array' && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(schema.required)) {
        var itemsObject_1 = Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema.items, 'properties') ? 'items' :
            Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema.additionalItems, 'properties') ? 'additionalItems' : null;
        if (itemsObject_1 && !Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema[itemsObject_1], 'required') && (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema[itemsObject_1], 'additionalProperties') ||
            schema.required.every(function (key) { return Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema[itemsObject_1].properties, key); }))) {
            schema = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](schema);
            schema[itemsObject_1].required = schema.required;
            delete schema.required;
        }
    }
    return schema;
}


/***/ }),

/***/ "../../../../../src/lib/src/shared/json.validators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonValidators; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validator_functions__ = __webpack_require__("../../../../../src/lib/src/shared/validator.functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utility_functions__ = __webpack_require__("../../../../../src/lib/src/shared/utility.functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__format_regex_constants__ = __webpack_require__("../../../../../src/lib/src/shared/format-regex.constants.ts");






var JsonValidators = (function () {
    function JsonValidators() {
    }
    JsonValidators.required = function (input) {
        if (input === undefined) {
            input = true;
        }
        switch (input) {
            case true:
                return function (control, invert) {
                    if (invert === void 0) { invert = false; }
                    if (invert) {
                        return null;
                    }
                    return Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["f" /* hasValue */])(control.value) ? null : { 'required': true };
                };
            case false:
                return JsonValidators.nullValidator;
            default:
                return Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["f" /* hasValue */])(input.value) ? null : { 'required': true };
        }
    };
    ;
    JsonValidators.type = function (requiredType) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["f" /* hasValue */])(requiredType)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["l" /* isEmpty */])(control.value)) {
                return null;
            }
            var currentValue = control.value;
            var isValid = Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["h" /* isArray */])(requiredType) ?
                requiredType.some(function (type) { return Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["s" /* isType */])(currentValue, type); }) :
                Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["s" /* isType */])(currentValue, requiredType);
            return Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["w" /* xor */])(isValid, invert) ?
                null : { 'type': { requiredType: requiredType, currentValue: currentValue } };
        };
    };
    JsonValidators.enum = function (allowedValues) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["h" /* isArray */])(allowedValues)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["l" /* isEmpty */])(control.value)) {
                return null;
            }
            var currentValue = control.value;
            var isEqual = function (enumValue, inputValue) {
                return enumValue === inputValue ||
                    (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["n" /* isNumber */])(enumValue) && +inputValue === +enumValue) ||
                    (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["i" /* isBoolean */])(enumValue, 'strict') &&
                        Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["t" /* toJavaScriptType */])(inputValue, 'boolean') === enumValue) ||
                    (enumValue === null && !Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["f" /* hasValue */])(inputValue)) ||
                    __WEBPACK_IMPORTED_MODULE_2_lodash__["isEqual"](enumValue, inputValue);
            };
            var isValid = Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["h" /* isArray */])(currentValue) ?
                currentValue.every(function (inputValue) { return allowedValues.some(function (enumValue) {
                    return isEqual(enumValue, inputValue);
                }); }) :
                allowedValues.some(function (enumValue) { return isEqual(enumValue, currentValue); });
            return Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["w" /* xor */])(isValid, invert) ?
                null : { 'enum': { allowedValues: allowedValues, currentValue: currentValue } };
        };
    };
    JsonValidators.const = function (requiredValue) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["f" /* hasValue */])(requiredValue)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["l" /* isEmpty */])(control.value)) {
                return null;
            }
            var currentValue = control.value;
            var isEqual = function (constValue, inputValue) {
                return constValue === inputValue ||
                    Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["n" /* isNumber */])(constValue) && +inputValue === +constValue ||
                    Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["i" /* isBoolean */])(constValue, 'strict') &&
                        Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["t" /* toJavaScriptType */])(inputValue, 'boolean') === constValue ||
                    constValue === null && !Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["f" /* hasValue */])(inputValue);
            };
            var isValid = isEqual(requiredValue, currentValue);
            return Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["w" /* xor */])(isValid, invert) ?
                null : { 'const': { requiredValue: requiredValue, currentValue: currentValue } };
        };
    };
    JsonValidators.minLength = function (minimumLength) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["f" /* hasValue */])(minimumLength)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["l" /* isEmpty */])(control.value)) {
                return null;
            }
            var currentLength = Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["r" /* isString */])(control.value) ? control.value.length : 0;
            var isValid = currentLength >= minimumLength;
            return Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["w" /* xor */])(isValid, invert) ?
                null : { 'minLength': { minimumLength: minimumLength, currentLength: currentLength } };
        };
    };
    ;
    JsonValidators.maxLength = function (maximumLength) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["f" /* hasValue */])(maximumLength)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            var currentLength = Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["r" /* isString */])(control.value) ? control.value.length : 0;
            var isValid = currentLength <= maximumLength;
            return Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["w" /* xor */])(isValid, invert) ?
                null : { 'maxLength': { maximumLength: maximumLength, currentLength: currentLength } };
        };
    };
    ;
    JsonValidators.pattern = function (pattern, wholeString) {
        if (wholeString === void 0) { wholeString = false; }
        if (!Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["f" /* hasValue */])(pattern)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["l" /* isEmpty */])(control.value)) {
                return null;
            }
            var regex;
            var requiredPattern;
            if (typeof pattern === 'string') {
                requiredPattern = (wholeString) ? "^" + pattern + "$" : pattern;
                regex = new RegExp(requiredPattern);
            }
            else {
                requiredPattern = pattern.toString();
                regex = pattern;
            }
            var currentValue = control.value;
            var isValid = Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["r" /* isString */])(currentValue) ? regex.test(currentValue) : false;
            return Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["w" /* xor */])(isValid, invert) ?
                null : { 'pattern': { requiredPattern: requiredPattern, currentValue: currentValue } };
        };
    };
    JsonValidators.format = function (requiredFormat) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["f" /* hasValue */])(requiredFormat)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["l" /* isEmpty */])(control.value)) {
                return null;
            }
            var isValid;
            var currentValue = control.value;
            if (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["r" /* isString */])(currentValue)) {
                var formatTest = __WEBPACK_IMPORTED_MODULE_5__format_regex_constants__["a" /* jsonSchemaFormatTests */][requiredFormat];
                if (typeof formatTest === 'object') {
                    isValid = formatTest.test(currentValue);
                }
                else if (typeof formatTest === 'function') {
                    isValid = formatTest(currentValue);
                }
                else {
                    console.error("format validator error: \"" + requiredFormat + "\" is not a recognized format.");
                    isValid = true;
                }
            }
            else {
                isValid = ['date', 'time', 'date-time'].includes(requiredFormat) &&
                    Object.prototype.toString.call(currentValue) === '[object Date]';
            }
            return Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["w" /* xor */])(isValid, invert) ?
                null : { 'format': { requiredFormat: requiredFormat, currentValue: currentValue } };
        };
    };
    JsonValidators.minimum = function (minimumValue) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["f" /* hasValue */])(minimumValue)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["l" /* isEmpty */])(control.value)) {
                return null;
            }
            var currentValue = control.value;
            var isValid = !Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["n" /* isNumber */])(currentValue) || currentValue >= minimumValue;
            return Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["w" /* xor */])(isValid, invert) ?
                null : { 'minimum': { minimumValue: minimumValue, currentValue: currentValue } };
        };
    };
    JsonValidators.exclusiveMinimum = function (exclusiveMinimumValue) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["f" /* hasValue */])(exclusiveMinimumValue)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["l" /* isEmpty */])(control.value)) {
                return null;
            }
            var currentValue = control.value;
            var isValid = !Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["n" /* isNumber */])(currentValue) || +currentValue < exclusiveMinimumValue;
            return Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["w" /* xor */])(isValid, invert) ?
                null : { 'exclusiveMinimum': { exclusiveMinimumValue: exclusiveMinimumValue, currentValue: currentValue } };
        };
    };
    JsonValidators.maximum = function (maximumValue) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["f" /* hasValue */])(maximumValue)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["l" /* isEmpty */])(control.value)) {
                return null;
            }
            var currentValue = control.value;
            var isValid = !Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["n" /* isNumber */])(currentValue) || +currentValue <= maximumValue;
            return Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["w" /* xor */])(isValid, invert) ?
                null : { 'maximum': { maximumValue: maximumValue, currentValue: currentValue } };
        };
    };
    JsonValidators.exclusiveMaximum = function (exclusiveMaximumValue) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["f" /* hasValue */])(exclusiveMaximumValue)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["l" /* isEmpty */])(control.value)) {
                return null;
            }
            var currentValue = control.value;
            var isValid = !Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["n" /* isNumber */])(currentValue) || +currentValue < exclusiveMaximumValue;
            return Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["w" /* xor */])(isValid, invert) ?
                null : { 'exclusiveMaximum': { exclusiveMaximumValue: exclusiveMaximumValue, currentValue: currentValue } };
        };
    };
    JsonValidators.multipleOf = function (multipleOfValue) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["f" /* hasValue */])(multipleOfValue)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["l" /* isEmpty */])(control.value)) {
                return null;
            }
            var currentValue = control.value;
            var isValid = Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["n" /* isNumber */])(currentValue) &&
                currentValue % multipleOfValue === 0;
            return Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["w" /* xor */])(isValid, invert) ?
                null : { 'multipleOf': { multipleOfValue: multipleOfValue, currentValue: currentValue } };
        };
    };
    JsonValidators.minProperties = function (minimumProperties) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["f" /* hasValue */])(minimumProperties)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["l" /* isEmpty */])(control.value)) {
                return null;
            }
            var currentProperties = Object.keys(control.value).length || 0;
            var isValid = currentProperties >= minimumProperties;
            return Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["w" /* xor */])(isValid, invert) ?
                null : { 'minProperties': { minimumProperties: minimumProperties, currentProperties: currentProperties } };
        };
    };
    JsonValidators.maxProperties = function (maximumProperties) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["f" /* hasValue */])(maximumProperties)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            var currentProperties = Object.keys(control.value).length || 0;
            var isValid = currentProperties <= maximumProperties;
            return Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["w" /* xor */])(isValid, invert) ?
                null : { 'maxProperties': { maximumProperties: maximumProperties, currentProperties: currentProperties } };
        };
    };
    JsonValidators.dependencies = function (dependencies) {
        if (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["e" /* getType */])(dependencies) !== 'object' || Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["l" /* isEmpty */])(dependencies)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["l" /* isEmpty */])(control.value)) {
                return null;
            }
            var allErrors = Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["d" /* _mergeObjects */])(Object(__WEBPACK_IMPORTED_MODULE_4__utility_functions__["f" /* forEachCopy */])(dependencies, function (value, requiringField) {
                if (!Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["f" /* hasValue */])(control.value[requiringField])) {
                    return null;
                }
                var requiringFieldErrors = {};
                var requiredFields;
                var properties = {};
                if (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["e" /* getType */])(dependencies[requiringField]) === 'array') {
                    requiredFields = dependencies[requiringField];
                }
                else if (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["e" /* getType */])(dependencies[requiringField]) === 'object') {
                    requiredFields = dependencies[requiringField]['required'] || [];
                    properties = dependencies[requiringField]['properties'] || {};
                }
                for (var _i = 0, requiredFields_1 = requiredFields; _i < requiredFields_1.length; _i++) {
                    var requiredField = requiredFields_1[_i];
                    if (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["w" /* xor */])(!Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["f" /* hasValue */])(control.value[requiredField]), invert)) {
                        requiringFieldErrors[requiredField] = { 'required': true };
                    }
                }
                requiringFieldErrors = Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["d" /* _mergeObjects */])(requiringFieldErrors, Object(__WEBPACK_IMPORTED_MODULE_4__utility_functions__["f" /* forEachCopy */])(properties, function (requirements, requiredField) {
                    var requiredFieldErrors = Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["d" /* _mergeObjects */])(Object(__WEBPACK_IMPORTED_MODULE_4__utility_functions__["f" /* forEachCopy */])(requirements, function (requirement, parameter) {
                        var validator = null;
                        if (requirement === 'maximum' || requirement === 'minimum') {
                            var exclusive = !!requirements['exclusiveM' + requirement.slice(1)];
                            validator = JsonValidators[requirement](parameter, exclusive);
                        }
                        else if (typeof JsonValidators[requirement] === 'function') {
                            validator = JsonValidators[requirement](parameter);
                        }
                        return !Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["k" /* isDefined */])(validator) ?
                            null : validator(control.value[requiredField]);
                    }));
                    return Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["l" /* isEmpty */])(requiredFieldErrors) ?
                        null : (_a = {}, _a[requiredField] = requiredFieldErrors, _a);
                    var _a;
                }));
                return Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["l" /* isEmpty */])(requiringFieldErrors) ?
                    null : (_a = {}, _a[requiringField] = requiringFieldErrors, _a);
                var _a;
            }));
            return Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["l" /* isEmpty */])(allErrors) ? null : allErrors;
        };
    };
    JsonValidators.minItems = function (minimumItems) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["f" /* hasValue */])(minimumItems)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["l" /* isEmpty */])(control.value)) {
                return null;
            }
            var currentItems = Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["h" /* isArray */])(control.value) ? control.value.length : 0;
            var isValid = currentItems >= minimumItems;
            return Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["w" /* xor */])(isValid, invert) ?
                null : { 'minItems': { minimumItems: minimumItems, currentItems: currentItems } };
        };
    };
    JsonValidators.maxItems = function (maximumItems) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["f" /* hasValue */])(maximumItems)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            var currentItems = Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["h" /* isArray */])(control.value) ? control.value.length : 0;
            var isValid = currentItems <= maximumItems;
            return Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["w" /* xor */])(isValid, invert) ?
                null : { 'maxItems': { maximumItems: maximumItems, currentItems: currentItems } };
        };
    };
    JsonValidators.uniqueItems = function (unique) {
        if (unique === void 0) { unique = true; }
        if (!unique) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["l" /* isEmpty */])(control.value)) {
                return null;
            }
            var sorted = control.value.slice().sort();
            var duplicateItems = [];
            for (var i = 1; i < sorted.length; i++) {
                if (sorted[i - 1] === sorted[i] && duplicateItems.includes(sorted[i])) {
                    duplicateItems.push(sorted[i]);
                }
            }
            var isValid = !duplicateItems.length;
            return Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["w" /* xor */])(isValid, invert) ?
                null : { 'uniqueItems': { duplicateItems: duplicateItems } };
        };
    };
    JsonValidators.contains = function (requiredItem) {
        if (requiredItem === void 0) { requiredItem = true; }
        if (!requiredItem) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["l" /* isEmpty */])(control.value) || !Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["h" /* isArray */])(control.value)) {
                return null;
            }
            var currentItems = control.value;
            var isValid = true;
            return Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["w" /* xor */])(isValid, invert) ?
                null : { 'contains': { requiredItem: requiredItem, currentItems: currentItems } };
        };
    };
    JsonValidators.nullValidator = function (control) {
        return null;
    };
    JsonValidators.composeAnyOf = function (validators) {
        if (!validators) {
            return null;
        }
        var presentValidators = validators.filter(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["k" /* isDefined */]);
        if (presentValidators.length === 0) {
            return null;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            var arrayOfErrors = Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["b" /* _executeValidators */])(control, presentValidators, invert).filter(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["k" /* isDefined */]);
            var isValid = validators.length > arrayOfErrors.length;
            return Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["w" /* xor */])(isValid, invert) ?
                null : __WEBPACK_IMPORTED_MODULE_3__validator_functions__["d" /* _mergeObjects */].apply(void 0, arrayOfErrors.concat([{ 'anyOf': !invert }]));
        };
    };
    JsonValidators.composeOneOf = function (validators) {
        if (!validators) {
            return null;
        }
        var presentValidators = validators.filter(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["k" /* isDefined */]);
        if (presentValidators.length === 0) {
            return null;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            var arrayOfErrors = Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["b" /* _executeValidators */])(control, presentValidators);
            var validControls = validators.length - arrayOfErrors.filter(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["k" /* isDefined */]).length;
            var isValid = validControls === 1;
            if (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["w" /* xor */])(isValid, invert)) {
                return null;
            }
            var arrayOfValids = Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["b" /* _executeValidators */])(control, presentValidators, invert);
            return __WEBPACK_IMPORTED_MODULE_3__validator_functions__["d" /* _mergeObjects */].apply(void 0, arrayOfErrors.concat(arrayOfValids, [{ 'oneOf': !invert }]));
        };
    };
    JsonValidators.composeAllOf = function (validators) {
        if (!validators) {
            return null;
        }
        var presentValidators = validators.filter(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["k" /* isDefined */]);
        if (presentValidators.length === 0) {
            return null;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            var combinedErrors = Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["c" /* _mergeErrors */])(Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["b" /* _executeValidators */])(control, presentValidators, invert));
            var isValid = combinedErrors === null;
            return (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["w" /* xor */])(isValid, invert)) ?
                null : Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["d" /* _mergeObjects */])(combinedErrors, { 'allOf': !invert });
        };
    };
    JsonValidators.composeNot = function (validator) {
        if (!validator) {
            return null;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["l" /* isEmpty */])(control.value)) {
                return null;
            }
            var error = validator(control, !invert);
            var isValid = error === null;
            return (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["w" /* xor */])(isValid, invert)) ?
                null : Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["d" /* _mergeObjects */])(error, { 'not': !invert });
        };
    };
    JsonValidators.compose = function (validators) {
        if (!validators) {
            return null;
        }
        var presentValidators = validators.filter(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["k" /* isDefined */]);
        if (presentValidators.length === 0) {
            return null;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            return Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["c" /* _mergeErrors */])(Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["b" /* _executeValidators */])(control, presentValidators, invert));
        };
    };
    ;
    JsonValidators.composeAsync = function (validators) {
        if (!validators) {
            return null;
        }
        var presentValidators = validators.filter(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["k" /* isDefined */]);
        if (presentValidators.length === 0) {
            return null;
        }
        return function (control) {
            var observables = Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["a" /* _executeAsyncValidators */])(control, presentValidators).map(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["u" /* toObservable */]);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_operator_map__["a" /* map */].call(Object(__WEBPACK_IMPORTED_MODULE_0_rxjs_observable_forkJoin__["a" /* forkJoin */])(observables), __WEBPACK_IMPORTED_MODULE_3__validator_functions__["c" /* _mergeErrors */]);
        };
    };
    JsonValidators.min = function (min) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["f" /* hasValue */])(min)) {
            return JsonValidators.nullValidator;
        }
        return function (control) {
            if (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["l" /* isEmpty */])(control.value) || Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["l" /* isEmpty */])(min)) {
                return null;
            }
            var value = parseFloat(control.value);
            var actual = control.value;
            return isNaN(value) || value >= min ? null : { 'min': { min: min, actual: actual } };
        };
    };
    JsonValidators.max = function (max) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["f" /* hasValue */])(max)) {
            return JsonValidators.nullValidator;
        }
        return function (control) {
            if (Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["l" /* isEmpty */])(control.value) || Object(__WEBPACK_IMPORTED_MODULE_3__validator_functions__["l" /* isEmpty */])(max)) {
                return null;
            }
            var value = parseFloat(control.value);
            var actual = control.value;
            return isNaN(value) || value <= max ? null : { 'max': { max: max, actual: actual } };
        };
    };
    JsonValidators.requiredTrue = function (control) {
        if (!control) {
            return JsonValidators.nullValidator;
        }
        return control.value === true ? null : { 'required': true };
    };
    JsonValidators.email = function (control) {
        if (!control) {
            return JsonValidators.nullValidator;
        }
        var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
        return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
    };
    return JsonValidators;
}());



/***/ }),

/***/ "../../../../../src/lib/src/shared/jsonpointer.functions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonPointer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validator_functions__ = __webpack_require__("../../../../../src/lib/src/shared/validator.functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility_functions__ = __webpack_require__("../../../../../src/lib/src/shared/utility.functions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JsonPointer = (function () {
    function JsonPointer() {
    }
    JsonPointer.get = function (object, pointer, startSlice, endSlice, getBoolean, errors) {
        if (startSlice === void 0) { startSlice = 0; }
        if (endSlice === void 0) { endSlice = null; }
        if (getBoolean === void 0) { getBoolean = false; }
        if (errors === void 0) { errors = false; }
        if (object === null) {
            return getBoolean ? false : undefined;
        }
        var keyArray = this.parse(pointer, errors);
        if (typeof object === 'object' && keyArray !== null) {
            var subObject = object;
            if (startSlice >= keyArray.length || endSlice <= -keyArray.length) {
                return object;
            }
            if (startSlice <= -keyArray.length) {
                startSlice = 0;
            }
            if (!Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["k" /* isDefined */])(endSlice) || endSlice >= keyArray.length) {
                endSlice = keyArray.length;
            }
            keyArray = keyArray.slice(startSlice, endSlice);
            for (var _i = 0, keyArray_1 = keyArray; _i < keyArray_1.length; _i++) {
                var key = keyArray_1[_i];
                if (key === '-' && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(subObject) && subObject.length) {
                    key = subObject.length - 1;
                }
                if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["m" /* isMap */])(subObject) && subObject.has(key)) {
                    subObject = subObject.get(key);
                }
                else if (typeof subObject === 'object' && subObject !== null &&
                    Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(subObject, key)) {
                    subObject = subObject[key];
                }
                else {
                    if (errors) {
                        console.error("get error: \"" + key + "\" key not found in object.");
                        console.error(pointer);
                        console.error(object);
                    }
                    return getBoolean ? false : undefined;
                }
            }
            return getBoolean ? true : subObject;
        }
        if (errors && keyArray === null) {
            console.error("get error: Invalid JSON Pointer: " + pointer);
        }
        if (errors && typeof object !== 'object') {
            console.error('get error: Invalid object:');
            console.error(object);
        }
        return getBoolean ? false : undefined;
    };
    JsonPointer.getCopy = function (object, pointer, startSlice, endSlice, getBoolean, errors) {
        if (startSlice === void 0) { startSlice = 0; }
        if (endSlice === void 0) { endSlice = null; }
        if (getBoolean === void 0) { getBoolean = false; }
        if (errors === void 0) { errors = false; }
        var objectToCopy = this.get(object, pointer, startSlice, endSlice, getBoolean, errors);
        return this.forEachDeepCopy(objectToCopy);
    };
    JsonPointer.getFirst = function (items, defaultValue, getCopy) {
        if (defaultValue === void 0) { defaultValue = null; }
        if (getCopy === void 0) { getCopy = false; }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["l" /* isEmpty */])(items)) {
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(items)) {
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["l" /* isEmpty */])(item)) {
                    continue;
                }
                if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(item) && item.length >= 2) {
                    if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["l" /* isEmpty */])(item[0]) || Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["l" /* isEmpty */])(item[1])) {
                        continue;
                    }
                    var value = getCopy ?
                        this.getCopy(item[0], item[1]) :
                        this.get(item[0], item[1]);
                    if (value) {
                        return value;
                    }
                    continue;
                }
                console.error('getFirst error: Input not in correct format.\n' +
                    'Should be: [ [ object1, pointer1 ], [ object 2, pointer2 ], etc... ]');
                return;
            }
            return defaultValue;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["m" /* isMap */])(items)) {
            for (var _a = 0, items_2 = items; _a < items_2.length; _a++) {
                var _b = items_2[_a], object = _b[0], pointer = _b[1];
                if (object === null || !this.isJsonPointer(pointer)) {
                    continue;
                }
                var value = getCopy ?
                    this.getCopy(object, pointer) :
                    this.get(object, pointer);
                if (value) {
                    return value;
                }
            }
            return defaultValue;
        }
        console.error('getFirst error: Input not in correct format.\n' +
            'Should be: [ [ object1, pointer1 ], [ object 2, pointer2 ], etc... ]');
        return defaultValue;
    };
    JsonPointer.getFirstCopy = function (items, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        var firstCopy = this.getFirst(items, defaultValue, true);
        return firstCopy;
    };
    JsonPointer.set = function (object, pointer, value, insert) {
        if (insert === void 0) { insert = false; }
        var keyArray = this.parse(pointer);
        if (keyArray !== null && keyArray.length) {
            var subObject = object;
            for (var i = 0; i < keyArray.length - 1; ++i) {
                var key = keyArray[i];
                if (key === '-' && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(subObject)) {
                    key = subObject.length;
                }
                if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["m" /* isMap */])(subObject) && subObject.has(key)) {
                    subObject = subObject.get(key);
                }
                else {
                    if (!Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(subObject, key)) {
                        subObject[key] = (keyArray[i + 1].match(/^(\d+|-)$/)) ? [] : {};
                    }
                    subObject = subObject[key];
                }
            }
            var lastKey = keyArray[keyArray.length - 1];
            if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(subObject) && lastKey === '-') {
                subObject.push(value);
            }
            else if (insert && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(subObject) && !isNaN(+lastKey)) {
                subObject.splice(lastKey, 0, value);
            }
            else if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["m" /* isMap */])(subObject)) {
                subObject.set(lastKey, value);
            }
            else {
                subObject[lastKey] = value;
            }
            return object;
        }
        console.error("set error: Invalid JSON Pointer: " + pointer);
        return object;
    };
    JsonPointer.setCopy = function (object, pointer, value, insert) {
        if (insert === void 0) { insert = false; }
        var keyArray = this.parse(pointer);
        if (keyArray !== null) {
            var newObject = Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["c" /* copy */])(object);
            var subObject = newObject;
            for (var i = 0; i < keyArray.length - 1; ++i) {
                var key = keyArray[i];
                if (key === '-' && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(subObject)) {
                    key = subObject.length;
                }
                if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["m" /* isMap */])(subObject) && subObject.has(key)) {
                    subObject.set(key, Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["c" /* copy */])(subObject.get(key)));
                    subObject = subObject.get(key);
                }
                else {
                    if (!Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(subObject, key)) {
                        subObject[key] = (keyArray[i + 1].match(/^(\d+|-)$/)) ? [] : {};
                    }
                    subObject[key] = Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["c" /* copy */])(subObject[key]);
                    subObject = subObject[key];
                }
            }
            var lastKey = keyArray[keyArray.length - 1];
            if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(subObject) && lastKey === '-') {
                subObject.push(value);
            }
            else if (insert && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(subObject) && !isNaN(+lastKey)) {
                subObject.splice(lastKey, 0, value);
            }
            else if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["m" /* isMap */])(subObject)) {
                subObject.set(lastKey, value);
            }
            else {
                subObject[lastKey] = value;
            }
            return newObject;
        }
        console.error("setCopy error: Invalid JSON Pointer: " + pointer);
        return object;
    };
    JsonPointer.insert = function (object, pointer, value) {
        var updatedObject = this.set(object, pointer, value, true);
        return updatedObject;
    };
    JsonPointer.insertCopy = function (object, pointer, value) {
        var updatedObject = this.setCopy(object, pointer, value, true);
        return updatedObject;
    };
    JsonPointer.remove = function (object, pointer) {
        var keyArray = this.parse(pointer);
        if (keyArray !== null && keyArray.length) {
            var lastKey = keyArray.pop();
            var parentObject = this.get(object, keyArray);
            if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(parentObject)) {
                if (lastKey === '-') {
                    lastKey = parentObject.length - 1;
                }
                parentObject.splice(lastKey, 1);
            }
            else if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(parentObject)) {
                delete parentObject[lastKey];
            }
            return object;
        }
        console.error("remove error: Invalid JSON Pointer: " + pointer);
        return object;
    };
    JsonPointer.has = function (object, pointer) {
        var hasValue = this.get(object, pointer, 0, null, true);
        return hasValue;
    };
    JsonPointer.dict = function (object) {
        var results = {};
        this.forEachDeep(object, function (value, pointer) {
            if (typeof value !== 'object') {
                results[pointer] = value;
            }
        });
        return results;
    };
    JsonPointer.forEachDeep = function (object, fn, bottomUp, pointer, rootObject) {
        if (fn === void 0) { fn = function (v) { return v; }; }
        if (bottomUp === void 0) { bottomUp = false; }
        if (pointer === void 0) { pointer = ''; }
        if (rootObject === void 0) { rootObject = object; }
        if (typeof fn !== 'function') {
            console.error("forEachDeep error: Iterator is not a function:", fn);
            return;
        }
        if (!bottomUp) {
            fn(object, pointer, rootObject);
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(object) || Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(object)) {
            for (var _i = 0, _a = Object.keys(object); _i < _a.length; _i++) {
                var key = _a[_i];
                var newPointer = pointer + '/' + this.escape(key);
                this.forEachDeep(object[key], fn, bottomUp, newPointer, rootObject);
            }
        }
        if (bottomUp) {
            fn(object, pointer, rootObject);
        }
    };
    JsonPointer.forEachDeepCopy = function (object, fn, bottomUp, pointer, rootObject) {
        if (fn === void 0) { fn = function (v) { return v; }; }
        if (bottomUp === void 0) { bottomUp = false; }
        if (pointer === void 0) { pointer = ''; }
        if (rootObject === void 0) { rootObject = object; }
        if (typeof fn !== 'function') {
            console.error("forEachDeepCopy error: Iterator is not a function:", fn);
            return null;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(object) || Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(object)) {
            var newObject = Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(object) ? object.slice() : __assign({}, object);
            if (!bottomUp) {
                newObject = fn(newObject, pointer, rootObject);
            }
            for (var _i = 0, _a = Object.keys(newObject); _i < _a.length; _i++) {
                var key = _a[_i];
                var newPointer = pointer + '/' + this.escape(key);
                newObject[key] = this.forEachDeepCopy(newObject[key], fn, bottomUp, newPointer, rootObject);
            }
            if (bottomUp) {
                newObject = fn(newObject, pointer, rootObject);
            }
            return newObject;
        }
        else {
            return fn(object, pointer, rootObject);
        }
    };
    JsonPointer.escape = function (key) {
        var escaped = key.toString().replace(/~/g, '~0').replace(/\//g, '~1');
        return escaped;
    };
    JsonPointer.unescape = function (key) {
        var unescaped = key.toString().replace(/~1/g, '/').replace(/~0/g, '~');
        return unescaped;
    };
    JsonPointer.parse = function (pointer, errors) {
        if (errors === void 0) { errors = false; }
        if (!this.isJsonPointer(pointer)) {
            if (errors) {
                console.error("parse error: Invalid JSON Pointer: " + pointer);
            }
            return null;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(pointer)) {
            return pointer;
        }
        if (typeof pointer === 'string') {
            if (pointer[0] === '#') {
                pointer = pointer.slice(1);
            }
            if (pointer === '' || pointer === '/') {
                return [];
            }
            return pointer.slice(1).split('/').map(this.unescape);
        }
    };
    JsonPointer.compile = function (pointer, defaultValue, errors) {
        var _this = this;
        if (defaultValue === void 0) { defaultValue = ''; }
        if (errors === void 0) { errors = false; }
        if (pointer === '#') {
            return '';
        }
        if (!this.isJsonPointer(pointer)) {
            if (errors) {
                console.error("compile error: Invalid JSON Pointer: " + pointer);
            }
            return null;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(pointer)) {
            if (pointer.length === 0) {
                return '';
            }
            return '/' + pointer.map(function (key) { return key === '' ? defaultValue : _this.escape(key); }).join('/');
        }
        if (typeof pointer === 'string') {
            if (pointer[0] === '#') {
                pointer = pointer.slice(1);
            }
            return pointer;
        }
    };
    JsonPointer.toKey = function (pointer, errors) {
        if (errors === void 0) { errors = false; }
        var keyArray = this.parse(pointer, errors);
        if (keyArray === null) {
            return null;
        }
        if (!keyArray.length) {
            return '';
        }
        return keyArray[keyArray.length - 1];
    };
    JsonPointer.isJsonPointer = function (value) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(value)) {
            return value.every(function (key) { return typeof key === 'string'; });
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["r" /* isString */])(value)) {
            if (value === '' || value === '#') {
                return true;
            }
            if (value[0] === '/' || value.slice(0, 2) === '#/') {
                return !/(~[^01]|~$)/g.test(value);
            }
        }
        return false;
    };
    JsonPointer.isSubPointer = function (shortPointer, longPointer, trueIfMatching, errors) {
        if (trueIfMatching === void 0) { trueIfMatching = false; }
        if (errors === void 0) { errors = false; }
        if (!this.isJsonPointer(shortPointer) || !this.isJsonPointer(longPointer)) {
            if (errors) {
                var invalid = '';
                if (!this.isJsonPointer(shortPointer)) {
                    invalid += " 1: " + shortPointer;
                }
                if (!this.isJsonPointer(longPointer)) {
                    invalid += " 2: " + longPointer;
                }
                console.error("isSubPointer error: Invalid JSON Pointer " + invalid);
            }
            return;
        }
        shortPointer = this.compile(shortPointer, '', errors);
        longPointer = this.compile(longPointer, '', errors);
        return shortPointer === longPointer ? trueIfMatching :
            shortPointer + "/" === longPointer.slice(0, shortPointer.length + 1);
    };
    JsonPointer.toIndexedPointer = function (genericPointer, indexArray, arrayMap) {
        if (arrayMap === void 0) { arrayMap = null; }
        if (this.isJsonPointer(genericPointer) && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(indexArray)) {
            var indexedPointer_1 = this.compile(genericPointer);
            if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["m" /* isMap */])(arrayMap)) {
                var arrayIndex_1 = 0;
                return indexedPointer_1.replace(/\/\-(?=\/|$)/g, function (key, stringIndex) {
                    return arrayMap.has(indexedPointer_1.slice(0, stringIndex)) ?
                        '/' + indexArray[arrayIndex_1++] : key;
                });
            }
            else {
                for (var _i = 0, indexArray_1 = indexArray; _i < indexArray_1.length; _i++) {
                    var pointerIndex = indexArray_1[_i];
                    indexedPointer_1 = indexedPointer_1.replace('/-', '/' + pointerIndex);
                }
                return indexedPointer_1;
            }
        }
        if (!this.isJsonPointer(genericPointer)) {
            console.error("toIndexedPointer error: Invalid JSON Pointer: " + genericPointer);
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(indexArray)) {
            console.error("toIndexedPointer error: Invalid indexArray: " + indexArray);
        }
    };
    ;
    JsonPointer.toGenericPointer = function (indexedPointer, arrayMap) {
        if (arrayMap === void 0) { arrayMap = new Map(); }
        if (this.isJsonPointer(indexedPointer) && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["m" /* isMap */])(arrayMap)) {
            var pointerArray = this.parse(indexedPointer);
            for (var i = 1; i < pointerArray.length; i++) {
                var subPointer = this.compile(pointerArray.slice(0, i));
                if (arrayMap.has(subPointer) &&
                    arrayMap.get(subPointer) <= +pointerArray[i]) {
                    pointerArray[i] = '-';
                }
            }
            return this.compile(pointerArray);
        }
        if (!this.isJsonPointer(indexedPointer)) {
            console.error("toGenericPointer error: invalid JSON Pointer: " + indexedPointer);
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["m" /* isMap */])(arrayMap)) {
            console.error("toGenericPointer error: invalid arrayMap: " + arrayMap);
        }
    };
    JsonPointer.toControlPointer = function (dataPointer, formGroup, controlMustExist) {
        if (controlMustExist === void 0) { controlMustExist = false; }
        var dataPointerArray = this.parse(dataPointer);
        var controlPointerArray = [];
        var subGroup = formGroup;
        if (dataPointerArray !== null) {
            for (var _i = 0, dataPointerArray_1 = dataPointerArray; _i < dataPointerArray_1.length; _i++) {
                var key = dataPointerArray_1[_i];
                if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(subGroup, 'controls')) {
                    controlPointerArray.push('controls');
                    subGroup = subGroup.controls;
                }
                if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(subGroup) && (key === '-')) {
                    controlPointerArray.push((subGroup.length - 1).toString());
                    subGroup = subGroup[subGroup.length - 1];
                }
                else if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(subGroup, key)) {
                    controlPointerArray.push(key);
                    subGroup = subGroup[key];
                }
                else if (controlMustExist) {
                    console.error("toControlPointer error: Unable to find \"" + key + "\" item in FormGroup.");
                    console.error(dataPointer);
                    console.error(formGroup);
                    return;
                }
                else {
                    controlPointerArray.push(key);
                    subGroup = { controls: {} };
                }
            }
            return this.compile(controlPointerArray);
        }
        console.error("toControlPointer error: Invalid JSON Pointer: " + dataPointer);
    };
    JsonPointer.toSchemaPointer = function (dataPointer, schema) {
        if (this.isJsonPointer(dataPointer) && typeof schema === 'object') {
            var pointerArray = this.parse(dataPointer);
            if (!pointerArray.length) {
                return '';
            }
            var firstKey = pointerArray.shift();
            if (schema.type === 'object' || schema.properties || schema.additionalProperties) {
                if ((schema.properties || {})[firstKey]) {
                    return "/properties/" + this.escape(firstKey) +
                        this.toSchemaPointer(pointerArray, schema.properties[firstKey]);
                }
                else if (schema.additionalProperties) {
                    return '/additionalProperties' +
                        this.toSchemaPointer(pointerArray, schema.additionalProperties);
                }
            }
            if ((schema.type === 'array' || schema.items) &&
                (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["n" /* isNumber */])(firstKey) || firstKey === '-' || firstKey === '')) {
                var arrayItem = firstKey === '-' || firstKey === '' ? 0 : +firstKey;
                if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(schema.items)) {
                    if (arrayItem < schema.items.length) {
                        return '/items/' + arrayItem +
                            this.toSchemaPointer(pointerArray, schema.items[arrayItem]);
                    }
                    else if (schema.additionalItems) {
                        return '/additionalItems' +
                            this.toSchemaPointer(pointerArray, schema.additionalItems);
                    }
                }
                else if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(schema.items)) {
                    return '/items' + this.toSchemaPointer(pointerArray, schema.items);
                }
                else if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(schema.additionalItems)) {
                    return '/additionalItems' +
                        this.toSchemaPointer(pointerArray, schema.additionalItems);
                }
            }
            console.error("toSchemaPointer error: Data pointer " + dataPointer + " " +
                ("not compatible with schema " + schema));
            return null;
        }
        if (!this.isJsonPointer(dataPointer)) {
            console.error("toSchemaPointer error: Invalid JSON Pointer: " + dataPointer);
        }
        if (typeof schema !== 'object') {
            console.error("toSchemaPointer error: Invalid JSON Schema: " + schema);
        }
        return null;
    };
    JsonPointer.toDataPointer = function (schemaPointer, schema, errors) {
        if (errors === void 0) { errors = false; }
        if (this.isJsonPointer(schemaPointer) && typeof schema === 'object' &&
            this.has(schema, schemaPointer)) {
            var pointerArray = this.parse(schemaPointer);
            if (!pointerArray.length) {
                return '';
            }
            var dataPointer = '';
            var firstKey = pointerArray.shift();
            if (firstKey === 'properties' ||
                (firstKey === 'items' && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(schema.items))) {
                var secondKey = pointerArray.shift();
                var pointerSuffix = this.toDataPointer(pointerArray, schema[firstKey][secondKey]);
                return pointerSuffix === null ? null : '/' + secondKey + pointerSuffix;
            }
            else if (firstKey === 'additionalItems' ||
                (firstKey === 'items' && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(schema.items))) {
                var pointerSuffix = this.toDataPointer(pointerArray, schema[firstKey]);
                return pointerSuffix === null ? null : '/-' + pointerSuffix;
            }
            else if (['allOf', 'anyOf', 'oneOf'].includes(firstKey)) {
                var secondKey = pointerArray.shift();
                return this.toDataPointer(pointerArray, schema[firstKey][secondKey]);
            }
            else if (firstKey === 'not') {
                return this.toDataPointer(pointerArray, schema[firstKey]);
            }
            else if (['contains', 'definitions', 'dependencies', 'additionalItems',
                'additionalProperties', 'patternProperties', 'propertyNames'].includes(firstKey)) {
                if (errors) {
                    console.error("toDataPointer error: Ambiguous location");
                }
            }
            return '';
        }
        if (errors) {
            if (!this.isJsonPointer(schemaPointer)) {
                console.error("toDataPointer error: Invalid JSON Pointer: " + schemaPointer);
            }
            if (typeof schema !== 'object') {
                console.error("toDataPointer error: Invalid JSON Schema: " + schema);
            }
            if (typeof schema !== 'object') {
                console.error("toDataPointer error: Pointer " + schemaPointer + " invalid for Schema: " + schema);
            }
        }
        return null;
    };
    JsonPointer.parseObjectPath = function (path) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(path)) {
            return path;
        }
        if (this.isJsonPointer(path)) {
            return this.parse(path);
        }
        if (typeof path === 'string') {
            var index = 0;
            var parts = [];
            while (index < path.length) {
                var nextDot = path.indexOf('.', index);
                var nextOB = path.indexOf('[', index);
                if (nextDot === -1 && nextOB === -1) {
                    parts.push(path.slice(index));
                    index = path.length;
                }
                else if (nextDot !== -1 && (nextDot < nextOB || nextOB === -1)) {
                    parts.push(path.slice(index, nextDot));
                    index = nextDot + 1;
                }
                else {
                    if (nextOB > index) {
                        parts.push(path.slice(index, nextOB));
                        index = nextOB;
                    }
                    var quote = path.charAt(nextOB + 1);
                    if (quote === '"' || quote === "'") {
                        var nextCB = path.indexOf(quote + ']', nextOB);
                        while (nextCB !== -1 && path.charAt(nextCB - 1) === '\\') {
                            nextCB = path.indexOf(quote + ']', nextCB + 2);
                        }
                        if (nextCB === -1) {
                            nextCB = path.length;
                        }
                        parts.push(path.slice(index + 2, nextCB)
                            .replace(new RegExp('\\' + quote, 'g'), quote));
                        index = nextCB + 2;
                    }
                    else {
                        var nextCB = path.indexOf(']', nextOB);
                        if (nextCB === -1) {
                            nextCB = path.length;
                        }
                        parts.push(path.slice(index + 1, nextCB));
                        index = nextCB + 1;
                    }
                    if (path.charAt(index) === '.') {
                        index++;
                    }
                }
            }
            return parts;
        }
        console.error('parseObjectPath error: Input object path must be a string.');
    };
    JsonPointer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], JsonPointer);
    return JsonPointer;
}());



/***/ }),

/***/ "../../../../../src/lib/src/shared/layout.functions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buildLayout;
/* unused harmony export buildLayoutFromSchema */
/* unused harmony export mapLayout */
/* harmony export (immutable) */ __webpack_exports__["c"] = getLayoutNode;
/* harmony export (immutable) */ __webpack_exports__["b"] = buildTitleMap;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validator_functions__ = __webpack_require__("../../../../../src/lib/src/shared/validator.functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility_functions__ = __webpack_require__("../../../../../src/lib/src/shared/utility.functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__ = __webpack_require__("../../../../../src/lib/src/shared/jsonpointer.functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__json_schema_functions__ = __webpack_require__("../../../../../src/lib/src/shared/json-schema.functions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};





function buildLayout(jsf, widgetLibrary) {
    var hasSubmitButton = !__WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].get(jsf, '/formOptions/addSubmit');
    var formLayout = mapLayout(jsf.layout, function (layoutItem, index, layoutPointer) {
        var currentIndex = index;
        var newNode = {
            _id: __WEBPACK_IMPORTED_MODULE_0_lodash__["uniqueId"](),
            options: {},
        };
        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(layoutItem)) {
            Object.assign(newNode, layoutItem);
            Object.keys(newNode)
                .filter(function (option) { return !Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["g" /* inArray */])(option, [
                '_id', '$ref', 'arrayItem', 'arrayItemType', 'dataPointer', 'dataType',
                'items', 'key', 'name', 'options', 'recursiveReference', 'type', 'widget'
            ]); })
                .forEach(function (option) {
                newNode.options[option] = newNode[option];
                delete newNode[option];
            });
            if (!Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(newNode, 'type') && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["r" /* isString */])(newNode.widget)) {
                newNode.type = newNode.widget;
                delete newNode.widget;
            }
            if (!Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(newNode.options, 'title')) {
                if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(newNode.options, 'legend')) {
                    newNode.options.title = newNode.options.legend;
                    delete newNode.options.legend;
                }
            }
            if (!Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(newNode.options, 'validationMessages')) {
                if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(newNode.options, 'errorMessages')) {
                    newNode.options.validationMessages = newNode.options.errorMessages;
                    delete newNode.options.errorMessages;
                }
                else if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(newNode.options, 'validationMessage')) {
                    if (typeof newNode.options.validationMessage === 'string') {
                        newNode.options.validationMessages = newNode.options.validationMessage;
                    }
                    else {
                        newNode.options.validationMessages = {};
                        Object.keys(newNode.options.validationMessage).forEach(function (key) {
                            var code = key + '';
                            var newKey = code === '0' ? 'type' :
                                code === '1' ? 'enum' :
                                    code === '100' ? 'multipleOf' :
                                        code === '101' ? 'minimum' :
                                            code === '102' ? 'exclusiveMinimum' :
                                                code === '103' ? 'maximum' :
                                                    code === '104' ? 'exclusiveMaximum' :
                                                        code === '200' ? 'minLength' :
                                                            code === '201' ? 'maxLength' :
                                                                code === '202' ? 'pattern' :
                                                                    code === '300' ? 'minProperties' :
                                                                        code === '301' ? 'maxProperties' :
                                                                            code === '302' ? 'required' :
                                                                                code === '304' ? 'dependencies' :
                                                                                    code === '400' ? 'minItems' :
                                                                                        code === '401' ? 'maxItems' :
                                                                                            code === '402' ? 'uniqueItems' :
                                                                                                code === '500' ? 'format' : code + '';
                            newNode.options.validationMessages[newKey] = newNode.options.validationMessage[key];
                        });
                    }
                    delete newNode.options.validationMessage;
                }
            }
        }
        else if (__WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].isJsonPointer(layoutItem)) {
            newNode.dataPointer = layoutItem;
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["r" /* isString */])(layoutItem)) {
            newNode.key = layoutItem;
        }
        else {
            console.error('buildLayout error: Form layout element not recognized:');
            console.error(layoutItem);
            return null;
        }
        var nodeSchema = null;
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(newNode, 'dataPointer')) {
            if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(newNode, 'key')) {
                newNode.dataPointer = newNode.key === '*' ? newNode.key :
                    __WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].compile(__WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].parseObjectPath(newNode.key), '-');
                delete newNode.key;
            }
            else if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(newNode, 'type') && newNode.type.slice(-5) === 'array') {
                var findDataPointer_1 = function (items) {
                    if (items === null || typeof items !== 'object') {
                        return;
                    }
                    if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(items, 'dataPointer')) {
                        return items.dataPointer;
                    }
                    if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(items.items)) {
                        for (var _i = 0, _a = items.items; _i < _a.length; _i++) {
                            var item = _a[_i];
                            if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(item, 'dataPointer') && item.dataPointer.indexOf('/-') !== -1) {
                                return item.dataPointer;
                            }
                            if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(item, 'items')) {
                                var searchItem = findDataPointer_1(item);
                                if (searchItem) {
                                    return searchItem;
                                }
                            }
                        }
                    }
                };
                var childDataPointer = findDataPointer_1(newNode);
                if (childDataPointer) {
                    newNode.dataPointer =
                        childDataPointer.slice(0, childDataPointer.lastIndexOf('/-'));
                }
            }
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(newNode, 'dataPointer')) {
            if (newNode.dataPointer === '*') {
                return buildLayoutFromSchema(jsf, widgetLibrary, jsf.formValues);
            }
            var nodeValue = __WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].get(jsf.formValues, newNode.dataPointer.replace(/\/-/g, '/1'));
            newNode.dataPointer =
                __WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].toGenericPointer(newNode.dataPointer, jsf.arrayMap);
            var LastKey = __WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].toKey(newNode.dataPointer);
            if (!newNode.name && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["r" /* isString */])(LastKey) && LastKey !== '-') {
                newNode.name = LastKey;
            }
            var shortDataPointer = Object(__WEBPACK_IMPORTED_MODULE_4__json_schema_functions__["h" /* removeRecursiveReferences */])(newNode.dataPointer, jsf.dataRecursiveRefMap, jsf.arrayMap);
            var recursive_1 = !shortDataPointer.length ||
                shortDataPointer !== newNode.dataPointer;
            var schemaPointer = void 0;
            if (!jsf.dataMap.has(shortDataPointer)) {
                jsf.dataMap.set(shortDataPointer, new Map());
            }
            var nodeDataMap = jsf.dataMap.get(shortDataPointer);
            if (nodeDataMap.has('schemaPointer')) {
                schemaPointer = nodeDataMap.get('schemaPointer');
            }
            else {
                schemaPointer = __WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].toSchemaPointer(shortDataPointer, jsf.schema);
                nodeDataMap.set('schemaPointer', schemaPointer);
            }
            nodeDataMap.set('disabled', !!newNode.options.disabled);
            nodeSchema = __WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].get(jsf.schema, schemaPointer);
            if (nodeSchema) {
                if (!Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(newNode, 'type')) {
                    newNode.type = Object(__WEBPACK_IMPORTED_MODULE_4__json_schema_functions__["f" /* getInputType */])(nodeSchema, newNode);
                }
                else if (!widgetLibrary.hasWidget(newNode.type)) {
                    var oldWidgetType = newNode.type;
                    newNode.type = Object(__WEBPACK_IMPORTED_MODULE_4__json_schema_functions__["f" /* getInputType */])(nodeSchema, newNode);
                    console.error("error: widget type \"" + oldWidgetType + "\" " +
                        ("not found in library. Replacing with \"" + newNode.type + "\"."));
                }
                else {
                    newNode.type = Object(__WEBPACK_IMPORTED_MODULE_4__json_schema_functions__["c" /* checkInlineType */])(newNode.type, nodeSchema, newNode);
                }
                if (nodeSchema.type === 'object' && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(nodeSchema.required)) {
                    nodeDataMap.set('required', nodeSchema.required);
                }
                newNode.dataType =
                    nodeSchema.type || (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(nodeSchema, '$ref') ? '$ref' : null);
                Object(__WEBPACK_IMPORTED_MODULE_4__json_schema_functions__["j" /* updateInputOptions */])(newNode, nodeSchema, jsf);
                if (newNode.type === 'checkboxes' && Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(nodeSchema, 'items')) {
                    Object(__WEBPACK_IMPORTED_MODULE_4__json_schema_functions__["j" /* updateInputOptions */])(newNode, nodeSchema.items, jsf);
                }
                else if (newNode.dataType === 'array') {
                    newNode.options.maxItems = Math.min(nodeSchema.maxItems || 1000, newNode.options.maxItems || 1000);
                    newNode.options.minItems = Math.max(nodeSchema.minItems || 0, newNode.options.minItems || 0);
                    newNode.options.listItems = Math.max(newNode.options.listItems || 0, Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(nodeValue) ? nodeValue.length : 0);
                    newNode.options.tupleItems =
                        Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(nodeSchema.items) ? nodeSchema.items.length : 0;
                    if (newNode.options.maxItems < newNode.options.tupleItems) {
                        newNode.options.tupleItems = newNode.options.maxItems;
                        newNode.options.listItems = 0;
                    }
                    else if (newNode.options.maxItems <
                        newNode.options.tupleItems + newNode.options.listItems) {
                        newNode.options.listItems =
                            newNode.options.maxItems - newNode.options.tupleItems;
                    }
                    else if (newNode.options.minItems >
                        newNode.options.tupleItems + newNode.options.listItems) {
                        newNode.options.listItems =
                            newNode.options.minItems - newNode.options.tupleItems;
                    }
                    if (!nodeDataMap.has('maxItems')) {
                        nodeDataMap.set('maxItems', newNode.options.maxItems);
                        nodeDataMap.set('minItems', newNode.options.minItems);
                        nodeDataMap.set('tupleItems', newNode.options.tupleItems);
                        nodeDataMap.set('listItems', newNode.options.listItems);
                    }
                    if (!jsf.arrayMap.has(shortDataPointer)) {
                        jsf.arrayMap.set(shortDataPointer, newNode.options.tupleItems);
                    }
                }
                if (Object(__WEBPACK_IMPORTED_MODULE_4__json_schema_functions__["g" /* isInputRequired */])(jsf.schema, schemaPointer)) {
                    newNode.options.required = true;
                    jsf.fieldsRequired = true;
                }
            }
            else {
                Object(__WEBPACK_IMPORTED_MODULE_4__json_schema_functions__["j" /* updateInputOptions */])(newNode, {}, jsf);
            }
            if (!newNode.options.title && !/^\d+$/.test(newNode.name)) {
                newNode.options.title = Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["d" /* fixTitle */])(newNode.name);
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(newNode.options, 'copyValueTo')) {
                if (typeof newNode.options.copyValueTo === 'string') {
                    newNode.options.copyValueTo = [newNode.options.copyValueTo];
                }
                if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(newNode.options.copyValueTo)) {
                    newNode.options.copyValueTo = newNode.options.copyValueTo.map(function (item) {
                        return __WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].compile(__WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].parseObjectPath(item), '-');
                    });
                }
            }
            newNode.widget = widgetLibrary.getWidget(newNode.type);
            nodeDataMap.set('inputType', newNode.type);
            nodeDataMap.set('widget', newNode.widget);
            if (newNode.dataType === 'array' &&
                (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(newNode, 'items') || Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(newNode, 'additionalItems'))) {
                var itemRefPointer_1 = Object(__WEBPACK_IMPORTED_MODULE_4__json_schema_functions__["h" /* removeRecursiveReferences */])(newNode.dataPointer + '/-', jsf.dataRecursiveRefMap, jsf.arrayMap);
                if (!jsf.dataMap.has(itemRefPointer_1)) {
                    jsf.dataMap.set(itemRefPointer_1, new Map());
                }
                jsf.dataMap.get(itemRefPointer_1).set('inputType', 'section');
                if (newNode.items.length > 1) {
                    var arrayItemGroup = [];
                    var arrayItemGroupTemplate = [];
                    var newIndex = 0;
                    for (var i = newNode.items.length - 1; i >= 0; i--) {
                        var subItem = newNode.items[i];
                        if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(subItem, 'dataPointer') &&
                            subItem.dataPointer.slice(0, itemRefPointer_1.length) === itemRefPointer_1) {
                            var arrayItem = newNode.items.splice(i, 1)[0];
                            arrayItem.dataPointer = newNode.dataPointer + '/-' +
                                arrayItem.dataPointer.slice(itemRefPointer_1.length);
                            arrayItemGroup.unshift(arrayItem);
                            newIndex++;
                        }
                        else {
                            subItem.arrayItem = true;
                            subItem.arrayItemType = 'list';
                            subItem.removable = newNode.options.removable !== false;
                        }
                    }
                    if (arrayItemGroup.length) {
                        newNode.items.push({
                            _id: __WEBPACK_IMPORTED_MODULE_0_lodash__["uniqueId"](),
                            arrayItem: true,
                            arrayItemType: newNode.options.tupleItems > newNode.items.length ?
                                'tuple' : 'list',
                            items: arrayItemGroup,
                            options: { removable: newNode.options.removable !== false, },
                            dataPointer: newNode.dataPointer + '/-',
                            type: 'section',
                            widget: widgetLibrary.getWidget('section'),
                        });
                    }
                }
                else {
                    newNode.items[0].arrayItem = true;
                    if (!newNode.items[0].dataPointer) {
                        newNode.items[0].dataPointer =
                            __WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].toGenericPointer(itemRefPointer_1, jsf.arrayMap);
                    }
                    if (!__WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].has(newNode, '/items/0/options/removable')) {
                        newNode.items[0].options.removable = true;
                    }
                    if (newNode.options.orderable === false) {
                        newNode.items[0].options.orderable = false;
                    }
                    newNode.items[0].arrayItemType =
                        newNode.options.tupleItems ? 'tuple' : 'list';
                }
                if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(newNode.items)) {
                    var arrayListItems = newNode.items.filter(function (item) { return item.type !== '$ref'; }).length -
                        newNode.options.tupleItems;
                    if (arrayListItems > newNode.options.listItems) {
                        newNode.options.listItems = arrayListItems;
                        nodeDataMap.set('listItems', arrayListItems);
                    }
                }
                if (!Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(jsf.layoutRefLibrary, itemRefPointer_1)) {
                    jsf.layoutRefLibrary[itemRefPointer_1] =
                        __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](newNode.items[newNode.items.length - 1]);
                    if (recursive_1) {
                        jsf.layoutRefLibrary[itemRefPointer_1].recursiveReference = true;
                    }
                    Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["e" /* forEach */])(jsf.layoutRefLibrary[itemRefPointer_1], function (item, key) {
                        if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(item, '_id')) {
                            item._id = null;
                        }
                        if (recursive_1) {
                            if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(item, 'dataPointer')) {
                                item.dataPointer = item.dataPointer.slice(itemRefPointer_1.length);
                            }
                        }
                    }, 'top-down');
                }
                if (!newNode.recursiveReference || newNode.options.required) {
                    var arrayLength = Math.min(Math.max(newNode.options.tupleItems + newNode.options.listItems, Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(nodeValue) ? nodeValue.length : 0), newNode.options.maxItems);
                    for (var i = newNode.items.length; i < arrayLength; i++) {
                        newNode.items.push(getLayoutNode({
                            $ref: itemRefPointer_1,
                            dataPointer: newNode.dataPointer,
                            recursiveReference: newNode.recursiveReference,
                        }, jsf, widgetLibrary));
                    }
                }
                if (newNode.options.addable !== false &&
                    newNode.options.minItems < newNode.options.maxItems &&
                    (newNode.items[newNode.items.length - 1] || {}).type !== '$ref') {
                    var buttonText = 'Add';
                    if (newNode.options.title) {
                        if (/^add\b/i.test(newNode.options.title)) {
                            buttonText = newNode.options.title;
                        }
                        else {
                            buttonText += ' ' + newNode.options.title;
                        }
                    }
                    else if (newNode.name && !/^\d+$/.test(newNode.name)) {
                        if (/^add\b/i.test(newNode.name)) {
                            buttonText += ' ' + Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["d" /* fixTitle */])(newNode.name);
                        }
                        else {
                            buttonText = Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["d" /* fixTitle */])(newNode.name);
                        }
                    }
                    else {
                        var parentSchema = Object(__WEBPACK_IMPORTED_MODULE_4__json_schema_functions__["e" /* getFromSchema */])(jsf.schema, newNode.dataPointer, 'parentSchema');
                        if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(parentSchema, 'title')) {
                            buttonText += ' to ' + parentSchema.title;
                        }
                        else {
                            var pointerArray = __WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].parse(newNode.dataPointer);
                            buttonText += ' to ' + Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["d" /* fixTitle */])(pointerArray[pointerArray.length - 2]);
                        }
                    }
                    newNode.items.push({
                        _id: __WEBPACK_IMPORTED_MODULE_0_lodash__["uniqueId"](),
                        arrayItem: true,
                        arrayItemType: 'list',
                        dataPointer: newNode.dataPointer + '/-',
                        options: {
                            listItems: newNode.options.listItems,
                            maxItems: newNode.options.maxItems,
                            minItems: newNode.options.minItems,
                            removable: false,
                            title: buttonText,
                            tupleItems: newNode.options.tupleItems,
                        },
                        recursiveReference: recursive_1,
                        type: '$ref',
                        widget: widgetLibrary.getWidget('$ref'),
                        $ref: itemRefPointer_1,
                    });
                    if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["r" /* isString */])(__WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].get(newNode, '/style/add'))) {
                        newNode.items[newNode.items.length - 1].options.fieldStyle =
                            newNode.style.add;
                        delete newNode.style.add;
                        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["l" /* isEmpty */])(newNode.style)) {
                            delete newNode.style;
                        }
                    }
                }
            }
            else {
                newNode.arrayItem = false;
            }
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(newNode, 'type') || Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(newNode, 'items')) {
            var parentType = __WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].get(jsf.layout, layoutPointer, 0, -2).type;
            if (!Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(newNode, 'type')) {
                newNode.type =
                    Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["g" /* inArray */])(parentType, ['tabs', 'tabarray']) ? 'tab' : 'array';
            }
            newNode.arrayItem = parentType === 'array';
            newNode.widget = widgetLibrary.getWidget(newNode.type);
            Object(__WEBPACK_IMPORTED_MODULE_4__json_schema_functions__["j" /* updateInputOptions */])(newNode, {}, jsf);
        }
        if (newNode.type === 'submit') {
            hasSubmitButton = true;
        }
        return newNode;
    });
    if (jsf.hasRootReference) {
        var fullLayout = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](formLayout);
        if (fullLayout[fullLayout.length - 1].type === 'submit') {
            fullLayout.pop();
        }
        jsf.layoutRefLibrary[''] = {
            _id: null,
            dataPointer: '',
            dataType: 'object',
            items: fullLayout,
            name: '',
            options: __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](jsf.formOptions.defautWidgetOptions),
            recursiveReference: true,
            required: false,
            type: 'section',
            widget: widgetLibrary.getWidget('section'),
        };
    }
    if (!hasSubmitButton) {
        formLayout.push({
            _id: __WEBPACK_IMPORTED_MODULE_0_lodash__["uniqueId"](),
            options: { title: 'Submit' },
            type: 'submit',
            widget: widgetLibrary.getWidget('submit'),
        });
    }
    return formLayout;
}
function buildLayoutFromSchema(jsf, widgetLibrary, nodeValue, schemaPointer, dataPointer, arrayItem, arrayItemType, removable, forRefLibrary, dataPointerPrefix) {
    if (nodeValue === void 0) { nodeValue = null; }
    if (schemaPointer === void 0) { schemaPointer = ''; }
    if (dataPointer === void 0) { dataPointer = ''; }
    if (arrayItem === void 0) { arrayItem = false; }
    if (arrayItemType === void 0) { arrayItemType = null; }
    if (removable === void 0) { removable = null; }
    if (forRefLibrary === void 0) { forRefLibrary = false; }
    if (dataPointerPrefix === void 0) { dataPointerPrefix = ''; }
    var schema = __WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].get(jsf.schema, schemaPointer);
    if (!Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema, 'type') && !Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema, '$ref') &&
        !Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema, 'x-schema-form')) {
        return null;
    }
    var newNodeType = Object(__WEBPACK_IMPORTED_MODULE_4__json_schema_functions__["f" /* getInputType */])(schema);
    if (!Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["k" /* isDefined */])(nodeValue) && (jsf.formOptions.setSchemaDefaults === true ||
        (jsf.formOptions.setSchemaDefaults === 'auto' && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["l" /* isEmpty */])(jsf.formValues)))) {
        nodeValue = __WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].get(jsf.schema, schemaPointer + '/default');
    }
    var newNode = {
        _id: forRefLibrary ? null : __WEBPACK_IMPORTED_MODULE_0_lodash__["uniqueId"](),
        arrayItem: arrayItem,
        dataPointer: __WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].toGenericPointer(dataPointer, jsf.arrayMap),
        dataType: schema.type || (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema, '$ref') ? '$ref' : null),
        options: {},
        required: Object(__WEBPACK_IMPORTED_MODULE_4__json_schema_functions__["g" /* isInputRequired */])(jsf.schema, schemaPointer),
        type: newNodeType,
        widget: widgetLibrary.getWidget(newNodeType),
    };
    var lastDataKey = __WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].toKey(newNode.dataPointer);
    if (lastDataKey !== '-') {
        newNode.name = lastDataKey;
    }
    if (newNode.arrayItem) {
        newNode.arrayItemType = arrayItemType;
        newNode.options.removable = removable !== false;
    }
    var shortDataPointer = Object(__WEBPACK_IMPORTED_MODULE_4__json_schema_functions__["h" /* removeRecursiveReferences */])(dataPointerPrefix + dataPointer, jsf.dataRecursiveRefMap, jsf.arrayMap);
    var recursive = !shortDataPointer.length ||
        shortDataPointer !== dataPointerPrefix + dataPointer;
    if (!jsf.dataMap.has(shortDataPointer)) {
        jsf.dataMap.set(shortDataPointer, new Map());
    }
    var nodeDataMap = jsf.dataMap.get(shortDataPointer);
    if (!nodeDataMap.has('inputType')) {
        nodeDataMap.set('schemaPointer', schemaPointer);
        nodeDataMap.set('inputType', newNode.type);
        nodeDataMap.set('widget', newNode.widget);
        nodeDataMap.set('disabled', !!newNode.options.disabled);
    }
    Object(__WEBPACK_IMPORTED_MODULE_4__json_schema_functions__["j" /* updateInputOptions */])(newNode, schema, jsf);
    if (!newNode.options.title && newNode.name && !/^\d+$/.test(newNode.name)) {
        newNode.options.title = Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["d" /* fixTitle */])(newNode.name);
    }
    if (newNode.dataType === 'object') {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(schema.required) && !nodeDataMap.has('required')) {
            nodeDataMap.set('required', schema.required);
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(schema.properties)) {
            var newSection_1 = [];
            var propertyKeys_1 = schema['ui:order'] || Object.keys(schema.properties);
            if (propertyKeys_1.includes('*') && !Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema.properties, '*')) {
                var unnamedKeys = Object.keys(schema.properties)
                    .filter(function (key) { return !propertyKeys_1.includes(key); });
                for (var i = propertyKeys_1.length - 1; i >= 0; i--) {
                    if (propertyKeys_1[i] === '*') {
                        propertyKeys_1.splice.apply(propertyKeys_1, [i, 1].concat(unnamedKeys));
                    }
                }
            }
            propertyKeys_1
                .filter(function (key) { return Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema.properties, key) ||
                Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema, 'additionalProperties'); })
                .forEach(function (key) {
                var keySchemaPointer = Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schema.properties, key) ?
                    '/properties/' + key : '/additionalProperties';
                var innerItem = buildLayoutFromSchema(jsf, widgetLibrary, Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(nodeValue) ? nodeValue[key] : null, schemaPointer + keySchemaPointer, dataPointer + '/' + key, false, null, null, forRefLibrary, dataPointerPrefix);
                if (innerItem) {
                    if (Object(__WEBPACK_IMPORTED_MODULE_4__json_schema_functions__["g" /* isInputRequired */])(schema, '/' + key)) {
                        innerItem.options.required = true;
                        jsf.fieldsRequired = true;
                    }
                    newSection_1.push(innerItem);
                }
            });
            if (dataPointer === '' && !forRefLibrary) {
                newNode = newSection_1;
            }
            else {
                newNode.items = newSection_1;
            }
        }
    }
    else if (newNode.dataType === 'array') {
        newNode.items = [];
        var templateArray = [];
        newNode.options.maxItems = Math.min(schema.maxItems || 1000, newNode.options.maxItems || 1000);
        newNode.options.minItems = Math.max(schema.minItems || 0, newNode.options.minItems || 0);
        if (!newNode.options.minItems && Object(__WEBPACK_IMPORTED_MODULE_4__json_schema_functions__["g" /* isInputRequired */])(jsf.schema, schemaPointer)) {
            newNode.options.minItems = 1;
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(newNode.options, 'listItems')) {
            newNode.options.listItems = 1;
        }
        newNode.options.tupleItems = Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(schema.items) ? schema.items.length : 0;
        if (newNode.options.maxItems <= newNode.options.tupleItems) {
            newNode.options.tupleItems = newNode.options.maxItems;
            newNode.options.listItems = 0;
        }
        else if (newNode.options.maxItems <
            newNode.options.tupleItems + newNode.options.listItems) {
            newNode.options.listItems = newNode.options.maxItems - newNode.options.tupleItems;
        }
        else if (newNode.options.minItems >
            newNode.options.tupleItems + newNode.options.listItems) {
            newNode.options.listItems = newNode.options.minItems - newNode.options.tupleItems;
        }
        if (!nodeDataMap.has('maxItems')) {
            nodeDataMap.set('maxItems', newNode.options.maxItems);
            nodeDataMap.set('minItems', newNode.options.minItems);
            nodeDataMap.set('tupleItems', newNode.options.tupleItems);
            nodeDataMap.set('listItems', newNode.options.listItems);
        }
        if (!jsf.arrayMap.has(shortDataPointer)) {
            jsf.arrayMap.set(shortDataPointer, newNode.options.tupleItems);
        }
        removable = newNode.options.removable !== false;
        var additionalItemsSchemaPointer = null;
        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(schema.items)) {
            newNode.items = [];
            for (var i = 0; i < newNode.options.tupleItems; i++) {
                var newItem = void 0;
                var itemRefPointer = Object(__WEBPACK_IMPORTED_MODULE_4__json_schema_functions__["h" /* removeRecursiveReferences */])(shortDataPointer + '/' + i, jsf.dataRecursiveRefMap, jsf.arrayMap);
                var itemRecursive = !itemRefPointer.length ||
                    itemRefPointer !== shortDataPointer + '/' + i;
                if (removable && i >= newNode.options.minItems) {
                    if (!Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(jsf.layoutRefLibrary, itemRefPointer)) {
                        jsf.layoutRefLibrary[itemRefPointer] = null;
                        jsf.layoutRefLibrary[itemRefPointer] = buildLayoutFromSchema(jsf, widgetLibrary, Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(nodeValue) ? nodeValue[i] : null, schemaPointer + '/items/' + i, itemRecursive ? '' : dataPointer + '/' + i, true, 'tuple', true, true, itemRecursive ? dataPointer + '/' + i : '');
                        if (itemRecursive) {
                            jsf.layoutRefLibrary[itemRefPointer].recursiveReference = true;
                        }
                    }
                    newItem = getLayoutNode({
                        $ref: itemRefPointer,
                        dataPointer: dataPointer + '/' + i,
                        recursiveReference: itemRecursive,
                    }, jsf, widgetLibrary, Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(nodeValue) ? nodeValue[i] : null);
                }
                else {
                    newItem = buildLayoutFromSchema(jsf, widgetLibrary, Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(nodeValue) ? nodeValue[i] : null, schemaPointer + '/items/' + i, dataPointer + '/' + i, true, 'tuple', false, forRefLibrary, dataPointerPrefix);
                }
                if (newItem) {
                    newNode.items.push(newItem);
                }
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(schema.additionalItems)) {
                additionalItemsSchemaPointer = schemaPointer + '/additionalItems';
            }
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(schema.items)) {
            additionalItemsSchemaPointer = schemaPointer + '/items';
        }
        if (additionalItemsSchemaPointer) {
            var itemRefPointer = Object(__WEBPACK_IMPORTED_MODULE_4__json_schema_functions__["h" /* removeRecursiveReferences */])(shortDataPointer + '/-', jsf.dataRecursiveRefMap, jsf.arrayMap);
            var itemRecursive = !itemRefPointer.length ||
                itemRefPointer !== shortDataPointer + '/-';
            var itemSchemaPointer = Object(__WEBPACK_IMPORTED_MODULE_4__json_schema_functions__["h" /* removeRecursiveReferences */])(additionalItemsSchemaPointer, jsf.schemaRecursiveRefMap, jsf.arrayMap);
            if (itemRefPointer.length && !Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(jsf.layoutRefLibrary, itemRefPointer)) {
                jsf.layoutRefLibrary[itemRefPointer] = null;
                jsf.layoutRefLibrary[itemRefPointer] = buildLayoutFromSchema(jsf, widgetLibrary, null, itemSchemaPointer, itemRecursive ? '' : dataPointer + '/-', true, 'list', removable, true, itemRecursive ? dataPointer + '/-' : '');
                if (itemRecursive) {
                    jsf.layoutRefLibrary[itemRefPointer].recursiveReference = true;
                }
            }
            if (!itemRecursive || newNode.options.required) {
                var arrayLength = Math.min(Math.max(itemRecursive ? 0 :
                    newNode.options.tupleItems + newNode.options.listItems, Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(nodeValue) ? nodeValue.length : 0), newNode.options.maxItems);
                if (newNode.items.length < arrayLength) {
                    for (var i = newNode.items.length; i < arrayLength; i++) {
                        newNode.items.push(getLayoutNode({
                            $ref: itemRefPointer,
                            dataPointer: dataPointer + '/-',
                            recursiveReference: itemRecursive,
                        }, jsf, widgetLibrary, Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(nodeValue) ? nodeValue[i] : null));
                    }
                }
            }
            if (newNode.options.addable !== false &&
                newNode.options.minItems < newNode.options.maxItems &&
                (newNode.items[newNode.items.length - 1] || {}).type !== '$ref') {
                var buttonText = ((jsf.layoutRefLibrary[itemRefPointer] || {}).options || {}).title;
                var prefix = buttonText ? 'Add ' : 'Add to ';
                if (!buttonText) {
                    buttonText = schema.title || Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["d" /* fixTitle */])(__WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].toKey(dataPointer));
                }
                if (!/^add\b/i.test(buttonText)) {
                    buttonText = prefix + buttonText;
                }
                newNode.items.push({
                    _id: __WEBPACK_IMPORTED_MODULE_0_lodash__["uniqueId"](),
                    arrayItem: true,
                    arrayItemType: 'list',
                    dataPointer: newNode.dataPointer + '/-',
                    options: {
                        listItems: newNode.options.listItems,
                        maxItems: newNode.options.maxItems,
                        minItems: newNode.options.minItems,
                        removable: false,
                        title: buttonText,
                        tupleItems: newNode.options.tupleItems,
                    },
                    recursiveReference: itemRecursive,
                    type: '$ref',
                    widget: widgetLibrary.getWidget('$ref'),
                    $ref: itemRefPointer,
                });
            }
        }
    }
    else if (newNode.dataType === '$ref') {
        var schemaRef = __WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].compile(schema.$ref);
        var dataRef = __WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].toDataPointer(schemaRef, jsf.schema);
        var buttonText = '';
        if (newNode.options.add) {
            buttonText = newNode.options.add;
        }
        else if (newNode.name && !/^\d+$/.test(newNode.name)) {
            buttonText =
                (/^add\b/i.test(newNode.name) ? '' : 'Add ') + Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["d" /* fixTitle */])(newNode.name);
        }
        else {
            var parentSchema = __WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].get(jsf.schema, schemaPointer, 0, -1);
            if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(parentSchema, 'title')) {
                buttonText = 'Add to ' + parentSchema.title;
            }
            else {
                var pointerArray = __WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].parse(newNode.dataPointer);
                buttonText = 'Add to ' + Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["d" /* fixTitle */])(pointerArray[pointerArray.length - 2]);
            }
        }
        Object.assign(newNode, {
            recursiveReference: true,
            widget: widgetLibrary.getWidget('$ref'),
            $ref: dataRef,
        });
        Object.assign(newNode.options, {
            removable: false,
            title: buttonText,
        });
        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["n" /* isNumber */])(__WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].get(jsf.schema, schemaPointer, 0, -1).maxItems)) {
            newNode.options.maxItems =
                __WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].get(jsf.schema, schemaPointer, 0, -1).maxItems;
        }
        if (dataRef.length) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(jsf.layoutRefLibrary, dataRef)) {
                jsf.layoutRefLibrary[dataRef] = null;
                var newLayout = buildLayoutFromSchema(jsf, widgetLibrary, null, schemaRef, '', newNode.arrayItem, newNode.arrayItemType, true, true, dataPointer);
                if (newLayout) {
                    newLayout.recursiveReference = true;
                    jsf.layoutRefLibrary[dataRef] = newLayout;
                }
                else {
                    delete jsf.layoutRefLibrary[dataRef];
                }
            }
            else if (!jsf.layoutRefLibrary[dataRef].recursiveReference) {
                jsf.layoutRefLibrary[dataRef].recursiveReference = true;
            }
        }
    }
    return newNode;
}
function mapLayout(layout, fn, layoutPointer, rootLayout) {
    if (layoutPointer === void 0) { layoutPointer = ''; }
    if (rootLayout === void 0) { rootLayout = layout; }
    var indexPad = 0;
    var newLayout = [];
    Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["e" /* forEach */])(layout, function (item, index) {
        var realIndex = +index + indexPad;
        var newLayoutPointer = layoutPointer + '/' + realIndex;
        var newNode = Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["c" /* copy */])(item);
        var itemsArray = [];
        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(item)) {
            if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(item, 'tabs')) {
                item.items = item.tabs;
                delete item.tabs;
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(item, 'items')) {
                itemsArray = Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(item.items) ? item.items : [item.items];
            }
        }
        if (itemsArray.length) {
            newNode.items = mapLayout(itemsArray, fn, newLayoutPointer + '/items', rootLayout);
        }
        newNode = fn(newNode, realIndex, newLayoutPointer, rootLayout);
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["k" /* isDefined */])(newNode)) {
            indexPad--;
        }
        else {
            if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(newNode)) {
                indexPad += newNode.length - 1;
            }
            newLayout = newLayout.concat(newNode);
        }
    });
    return newLayout;
}
;
function getLayoutNode(refNode, jsf, widgetLibrary, nodeValue) {
    if (widgetLibrary === void 0) { widgetLibrary = null; }
    if (nodeValue === void 0) { nodeValue = null; }
    if (refNode.recursiveReference && widgetLibrary) {
        var newLayoutNode = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](refNode);
        if (!newLayoutNode.options) {
            newLayoutNode.options = {};
        }
        Object.assign(newLayoutNode, {
            recursiveReference: true,
            widget: widgetLibrary.getWidget('$ref'),
        });
        Object.assign(newLayoutNode.options, {
            removable: false,
            title: 'Add ' + newLayoutNode.$ref,
        });
        return newLayoutNode;
    }
    else {
        var newLayoutNode = jsf.layoutRefLibrary[refNode.$ref];
        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["k" /* isDefined */])(nodeValue)) {
            newLayoutNode = buildLayoutFromSchema(jsf, widgetLibrary, nodeValue, __WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].toSchemaPointer(refNode.$ref, jsf.schema), refNode.$ref, newLayoutNode.arrayItem, newLayoutNode.arrayItemType, newLayoutNode.options.removable, false);
        }
        else {
            newLayoutNode = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](newLayoutNode);
            __WEBPACK_IMPORTED_MODULE_3__jsonpointer_functions__["a" /* JsonPointer */].forEachDeep(newLayoutNode, function (subNode, pointer) {
                if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(subNode, '_id')) {
                    subNode._id = __WEBPACK_IMPORTED_MODULE_0_lodash__["uniqueId"]();
                }
                if (refNode.recursiveReference && Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(subNode, 'dataPointer')) {
                    subNode.dataPointer = refNode.dataPointer + subNode.dataPointer;
                }
            });
        }
        return newLayoutNode;
    }
}
function buildTitleMap(titleMap, enumList, fieldRequired, flatList) {
    if (fieldRequired === void 0) { fieldRequired = true; }
    if (flatList === void 0) { flatList = true; }
    var newTitleMap = [];
    var hasEmptyValue = false;
    if (titleMap) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(titleMap)) {
            if (enumList) {
                for (var _i = 0, _a = Object.keys(titleMap); _i < _a.length; _i++) {
                    var i = _a[_i];
                    if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(titleMap[i])) {
                        var value = titleMap[i].value;
                        if (enumList.includes(value)) {
                            var name_1 = titleMap[i].name;
                            newTitleMap.push({ name: name_1, value: value });
                            if (value === undefined || value === null) {
                                hasEmptyValue = true;
                            }
                        }
                    }
                    else if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["r" /* isString */])(titleMap[i])) {
                        if (i < enumList.length) {
                            var name_2 = titleMap[i];
                            var value = enumList[i];
                            newTitleMap.push({ name: name_2, value: value });
                            if (value === undefined || value === null) {
                                hasEmptyValue = true;
                            }
                        }
                    }
                }
            }
            else {
                newTitleMap = titleMap;
                if (!fieldRequired) {
                    hasEmptyValue = !!newTitleMap
                        .filter(function (i) { return i.value === undefined || i.value === null; })
                        .length;
                }
            }
        }
        else if (enumList) {
            for (var _b = 0, _c = Object.keys(enumList); _b < _c.length; _b++) {
                var i = _c[_b];
                var value = enumList[i];
                if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(titleMap, value)) {
                    var name_3 = titleMap[value];
                    newTitleMap.push({ name: name_3, value: value });
                    if (value === undefined || value === null) {
                        hasEmptyValue = true;
                    }
                }
            }
        }
        else {
            for (var _d = 0, _e = Object.keys(titleMap); _d < _e.length; _d++) {
                var value = _e[_d];
                var name_4 = titleMap[value];
                newTitleMap.push({ name: name_4, value: value });
                if (value === undefined || value === null) {
                    hasEmptyValue = true;
                }
            }
        }
    }
    else if (enumList) {
        for (var _f = 0, _g = Object.keys(enumList); _f < _g.length; _f++) {
            var i = _g[_f];
            var name_5 = enumList[i];
            var value = enumList[i];
            newTitleMap.push({ name: name_5, value: value });
            if (value === undefined || value === null) {
                hasEmptyValue = true;
            }
        }
    }
    else {
        newTitleMap = [{ name: 'True', value: true }, { name: 'False', value: false }];
    }
    if (newTitleMap.some(function (title) { return Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(title, 'group'); })) {
        hasEmptyValue = false;
        if (flatList) {
            newTitleMap = newTitleMap.reduce(function (groupTitleMap, title) {
                if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(title, 'group')) {
                    if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(title.items)) {
                        groupTitleMap = groupTitleMap.concat(title.items.map(function (item) {
                            return (__assign({}, item, { name: title.group + ": " + item.name }));
                        }));
                        if (title.items.some(function (item) { return item.value === undefined || item.value === null; })) {
                            hasEmptyValue = true;
                        }
                    }
                    if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(title, 'name') && Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(title, 'value')) {
                        title.name = title.group + ": " + title.name;
                        delete title.group;
                        groupTitleMap.push(title);
                        if (title.value === undefined || title.value === null) {
                            hasEmptyValue = true;
                        }
                    }
                }
                else {
                    groupTitleMap.push(title);
                    if (title.value === undefined || title.value === null) {
                        hasEmptyValue = true;
                    }
                }
                return groupTitleMap;
            }, []);
        }
        else {
            newTitleMap = newTitleMap.reduce(function (groupTitleMap, title) {
                if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(title, 'group')) {
                    if (title.group !== (groupTitleMap[groupTitleMap.length - 1] || {}).group) {
                        groupTitleMap.push({ group: title.group, items: title.items || [] });
                    }
                    if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(title, 'name') && Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(title, 'value')) {
                        groupTitleMap[groupTitleMap.length - 1].items
                            .push({ name: title.name, value: title.value });
                        if (title.value === undefined || title.value === null) {
                            hasEmptyValue = true;
                        }
                    }
                }
                else {
                    groupTitleMap.push(title);
                    if (title.value === undefined || title.value === null) {
                        hasEmptyValue = true;
                    }
                }
                return groupTitleMap;
            }, []);
        }
    }
    if (!fieldRequired && !hasEmptyValue) {
        newTitleMap.unshift({ name: '<em>None</em>', value: null });
    }
    return newTitleMap;
}


/***/ }),

/***/ "../../../../../src/lib/src/shared/merge-schemas.function.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mergeSchemas;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validator_functions__ = __webpack_require__("../../../../../src/lib/src/shared/validator.functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utility_functions__ = __webpack_require__("../../../../../src/lib/src/shared/utility.functions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



function mergeSchemas() {
    var schemas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        schemas[_i] = arguments[_i];
    }
    schemas = schemas.filter(function (schema) { return !Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["l" /* isEmpty */])(schema); });
    if (schemas.some(function (schema) { return !Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(schema); })) {
        return null;
    }
    var combinedSchema = {};
    for (var _a = 0, schemas_1 = schemas; _a < schemas_1.length; _a++) {
        var schema = schemas_1[_a];
        var _loop_1 = function (key) {
            var combinedValue = combinedSchema[key];
            var schemaValue = schema[key];
            if (!Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(combinedSchema, key) || __WEBPACK_IMPORTED_MODULE_0_lodash__["isEqual"](combinedValue, schemaValue)) {
                combinedSchema[key] = schemaValue;
            }
            else {
                switch (key) {
                    case 'allOf':
                        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(combinedValue) && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(schemaValue)) {
                            combinedSchema.allOf = mergeSchemas.apply(void 0, combinedValue.concat(schemaValue));
                        }
                        else {
                            return { value: { allOf: schemas.slice() } };
                        }
                        break;
                    case 'additionalItems':
                    case 'additionalProperties':
                    case 'contains':
                    case 'propertyNames':
                        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(combinedValue) && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(schemaValue)) {
                            combinedSchema[key] = mergeSchemas(combinedValue, schemaValue);
                        }
                        else if (key === 'additionalProperties' &&
                            (combinedValue === false || schemaValue === false)) {
                            combinedSchema.combinedSchema = false;
                        }
                        else {
                            return { value: { allOf: schemas.slice() } };
                        }
                        break;
                    case 'anyOf':
                    case 'oneOf':
                    case 'enum':
                        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(combinedValue) && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(schemaValue)) {
                            combinedSchema[key] = combinedValue.filter(function (item1) {
                                return schemaValue.findIndex(function (item2) { return __WEBPACK_IMPORTED_MODULE_0_lodash__["isEqual"](item1, item2); }) > -1;
                            });
                            if (!combinedSchema[key].length) {
                                return { value: { allOf: schemas.slice() } };
                            }
                        }
                        else {
                            return { value: { allOf: schemas.slice() } };
                        }
                        break;
                    case 'definitions':
                        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(combinedValue) && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(schemaValue)) {
                            var combinedObject = __assign({}, combinedValue);
                            for (var _i = 0, _a = Object.keys(schemaValue); _i < _a.length; _i++) {
                                var subKey = _a[_i];
                                if (!Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(combinedObject, subKey) ||
                                    __WEBPACK_IMPORTED_MODULE_0_lodash__["isEqual"](combinedObject[subKey], schemaValue[subKey])) {
                                    combinedObject[subKey] = schemaValue[subKey];
                                }
                                else {
                                    return { value: { allOf: schemas.slice() } };
                                }
                            }
                            combinedSchema.definitions = combinedObject;
                        }
                        else {
                            return { value: { allOf: schemas.slice() } };
                        }
                        break;
                    case 'dependencies':
                        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(combinedValue) && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(schemaValue)) {
                            var combinedObject = __assign({}, combinedValue);
                            for (var _b = 0, _c = Object.keys(schemaValue); _b < _c.length; _b++) {
                                var subKey = _c[_b];
                                if (!Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(combinedObject, subKey) ||
                                    __WEBPACK_IMPORTED_MODULE_0_lodash__["isEqual"](combinedObject[subKey], schemaValue[subKey])) {
                                    combinedObject[subKey] = schemaValue[subKey];
                                }
                                else if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(schemaValue[subKey]) && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(combinedObject[subKey])) {
                                    combinedObject[subKey] = __WEBPACK_IMPORTED_MODULE_2__utility_functions__["j" /* uniqueItems */].apply(void 0, combinedObject[subKey].concat(schemaValue[subKey]));
                                }
                                else if ((Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(schemaValue[subKey]) || Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(schemaValue[subKey])) &&
                                    (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(combinedObject[subKey]) || Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(combinedObject[subKey]))) {
                                    var required = Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(combinedSchema.required) ?
                                        combinedSchema.required : [];
                                    var combinedDependency = Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(combinedObject[subKey]) ?
                                        { required: __WEBPACK_IMPORTED_MODULE_2__utility_functions__["j" /* uniqueItems */].apply(void 0, required.concat([combinedObject[subKey]])) } :
                                        combinedObject[subKey];
                                    var schemaDependency = Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(schemaValue[subKey]) ?
                                        { required: __WEBPACK_IMPORTED_MODULE_2__utility_functions__["j" /* uniqueItems */].apply(void 0, required.concat([schemaValue[subKey]])) } :
                                        schemaValue[subKey];
                                    combinedObject[subKey] =
                                        mergeSchemas(combinedDependency, schemaDependency);
                                }
                                else {
                                    return { value: { allOf: schemas.slice() } };
                                }
                            }
                            combinedSchema.dependencies = combinedObject;
                        }
                        else {
                            return { value: { allOf: schemas.slice() } };
                        }
                        break;
                    case 'items':
                        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(combinedValue) && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(schemaValue)) {
                            combinedSchema.items = combinedValue.filter(function (item1) {
                                return schemaValue.findIndex(function (item2) { return __WEBPACK_IMPORTED_MODULE_0_lodash__["isEqual"](item1, item2); }) > -1;
                            });
                            if (!combinedSchema.items.length) {
                                return { value: { allOf: schemas.slice() } };
                            }
                        }
                        else if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(combinedValue) && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(schemaValue)) {
                            combinedSchema.items = mergeSchemas(combinedValue, schemaValue);
                        }
                        else if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(combinedValue) && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(schemaValue)) {
                            combinedSchema.items =
                                combinedValue.map(function (item) { return mergeSchemas(item, schemaValue); });
                        }
                        else if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(combinedValue) && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(schemaValue)) {
                            combinedSchema.items =
                                schemaValue.map(function (item) { return mergeSchemas(item, combinedValue); });
                        }
                        else {
                            return { value: { allOf: schemas.slice() } };
                        }
                        break;
                    case 'multipleOf':
                        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["n" /* isNumber */])(combinedValue) && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["n" /* isNumber */])(schemaValue)) {
                            var gcd_1 = function (x, y) { return !y ? x : gcd_1(y, x % y); };
                            var lcm = function (x, y) { return (x * y) / gcd_1(x, y); };
                            combinedSchema.multipleOf = lcm(combinedValue, schemaValue);
                        }
                        else {
                            return { value: { allOf: schemas.slice() } };
                        }
                        break;
                    case 'maximum':
                    case 'exclusiveMaximum':
                    case 'maxLength':
                    case 'maxItems':
                    case 'maxProperties':
                        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["n" /* isNumber */])(combinedValue) && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["n" /* isNumber */])(schemaValue)) {
                            combinedSchema[key] = Math.min(combinedValue, schemaValue);
                        }
                        else {
                            return { value: { allOf: schemas.slice() } };
                        }
                        break;
                    case 'minimum':
                    case 'exclusiveMinimum':
                    case 'minLength':
                    case 'minItems':
                    case 'minProperties':
                        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["n" /* isNumber */])(combinedValue) && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["n" /* isNumber */])(schemaValue)) {
                            combinedSchema[key] = Math.max(combinedValue, schemaValue);
                        }
                        else {
                            return { value: { allOf: schemas.slice() } };
                        }
                        break;
                    case 'not':
                        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(combinedValue) && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(schemaValue)) {
                            var notAnyOf = [combinedValue, schemaValue]
                                .reduce(function (notAnyOfArray, notSchema) {
                                return Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(notSchema.anyOf) &&
                                    Object.keys(notSchema).length === 1 ? notAnyOfArray.concat(notSchema.anyOf) : notAnyOfArray.concat([notSchema]);
                            }, []);
                            combinedSchema.not = { anyOf: notAnyOf };
                        }
                        else {
                            return { value: { allOf: schemas.slice() } };
                        }
                        break;
                    case 'patternProperties':
                        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(combinedValue) && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(schemaValue)) {
                            var combinedObject = __assign({}, combinedValue);
                            for (var _d = 0, _e = Object.keys(schemaValue); _d < _e.length; _d++) {
                                var subKey = _e[_d];
                                if (!Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(combinedObject, subKey) ||
                                    __WEBPACK_IMPORTED_MODULE_0_lodash__["isEqual"](combinedObject[subKey], schemaValue[subKey])) {
                                    combinedObject[subKey] = schemaValue[subKey];
                                }
                                else if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(schemaValue[subKey]) && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(combinedObject[subKey])) {
                                    combinedObject[subKey] =
                                        mergeSchemas(combinedObject[subKey], schemaValue[subKey]);
                                }
                                else {
                                    return { value: { allOf: schemas.slice() } };
                                }
                            }
                            combinedSchema.patternProperties = combinedObject;
                        }
                        else {
                            return { value: { allOf: schemas.slice() } };
                        }
                        break;
                    case 'properties':
                        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(combinedValue) && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(schemaValue)) {
                            var combinedObject_1 = __assign({}, combinedValue);
                            if (Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(schemaValue, 'additionalProperties')) {
                                Object.keys(combinedValue)
                                    .filter(function (combinedKey) { return !Object.keys(schemaValue).includes(combinedKey); })
                                    .forEach(function (nonMatchingKey) {
                                    if (schemaValue.additionalProperties === false) {
                                        delete combinedObject_1[nonMatchingKey];
                                    }
                                    else if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(schemaValue.additionalProperties)) {
                                        combinedObject_1[nonMatchingKey] = mergeSchemas(combinedObject_1[nonMatchingKey], schemaValue.additionalProperties);
                                    }
                                });
                            }
                            for (var _f = 0, _g = Object.keys(schemaValue); _f < _g.length; _f++) {
                                var subKey = _g[_f];
                                if (__WEBPACK_IMPORTED_MODULE_0_lodash__["isEqual"](combinedObject_1[subKey], schemaValue[subKey]) || (!Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(combinedObject_1, subKey) &&
                                    !Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(combinedObject_1, 'additionalProperties'))) {
                                    combinedObject_1[subKey] = schemaValue[subKey];
                                }
                                else if (!Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(combinedObject_1, subKey) &&
                                    Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["g" /* hasOwn */])(combinedObject_1, 'additionalProperties')) {
                                    if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(combinedObject_1.additionalProperties)) {
                                        combinedObject_1[subKey] = mergeSchemas(combinedObject_1.additionalProperties, schemaValue[subKey]);
                                    }
                                }
                                else if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(schemaValue[subKey]) &&
                                    Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["o" /* isObject */])(combinedObject_1[subKey])) {
                                    combinedObject_1[subKey] =
                                        mergeSchemas(combinedObject_1[subKey], schemaValue[subKey]);
                                }
                                else {
                                    return { value: { allOf: schemas.slice() } };
                                }
                            }
                            combinedSchema.properties = combinedObject_1;
                        }
                        else {
                            return { value: { allOf: schemas.slice() } };
                        }
                        break;
                    case 'required':
                        if (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(combinedValue) && Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(schemaValue)) {
                            combinedSchema.required = __WEBPACK_IMPORTED_MODULE_2__utility_functions__["j" /* uniqueItems */].apply(void 0, combinedValue.concat(schemaValue));
                        }
                        else if (typeof schemaValue === 'boolean' &&
                            typeof combinedValue === 'boolean') {
                            combinedSchema.required = !!combinedValue || !!schemaValue;
                        }
                        else {
                            return { value: { allOf: schemas.slice() } };
                        }
                        break;
                    case '$schema':
                    case '$id':
                    case 'id':
                        break;
                    case 'title':
                    case 'description':
                        combinedSchema[key] = schemaValue;
                        break;
                    case 'type':
                        if ((Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(schemaValue) || Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["r" /* isString */])(schemaValue)) &&
                            (Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["h" /* isArray */])(combinedValue) || Object(__WEBPACK_IMPORTED_MODULE_1__validator_functions__["r" /* isString */])(combinedValue))) {
                            var combinedTypes = Object(__WEBPACK_IMPORTED_MODULE_2__utility_functions__["b" /* commonItems */])(combinedValue, schemaValue);
                            if (!combinedTypes.length) {
                                return { value: { allOf: schemas.slice() } };
                            }
                            combinedSchema.type = combinedTypes.length > 1 ? combinedTypes : combinedTypes[0];
                        }
                        else {
                            return { value: { allOf: schemas.slice() } };
                        }
                        break;
                    case 'uniqueItems':
                        combinedSchema.uniqueItems = !!combinedValue || !!schemaValue;
                        break;
                    default: return { value: { allOf: schemas.slice() } };
                }
            }
        };
        for (var _b = 0, _c = Object.keys(schema); _b < _c.length; _b++) {
            var key = _c[_b];
            var state_1 = _loop_1(key);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    }
    return combinedSchema;
}


/***/ }),

/***/ "../../../../../src/lib/src/shared/orderable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderableDirective = (function () {
    function OrderableDirective(elementRef, jsf, ngZone) {
        this.elementRef = elementRef;
        this.jsf = jsf;
        this.ngZone = ngZone;
        this.overParentElement = false;
        this.overChildElement = false;
    }
    OrderableDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.orderable && this.layoutNode && this.layoutIndex && this.dataIndex) {
            this.element = this.elementRef.nativeElement;
            this.element.draggable = true;
            this.arrayLayoutIndex = 'move:' + this.layoutIndex.slice(0, -1).toString();
            this.ngZone.runOutsideAngular(function () {
                _this.element.addEventListener('dragstart', function (event) {
                    event.dataTransfer.effectAllowed = 'move';
                    var sourceArrayIndex = _this.dataIndex[_this.dataIndex.length - 1];
                    sessionStorage.setItem(_this.arrayLayoutIndex, sourceArrayIndex + '');
                });
                _this.element.addEventListener('dragover', function (event) {
                    if (event.preventDefault) {
                        event.preventDefault();
                    }
                    event.dataTransfer.dropEffect = 'move';
                    return false;
                });
                _this.element.addEventListener('dragenter', function (event) {
                    if (_this.overParentElement) {
                        return _this.overChildElement = true;
                    }
                    else {
                        _this.overParentElement = true;
                    }
                    var sourceArrayIndex = sessionStorage.getItem(_this.arrayLayoutIndex);
                    if (sourceArrayIndex !== null) {
                        if (_this.dataIndex[_this.dataIndex.length - 1] < +sourceArrayIndex) {
                            _this.element.classList.add('drag-target-top');
                        }
                        else if (_this.dataIndex[_this.dataIndex.length - 1] > +sourceArrayIndex) {
                            _this.element.classList.add('drag-target-bottom');
                        }
                    }
                });
                _this.element.addEventListener('dragleave', function (event) {
                    if (_this.overChildElement) {
                        _this.overChildElement = false;
                    }
                    else if (_this.overParentElement) {
                        _this.overParentElement = false;
                    }
                    var sourceArrayIndex = sessionStorage.getItem(_this.arrayLayoutIndex);
                    if (!_this.overParentElement && !_this.overChildElement && sourceArrayIndex !== null) {
                        _this.element.classList.remove('drag-target-top');
                        _this.element.classList.remove('drag-target-bottom');
                    }
                });
                _this.element.addEventListener('drop', function (event) {
                    _this.element.classList.remove('drag-target-top');
                    _this.element.classList.remove('drag-target-bottom');
                    var sourceArrayIndex = sessionStorage.getItem(_this.arrayLayoutIndex);
                    var destArrayIndex = _this.dataIndex[_this.dataIndex.length - 1];
                    if (sourceArrayIndex !== null && +sourceArrayIndex !== destArrayIndex) {
                        _this.jsf.moveArrayItem(_this, +sourceArrayIndex, destArrayIndex);
                    }
                    sessionStorage.removeItem(_this.arrayLayoutIndex);
                    return false;
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], OrderableDirective.prototype, "orderable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], OrderableDirective.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], OrderableDirective.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], OrderableDirective.prototype, "dataIndex", void 0);
    OrderableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[orderable]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
    ], OrderableDirective);
    return OrderableDirective;
}());



/***/ }),

/***/ "../../../../../src/lib/src/shared/utility.functions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addClasses;
/* harmony export (immutable) */ __webpack_exports__["c"] = copy;
/* harmony export (immutable) */ __webpack_exports__["e"] = forEach;
/* harmony export (immutable) */ __webpack_exports__["f"] = forEachCopy;
/* harmony export (immutable) */ __webpack_exports__["g"] = hasOwn;
/* harmony export (immutable) */ __webpack_exports__["h"] = mergeFilteredObject;
/* harmony export (immutable) */ __webpack_exports__["j"] = uniqueItems;
/* harmony export (immutable) */ __webpack_exports__["b"] = commonItems;
/* harmony export (immutable) */ __webpack_exports__["d"] = fixTitle;
/* harmony export (immutable) */ __webpack_exports__["i"] = toTitleCase;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validator_functions__ = __webpack_require__("../../../../../src/lib/src/shared/validator.functions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

function addClasses(oldClasses, newClasses) {
    var badType = function (i) { return !Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["q" /* isSet */])(i) && !Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["h" /* isArray */])(i) && !Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["r" /* isString */])(i); };
    if (badType(newClasses)) {
        return oldClasses;
    }
    if (badType(oldClasses)) {
        oldClasses = '';
    }
    var toSet = function (i) { return Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["q" /* isSet */])(i) ? i : Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["h" /* isArray */])(i) ? new Set(i) : new Set(i.split(' ')); };
    var combinedSet = toSet(oldClasses);
    var newSet = toSet(newClasses);
    newSet.forEach(function (c) { return combinedSet.add(c); });
    if (Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["q" /* isSet */])(oldClasses)) {
        return combinedSet;
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["h" /* isArray */])(oldClasses)) {
        return Array.from(combinedSet);
    }
    return Array.from(combinedSet).join(' ');
}
function copy(object, errors) {
    if (errors === void 0) { errors = false; }
    if (typeof object !== 'object' || object === null) {
        return object;
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["m" /* isMap */])(object)) {
        return new Map(object);
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["q" /* isSet */])(object)) {
        return new Set(object);
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["h" /* isArray */])(object)) {
        return object.slice();
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["o" /* isObject */])(object)) {
        return __assign({}, object);
    }
    if (errors) {
        console.error('copy error: Object to copy must be a JavaScript object or value.');
    }
    return object;
}
function forEach(object, fn, recurse, rootObject, errors) {
    if (recurse === void 0) { recurse = false; }
    if (rootObject === void 0) { rootObject = object; }
    if (errors === void 0) { errors = false; }
    if (Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["l" /* isEmpty */])(object)) {
        return;
    }
    if ((Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["o" /* isObject */])(object) || Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["h" /* isArray */])(object)) && typeof fn === 'function') {
        for (var _i = 0, _a = Object.keys(object); _i < _a.length; _i++) {
            var key = _a[_i];
            var value = object[key];
            if (recurse === 'bottom-up' && (Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["o" /* isObject */])(value) || Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["h" /* isArray */])(value))) {
                forEach(value, fn, recurse, rootObject);
            }
            fn(value, key, object, rootObject);
            if (recurse === 'top-down' && (Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["o" /* isObject */])(value) || Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["h" /* isArray */])(value))) {
                forEach(value, fn, recurse, rootObject);
            }
        }
    }
    if (errors) {
        if (typeof fn !== 'function') {
            console.error('forEach error: Iterator must be a function.');
            console.error('function', fn);
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["o" /* isObject */])(object) && !Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["h" /* isArray */])(object)) {
            console.error('forEach error: Input object must be an object or array.');
            console.error('object', object);
        }
    }
}
function forEachCopy(object, fn, errors) {
    if (errors === void 0) { errors = false; }
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["f" /* hasValue */])(object)) {
        return;
    }
    if ((Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["o" /* isObject */])(object) || Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["h" /* isArray */])(object)) && typeof fn !== 'function') {
        var newObject = Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["h" /* isArray */])(object) ? [] : {};
        for (var _i = 0, _a = Object.keys(object); _i < _a.length; _i++) {
            var key = _a[_i];
            newObject[key] = fn(object[key], key, object);
        }
        return newObject;
    }
    if (errors) {
        if (typeof fn !== 'function') {
            console.error('forEachCopy error: Iterator must be a function.');
            console.error('function', fn);
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["o" /* isObject */])(object) && !Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["h" /* isArray */])(object)) {
            console.error('forEachCopy error: Input object must be an object or array.');
            console.error('object', object);
        }
    }
}
function hasOwn(object, property) {
    if (!object || !['number', 'string', 'symbol'].includes(typeof property) ||
        (!Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["o" /* isObject */])(object) && !Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["h" /* isArray */])(object) && !Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["m" /* isMap */])(object) && !Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["q" /* isSet */])(object))) {
        return false;
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["m" /* isMap */])(object) || Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["q" /* isSet */])(object)) {
        return object.has(property);
    }
    if (typeof property === 'number') {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["h" /* isArray */])(object)) {
            return object[property];
        }
        property = property + '';
    }
    return object.hasOwnProperty(property);
}
function mergeFilteredObject(targetObject, sourceObject, excludeKeys, keyFn, valFn) {
    if (excludeKeys === void 0) { excludeKeys = []; }
    if (keyFn === void 0) { keyFn = function (key) { return key; }; }
    if (valFn === void 0) { valFn = function (val) { return val; }; }
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["o" /* isObject */])(sourceObject)) {
        return targetObject;
    }
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["o" /* isObject */])(targetObject)) {
        targetObject = {};
    }
    for (var _i = 0, _a = Object.keys(sourceObject); _i < _a.length; _i++) {
        var key = _a[_i];
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["g" /* inArray */])(key, excludeKeys) && Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["k" /* isDefined */])(sourceObject[key])) {
            targetObject[keyFn(key)] = valFn(sourceObject[key]);
        }
    }
    return targetObject;
}
function uniqueItems() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var returnItems = [];
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        if (!returnItems.includes(item)) {
            returnItems.push(item);
        }
    }
    return returnItems;
}
function commonItems() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var returnItems = null;
    var _loop_1 = function (array) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["r" /* isString */])(array)) {
            array = [array];
        }
        returnItems = returnItems === null ? array.slice() :
            returnItems.filter(function (item) { return array.includes(item); });
        if (!returnItems.length) {
            return { value: [] };
        }
    };
    for (var _a = 0, arrays_1 = arrays; _a < arrays_1.length; _a++) {
        var array = arrays_1[_a];
        var state_1 = _loop_1(array);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return returnItems;
}
function fixTitle(name) {
    return name && toTitleCase(name.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/_/g, ' '));
}
function toTitleCase(input, forceWords) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["r" /* isString */])(input)) {
        return input;
    }
    var forceArray = ['a', 'an', 'and', 'as', 'at', 'but', 'by', 'en',
        'for', 'if', 'in', 'nor', 'of', 'on', 'or', 'per', 'the', 'to', 'v', 'v.',
        'vs', 'vs.', 'via'];
    if (Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["r" /* isString */])(forceWords)) {
        forceWords = forceWords.split('|');
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_0__validator_functions__["h" /* isArray */])(forceWords)) {
        forceArray = forceArray.concat(forceWords);
    }
    var forceArrayLower = forceArray.map(function (w) { return w.toLowerCase(); });
    var noInitialCase = input === input.toUpperCase() || input === input.toLowerCase();
    var prevLastChar = '';
    input = input.trim();
    return input.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (word, idx) {
        if (!noInitialCase && word.slice(1).search(/[A-Z]|\../) !== -1) {
            return word;
        }
        else {
            var newWord = void 0;
            var forceWord = forceArray[forceArrayLower.indexOf(word.toLowerCase())];
            if (!forceWord) {
                if (noInitialCase) {
                    if (word.slice(1).search(/\../) !== -1) {
                        newWord = word.toLowerCase();
                    }
                    else {
                        newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
                    }
                }
                else {
                    newWord = word[0].toUpperCase() + word.slice(1);
                }
            }
            else if (forceWord === forceWord.toLowerCase() && (idx === 0 || idx + word.length === input.length ||
                prevLastChar === ':' || input[idx - 1].search(/[^\s-]/) !== -1 ||
                (input[idx - 1] !== '-' && input[idx + word.length] === '-'))) {
                newWord = forceWord[0].toUpperCase() + forceWord.slice(1);
            }
            else {
                newWord = forceWord;
            }
            prevLastChar = word.slice(-1);
            return newWord;
        }
    });
}
;


/***/ }),

/***/ "../../../../../src/lib/src/shared/validator.functions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = _executeValidators;
/* harmony export (immutable) */ __webpack_exports__["a"] = _executeAsyncValidators;
/* harmony export (immutable) */ __webpack_exports__["d"] = _mergeObjects;
/* harmony export (immutable) */ __webpack_exports__["c"] = _mergeErrors;
/* harmony export (immutable) */ __webpack_exports__["k"] = isDefined;
/* harmony export (immutable) */ __webpack_exports__["f"] = hasValue;
/* harmony export (immutable) */ __webpack_exports__["l"] = isEmpty;
/* harmony export (immutable) */ __webpack_exports__["r"] = isString;
/* harmony export (immutable) */ __webpack_exports__["n"] = isNumber;
/* unused harmony export isInteger */
/* harmony export (immutable) */ __webpack_exports__["i"] = isBoolean;
/* unused harmony export isFunction */
/* harmony export (immutable) */ __webpack_exports__["o"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["h"] = isArray;
/* harmony export (immutable) */ __webpack_exports__["j"] = isDate;
/* harmony export (immutable) */ __webpack_exports__["m"] = isMap;
/* harmony export (immutable) */ __webpack_exports__["q"] = isSet;
/* unused harmony export isSymbol */
/* harmony export (immutable) */ __webpack_exports__["e"] = getType;
/* harmony export (immutable) */ __webpack_exports__["s"] = isType;
/* harmony export (immutable) */ __webpack_exports__["p"] = isPrimitive;
/* harmony export (immutable) */ __webpack_exports__["t"] = toJavaScriptType;
/* harmony export (immutable) */ __webpack_exports__["v"] = toSchemaType;
/* unused harmony export isPromise */
/* unused harmony export isObservable */
/* unused harmony export _toPromise */
/* harmony export (immutable) */ __webpack_exports__["u"] = toObservable;
/* harmony export (immutable) */ __webpack_exports__["g"] = inArray;
/* harmony export (immutable) */ __webpack_exports__["w"] = xor;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromPromise__ = __webpack_require__("../../../../rxjs/_esm5/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/operator/toPromise.js");



;
function _executeValidators(control, validators, invert) {
    if (invert === void 0) { invert = false; }
    return validators.map(function (validator) { return validator(control, invert); });
}
function _executeAsyncValidators(control, validators, invert) {
    if (invert === void 0) { invert = false; }
    return validators.map(function (validator) { return validator(control, invert); });
}
function _mergeObjects() {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    var mergedObject = {};
    for (var _a = 0, objects_1 = objects; _a < objects_1.length; _a++) {
        var currentObject = objects_1[_a];
        if (isObject(currentObject)) {
            for (var _b = 0, _c = Object.keys(currentObject); _b < _c.length; _b++) {
                var key = _c[_b];
                var currentValue = currentObject[key];
                var mergedValue = mergedObject[key];
                mergedObject[key] = !isDefined(mergedValue) ? currentValue :
                    key === 'not' && isBoolean(mergedValue, 'strict') &&
                        isBoolean(currentValue, 'strict') ? xor(mergedValue, currentValue) :
                        getType(mergedValue) === 'object' && getType(currentValue) === 'object' ?
                            _mergeObjects(mergedValue, currentValue) :
                            currentValue;
            }
        }
    }
    return mergedObject;
}
function _mergeErrors(arrayOfErrors) {
    var mergedErrors = _mergeObjects.apply(void 0, arrayOfErrors);
    return isEmpty(mergedErrors) ? null : mergedErrors;
}
function isDefined(value) {
    return value !== undefined && value !== null;
}
function hasValue(value) {
    return value !== undefined && value !== null && value !== '';
}
function isEmpty(value) {
    if (isArray(value)) {
        return !value.length;
    }
    if (isObject(value)) {
        return !Object.keys(value).length;
    }
    return value === undefined || value === null || value === '';
}
function isString(value) {
    return typeof value === 'string';
}
function isNumber(value, strict) {
    if (strict === void 0) { strict = false; }
    if (strict && typeof value !== 'number') {
        return false;
    }
    return !isNaN(value) && value !== value / 0;
}
function isInteger(value, strict) {
    if (strict === void 0) { strict = false; }
    if (strict && typeof value !== 'number') {
        return false;
    }
    return !isNaN(value) && value !== value / 0 && value % 1 === 0;
}
function isBoolean(value, option) {
    if (option === void 0) { option = null; }
    if (option === 'strict') {
        return value === true || value === false;
    }
    if (option === true) {
        return value === true || value === 1 || value === 'true' || value === '1';
    }
    if (option === false) {
        return value === false || value === 0 || value === 'false' || value === '0';
    }
    return value === true || value === 1 || value === 'true' || value === '1' ||
        value === false || value === 0 || value === 'false' || value === '0';
}
function isFunction(item) {
    return typeof item === 'function';
}
function isObject(item) {
    return item !== null && typeof item === 'object' &&
        Object.prototype.toString.call(item) === '[object Object]';
}
function isArray(item) {
    return Array.isArray(item) ||
        Object.prototype.toString.call(item) === '[object Array]';
}
function isDate(item) {
    return typeof item === 'object' &&
        Object.prototype.toString.call(item) === '[object Date]';
}
function isMap(item) {
    return typeof item === 'object' &&
        Object.prototype.toString.call(item) === '[object Map]';
}
function isSet(item) {
    return typeof item === 'object' &&
        Object.prototype.toString.call(item) === '[object Set]';
}
function isSymbol(item) {
    return typeof item === 'symbol';
}
function getType(value, strict) {
    if (strict === void 0) { strict = false; }
    if (!isDefined(value)) {
        return 'null';
    }
    if (isArray(value)) {
        return 'array';
    }
    if (isObject(value)) {
        return 'object';
    }
    if (isBoolean(value, 'strict')) {
        return 'boolean';
    }
    if (isInteger(value, strict)) {
        return 'integer';
    }
    if (isNumber(value, strict)) {
        return 'number';
    }
    if (isString(value) || (!strict && isDate(value))) {
        return 'string';
    }
    return null;
}
function isType(value, type) {
    switch (type) {
        case 'string':
            return isString(value) || isDate(value);
        case 'number':
            return isNumber(value);
        case 'integer':
            return isInteger(value);
        case 'boolean':
            return isBoolean(value);
        case 'null':
            return !hasValue(value);
        default:
            console.error("isType error: \"" + type + "\" is not a recognized type.");
            return null;
    }
}
function isPrimitive(value) {
    return (isString(value) || isNumber(value) ||
        isBoolean(value, 'strict') || value === null);
}
function toJavaScriptType(value, types, strictIntegers) {
    if (strictIntegers === void 0) { strictIntegers = true; }
    if (!isDefined(value)) {
        return null;
    }
    if (isString(types)) {
        types = [types];
    }
    if (strictIntegers && inArray('integer', types)) {
        if (isInteger(value, 'strict')) {
            return value;
        }
        if (isInteger(value)) {
            return parseInt(value, 10);
        }
    }
    if (inArray('number', types) || (!strictIntegers && inArray('integer', types))) {
        if (isNumber(value, 'strict')) {
            return value;
        }
        if (isNumber(value)) {
            return parseFloat(value);
        }
    }
    if (inArray('string', types)) {
        if (isString(value)) {
            return value;
        }
        if (isDate(value)) {
            return value.toISOString().slice(0, 10);
        }
        if (isNumber(value)) {
            return value.toString();
        }
    }
    if (isDate(value) && (inArray('integer', types) || inArray('number', types))) {
        return value.getTime();
    }
    if (inArray('boolean', types)) {
        if (isBoolean(value, true)) {
            return true;
        }
        if (isBoolean(value, false)) {
            return false;
        }
    }
    return null;
}
function toSchemaType(value, types) {
    if (!isArray(types)) {
        types = [types];
    }
    if (types.includes('null') && !hasValue(value)) {
        return null;
    }
    if (types.includes('boolean') && !isBoolean(value, 'strict')) {
        return value;
    }
    if (types.includes('integer')) {
        var testValue = toJavaScriptType(value, 'integer');
        if (testValue !== null) {
            return +testValue;
        }
    }
    if (types.includes('number')) {
        var testValue = toJavaScriptType(value, 'number');
        if (testValue !== null) {
            return +testValue;
        }
    }
    if ((isString(value) || isNumber(value, 'strict')) &&
        types.includes('string')) {
        return toJavaScriptType(value, 'string');
    }
    if (types.includes('boolean') && isBoolean(value)) {
        return toJavaScriptType(value, 'boolean');
    }
    if (types.includes('string')) {
        if (value === null) {
            return '';
        }
        var testValue = toJavaScriptType(value, 'string');
        if (testValue !== null) {
            return testValue;
        }
    }
    if ((types.includes('number') ||
        types.includes('integer'))) {
        if (value === true) {
            return 1;
        }
        if (value === false || value === null || value === '') {
            return 0;
        }
    }
    if (types.includes('number')) {
        var testValue = parseFloat(value);
        if (!!testValue) {
            return testValue;
        }
    }
    if (types.includes('integer')) {
        var testValue = parseInt(value, 10);
        if (!!testValue) {
            return testValue;
        }
    }
    if (types.includes('boolean')) {
        return !!value;
    }
    if ((types.includes('number') ||
        types.includes('integer')) && !types.includes('null')) {
        return 0;
    }
}
function isPromise(object) {
    return !!object && typeof object.then === 'function';
}
function isObservable(object) {
    return !!object && typeof object.subscribe === 'function';
}
function _toPromise(object) {
    return isPromise(object) ? object : __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_toPromise__["a" /* toPromise */].call(object);
}
function toObservable(object) {
    var observable = isPromise(object) ? Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_fromPromise__["a" /* fromPromise */])(object) : object;
    if (isObservable(observable)) {
        return observable;
    }
    console.error('toObservable error: Expected validator to return Promise or Observable.');
    return new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */]();
}
function inArray(item, array, allIn) {
    if (allIn === void 0) { allIn = false; }
    if (!isDefined(item) || !isArray(array)) {
        return false;
    }
    return isArray(item) ?
        item[allIn ? 'every' : 'some'](function (subItem) { return array.includes(subItem); }) :
        array.includes(item);
}
function xor(value1, value2) {
    return (!!value1 && !value2) || (!value1 && !!value2);
}


/***/ }),

/***/ "../../../../../src/lib/src/widget-library/add-reference.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddReferenceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddReferenceComponent = (function () {
    function AddReferenceComponent(jsf) {
        this.jsf = jsf;
    }
    AddReferenceComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
    };
    Object.defineProperty(AddReferenceComponent.prototype, "showAddButton", {
        get: function () {
            return !this.layoutNode.arrayItem ||
                this.layoutIndex[this.layoutIndex.length - 1] < this.options.maxItems;
        },
        enumerable: true,
        configurable: true
    });
    AddReferenceComponent.prototype.addItem = function (event) {
        event.preventDefault();
        this.jsf.addItem(this);
    };
    Object.defineProperty(AddReferenceComponent.prototype, "buttonText", {
        get: function () {
            var parent = {
                dataIndex: this.dataIndex.slice(0, -1),
                layoutIndex: this.layoutIndex.slice(0, -1),
                layoutNode: this.jsf.getParentNode(this)
            };
            return parent.layoutNode.add ||
                this.jsf.setArrayItemTitle(parent, this.layoutNode, this.itemCount);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], AddReferenceComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], AddReferenceComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], AddReferenceComponent.prototype, "dataIndex", void 0);
    AddReferenceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'add-reference-widget',
            template: "\n    <button *ngIf=\"showAddButton\"\n      [class]=\"options?.fieldHtmlClass || ''\"\n      [disabled]=\"options?.readonly\"\n      (click)=\"addItem($event)\">\n      <span *ngIf=\"options?.icon\" [class]=\"options?.icon\"></span>\n      <span *ngIf=\"options?.title\" [innerHTML]=\"buttonText\"></span>\n    </button>",
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].Default,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], AddReferenceComponent);
    return AddReferenceComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/widget-library/button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonComponent = (function () {
    function ButtonComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
    }
    ButtonComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
    };
    ButtonComponent.prototype.updateValue = function (event) {
        if (typeof this.options.onClick === 'function') {
            this.options.onClick(event);
        }
        else {
            this.jsf.updateValue(this, event.target.value);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ButtonComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], ButtonComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], ButtonComponent.prototype, "dataIndex", void 0);
    ButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'button-widget',
            template: "\n    <div\n      [class]=\"options?.htmlClass || ''\">\n      <button\n        [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [class]=\"options?.fieldHtmlClass || ''\"\n        [disabled]=\"controlDisabled\"\n        [name]=\"controlName\"\n        [type]=\"layoutNode?.type\"\n        [value]=\"controlValue\"\n        (click)=\"updateValue($event)\">\n        <span *ngIf=\"options?.icon || options?.title\"\n          [class]=\"options?.icon\"\n          [innerHTML]=\"options?.title\"></span>\n      </button>\n    </div>",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/widget-library/checkbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckboxComponent = (function () {
    function CheckboxComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.trueValue = true;
        this.falseValue = false;
    }
    CheckboxComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
        if (this.controlValue === null || this.controlValue === undefined) {
            this.controlValue = this.options.title;
        }
    };
    CheckboxComponent.prototype.updateValue = function (event) {
        event.preventDefault();
        this.jsf.updateValue(this, event.target.checked ? this.trueValue : this.falseValue);
    };
    Object.defineProperty(CheckboxComponent.prototype, "isChecked", {
        get: function () {
            return this.jsf.getFormControlValue(this) === this.trueValue;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CheckboxComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], CheckboxComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], CheckboxComponent.prototype, "dataIndex", void 0);
    CheckboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'checkbox-widget',
            template: "\n    <label\n      [attr.for]=\"'control' + layoutNode?._id\"\n      [class]=\"options?.itemLabelHtmlClass || ''\">\n      <input *ngIf=\"boundControl\"\n        [formControl]=\"formControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [class]=\"(options?.fieldHtmlClass || '') + (isChecked ?\n          (' ' + (options?.activeClass || '') + ' ' + (options?.style?.selected || '')) :\n          (' ' + (options?.style?.unselected || '')))\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [readonly]=\"options?.readonly ? 'readonly' : null\"\n        type=\"checkbox\">\n      <input *ngIf=\"!boundControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [checked]=\"isChecked ? 'checked' : null\"\n        [class]=\"(options?.fieldHtmlClass || '') + (isChecked ?\n          (' ' + (options?.activeClass || '') + ' ' + (options?.style?.selected || '')) :\n          (' ' + (options?.style?.unselected || '')))\"\n        [disabled]=\"controlDisabled\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [readonly]=\"options?.readonly ? 'readonly' : null\"\n        [value]=\"controlValue\"\n        type=\"checkbox\"\n        (change)=\"updateValue($event)\">\n      <span *ngIf=\"options?.title\"\n        [style.display]=\"options?.notitle ? 'none' : ''\"\n        [innerHTML]=\"options?.title\"></span>\n    </label>",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/widget-library/checkboxes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/lib/src/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckboxesComponent = (function () {
    function CheckboxesComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.checkboxList = [];
    }
    CheckboxesComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.layoutOrientation = (this.layoutNode.type === 'checkboxes-inline' ||
            this.layoutNode.type === 'checkboxbuttons') ? 'horizontal' : 'vertical';
        this.jsf.initializeControl(this);
        this.checkboxList = Object(__WEBPACK_IMPORTED_MODULE_2__shared__["c" /* buildTitleMap */])(this.options.titleMap || this.options.enumNames, this.options.enum, true);
        if (this.boundControl) {
            var formArray_1 = this.jsf.getFormControl(this);
            this.checkboxList.forEach(function (checkboxItem) {
                return checkboxItem.checked = formArray_1.value.includes(checkboxItem.value);
            });
        }
    };
    CheckboxesComponent.prototype.updateValue = function (event) {
        for (var _i = 0, _a = this.checkboxList; _i < _a.length; _i++) {
            var checkboxItem = _a[_i];
            if (event.target.value === checkboxItem.value) {
                checkboxItem.checked = event.target.checked;
            }
        }
        if (this.boundControl) {
            this.jsf.updateArrayCheckboxList(this, this.checkboxList);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CheckboxesComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], CheckboxesComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], CheckboxesComponent.prototype, "dataIndex", void 0);
    CheckboxesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'checkboxes-widget',
            template: "\n    <label *ngIf=\"options?.title\"\n      [class]=\"options?.labelHtmlClass || ''\"\n      [style.display]=\"options?.notitle ? 'none' : ''\"\n      [innerHTML]=\"options?.title\"></label>\n\n    <!-- 'horizontal' = checkboxes-inline or checkboxbuttons -->\n    <div *ngIf=\"layoutOrientation === 'horizontal'\" [class]=\"options?.htmlClass || ''\">\n      <label *ngFor=\"let checkboxItem of checkboxList\"\n        [attr.for]=\"'control' + layoutNode?._id + '/' + checkboxItem.value\"\n        [class]=\"(options?.itemLabelHtmlClass || '') + (checkboxItem.checked ?\n          (' ' + (options?.activeClass || '') + ' ' + (options?.style?.selected || '')) :\n          (' ' + (options?.style?.unselected || '')))\">\n        <input type=\"checkbox\"\n          [attr.required]=\"options?.required\"\n          [checked]=\"checkboxItem.checked\"\n          [class]=\"options?.fieldHtmlClass || ''\"\n          [disabled]=\"controlDisabled\"\n          [id]=\"'control' + layoutNode?._id + '/' + checkboxItem.value\"\n          [name]=\"checkboxItem?.name\"\n          [readonly]=\"options?.readonly ? 'readonly' : null\"\n          [value]=\"checkboxItem.value\"\n          (change)=\"updateValue($event)\">\n        <span [innerHTML]=\"checkboxItem.name\"></span>\n      </label>\n    </div>\n\n    <!-- 'vertical' = regular checkboxes -->\n    <div *ngIf=\"layoutOrientation === 'vertical'\">\n      <div *ngFor=\"let checkboxItem of checkboxList\" [class]=\"options?.htmlClass || ''\">\n        <label\n          [attr.for]=\"'control' + layoutNode?._id + '/' + checkboxItem.value\"\n          [class]=\"(options?.itemLabelHtmlClass || '') + (checkboxItem.checked ?\n            (' ' + (options?.activeClass || '') + ' ' + (options?.style?.selected || '')) :\n            (' ' + (options?.style?.unselected || '')))\">\n          <input type=\"checkbox\"\n            [attr.required]=\"options?.required\"\n            [checked]=\"checkboxItem.checked\"\n            [class]=\"options?.fieldHtmlClass || ''\"\n            [disabled]=\"controlDisabled\"\n            [id]=\"options?.name + '/' + checkboxItem.value\"\n            [name]=\"checkboxItem?.name\"\n            [readonly]=\"options?.readonly ? 'readonly' : null\"\n            [value]=\"checkboxItem.value\"\n            (change)=\"updateValue($event)\">\n          <span [innerHTML]=\"checkboxItem?.name\"></span>\n        </label>\n      </div>\n    </div>",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], CheckboxesComponent);
    return CheckboxesComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/widget-library/file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileComponent = (function () {
    function FileComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
    }
    FileComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
    };
    FileComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], FileComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], FileComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], FileComponent.prototype, "dataIndex", void 0);
    FileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'file-widget',
            template: "",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], FileComponent);
    return FileComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/widget-library/hidden.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HiddenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HiddenComponent = (function () {
    function HiddenComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
    }
    HiddenComponent.prototype.ngOnInit = function () {
        this.jsf.initializeControl(this);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], HiddenComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], HiddenComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], HiddenComponent.prototype, "dataIndex", void 0);
    HiddenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'hidden-widget',
            template: "\n    <input *ngIf=\"boundControl\"\n      [formControl]=\"formControl\"\n      [id]=\"'control' + layoutNode?._id\"\n      [name]=\"controlName\"\n      type=\"hidden\">\n    <input *ngIf=\"!boundControl\"\n      [disabled]=\"controlDisabled\"\n      [name]=\"controlName\"\n      [id]=\"'control' + layoutNode?._id\"\n      type=\"hidden\"\n      [value]=\"controlValue\">",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], HiddenComponent);
    return HiddenComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/widget-library/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASIC_WIDGETS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_reference_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/add-reference.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__one_of_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/one-of.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkbox_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/checkbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkboxes_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/checkboxes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__file_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hidden_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/hidden.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__input_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__message_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__none_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/none.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__number_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/number.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__radios_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/radios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__root_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__section_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__select_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__select_framework_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/select-framework.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__select_widget_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/select-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__submit_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/submit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__tab_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/tab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__tabs_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__template_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__textarea_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/textarea.component.ts");
/* unused harmony reexport AddReferenceComponent */
/* unused harmony reexport OneOfComponent */
/* unused harmony reexport ButtonComponent */
/* unused harmony reexport CheckboxComponent */
/* unused harmony reexport CheckboxesComponent */
/* unused harmony reexport FileComponent */
/* unused harmony reexport HiddenComponent */
/* unused harmony reexport InputComponent */
/* unused harmony reexport MessageComponent */
/* unused harmony reexport NoneComponent */
/* unused harmony reexport NumberComponent */
/* unused harmony reexport RadiosComponent */
/* unused harmony reexport RootComponent */
/* unused harmony reexport SectionComponent */
/* unused harmony reexport SelectComponent */
/* unused harmony reexport SelectFrameworkComponent */
/* unused harmony reexport SelectWidgetComponent */
/* unused harmony reexport SubmitComponent */
/* unused harmony reexport TabComponent */
/* unused harmony reexport TabsComponent */
/* unused harmony reexport TemplateComponent */
/* unused harmony reexport TextareaComponent */






















var BASIC_WIDGETS = [
    __WEBPACK_IMPORTED_MODULE_0__add_reference_component__["a" /* AddReferenceComponent */], __WEBPACK_IMPORTED_MODULE_1__one_of_component__["a" /* OneOfComponent */], __WEBPACK_IMPORTED_MODULE_2__button_component__["a" /* ButtonComponent */], __WEBPACK_IMPORTED_MODULE_3__checkbox_component__["a" /* CheckboxComponent */],
    __WEBPACK_IMPORTED_MODULE_4__checkboxes_component__["a" /* CheckboxesComponent */], __WEBPACK_IMPORTED_MODULE_5__file_component__["a" /* FileComponent */], __WEBPACK_IMPORTED_MODULE_6__hidden_component__["a" /* HiddenComponent */], __WEBPACK_IMPORTED_MODULE_7__input_component__["a" /* InputComponent */],
    __WEBPACK_IMPORTED_MODULE_8__message_component__["a" /* MessageComponent */], __WEBPACK_IMPORTED_MODULE_9__none_component__["a" /* NoneComponent */], __WEBPACK_IMPORTED_MODULE_10__number_component__["a" /* NumberComponent */], __WEBPACK_IMPORTED_MODULE_11__radios_component__["a" /* RadiosComponent */],
    __WEBPACK_IMPORTED_MODULE_12__root_component__["a" /* RootComponent */], __WEBPACK_IMPORTED_MODULE_13__section_component__["a" /* SectionComponent */], __WEBPACK_IMPORTED_MODULE_14__select_component__["a" /* SelectComponent */], __WEBPACK_IMPORTED_MODULE_15__select_framework_component__["a" /* SelectFrameworkComponent */],
    __WEBPACK_IMPORTED_MODULE_16__select_widget_component__["a" /* SelectWidgetComponent */], __WEBPACK_IMPORTED_MODULE_17__submit_component__["a" /* SubmitComponent */], __WEBPACK_IMPORTED_MODULE_18__tab_component__["a" /* TabComponent */], __WEBPACK_IMPORTED_MODULE_19__tabs_component__["a" /* TabsComponent */],
    __WEBPACK_IMPORTED_MODULE_20__template_component__["a" /* TemplateComponent */], __WEBPACK_IMPORTED_MODULE_21__textarea_component__["a" /* TextareaComponent */]
];
























/***/ }),

/***/ "../../../../../src/lib/src/widget-library/input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputComponent = (function () {
    function InputComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.autoCompleteList = [];
    }
    InputComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
    };
    InputComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], InputComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], InputComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], InputComponent.prototype, "dataIndex", void 0);
    InputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'input-widget',
            template: "\n    <div [class]=\"options?.htmlClass || ''\">\n      <label *ngIf=\"options?.title\"\n        [attr.for]=\"'control' + layoutNode?._id\"\n        [class]=\"options?.labelHtmlClass || ''\"\n        [style.display]=\"options?.notitle ? 'none' : ''\"\n        [innerHTML]=\"options?.title\"></label>\n      <input *ngIf=\"boundControl\"\n        [formControl]=\"formControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.list]=\"'control' + layoutNode?._id + 'Autocomplete'\"\n        [attr.maxlength]=\"options?.maxLength\"\n        [attr.minlength]=\"options?.minLength\"\n        [attr.pattern]=\"options?.pattern\"\n        [attr.placeholder]=\"options?.placeholder\"\n        [attr.required]=\"options?.required\"\n        [class]=\"options?.fieldHtmlClass || ''\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [readonly]=\"options?.readonly ? 'readonly' : null\"\n        [type]=\"layoutNode?.type\">\n      <input *ngIf=\"!boundControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.list]=\"'control' + layoutNode?._id + 'Autocomplete'\"\n        [attr.maxlength]=\"options?.maxLength\"\n        [attr.minlength]=\"options?.minLength\"\n        [attr.pattern]=\"options?.pattern\"\n        [attr.placeholder]=\"options?.placeholder\"\n        [attr.required]=\"options?.required\"\n        [class]=\"options?.fieldHtmlClass || ''\"\n        [disabled]=\"controlDisabled\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [readonly]=\"options?.readonly ? 'readonly' : null\"\n        [type]=\"layoutNode?.type\"\n        [value]=\"controlValue\"\n        (input)=\"updateValue($event)\">\n        <datalist *ngIf=\"options?.typeahead?.source\"\n          [id]=\"'control' + layoutNode?._id + 'Autocomplete'\">\n          <option *ngFor=\"let word of options?.typeahead?.source\" [value]=\"word\">\n        </datalist>\n    </div>",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/widget-library/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageComponent = (function () {
    function MessageComponent(jsf) {
        this.jsf = jsf;
        this.message = null;
    }
    MessageComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.message = this.options.help || this.options.helpvalue ||
            this.options.msg || this.options.message;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MessageComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MessageComponent.prototype, "dataIndex", void 0);
    MessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'message-widget',
            template: "\n    <span *ngIf=\"message\"\n      [class]=\"options?.labelHtmlClass || ''\"\n      [innerHTML]=\"message\"></span>",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/widget-library/none.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoneComponent = (function () {
    function NoneComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NoneComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], NoneComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], NoneComponent.prototype, "dataIndex", void 0);
    NoneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'none-widget',
            template: "",
        })
    ], NoneComponent);
    return NoneComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/widget-library/number.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NumberComponent = (function () {
    function NumberComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.allowNegative = true;
        this.allowDecimal = true;
        this.allowExponents = false;
        this.lastValidNumber = '';
    }
    NumberComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
        if (this.layoutNode.dataType === 'integer') {
            this.allowDecimal = false;
        }
    };
    NumberComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NumberComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], NumberComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], NumberComponent.prototype, "dataIndex", void 0);
    NumberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'number-widget',
            template: "\n    <div [class]=\"options?.htmlClass || ''\">\n      <label *ngIf=\"options?.title\"\n        [attr.for]=\"'control' + layoutNode?._id\"\n        [class]=\"options?.labelHtmlClass || ''\"\n        [style.display]=\"options?.notitle ? 'none' : ''\"\n        [innerHTML]=\"options?.title\"></label>\n      <input *ngIf=\"boundControl\"\n        [formControl]=\"formControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.max]=\"options?.maximum\"\n        [attr.min]=\"options?.minimum\"\n        [attr.placeholder]=\"options?.placeholder\"\n        [attr.required]=\"options?.required\"\n        [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n        [attr.step]=\"options?.multipleOf || options?.step || 'any'\"\n        [class]=\"options?.fieldHtmlClass || ''\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [readonly]=\"options?.readonly ? 'readonly' : null\"\n        [title]=\"lastValidNumber\"\n        [type]=\"layoutNode?.type === 'range' ? 'range' : 'number'\">\n      <input *ngIf=\"!boundControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.max]=\"options?.maximum\"\n        [attr.min]=\"options?.minimum\"\n        [attr.placeholder]=\"options?.placeholder\"\n        [attr.required]=\"options?.required\"\n        [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n        [attr.step]=\"options?.multipleOf || options?.step || 'any'\"\n        [class]=\"options?.fieldHtmlClass || ''\"\n        [disabled]=\"controlDisabled\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [readonly]=\"options?.readonly ? 'readonly' : null\"\n        [title]=\"lastValidNumber\"\n        [type]=\"layoutNode?.type === 'range' ? 'range' : 'number'\"\n        [value]=\"controlValue\"\n        (input)=\"updateValue($event)\">\n      <span *ngIf=\"layoutNode?.type === 'range'\" [innerHTML]=\"controlValue\"></span>\n    </div>",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], NumberComponent);
    return NumberComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/widget-library/one-of.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneOfComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OneOfComponent = (function () {
    function OneOfComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
    }
    OneOfComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
    };
    OneOfComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], OneOfComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], OneOfComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], OneOfComponent.prototype, "dataIndex", void 0);
    OneOfComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'one-of-widget',
            template: "",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], OneOfComponent);
    return OneOfComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/widget-library/radios.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadiosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/lib/src/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RadiosComponent = (function () {
    function RadiosComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.layoutOrientation = 'vertical';
        this.radiosList = [];
    }
    RadiosComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        if (this.layoutNode.type === 'radios-inline' ||
            this.layoutNode.type === 'radiobuttons') {
            this.layoutOrientation = 'horizontal';
        }
        this.radiosList = Object(__WEBPACK_IMPORTED_MODULE_2__shared__["c" /* buildTitleMap */])(this.options.titleMap || this.options.enumNames, this.options.enum, true);
        this.jsf.initializeControl(this);
    };
    RadiosComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], RadiosComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], RadiosComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], RadiosComponent.prototype, "dataIndex", void 0);
    RadiosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'radios-widget',
            template: "\n    <label *ngIf=\"options?.title\"\n      [attr.for]=\"'control' + layoutNode?._id\"\n      [class]=\"options?.labelHtmlClass || ''\"\n      [style.display]=\"options?.notitle ? 'none' : ''\"\n      [innerHTML]=\"options?.title\"></label>\n\n    <!-- 'horizontal' = radios-inline or radiobuttons -->\n    <div *ngIf=\"layoutOrientation === 'horizontal'\"\n      [class]=\"options?.htmlClass || ''\">\n      <label *ngFor=\"let radioItem of radiosList\"\n        [attr.for]=\"'control' + layoutNode?._id + '/' + radioItem?.value\"\n        [class]=\"(options?.itemLabelHtmlClass || '') +\n          ((controlValue + '' === radioItem?.value + '') ?\n          (' ' + (options?.activeClass || '') + ' ' + (options?.style?.selected || '')) :\n          (' ' + (options?.style?.unselected || '')))\">\n        <input type=\"radio\"\n          [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n          [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n          [attr.required]=\"options?.required\"\n          [checked]=\"radioItem?.value === controlValue\"\n          [class]=\"options?.fieldHtmlClass || ''\"\n          [disabled]=\"controlDisabled\"\n          [id]=\"'control' + layoutNode?._id + '/' + radioItem?.value\"\n          [name]=\"controlName\"\n          [value]=\"radioItem?.value\"\n          (change)=\"updateValue($event)\">\n        <span [innerHTML]=\"radioItem?.name\"></span>\n      </label>\n    </div>\n\n    <!-- 'vertical' = regular radios -->\n    <div *ngIf=\"layoutOrientation !== 'horizontal'\">\n      <div *ngFor=\"let radioItem of radiosList\"\n        [class]=\"options?.htmlClass || ''\">\n        <label\n          [attr.for]=\"'control' + layoutNode?._id + '/' + radioItem?.value\"\n          [class]=\"(options?.itemLabelHtmlClass || '') +\n            ((controlValue + '' === radioItem?.value + '') ?\n            (' ' + (options?.activeClass || '') + ' ' + (options?.style?.selected || '')) :\n            (' ' + (options?.style?.unselected || '')))\">\n          <input type=\"radio\"\n            [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n            [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n            [attr.required]=\"options?.required\"\n            [checked]=\"radioItem?.value === controlValue\"\n            [class]=\"options?.fieldHtmlClass || ''\"\n            [disabled]=\"controlDisabled\"\n            [id]=\"'control' + layoutNode?._id + '/' + radioItem?.value\"\n            [name]=\"controlName\"\n            [value]=\"radioItem?.value\"\n            (change)=\"updateValue($event)\">\n          <span [innerHTML]=\"radioItem?.name\"></span>\n        </label>\n      </div>\n    </div>",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], RadiosComponent);
    return RadiosComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/widget-library/root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RootComponent = (function () {
    function RootComponent(jsf) {
        this.jsf = jsf;
        this.isFlexItem = false;
    }
    RootComponent.prototype.isDraggable = function (node) {
        return node.arrayItem && node.type !== '$ref' &&
            node.arrayItemType === 'list' && this.isOrderable !== false;
    };
    RootComponent.prototype.getFlexAttribute = function (node, attribute) {
        var index = ['flex-grow', 'flex-shrink', 'flex-basis'].indexOf(attribute);
        return ((node.options || {}).flex || '').split(/\s+/)[index] ||
            (node.options || {})[attribute] || ['1', '1', 'auto'][index];
    };
    RootComponent.prototype.showWidget = function (layoutNode) {
        return this.jsf.evaluateCondition(layoutNode, this.dataIndex);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], RootComponent.prototype, "dataIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], RootComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], RootComponent.prototype, "layout", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], RootComponent.prototype, "isOrderable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], RootComponent.prototype, "isFlexItem", void 0);
    RootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'root-widget',
            template: "\n    <div *ngFor=\"let layoutItem of layout; let i = index\"\n      [class.form-flex-item]=\"isFlexItem\"\n      [style.align-self]=\"(layoutItem.options || {})['align-self']\"\n      [style.flex-basis]=\"getFlexAttribute(layoutItem, 'flex-basis')\"\n      [style.flex-grow]=\"getFlexAttribute(layoutItem, 'flex-grow')\"\n      [style.flex-shrink]=\"getFlexAttribute(layoutItem, 'flex-shrink')\"\n      [style.order]=\"(layoutItem.options || {}).order\">\n      <div\n        [dataIndex]=\"layoutItem?.arrayItem ? (dataIndex || []).concat(i) : (dataIndex || [])\"\n        [layoutIndex]=\"(layoutIndex || []).concat(i)\"\n        [layoutNode]=\"layoutItem\"\n        [orderable]=\"isDraggable(layoutItem)\">\n        <select-framework-widget *ngIf=\"showWidget(layoutItem)\"\n          [dataIndex]=\"layoutItem?.arrayItem ? (dataIndex || []).concat(i) : (dataIndex || [])\"\n          [layoutIndex]=\"(layoutIndex || []).concat(i)\"\n          [layoutNode]=\"layoutItem\"></select-framework-widget>\n      </div>\n    </div>",
            styles: ["\n    [draggable=true] {\n      transition: all 150ms cubic-bezier(.4, 0, .2, 1);\n    }\n    [draggable=true]:hover {\n      cursor: move;\n      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n      position: relative; z-index: 10;\n      margin-top: -1px;\n      margin-left: -1px;\n      margin-right: 1px;\n      margin-bottom: 1px;\n    }\n    [draggable=true].drag-target-top {\n      box-shadow: 0 -2px 0 #000;\n      position: relative; z-index: 20;\n    }\n    [draggable=true].drag-target-bottom {\n      box-shadow: 0 2px 0 #000;\n      position: relative; z-index: 20;\n    }\n  "],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/widget-library/section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SectionComponent = (function () {
    function SectionComponent(jsf) {
        this.jsf = jsf;
        this.expanded = true;
    }
    Object.defineProperty(SectionComponent.prototype, "sectionTitle", {
        get: function () {
            return this.options.notitle ? null : this.jsf.setItemTitle(this);
        },
        enumerable: true,
        configurable: true
    });
    SectionComponent.prototype.ngOnInit = function () {
        this.jsf.initializeControl(this);
        this.options = this.layoutNode.options || {};
        this.expanded = typeof this.options.expanded === 'boolean' ?
            this.options.expanded : !this.options.expandable;
        switch (this.layoutNode.type) {
            case 'fieldset':
            case 'array':
            case 'tab':
            case 'advancedfieldset':
            case 'authfieldset':
            case 'optionfieldset':
            case 'selectfieldset':
                this.containerType = 'fieldset';
                break;
            default:
                this.containerType = 'div';
                break;
        }
    };
    SectionComponent.prototype.toggleExpanded = function () {
        if (this.options.expandable) {
            this.expanded = !this.expanded;
        }
    };
    SectionComponent.prototype.getFlexAttribute = function (attribute) {
        var flexActive = this.layoutNode.type === 'flex' ||
            !!this.options.displayFlex ||
            this.options.display === 'flex';
        if (attribute !== 'flex' && !flexActive) {
            return null;
        }
        switch (attribute) {
            case 'is-flex':
                return flexActive;
            case 'display':
                return flexActive ? 'flex' : 'initial';
            case 'flex-direction':
            case 'flex-wrap':
                var index = ['flex-direction', 'flex-wrap'].indexOf(attribute);
                return (this.options['flex-flow'] || '').split(/\s+/)[index] ||
                    this.options[attribute] || ['column', 'nowrap'][index];
            case 'justify-content':
            case 'align-items':
            case 'align-content':
                return this.options[attribute];
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], SectionComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], SectionComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], SectionComponent.prototype, "dataIndex", void 0);
    SectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'section-widget',
            template: "\n    <div *ngIf=\"containerType === 'div'\"\n      [class]=\"options?.htmlClass || ''\"\n      [class.expandable]=\"options?.expandable && !expanded\"\n      [class.expanded]=\"options?.expandable && expanded\">\n      <label *ngIf=\"sectionTitle\"\n        class=\"legend\"\n        [class]=\"options?.labelHtmlClass || ''\"\n        [innerHTML]=\"sectionTitle\"\n        (click)=\"toggleExpanded()\"></label>\n      <root-widget *ngIf=\"expanded\"\n        [dataIndex]=\"dataIndex\"\n        [layout]=\"layoutNode.items\"\n        [layoutIndex]=\"layoutIndex\"\n        [isFlexItem]=\"getFlexAttribute('is-flex')\"\n        [isOrderable]=\"options?.orderable\"\n        [class.form-flex-column]=\"getFlexAttribute('flex-direction') === 'column'\"\n        [class.form-flex-row]=\"getFlexAttribute('flex-direction') === 'row'\"\n        [style.align-content]=\"getFlexAttribute('align-content')\"\n        [style.align-items]=\"getFlexAttribute('align-items')\"\n        [style.display]=\"getFlexAttribute('display')\"\n        [style.flex-direction]=\"getFlexAttribute('flex-direction')\"\n        [style.flex-wrap]=\"getFlexAttribute('flex-wrap')\"\n        [style.justify-content]=\"getFlexAttribute('justify-content')\"></root-widget>\n    </div>\n    <fieldset *ngIf=\"containerType === 'fieldset'\"\n      [class]=\"options?.htmlClass || ''\"\n      [class.expandable]=\"options?.expandable && !expanded\"\n      [class.expanded]=\"options?.expandable && expanded\"\n      [disabled]=\"options?.readonly\">\n      <legend *ngIf=\"sectionTitle\"\n        class=\"legend\"\n        [class]=\"options?.labelHtmlClass || ''\"\n        [innerHTML]=\"sectionTitle\"\n        (click)=\"toggleExpanded()\"></legend>\n      <div *ngIf=\"options?.messageLocation !== 'bottom'\">\n        <p *ngIf=\"options?.description\"\n        class=\"help-block\"\n        [class]=\"options?.labelHelpBlockClass || ''\"\n        [innerHTML]=\"options?.description\"></p>\n      </div>\n      <root-widget *ngIf=\"expanded\"\n        [dataIndex]=\"dataIndex\"\n        [layout]=\"layoutNode.items\"\n        [layoutIndex]=\"layoutIndex\"\n        [isFlexItem]=\"getFlexAttribute('is-flex')\"\n        [isOrderable]=\"options?.orderable\"\n        [class.form-flex-column]=\"getFlexAttribute('flex-direction') === 'column'\"\n        [class.form-flex-row]=\"getFlexAttribute('flex-direction') === 'row'\"\n        [style.align-content]=\"getFlexAttribute('align-content')\"\n        [style.align-items]=\"getFlexAttribute('align-items')\"\n        [style.display]=\"getFlexAttribute('display')\"\n        [style.flex-direction]=\"getFlexAttribute('flex-direction')\"\n        [style.flex-wrap]=\"getFlexAttribute('flex-wrap')\"\n        [style.justify-content]=\"getFlexAttribute('justify-content')\"></root-widget>\n      <div *ngIf=\"options?.messageLocation === 'bottom'\">\n        <p *ngIf=\"options?.description\"\n        class=\"help-block\"\n        [class]=\"options?.labelHelpBlockClass || ''\"\n        [innerHTML]=\"options?.description\"></p>\n      </div>\n    </fieldset>",
            styles: ["\n    .legend { font-weight: bold; }\n    .expandable > legend:before, .expandable > label:before  { content: '\u25B6'; padding-right: .3em; }\n    .expanded > legend:before, .expanded > label:before  { content: '\u25BC'; padding-right: .2em; }\n  "],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], SectionComponent);
    return SectionComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/widget-library/select-framework.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectFrameworkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectFrameworkComponent = (function () {
    function SelectFrameworkComponent(componentFactory, jsf) {
        this.componentFactory = componentFactory;
        this.jsf = jsf;
        this.newComponent = null;
    }
    SelectFrameworkComponent.prototype.ngOnInit = function () {
        this.updateComponent();
    };
    SelectFrameworkComponent.prototype.ngOnChanges = function () {
        this.updateComponent();
    };
    SelectFrameworkComponent.prototype.updateComponent = function () {
        if (!this.newComponent && this.jsf.framework) {
            this.newComponent = this.widgetContainer.createComponent(this.componentFactory.resolveComponentFactory(this.jsf.framework));
        }
        if (this.newComponent) {
            for (var _i = 0, _a = ['layoutNode', 'layoutIndex', 'dataIndex']; _i < _a.length; _i++) {
                var input = _a[_i];
                this.newComponent.instance[input] = this[input];
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], SelectFrameworkComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], SelectFrameworkComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], SelectFrameworkComponent.prototype, "dataIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('widgetContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */])
    ], SelectFrameworkComponent.prototype, "widgetContainer", void 0);
    SelectFrameworkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'select-framework-widget',
            template: "<div #widgetContainer></div>",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], SelectFrameworkComponent);
    return SelectFrameworkComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/widget-library/select-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectWidgetComponent = (function () {
    function SelectWidgetComponent(componentFactory, jsf) {
        this.componentFactory = componentFactory;
        this.jsf = jsf;
        this.newComponent = null;
    }
    SelectWidgetComponent.prototype.ngOnInit = function () {
        this.updateComponent();
    };
    SelectWidgetComponent.prototype.ngOnChanges = function () {
        this.updateComponent();
    };
    SelectWidgetComponent.prototype.updateComponent = function () {
        if (!this.newComponent && (this.layoutNode || {}).widget) {
            this.newComponent = this.widgetContainer.createComponent(this.componentFactory.resolveComponentFactory(this.layoutNode.widget));
        }
        if (this.newComponent) {
            for (var _i = 0, _a = ['layoutNode', 'layoutIndex', 'dataIndex']; _i < _a.length; _i++) {
                var input = _a[_i];
                this.newComponent.instance[input] = this[input];
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], SelectWidgetComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], SelectWidgetComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], SelectWidgetComponent.prototype, "dataIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('widgetContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */])
    ], SelectWidgetComponent.prototype, "widgetContainer", void 0);
    SelectWidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'select-widget-widget',
            template: "<div #widgetContainer></div>",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], SelectWidgetComponent);
    return SelectWidgetComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/widget-library/select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/lib/src/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectComponent = (function () {
    function SelectComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.selectList = [];
        this.isArray = __WEBPACK_IMPORTED_MODULE_2__shared__["f" /* isArray */];
    }
    SelectComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.selectList = Object(__WEBPACK_IMPORTED_MODULE_2__shared__["c" /* buildTitleMap */])(this.options.titleMap || this.options.enumNames, this.options.enum, !!this.options.required, !!this.options.flatList);
        this.jsf.initializeControl(this);
    };
    SelectComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], SelectComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], SelectComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], SelectComponent.prototype, "dataIndex", void 0);
    SelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'select-widget',
            template: "\n    <div\n      [class]=\"options?.htmlClass || ''\">\n      <label *ngIf=\"options?.title\"\n        [attr.for]=\"'control' + layoutNode?._id\"\n        [class]=\"options?.labelHtmlClass || ''\"\n        [style.display]=\"options?.notitle ? 'none' : ''\"\n        [innerHTML]=\"options?.title\"></label>\n      <select *ngIf=\"boundControl\"\n        [formControl]=\"formControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n        [attr.required]=\"options?.required\"\n        [class]=\"options?.fieldHtmlClass || ''\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\">\n        <ng-template ngFor let-selectItem [ngForOf]=\"selectList\">\n          <option *ngIf=\"!isArray(selectItem?.items)\"\n            [value]=\"selectItem?.value\">\n            <span [innerHTML]=\"selectItem?.name\"></span>\n          </option>\n          <optgroup *ngIf=\"isArray(selectItem?.items)\"\n            [label]=\"selectItem?.group\">\n            <option *ngFor=\"let subItem of selectItem.items\"\n              [value]=\"subItem?.value\">\n              <span [innerHTML]=\"subItem?.name\"></span>\n            </option>\n          </optgroup>\n        </ng-template>\n      </select>\n      <select *ngIf=\"!boundControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n        [attr.required]=\"options?.required\"\n        [class]=\"options?.fieldHtmlClass || ''\"\n        [disabled]=\"controlDisabled\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        (change)=\"updateValue($event)\">\n        <ng-template ngFor let-selectItem [ngForOf]=\"selectList\">\n          <option *ngIf=\"!isArray(selectItem?.items)\"\n            [selected]=\"selectItem?.value === controlValue\"\n            [value]=\"selectItem?.value\">\n            <span [innerHTML]=\"selectItem?.name\"></span>\n          </option>\n          <optgroup *ngIf=\"isArray(selectItem?.items)\"\n            [label]=\"selectItem?.group\">\n            <option *ngFor=\"let subItem of selectItem.items\"\n              [attr.selected]=\"subItem?.value === controlValue\"\n              [value]=\"subItem?.value\">\n              <span [innerHTML]=\"subItem?.name\"></span>\n            </option>\n          </optgroup>\n        </ng-template>\n      </select>\n    </div>",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], SelectComponent);
    return SelectComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/widget-library/submit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_utility_functions__ = __webpack_require__("../../../../../src/lib/src/shared/utility.functions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubmitComponent = (function () {
    function SubmitComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
    }
    SubmitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
        if (Object(__WEBPACK_IMPORTED_MODULE_2__shared_utility_functions__["g" /* hasOwn */])(this.options, 'disabled')) {
            this.controlDisabled = this.options.disabled;
        }
        else if (this.jsf.formOptions.disableInvalidSubmit) {
            this.controlDisabled = !this.jsf.isValid;
            this.jsf.isValidChanges.subscribe(function (isValid) { return _this.controlDisabled = !isValid; });
        }
        if (this.controlValue === null || this.controlValue === undefined) {
            this.controlValue = this.options.title;
        }
    };
    SubmitComponent.prototype.updateValue = function (event) {
        if (typeof this.options.onClick === 'function') {
            this.options.onClick(event);
        }
        else {
            this.jsf.updateValue(this, event.target.value);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], SubmitComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], SubmitComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], SubmitComponent.prototype, "dataIndex", void 0);
    SubmitComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'submit-widget',
            template: "\n    <div\n      [class]=\"options?.htmlClass || ''\">\n      <input\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n        [attr.required]=\"options?.required\"\n        [class]=\"options?.fieldHtmlClass || ''\"\n        [disabled]=\"controlDisabled\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [type]=\"layoutNode?.type\"\n        [value]=\"controlValue\"\n        (click)=\"updateValue($event)\">\n    </div>",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], SubmitComponent);
    return SubmitComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/widget-library/tab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabComponent = (function () {
    function TabComponent(jsf) {
        this.jsf = jsf;
    }
    TabComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], TabComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], TabComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], TabComponent.prototype, "dataIndex", void 0);
    TabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tab-widget',
            template: "\n    <div [class]=\"options?.htmlClass || ''\">\n      <root-widget\n        [dataIndex]=\"dataIndex\"\n        [layoutIndex]=\"layoutIndex\"\n        [layout]=\"layoutNode.items\"></root-widget>\n    </div>",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], TabComponent);
    return TabComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/widget-library/tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsComponent = (function () {
    function TabsComponent(jsf) {
        this.jsf = jsf;
        this.selectedItem = 0;
        this.showAddTab = true;
    }
    TabsComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.itemCount = this.layoutNode.items.length - 1;
        this.updateControl();
    };
    TabsComponent.prototype.select = function (index) {
        if (this.layoutNode.items[index].type === '$ref') {
            this.itemCount = this.layoutNode.items.length;
            this.jsf.addItem({
                layoutNode: this.layoutNode.items[index],
                layoutIndex: this.layoutIndex.concat(index),
                dataIndex: this.dataIndex.concat(index)
            });
            this.updateControl();
        }
        ;
        this.selectedItem = index;
    };
    TabsComponent.prototype.updateControl = function () {
        var lastItem = this.layoutNode.items[this.layoutNode.items.length - 1];
        if (lastItem.type === '$ref' &&
            this.itemCount >= (lastItem.options.maxItems || 1000)) {
            this.showAddTab = false;
        }
    };
    TabsComponent.prototype.setTabTitle = function (item, index) {
        return this.jsf.setArrayItemTitle(this, item, index);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], TabsComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], TabsComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], TabsComponent.prototype, "dataIndex", void 0);
    TabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tabs-widget',
            template: "\n    <ul\n      [class]=\"options?.labelHtmlClass || ''\">\n      <li *ngFor=\"let item of layoutNode?.items; let i = index\"\n        [class]=\"(options?.itemLabelHtmlClass || '') + (selectedItem === i ?\n          (' ' + (options?.activeClass || '') + ' ' + (options?.style?.selected || '')) :\n          (' ' + options?.style?.unselected))\"\n        role=\"presentation\"\n        data-tabs>\n        <a *ngIf=\"showAddTab || item.type !== '$ref'\"\n           [class]=\"'nav-link' + (selectedItem === i ? (' ' + options?.activeClass + ' ' + options?.style?.selected) :\n            (' ' + options?.style?.unselected))\"\n          [innerHTML]=\"setTabTitle(item, i)\"\n          (click)=\"select(i)\"></a>\n      </li>\n    </ul>\n\n    <div *ngFor=\"let layoutItem of layoutNode?.items; let i = index\"\n      [class]=\"options?.htmlClass || ''\">\n\n      <select-framework-widget *ngIf=\"selectedItem === i\"\n        [class]=\"(options?.fieldHtmlClass || '') +\n          ' ' + (options?.activeClass || '') +\n          ' ' + (options?.style?.selected || '')\"\n        [dataIndex]=\"layoutNode?.dataType === 'array' ? (dataIndex || []).concat(i) : dataIndex\"\n        [layoutIndex]=\"(layoutIndex || []).concat(i)\"\n        [layoutNode]=\"layoutItem\"></select-framework-widget>\n\n    </div>",
            styles: [" a { cursor: pointer; } "],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/widget-library/template.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TemplateComponent = (function () {
    function TemplateComponent(componentFactory, jsf) {
        this.componentFactory = componentFactory;
        this.jsf = jsf;
        this.newComponent = null;
    }
    TemplateComponent.prototype.ngOnInit = function () {
        this.updateComponent();
    };
    TemplateComponent.prototype.ngOnChanges = function () {
        this.updateComponent();
    };
    TemplateComponent.prototype.updateComponent = function () {
        if (!this.newComponent && this.layoutNode.options.template) {
            this.newComponent = this.widgetContainer.createComponent(this.componentFactory.resolveComponentFactory(this.layoutNode.options.template));
        }
        if (this.newComponent) {
            for (var _i = 0, _a = ['layoutNode', 'layoutIndex', 'dataIndex']; _i < _a.length; _i++) {
                var input = _a[_i];
                this.newComponent.instance[input] = this[input];
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], TemplateComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], TemplateComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], TemplateComponent.prototype, "dataIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('widgetContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewContainerRef */])
    ], TemplateComponent.prototype, "widgetContainer", void 0);
    TemplateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'template-widget',
            template: "<div #widgetContainer></div>",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], TemplateComponent);
    return TemplateComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/widget-library/textarea.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextareaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextareaComponent = (function () {
    function TextareaComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
    }
    TextareaComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
    };
    TextareaComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], TextareaComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], TextareaComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], TextareaComponent.prototype, "dataIndex", void 0);
    TextareaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'textarea-widget',
            template: "\n    <div\n      [class]=\"options?.htmlClass || ''\">\n      <label *ngIf=\"options?.title\"\n        [attr.for]=\"'control' + layoutNode?._id\"\n        [class]=\"options?.labelHtmlClass || ''\"\n        [style.display]=\"options?.notitle ? 'none' : ''\"\n        [innerHTML]=\"options?.title\"></label>\n      <textarea *ngIf=\"boundControl\"\n        [formControl]=\"formControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.maxlength]=\"options?.maxLength\"\n        [attr.minlength]=\"options?.minLength\"\n        [attr.pattern]=\"options?.pattern\"\n        [attr.placeholder]=\"options?.placeholder\"\n        [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n        [attr.required]=\"options?.required\"\n        [class]=\"options?.fieldHtmlClass || ''\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"></textarea>\n      <textarea *ngIf=\"!boundControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.maxlength]=\"options?.maxLength\"\n        [attr.minlength]=\"options?.minLength\"\n        [attr.pattern]=\"options?.pattern\"\n        [attr.placeholder]=\"options?.placeholder\"\n        [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n        [attr.required]=\"options?.required\"\n        [class]=\"options?.fieldHtmlClass || ''\"\n        [disabled]=\"controlDisabled\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [value]=\"controlValue\"\n        (input)=\"updateValue($event)\">{{controlValue}}</textarea>\n    </div>",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__json_schema_form_service__["a" /* JsonSchemaFormService */]])
    ], TextareaComponent);
    return TextareaComponent;
}());



/***/ }),

/***/ "../../../../../src/lib/src/widget-library/widget-library.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetLibraryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_orderable_directive__ = __webpack_require__("../../../../../src/lib/src/shared/orderable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__json_schema_form_service__ = __webpack_require__("../../../../../src/lib/src/json-schema-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index__ = __webpack_require__("../../../../../src/lib/src/widget-library/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var WidgetLibraryModule = (function () {
    function WidgetLibraryModule() {
    }
    WidgetLibraryModule_1 = WidgetLibraryModule;
    WidgetLibraryModule.forRoot = function () {
        return {
            ngModule: WidgetLibraryModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_4__json_schema_form_service__["a" /* JsonSchemaFormService */]]
        };
    };
    WidgetLibraryModule = WidgetLibraryModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */]],
            declarations: __WEBPACK_IMPORTED_MODULE_5__index__["a" /* BASIC_WIDGETS */].concat([__WEBPACK_IMPORTED_MODULE_3__shared_orderable_directive__["a" /* OrderableDirective */]]),
            exports: __WEBPACK_IMPORTED_MODULE_5__index__["a" /* BASIC_WIDGETS */].concat([__WEBPACK_IMPORTED_MODULE_3__shared_orderable_directive__["a" /* OrderableDirective */]]),
            entryComponents: __WEBPACK_IMPORTED_MODULE_5__index__["a" /* BASIC_WIDGETS */].slice(),
            providers: [__WEBPACK_IMPORTED_MODULE_4__json_schema_form_service__["a" /* JsonSchemaFormService */]]
        })
    ], WidgetLibraryModule);
    return WidgetLibraryModule;
    var WidgetLibraryModule_1;
}());



/***/ }),

/***/ "../../../../../src/lib/src/widget-library/widget-library.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetLibraryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_utility_functions__ = __webpack_require__("../../../../../src/lib/src/shared/utility.functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_reference_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/add-reference.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__one_of_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/one-of.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__button_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkbox_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/checkbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__checkboxes_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/checkboxes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__file_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__input_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__message_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__none_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/none.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__number_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/number.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__radios_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/radios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__root_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__section_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__select_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__select_framework_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/select-framework.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__select_widget_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/select-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__submit_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/submit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__tabs_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__template_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__textarea_component__ = __webpack_require__("../../../../../src/lib/src/widget-library/textarea.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var WidgetLibraryService = (function () {
    function WidgetLibraryService() {
        this.defaultWidget = 'text';
        this.widgetLibrary = {
            'none': __WEBPACK_IMPORTED_MODULE_10__none_component__["a" /* NoneComponent */],
            'root': __WEBPACK_IMPORTED_MODULE_13__root_component__["a" /* RootComponent */],
            'select-framework': __WEBPACK_IMPORTED_MODULE_16__select_framework_component__["a" /* SelectFrameworkComponent */],
            'select-widget': __WEBPACK_IMPORTED_MODULE_17__select_widget_component__["a" /* SelectWidgetComponent */],
            '$ref': __WEBPACK_IMPORTED_MODULE_2__add_reference_component__["a" /* AddReferenceComponent */],
            'email': 'text',
            'integer': 'number',
            'number': __WEBPACK_IMPORTED_MODULE_11__number_component__["a" /* NumberComponent */],
            'password': 'text',
            'search': 'text',
            'tel': 'text',
            'text': __WEBPACK_IMPORTED_MODULE_8__input_component__["a" /* InputComponent */],
            'url': 'text',
            'color': 'text',
            'date': 'text',
            'datetime': 'text',
            'datetime-local': 'text',
            'month': 'text',
            'range': 'number',
            'time': 'text',
            'week': 'text',
            'checkbox': __WEBPACK_IMPORTED_MODULE_5__checkbox_component__["a" /* CheckboxComponent */],
            'file': __WEBPACK_IMPORTED_MODULE_7__file_component__["a" /* FileComponent */],
            'hidden': 'text',
            'image': 'text',
            'radio': 'radios',
            'reset': 'submit',
            'submit': __WEBPACK_IMPORTED_MODULE_18__submit_component__["a" /* SubmitComponent */],
            'button': __WEBPACK_IMPORTED_MODULE_4__button_component__["a" /* ButtonComponent */],
            'select': __WEBPACK_IMPORTED_MODULE_15__select_component__["a" /* SelectComponent */],
            'textarea': __WEBPACK_IMPORTED_MODULE_21__textarea_component__["a" /* TextareaComponent */],
            'checkboxes': __WEBPACK_IMPORTED_MODULE_6__checkboxes_component__["a" /* CheckboxesComponent */],
            'checkboxes-inline': 'checkboxes',
            'checkboxbuttons': 'checkboxes',
            'radios': __WEBPACK_IMPORTED_MODULE_12__radios_component__["a" /* RadiosComponent */],
            'radios-inline': 'radios',
            'radiobuttons': 'radios',
            'section': __WEBPACK_IMPORTED_MODULE_14__section_component__["a" /* SectionComponent */],
            'div': 'section',
            'fieldset': 'section',
            'flex': 'section',
            'one-of': __WEBPACK_IMPORTED_MODULE_3__one_of_component__["a" /* OneOfComponent */],
            'array': 'section',
            'tabarray': 'tabs',
            'tab': 'section',
            'tabs': __WEBPACK_IMPORTED_MODULE_19__tabs_component__["a" /* TabsComponent */],
            'message': __WEBPACK_IMPORTED_MODULE_9__message_component__["a" /* MessageComponent */],
            'help': 'message',
            'msg': 'message',
            'html': 'message',
            'template': __WEBPACK_IMPORTED_MODULE_20__template_component__["a" /* TemplateComponent */],
            'advancedfieldset': 'section',
            'authfieldset': 'section',
            'optionfieldset': 'one-of',
            'selectfieldset': 'one-of',
            'conditional': 'section',
            'actions': 'section',
            'tagsinput': 'section',
            'updown': 'number',
            'date-time': 'datetime-local',
            'alt-datetime': 'datetime-local',
            'alt-date': 'date',
            'wizard': 'section',
            'textline': 'text',
        };
        this.registeredWidgets = {};
        this.frameworkWidgets = {};
        this.activeWidgets = {};
        this.setActiveWidgets();
    }
    WidgetLibraryService.prototype.setActiveWidgets = function () {
        this.activeWidgets = Object.assign({}, this.widgetLibrary, this.frameworkWidgets, this.registeredWidgets);
        for (var _i = 0, _a = Object.keys(this.activeWidgets); _i < _a.length; _i++) {
            var widgetName = _a[_i];
            var widget = this.activeWidgets[widgetName];
            if (typeof widget === 'string') {
                var usedAliases = [];
                while (typeof widget === 'string' && !usedAliases.includes(widget)) {
                    usedAliases.push(widget);
                    widget = this.activeWidgets[widget];
                }
                if (typeof widget !== 'string') {
                    this.activeWidgets[widgetName] = widget;
                }
            }
        }
        return true;
    };
    WidgetLibraryService.prototype.setDefaultWidget = function (type) {
        if (!this.hasWidget(type)) {
            return false;
        }
        this.defaultWidget = type;
        return true;
    };
    WidgetLibraryService.prototype.hasWidget = function (type, widgetSet) {
        if (widgetSet === void 0) { widgetSet = 'activeWidgets'; }
        if (!type || typeof type !== 'string') {
            return false;
        }
        return Object(__WEBPACK_IMPORTED_MODULE_1__shared_utility_functions__["g" /* hasOwn */])(this[widgetSet], type);
    };
    WidgetLibraryService.prototype.hasDefaultWidget = function (type) {
        return this.hasWidget(type, 'widgetLibrary');
    };
    WidgetLibraryService.prototype.registerWidget = function (type, widget) {
        if (!type || !widget || typeof type !== 'string') {
            return false;
        }
        this.registeredWidgets[type] = widget;
        return this.setActiveWidgets();
    };
    WidgetLibraryService.prototype.unRegisterWidget = function (type) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__shared_utility_functions__["g" /* hasOwn */])(this.registeredWidgets, type)) {
            return false;
        }
        delete this.registeredWidgets[type];
        return this.setActiveWidgets();
    };
    WidgetLibraryService.prototype.unRegisterAllWidgets = function (unRegisterFrameworkWidgets) {
        if (unRegisterFrameworkWidgets === void 0) { unRegisterFrameworkWidgets = true; }
        this.registeredWidgets = {};
        if (unRegisterFrameworkWidgets) {
            this.frameworkWidgets = {};
        }
        return this.setActiveWidgets();
    };
    WidgetLibraryService.prototype.registerFrameworkWidgets = function (widgets) {
        if (widgets === null || typeof widgets !== 'object') {
            widgets = {};
        }
        this.frameworkWidgets = widgets;
        return this.setActiveWidgets();
    };
    WidgetLibraryService.prototype.unRegisterFrameworkWidgets = function () {
        if (Object.keys(this.frameworkWidgets).length) {
            this.frameworkWidgets = {};
            return this.setActiveWidgets();
        }
        return false;
    };
    WidgetLibraryService.prototype.getWidget = function (type, widgetSet) {
        if (widgetSet === void 0) { widgetSet = 'activeWidgets'; }
        if (this.hasWidget(type, widgetSet)) {
            return this[widgetSet][type];
        }
        else if (this.hasWidget(this.defaultWidget, widgetSet)) {
            return this[widgetSet][this.defaultWidget];
        }
        else {
            return null;
        }
    };
    WidgetLibraryService.prototype.getAllWidgets = function () {
        return {
            widgetLibrary: this.widgetLibrary,
            registeredWidgets: this.registeredWidgets,
            frameworkWidgets: this.frameworkWidgets,
            activeWidgets: this.activeWidgets,
        };
    };
    WidgetLibraryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WidgetLibraryService);
    return WidgetLibraryService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/demo/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map