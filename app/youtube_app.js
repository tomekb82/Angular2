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
var YouTubeSearchComponent_1 = require("app/http/YouTubeSearchComponent");
var YouTubeSearchComponent_2 = require("app/http/YouTubeSearchComponent");
var YoutubeApp = (function () {
    function YoutubeApp() {
    }
    YoutubeApp = __decorate([
        angular2_1.Component({
            selector: "youtube-app"
        }),
        angular2_1.View({
            directives: [YouTubeSearchComponent_1.YouTubeSearchComponent],
            template: "\n  <div class=\"container\">\n<youtube-search></youtube-search>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], YoutubeApp);
    return YoutubeApp;
})();
angular2_1.bootstrap(YoutubeApp, [http_1.HTTP_BINDINGS, YouTubeSearchComponent_2.youTubeServiceInjectables]);
