/// <reference path="../../typings/angular2/angular2.d.ts" />
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
var router_1 = require('angular2/router');
var ArtistsComponent = (function () {
    function ArtistsComponent(routeParams) {
        this.routeParams = routeParams;
        this.id = routeParams.get("id");
    }
    ArtistsComponent = __decorate([
        angular2_1.Component({
            selector: 'artists'
        }),
        angular2_1.View({
            template: "\n  <h1> Artists ! </h1>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.RouteParams !== 'undefined' && router_1.RouteParams) === 'function' && _a) || Object])
    ], ArtistsComponent);
    return ArtistsComponent;
    var _a;
})();
exports.ArtistsComponent = ArtistsComponent;
