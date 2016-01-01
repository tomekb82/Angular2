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
var SimpleForm = (function () {
    function SimpleForm() {
    }
    SimpleForm.prototype.onSubmit = function (value) {
        console.log('SimpleForm: you submitted value: ', value);
    };
    SimpleForm = __decorate([
        angular2_1.Component({
            selector: 'simple-form'
        }),
        angular2_1.View({
            directives: [angular2_2.formDirectives],
            template: "\n  <div>\n    <h2>Simple form: Book store</h2>\n    <form #f=\"form\"\n          (submit)=\"onSubmit(f.value)\">\n\n      <div class=\"form-group\">\n        <label for=\"idInput\">ID</label>\n        <input type=\"text\" \n               class=\"form-control\" \n               id=\"idInput\"\n               placeholder=\"Book id\"\n               ng-control=\"id\">\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    </form>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], SimpleForm);
    return SimpleForm;
})();
exports.SimpleForm = SimpleForm;
angular2_1.bootstrap(SimpleForm);
var BuilderForm = (function () {
    function BuilderForm(fb) {
        this.myForm = fb.group({
            "id": [""],
            "name": [""]
        });
    }
    BuilderForm.prototype.onSubmit = function (value) {
        console.log('BuilderForm: you submitted value: ', value);
    };
    BuilderForm = __decorate([
        angular2_1.Component({
            selector: 'builder-form',
            viewInjector: [angular2_2.FormBuilder]
        }),
        angular2_1.View({
            directives: [angular2_2.formDirectives],
            template: "\n  <div>\n    <h2>Form Builder: Book store</h2>\n    <form [ng-form-model]=\"myForm\"\n          (submit)=\"onSubmit(myForm.value)\">\n\n      <div class=\"form-group\">\n        <label for=\"idInput\">ID</label>\n        <input type=\"text\"\n               class=\"form-control\"\n               id=\"idInput\"\n               placeholder=\"ID\"\n               [ng-form-control]=\"myForm.controls['id']\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"nameInput\">Name - </label>\n        <input type=\"text\"\n               class=\"form-control\"\n               id=\"nameInput\"\n               placeholder=\"Name\"\n               [ng-form-control]=\"myForm.controls['name']\">\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    </form>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [angular2_2.FormBuilder])
    ], BuilderForm);
    return BuilderForm;
})();
exports.BuilderForm = BuilderForm;
angular2_1.bootstrap(BuilderForm);