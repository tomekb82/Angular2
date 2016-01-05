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
var http_1 = require('angular2/http');
var SimpleHTTPComponent_1 = require("app/http/SimpleHTTPComponent");
var HttpApp = (function () {
    function HttpApp() {
    }
    HttpApp = __decorate([
        angular2_1.Component({
            selector: "http-app"
        }),
        angular2_1.View({
            directives: [SimpleHTTPComponent_1.SimpleHTTPComponent],
            template: "\n  <div class=\"container\">\n  <simple-http></simple-http>\n    <hr/>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], HttpApp);
    return HttpApp;
})();
angular2_1.bootstrap(HttpApp, [http_1.HTTP_BINDINGS]);
