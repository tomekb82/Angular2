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
var http_2 = require("angular2/http");
var SimpleHTTPComponent = (function () {
    function SimpleHTTPComponent(http) {
        this.http = http;
    }
    SimpleHTTPComponent.prototype.sendRequest = function () {
        var _this = this;
        this.loading = true;
        this.http.request("http://jsonplaceholder.typicode.com/posts/1")
            .subscribe(function (res) {
            _this.data = res.json();
            _this.loading = false;
        });
    };
    SimpleHTTPComponent = __decorate([
        angular2_1.Component({
            selector: "simple-http",
        }),
        angular2_1.View({
            directives: [angular2_1.NgIf],
            template: "\n  <h2>Simple HTTP</h2>\n  <button type=\"button\" (click)=\"sendRequest()\">Send Request</button>\n  <div *ng-if=\"loading\">loading...</div>\n  <pre>{{data | json}}</pre>\n"
        }), 
        __metadata('design:paramtypes', [http_2.Http])
    ], SimpleHTTPComponent);
    return SimpleHTTPComponent;
})();
var HttpApp = (function () {
    function HttpApp() {
    }
    HttpApp = __decorate([
        angular2_1.Component({
            selector: "http-app"
        }),
        angular2_1.View({
            directives: [SimpleHTTPComponent],
            template: "\n  <div class=\"container\">\n  <simple-http></simple-http>\n    <hr/>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], HttpApp);
    return HttpApp;
})();
angular2_1.bootstrap(HttpApp, [http_1.HTTP_BINDINGS]);
