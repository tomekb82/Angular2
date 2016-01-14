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
var router_1 = require('angular2/router');
var HomeComponent_1 = require("app/routing/HomeComponent");
var ContactComponent_1 = require("app/routing/ContactComponent");
var AboutComponent_1 = require("app/routing/AboutComponent");
var ProtectedComponent_1 = require("app/routing/ProtectedComponent");
var AuthService_1 = require("app/auth/AuthService");
var LoginComponent_1 = require("app/auth/LoginComponent");
var RouteApp = (function () {
    function RouteApp() {
    }
    RouteApp = __decorate([
        angular2_1.Component({
            selector: "route-app"
        }),
        angular2_1.View({
            directives: [router_1.ROUTER_DIRECTIVES, LoginComponent_1.LoginComponent],
            template: "\n\n    <div class=\"page-header\">\n        <div class=\"container\">\n            <h1> Router sample</h1>\n            <div class=\"navLinks\">\n                <a [router-link]=\"['/Home']\">Home</a>\n                <a [router-link]=\"['/AboutUs']\">About Us</a>\n                <a [router-link]=\"['/ContactUs']\">Contact Us</a>\n                <a [router-link]=\"['/Protected']\">Protected</a>\n               <!--<a [router-link]=\"['/Products']\">Products</a>-->\n            </div>\n        </div>\n    </div>\n    <div class=\"content\">\n        <div class=\"container\">\n        <login></login>\n\n        <hr>\n\n        <router-outlet></router-outlet>\n        </div>\n    </div>\n\n\n  "
        }),
        router_1.RouteConfig([
            { path: '/', component: HomeComponent_1.HomeComponent, as: 'Home' },
            { path: '/aboutus', component: AboutComponent_1.AboutComponent, as: 'AboutUs' },
            { path: '/contactus', component: ContactComponent_1.ContactComponent, as: 'ContactUs' },
            { path: '/protected', component: ProtectedComponent_1.ProtectedComponent, as: 'Protected' }
        ]), 
        __metadata('design:paramtypes', [])
    ], RouteApp);
    return RouteApp;
})();
angular2_1.bootstrap(RouteApp, [router_1.ROUTER_PROVIDERS, AuthService_1.AUTH_PROVIDERS, angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
