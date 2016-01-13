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
var http_1 = require("angular2/http");
var SearchResult = (function () {
    function SearchResult(obj) {
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.description = obj && obj.description || null;
        this.thumbnailUrl = obj && obj.thumbnailUrl || null;
        this.videoUrl = obj && obj.videoUrl || "https://www.youtube.com/watch?v=" + this.id;
    }
    return SearchResult;
})();
var YOUTUBE_API_KEY = "AIzaSyBuAOdWHinidLxMFfLj1ftAvVi0MnyV1Yw";
var YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/search";
var YouTubeService = (function () {
    function YouTubeService(http, apiKey, apiUrl) {
        this.http = http;
        this.apiKey = apiKey;
        this.apiUrl = apiUrl;
    }
    YouTubeService.prototype.search = function (query) {
        var params = [
            ("q=" + query),
            ("key=" + this.apiKey),
            "part=snippet",
            "type=video",
            "maxResults=10"
        ].join("&");
        var queryUrl = this.apiUrl + "?" + params;
        return this.http.get(queryUrl)
            .map(function (response) {
            return response.json().items.map(function (item) {
                console.log("raw item", item);
                return new SearchResult({
                    id: item.id.videoId,
                    title: item.snippet.title,
                    description: item.snippet.description,
                    thumbnailUrl: item.snippet.thumbnails.high.url
                });
            });
        });
    };
    YouTubeService = __decorate([
        angular2_1.Injectable(),
        __param(1, angular2_1.Inject(YOUTUBE_API_KEY)),
        __param(2, angular2_1.Inject(YOUTUBE_API_URL)), 
        __metadata('design:paramtypes', [http_1.Http, String, String])
    ], YouTubeService);
    return YouTubeService;
})();
exports.YouTubeService = YouTubeService;
exports.youTubeServiceInjectables = [
    angular2_1.bind(YouTubeService).toClass(YouTubeService),
    angular2_1.bind(YOUTUBE_API_KEY).toValue(YOUTUBE_API_KEY),
    angular2_1.bind(YOUTUBE_API_URL).toValue(YOUTUBE_API_URL)
];
var SearchBox = (function () {
    function SearchBox(youtube, el) {
        this.loading = new angular2_1.EventEmitter();
        this.results = new angular2_1.EventEmitter();
        this.el = el;
        this.youtube = youtube;
        console.log("DDDDD");
    }
    SearchBox.prototype.onInit = function () {
        var _this = this;
        Rx.Observable.fromEvent(this.el.nativeElement, "keyup")
            .map(function (e) { return e.target.value; })
            .filter(function (text) { return text.length > 1; })
            .debounce(250)
            .do(function () {
            _this.loading.next(true);
        })
            .flatMap(function (query) { return _this.youtube.search(query); })
            .subscribe(function (results) {
            console.log("SUCCESS:" + results);
            _this.loading.next(false);
            _this.results.next(results);
        }, function (err) {
            console.log(err);
            _this.loading.next(false);
        }, function () {
            _this.loading.next(false);
        });
    };
    SearchBox = __decorate([
        angular2_1.Component({
            selector: "search-box",
            events: ['loading', 'results']
        }),
        angular2_1.View({
            template: "\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search\" autofocus>\n  "
        }),
        __param(0, angular2_1.Inject(YouTubeService)),
        __param(1, angular2_1.Inject(angular2_1.ElementRef)), 
        __metadata('design:paramtypes', [YouTubeService, Object])
    ], SearchBox);
    return SearchBox;
})();
var SearchResultComponent = (function () {
    function SearchResultComponent() {
    }
    SearchResultComponent = __decorate([
        angular2_1.Component({
            properties: ["result"],
            selector: "search-result"
        }),
        angular2_1.View({
            template: "\n   <div class=\"col-sm-6 col-md-3\">\n      <div class=\"thumbnail\">\n        <img src=\"{{result.thumbnailUrl}}\">\n        <div class=\"caption\">\n          <h3>{{result.title}}</h3>\n          <p>{{result.description}}</p>\n          <p><a href=\"{{result.videoUrl}}\"\n                class=\"btn btn-default\" role=\"button\">Watch</a></p>\n        </div>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], SearchResultComponent);
    return SearchResultComponent;
})();
exports.SearchResultComponent = SearchResultComponent;
var YouTubeSearchComponent = (function () {
    function YouTubeSearchComponent() {
    }
    YouTubeSearchComponent.prototype.updateResults = function (results) {
        this.results = results;
        console.log("results:", this.results);
    };
    YouTubeSearchComponent = __decorate([
        angular2_1.Component({
            selector: "youtube-search"
        }),
        angular2_1.View({
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.NgFor, SearchBox, SearchResultComponent],
            template: "\n  <div class='container'>\n      <div class=\"page-header\">\n        <h1>YouTube Search\n\n        </h1>\n      </div>\n\n  <div class=\"row\">\n        <div class=\"input-group input-group-lg col-md-12\">\n          <search-box class=\"refresh\"\n            (loading)=\"loading = $event\"\n             (results)=\"updateResults($event)\">\n             </search-box>\n        </div>\n      </div>\n\n\n      <div class=\"row\">\n        <search-result\n          *ng-for=\"#result of results\"\n          [result]=\"result\">\n        </search-result>\n      </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], YouTubeSearchComponent);
    return YouTubeSearchComponent;
})();
exports.YouTubeSearchComponent = YouTubeSearchComponent;
