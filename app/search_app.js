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
var router_1 = require('angular2/router');
var SearchComponent_1 = require("app/search/SearchComponent");
var ArtistsComponent_1 = require("app/search/ArtistsComponent");
var AlbumsComponent_1 = require("app/search/AlbumsComponent");
var SearchApp = (function () {
    function SearchApp() {
    }
    SearchApp = __decorate([
        angular2_1.Component({
            selector: "search-app"
        }),
        angular2_1.View({
            directives: [router_1.ROUTER_DIRECTIVES],
            template: "\n    <hr>\n    <router-outlet></router-outlet>\n  "
        }),
        router_1.RouteConfig([
            { path: '/', redirectTo: '/search' },
            { path: '/search', component: SearchComponent_1.SearchComponent, as: 'Search' },
            { path: '/artists/:id', component: ArtistsComponent_1.ArtistsComponent, as: 'Artists' },
            { path: '/tracks/:id', component: SearchComponent_1.TracksComponent, as: 'Tracks' },
            { path: '/albums/:id', component: AlbumsComponent_1.AlbumsComponent, as: 'Albums' }
        ]), 
        __metadata('design:paramtypes', [])
    ], SearchApp);
    return SearchApp;
})();
angular2_1.bootstrap(SearchApp, [router_1.ROUTER_PROVIDERS, http_1.HTTP_BINDINGS,
    angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
