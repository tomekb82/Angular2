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
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require("angular2/angular2");
var VoteMovie = (function () {
    function VoteMovie() {
        this.votes = 10;
        this.title = "Kleks";
        this.link = "www.e.e";
    }
    VoteMovie.prototype.voteUp = function () {
        this.votes += 1;
        return false;
    };
    VoteMovie.prototype.voteDown = function () {
        this.votes -= 1;
        return false;
    };
    VoteMovie = __decorate([
        angular2_1.Component({
            selector: 'vote-movie'
        }),
        angular2_1.View({
            template: "\n        <article>\n            <div class=\"votes\">{{votes}}</div>\n            <div class=\"main\">\n                <h2>\n                    <a href=\"{{link}}\">{{title}}</a>\n                </h2>\n                <ul>\n                    <li><a href (click)='voteUp()'>upvote</a></li>\n                    <li><a href (click)='voteDown()'>downvote</a></li>\n                </ul>\n            </div>\n        </article>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], VoteMovie);
    return VoteMovie;
})();
exports.VoteMovie = VoteMovie;
angular2_1.bootstrap(VoteMovie);
