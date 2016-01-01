/// <reference path="../typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var angular2_2 = require("angular2/angular2");
var FormApp = (function () {
    function FormApp() {
    }
    FormApp.prototype.onSubmit = function (value) {
        console.log('you submitted value: ', value);
    };
    FormApp = __decorate([
        angular2_1.Component({
            selector: 'form-app'
        }),
        angular2_1.View({
            directives: [angular2_2.formDirectives],
            template: "\n  <div>\n    <h2>Form: Book store</h2>\n    <form #f=\"form\"\n          (submit)=\"onSubmit(f.value)\">\n\n      <div class=\"form-group\">\n        <label for=\"idInput\">ID</label>\n        <input type=\"text\" \n               class=\"form-control\" \n               id=\"idInput\"\n               placeholder=\"Book id\"\n               ng-control=\"id\">\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    </form>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FormApp);
    return FormApp;
})();
exports.FormApp = FormApp;
angular2_1.bootstrap(FormApp);
