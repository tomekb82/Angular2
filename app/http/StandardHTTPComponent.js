/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/angular2/http.d.ts" />
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
var http_1 = require("angular2/http");
var StandardHTTPComponent = (function () {
    function StandardHTTPComponent(http) {
        this.http = http;
    }
    StandardHTTPComponent.prototype.makePost = function () {
        var _this = this;
        this.loading = true;
        this.http.post("http://jsonplaceholder.typicode.com/posts", JSON.stringify({
            body: "bar",
            title: "foo",
            userId: 1
        }))
            .subscribe(function (res) {
            _this.data = res.json();
            _this.loading = false;
        });
    };
    StandardHTTPComponent.prototype.makeDelete = function () {
        var _this = this;
        this.loading = true;
        this.http.delete("http://jsonplaceholder.typicode.com/posts/1")
            .subscribe(function (res) {
            _this.data = res.json();
            _this.loading = false;
        });
    };
    StandardHTTPComponent.prototype.makeHeaders = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append("X-API-TOKEN", "ng-book");
        var opts = new http_1.RequestOptions();
        opts.headers = headers;
        this.http.get("http://jsonplaceholder.typicode.com/posts/1", opts)
            .subscribe(function (res) {
            _this.data = res.json();
        });
    };
    StandardHTTPComponent = __decorate([
        angular2_1.Component({
            selector: "standard-http"
        }),
        angular2_1.View({
            directives: [angular2_1.NgIf],
            template: "\n  <h2>More Requests</h2>\n  <button type=\"button\" (click)=\"makePost()\">Make Post</button>\n  <button type=\"button\" (click)=\"makeDelete()\">Make Delete</button>\n  <button type=\"button\" (click)=\"makeHeaders()\">Make Headers</button>\n  <div *ng-if=\"loading\">loading...</div>\n  <pre>{{data | json}}</pre>\n"
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], StandardHTTPComponent);
    return StandardHTTPComponent;
})();
exports.StandardHTTPComponent = StandardHTTPComponent;
