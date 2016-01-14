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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require("angular2/angular2");
var router_1 = require('angular2/router');
var http_1 = require("angular2/http");
var SpotifyService = (function () {
    function SpotifyService(http) {
        this.http = http;
    }
    SpotifyService.prototype.searchByTrack = function (query) {
        var _this = this;
        var params = [
            ("q=" + query),
            "type=track",
        ].join("&");
        var queryURL = "http://api.spotify.com/v1/search?" + params;
        this.http.get(queryURL)
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { return _this.result = res; });
        return this.result;
    };
    SpotifyService = __decorate([
        __param(0, angular2_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SpotifyService);
    return SpotifyService;
})();
var SearchComponent = (function () {
    function SearchComponent(spotify, router, routeParams) {
        this.spotify = spotify;
        this.router = router;
        this.routeParams = routeParams;
    }
    SearchComponent.prototype.onInit = function () {
        this.search();
    };
    SearchComponent.prototype.submit = function (query) {
        this.router.navigate(["/Search", { query: query }]);
        this.search();
    };
    SearchComponent.prototype.search = function () {
        this.query = this.routeParams.get("query");
        if (!this.query) {
            return;
        }
        this.results = this.spotify.searchByTrack(this.query);
    };
    SearchComponent.prototype.saveResults = function (res) {
        this.results = res.join();
        console.log("saveResults, res= " + this.results);
    };
    SearchComponent = __decorate([
        angular2_1.Component({
            selector: 'search',
            providers: [SpotifyService]
        }),
        angular2_1.View({
            directives: [angular2_1.NgIf, angular2_1.NgFor, router_1.RouterLink],
            template: "\n        <p>\n            <h1> Search</h1>\n        </p>\n        <p>\n            <input type=\"text\" #newquery [value]=\"query\" (keydown.enter)=\"submit(newquery.value)\">\n            <button (click)=\"submit(newquery.value)\">Search</button>\n        </p>\n\n        <p>\n            <div *ng-if=\"results\">\n                <h1>Results</h1>\n\n                <div class=\"row\">\n                    <div class=\"col-sm-6 col-md-4\" *ng-for=\"#t of results.tracks.items\">\n                        <div class=\"thumbnail\">\n                            <div class=\"content\">\n                                <img src=\"{{ t.album.images[0].url}}\" class=\"img-responsive\">\n                            </div>\n                        </div>\n                        <div class=\"caption\">\n                            <h3>\n                                <a [router-link]=\"['/Artists', {id: t.artists[0].id}]\">\n                                    {{t.artists[0].name}}\n                                </a>\n                            </h3>\n                            <br>\n                            <p>\n                                <a [router-link]=\"['/Tracks', {id: t.id}]\">\n                                    {{t.name}}\n                                </a>\n                            </p>\n                            <p>\n                                <audio id=\"{{t.id}]\" controls src=\"{{t.preview_url}}\"></audio>\n                            </p>\n                        </div>\n                        <div class=\"attribution\">\n                            <h4>\n                                <a [router-link]=\"['/Albums', {id: t.album.id}]\">\n                                    {{t.album.name}}\n                                </a>\n                            </h4>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </p>\n  "
        }), 
        __metadata('design:paramtypes', [SpotifyService, (typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof router_1.RouteParams !== 'undefined' && router_1.RouteParams) === 'function' && _b) || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a, _b;
})();
exports.SearchComponent = SearchComponent;
